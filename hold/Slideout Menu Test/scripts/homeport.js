/*****************************************************************************
File Name  : homeport.js
Author     : S. Davison (145385)
Description: file for global homeport functions
******************************************************************************/
//Set Global Variables
var date =  new Date();
var month = date.getMonth();
var day = date.getDay();
const WEEKDAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const SAMBA_URL = 'https://www.ebnet.gdeb.com/';
const IMAGE_LOCATION = "https://homeport.ecms.gdeb.com/_catalogs/masterpage/global/media/icons/weather/";
const DEGREE_SYMBOL = String.fromCharCode(176)+"F";
var returnStatusItems, itStatusItems, securityStatusItems;

//When the DOM has loaded execute Javascript
document.addEventListener("DOMContentLoaded", function(event) {
    $(".s4-clust.ms-viewselector-arrow.ms-menu-stdarw.ms-core-menu-arrow img").css({top:-212,left:-60});

    $('#weather-dropdown-ul li a').click(function(){
        $("#weather-dropdown:first-child").text($(this).text());
    });

    //Set today's date in the header
    document.getElementById("a-todayDate").innerHTML = WEEKDAY_NAMES[day]+" "+MONTH_NAMES[month]+" "+date.getDate()+", "+date.getFullYear();

    //Get users location to display the appropriate weather
    $.ajax({
      url:"https://homeport.ecms.gdeb.com/_api/web/currentuser",
      type: "GET",
      headers: { "Accept": "application/json;odata=verbose" },
      success: function (data) {
        //After getting the User's ID use it to get the user information for location
        $.ajax({
            url: "https://homeport.ecms.gdeb.com/_vti_bin/ListData.svc/UserInformationList("+data.d.Id+")",
            method: "GET",
            headers: { "Accept": "application/json; odata=verbose" },
            success: function (data) {
                setWeather(data.d.Office);
            },
            error: function(data) {
              console.log("failed getting user location");
                setWeather("EB Groton");
            }
        });
      },
      error: function(data) {
        console.log("failed getting current user");
      }
    });

    //Set the alert indicators
    set_alerts("IT System Alerts");
    set_alerts("Security Alerts");
    set_alerts("Emergency Alerts");

    //Show the breadcrumbs if on a system page
    const PATH_NAME = location.pathname;
    let title = document.getElementById("PlaceHolderPageTitleInTitleArea-header");
    if((PATH_NAME.indexOf("/_layouts/15/") >= 0 || PATH_NAME.indexOf("/_catalogs/") >= 0 || PATH_NAME.indexOf("/Style%20Library/") >= 0) && (typeof(title) != 'undefined' && title != null)) {
      document.getElementById("PlaceHolderPageTitleInTitleArea-header").style.display = "block";
    }

    //If on the Site Settings page arrange the section links alphabetically
    if(PATH_NAME.toLowerCase().indexOf("/_layouts/15/settings.aspx") >= 0) {
      let i, switching, listItem, shouldSwitch;
      const LIST = document.getElementsByClassName("ms-linksection-listRoot");
      const LIST_LENGTH = LIST.length;
      for(let j=LIST_LENGTH;j--;) {
        switching = true;
        //Make a loop that will continue until no switching has been done:
        while (switching) {
          //Start by saying: no switching is done:
          switching = false;
          listItem = LIST[j].getElementsByTagName("LI");
          //Loop through all list-items:
          for (i = 0; i < (listItem.length - 1); i++) {
            //Start by saying there should be no switching:
            shouldSwitch = false;
            //Check if the next item should switch place with the current item:
            if (listItem[i].childNodes[1].innerHTML.toLowerCase() > listItem[i + 1].childNodes[1].innerHTML.toLowerCase()) {
              //If next item is alphabetically lower than current item, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            //If a switch has been marked, make the switch and mark the switch as done:
            listItem[i].parentNode.insertBefore(listItem[i + 1], listItem[i]);
            switching = true;
          }
        }
      }
    }

    query_my_list();

    //Set the year in the footer
    document.getElementById("a-year").innerHTML = date.getFullYear();

    //Set the page modified date
    let modifiedDate = document.getElementById("a-modifiedDate");
    if(modifiedDate.innerHTML.length > 0 && modifiedDate.innerHTML.indexOf("/") >= 0) {
      const DATE_VALUE = modifiedDate.innerHTML.split("/");
      modifiedDate.innerHTML = MONTH_NAMES[DATE_VALUE[0] - 1] + " " + DATE_VALUE[1] + ", " + DATE_VALUE[2].split(" ")[0];
    } else {
      document.getElementById("a-updateInfo").style.display = "none";
    }

    //Delay loading of the drawers
    setTimeout("show_drawers()",1500);

    //Create an observer instance to monitor for placement of header search box
    const searchBoxObserver = new MutationObserver(function(mutations) {
        //For each mutation check the style attribute
        mutations.forEach(function(mutation) {
            if(mutation.attributeName == "style") {
              let searchBox = document.getElementById("ctl00_SearchBoxScriptWebPart1_csr_sbox"); //This is the actual search input box
              searchBox.placeholder = "Search Homeport"; //Create placeholder text
              searchBox.removeAttribute("onblur"); //Remove onblur because it's responsible for the original text "Search..." for coming back one focus (blur) is lost
              searchBox.value = ""; //Empty the default value because SharePoint uses value as placeholder text, and we don't need it anymore
            }
        })
    });

    // Start observing the target node for configured mutations
    searchBoxObserver.observe(document.getElementById("ctl00_SearchBoxScriptWebPart1_csr"), {attributes:true});
});

//Function for setting the weather based on user location
//param userOffice - the employee's office location
function setWeather(userOffice) {
  //Set weather based on user's location
  var weather_dropdown_id = "", weather_data_file;
  switch(userOffice) {
    case "EBC@Puget":
      weather_data_file = "brwa";
      weather_dropdown_id = "Bremerton, WA";
      break;
    case "NwprtNwsVA":
      weather_data_file = "nnvi";
      weather_dropdown_id = "Newport News, VA";
      break;
    case "EB Quonset":
      weather_data_file = "qpri";
      weather_dropdown_id = "Quonset Point, RI";
      break;
    case "EBWash Off":
      weather_data_file = "weo";
      weather_dropdown_id = "Washington, D.C.";
      break;
    case "Kings Bay":
      weather_data_file = "kbga";
      weather_dropdown_id = "Kings Bay, GA";
      break;
    case "HSI Maint":
      weather_data_file = "hi";
      weather_dropdown_id = "Honolulu, HI";
      break;
    default:
      weather_data_file = "grnl";
      weather_dropdown_id = "Groton/New London, CT";
  }

  //Set the weather
  select_weather(weather_data_file);
  $("#weather-dropdown:first-child").text(weather_dropdown_id);
  document.getElementById("m-todayWeatherTooltip").style.right = document.getElementById("m-bottomHeader").offsetWidth-document.getElementById("m-todayWeather").offsetLeft+150 + "px";
  document.getElementById("m-tomorrowWeatherTooltip").style.right = document.getElementById("m-bottomHeader").offsetWidth-document.getElementById("m-tomorrowWeather").offsetLeft+150 + "px";
}

//Function to delay loading of the drawers
function show_drawers() {
  //Get all the drawers, loop through them, and
  //set the display from none to inline-block
  let drawers = document.getElementsByClassName("a-drawer");
  const DRAWERS_LENGTH = drawers.length;
  for(let i=DRAWERS_LENGTH;i--;) {
    drawers[i].style.display = "inline-block";
  }
}

//Set the Alert Indicators in the Footer
//param ALERT_LIST - the list the alerts belong to
function set_alerts(ALERT_LIST) {
  //REST call to get the alerts for the alert lists listed in the footer
  $.ajax({
    url: "/_api/lists/getbytitle('"+ALERT_LIST+"')/items",
    method: "GET",
    headers: { "Accept": "application/json; odata=verbose" },
    success: function (data) {
      //Loop through each result
      const RESULTS_LENGTH = data.d.results.length;
      for(let i=RESULTS_LENGTH;i--;) {
        //If the current iteration is not expired yet or there is no expiration date then proceed
        if(Date.parse(data.d.results[i].Expires) > Date.parse(date) || !data.d.results[i].Expires) {
          //If the alert severity is important then change the color to yellow
          //Else if the alert severity is critical then change the color to red and terminate the loop
          if(data.d.results[i].Severity == "Important") {
            //Check the list so the correct box is set
            if(ALERT_LIST == "IT System Alerts") {
              //If the lesser alert color is not removed, then the newly added color won't show
              document.getElementById("a-itStatusBoxHeader").classList.remove("w3-alert-green");
              document.getElementById("a-itStatusBoxHeader").classList.add("w3-alert-yellow");
            } else if(ALERT_LIST == "Emergency Alerts") {
              //If the lesser alert color is not removed, then the newly added color won't show
              document.getElementById("a-emergencyStatusBoxHeader").classList.remove("w3-alert-green");
              document.getElementById("a-emergencyStatusBoxHeader").classList.add("w3-alert-yellow");
            } else {
              //If the lesser alert color is not removed, then the newly added color won't show
              document.getElementById("a-securityStatusBoxHeader").classList.remove("w3-alert-green");
              document.getElementById("a-securityStatusBoxHeader").classList.add("w3-alert-yellow");
            }
          } else if(data.d.results[i].Severity == "Critical") {
            //Check the list so the correct box is set
            if(ALERT_LIST == "IT System Alerts") {
              //If the lesser alert color is not removed, then the newly added color won't show
              document.getElementById("a-itStatusBoxHeader").classList.remove("w3-alert-green");
              document.getElementById("a-itStatusBoxHeader").classList.remove("w3-alert-yellow");
              document.getElementById("a-itStatusBoxHeader").classList.add("w3-alert-red");
              break; //break because the status can't go higher than red
            } else if(ALERT_LIST == "Emergency Alerts") {
              //If the lesser alert color is not removed, then the newly added color won't show
              document.getElementById("a-emergencyStatusBoxHeader").classList.remove("w3-alert-green");
              document.getElementById("a-emergencyStatusBoxHeader").classList.remove("w3-alert-yellow");
              document.getElementById("a-emergencyStatusBoxHeader").classList.add("w3-alert-red");
              break; //break because the status can't go higher than red
            } else {
              //If the lesser alert color is not removed, then the newly added color won't show
              document.getElementById("a-securityStatusBoxHeader").classList.remove("w3-alert-green");
              document.getElementById("a-securityStatusBoxHeader").classList.remove("w3-alert-yellow");
              document.getElementById("a-securityStatusBoxHeader").classList.add("w3-alert-red");
              break; //break because the status can't go higher than red
            }
          }
        }
      }
    },
    error: function(xhr, status) {
      console.log("error getting alert data: "+xhr.responseText);
    }
  });
}

//Dislpay the weather dropdown
function weather_dropdown() {
  let weatherContainer = document.getElementById("m-weatherDropdownContainer");
  (weatherContainer.className.indexOf("w3-show") == -1) ? weatherContainer.className += " w3-show" : weatherContainer.className = weatherContainer.className.replace(" w3-show", "");
}

//Get and Parse the weather data from the weather provider
//param WEATHER_DATA_FILE_NAME - the filename of the weather data
function select_weather(WEATHER_DATA_FILE_NAME) {
  let weatherContainer = document.getElementById("m-weatherDropdownContainer");
  weatherContainer.className = weatherContainer.className.replace(" w3-show", "");

  //Enable CORS
  $.support.cors = true;
  get_json_CORS("JSON", SAMBA_URL + "homeport-data/" + WEATHER_DATA_FILE_NAME + ".json", "", "Unsuccessful Weather Status:", set_weather);

  let location, cityId, cityQ;
  switch (WEATHER_DATA_FILE_NAME) {
    case "nnvi":
      location = document.getElementById("a-nnvaButton").text;
      cityId = "newport-newsvirginiaunited-states";
      cityQ = "147%20Candlewood%20Way%2C%20Newport%20News%2C%20VA%2023606";
      break;
    case "qpri":
      location = document.getElementById("a-qpriButton").text;
      cityId = "north-kingstownriunited-states";
      cityQ = "north-kingstown-ri";
      break;
    case "weo":
      location = document.getElementById("a-weoButton").text;
      cityId = "washington-dcdistrict-of-columbiaunited-states";
      cityQ = "washington,-dc-district-of-columbia";
      break;
    case "hi":
      location = document.getElementById("a-hiButton").text;
      cityId = "honoluluhawaiiunited-states";
      cityQ = "honolulu-hawaii";
      break;
    case "brwa":
      location = document.getElementById("a-brwaButton").text;
      cityId = "bremertonwashingtonunited-states";
      cityQ = "bremerton-washington";
      break;
    case "kbga":
      location = document.getElementById("a-kbgaButton").text;
      cityId = "kings-baygeorgiaunited-states";
      cityQ = "kings-bay-georgia";
      break;
    default:
      location = document.getElementById("a-grnlButton").text;
      cityId = "Groton,CT,United-States";
      cityQ = "Groton%2C%20CT";
  }
  let weatherLinks = document.getElementsByClassName("a-seeMoreWeatherLink");
  const WEATHER_LINKS_LENGTH = weatherLinks.length;
  for(let i=WEATHER_LINKS_LENGTH;i--;) {
    weatherLinks[i].href = "https://www.msn.com/en-us/weather/today/" + cityId + "/we-city?q=" + cityQ;
  }
  //Change the Location label to the selected text
  document.getElementById("a-weatherLocationLabel").innerHTML = location;
  get_json_CORS("JSON", SAMBA_URL + "homeport-data/" + WEATHER_DATA_FILE_NAME + "_forecast.json", "", "Unsuccessful Weather Status:", set_forecast);
}

//Function to convert degrees into a compass direction
//param DEGREE - the degrees to be converted into a direction
//return compass direction
function degree_to_compass(DEGREE) {
  //Create an array of directions. North being 0.
  const COMPASS_ARRAY = ["North","Northeast","East","Southeast","South","Southwest","West","Northwest"];
  //Divide the degree angle by 45 because 360/8 directions = 45 degrees/direction change
  //Add 0.5 so that when you truncate the value you can break the 'tie' between the change treshold
  //Round the number so the mod will work cleanly
  //Return the calculated value mod 8 directions and directly index it with the compassArray
  return COMPASS_ARRAY[(Math.round((DEGREE/45)+0.5) % 8)];
}

//Function to set the weather information
//param DATA - the weather data
function set_weather(DATA) {
  //Set the image based on what the API icon is supposed to be (the image_location is not from the API but a custom set of icons, just named the same for ease of use)
  document.getElementById("a-todayWeatherIcon").src = IMAGE_LOCATION + DATA.list[0].weather[0].icon + ".png";
  document.getElementById("a-todayIconForecast").src = IMAGE_LOCATION + DATA.list[0].weather[0].icon + ".png";
  //Set today's weather value, rounded with no decimals
  document.getElementById("a-todayWeatherValue").innerHTML = Math.round(DATA.list[0].main.temp)+DEGREE_SYMBOL.substr(0,1);
  //Set the weather status description
  document.getElementById("a-todayWeatherStatus").innerHTML = DATA.list[0].weather[0].main;
  //Set the wind speed rounded, and call the degree_to_compass function to get wind direction from degrees to a compass
  document.getElementById("a-todayWeatherWind").innerHTML = Math.round(DATA.list[0].wind.speed) + " mph " + degree_to_compass(DATA.list[0].wind.deg);
  //Set the humidity
  document.getElementById("a-todayWeatherHumidity").innerHTML = DATA.list[0].main.humidity;
  //Showing the date based on DATA.list[0].dt is overly complicated. Since we know the file is refreshed every 2 hours
  //Starting at midnight, simple show the previous even hour
  document.getElementById("a-todayWeatherTimeValue").innerHTML = 2*(Math.floor(date.getHours()/2))+":00 "+(date.getHours() >=12 ? "PM" : "AM");
}

//Set the weather information for tomorrow
//param DATA - the weather data
function set_forecast(DATA) {
  //Today
  const DATA_LENGTH = DATA.list.length;
  let todayWeather = [], tomorrowWeather = [];
  let dataDate = "";
  const TODAYS_DATE = date.getDate();
  const TOMORROWS_DATE = new Date(new Date().setDate(TODAYS_DATE+1)).getDate();
  //Loop through the DATA, set an EST
  //Set the individual days
  for(let i=DATA_LENGTH;i--;) {
    DATA.list[i].est = new Date(DATA.list[i].dt*1000-18000000);
    dataDate = DATA.list[i].est.toString().split(" ")[2];
    //Get all the values from today
    if(dataDate == TODAYS_DATE) {
      todayWeather.push(DATA.list[i]);
    }
    //Get all the values from tomorrow
    if(dataDate == TOMORROWS_DATE) {
      tomorrowWeather.push(DATA.list[i]);
    }
  }

  const TODAY_WEATHER_LENGTH = todayWeather.length;
  const TOMORROW_WEATHER_LENGTH = tomorrowWeather.length;
  let temp_lo, temp_hi, tomorrow_lo, tomorrow_hi;

  //Find the hi and low temperatures
  for(let i=TODAY_WEATHER_LENGTH;i--;) {
    //If there is no low temperature value or this iteration is lower thant he current value
    if(!temp_lo || temp_lo > todayWeather[i].main.temp_min) {
      temp_lo = todayWeather[i].main.temp_min;
    }
    //If there is no hi temperature value or this iteration is higher than the current value
    if(!temp_hi || temp_hi < todayWeather[i].main.temp_max) {
      temp_hi = todayWeather[i].main.temp_max;
    }
  }
  //Get the current temperature and check if it's higher than the forecase hi or lower than the
  //forecase low. If it is then set that value as the high or low
  const CURRENT_TEMPERATURE = document.getElementById("a-todayWeatherValue").innerHTML;
  if(CURRENT_TEMPERATURE.substring(0,CURRENT_TEMPERATURE.indexOf("°")) > temp_hi) {
    temp_hi = CURRENT_TEMPERATURE.substring(0,CURRENT_TEMPERATURE.indexOf("°"));
  }
  if(CURRENT_TEMPERATURE.substring(0,CURRENT_TEMPERATURE.indexOf("°")) < temp_lo && CURRENT_TEMPERATURE.indexOf("°") > -1) {
    temp_lo = CURRENT_TEMPERATURE.substring(0,CURRENT_TEMPERATURE.indexOf("°"));
  }
  //Set the hi and low temperature values rounded
  document.getElementById("a-todayWeatherForecast").innerHTML = Math.round(temp_hi)+DEGREE_SYMBOL+"/"+Math.round(temp_lo)+DEGREE_SYMBOL;

  //Find the hi and low temperatures
  for(let i=TOMORROW_WEATHER_LENGTH;i--;) {
    //If there is no low temperature value or this iteration is lower thant he current value
    if(!tomorrow_lo || tomorrow_lo > tomorrowWeather[i].main.temp_min) {
      tomorrow_lo = tomorrowWeather[i].main.temp_min;
    }
    //If there is no hi temperature value or this iteration is higher than the current value
    if(!tomorrow_hi || tomorrow_hi < tomorrowWeather[i].main.temp_max) {
      tomorrow_hi = tomorrowWeather[i].main.temp_max;
    }
  }

  let tomorrowIcons = document.getElementsByClassName("a-tomorrowIconForecast");
  const TOMORROW_ICONS_LENGTH = tomorrowIcons.length;
  for(let i = TOMORROW_ICONS_LENGTH;i--;) {
    //The icon and description for tomorrow will be the middle data point in the set (somewhere around noon)
    tomorrowIcons[i].src = IMAGE_LOCATION + tomorrowWeather[Math.round(TOMORROW_WEATHER_LENGTH/2)].weather[0].icon + ".png";
    tomorrowIcons[i].title = tomorrowWeather[Math.round(TOMORROW_WEATHER_LENGTH/2)].weather[0].description;
  }
  //Set the hi and low temperature values rounded
  document.getElementById("a-tomorrowWeatherForecast").innerHTML = Math.round(tomorrow_hi)+DEGREE_SYMBOL+"/"+Math.round(tomorrow_lo)+DEGREE_SYMBOL;
  document.getElementById("a-tomorrowWeatherStatus").innerHTML = tomorrowWeather[Math.round(TOMORROW_WEATHER_LENGTH/2)].weather[0].description;
}

$(document).on("click","header, #o-navigation, #contentBox, footer, .o-homeportDrawer .a-closeButton", function() {
  w3_close("m-quickLinkDrawer");
  w3_close("m-itHelpDrawer");
  w3_close("m-securityDrawer");
});

//Used to show elements
//param ELEMENT: the element to be shown
function w3_open(ELEMENT) {
  document.getElementById(ELEMENT).style.display = "block";

  if(ELEMENT === "m-quickLinkDrawer") query_my_list(true);
  if(ELEMENT === "m-itHelpDrawer") $("#m-itHelpDrawer").load("https://homeport.ecms.gdeb.com/_catalogs/masterpage/global/html/it_help.html");
  if(ELEMENT === "m-securityDrawer") $("#m-securityDrawer").load("https://homeport.ecms.gdeb.com/_catalogs/masterpage/global/html/security.html");
}


//Used to hide elements
//param ELEMENT: the element to be hidden
function w3_close(ELEMENT) {
  document.getElementById(ELEMENT).style.display = "none";
}