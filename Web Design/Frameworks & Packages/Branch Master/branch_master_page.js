/*****************************************************************************
File Name  : branch_master_page.js
Author     : S. Davison (145385)
Description: file for global functions
******************************************************************************/
//When the DOM has loaded execute Javascript
document.addEventListener("DOMContentLoaded", function(event) {
  //Set the navigation state to collapsed
  document.getElementById("m-navigationbuttons").setAttribute("data-collapsed","true");
  //When the menu dropdown button is clicked the toggle
  const MENU_DROPDOWN = document.getElementById("a-menuDropdown");
  MENU_DROPDOWN.onclick = function(){toggleMenu()};

  //Set the breadcrumb in the title
  const SITE_COLLECTION_TITLE = document.getElementById("a-siteCollectionTitle").children[1].children[0].children[0].children[0].innerHTML;
  const SITE_TITLE_ELEMENT = document.getElementById("a-subSiteTitle");
  if(SITE_TITLE_ELEMENT.children[0]) {
    let siteTitle = SITE_TITLE_ELEMENT.children[0].innerHTML;
    if(SITE_COLLECTION_TITLE === siteTitle.replace("\n","").replace("\n","").trim()) {
      SITE_TITLE_ELEMENT.style.display = "none";
    }
  } else {
    SITE_TITLE_ELEMENT.style.display = "none";
  }

  //Replace lotus notes files href so they'll actually open in lotus notes
  let anchors = document.getElementsByTagName("a");
  const ANCHORS_LENGTH = anchors.length;
  for(let i=ANCHORS_LENGTH;i--;) {
    if(anchors[i].href.toLowerCase().startsWith("http://groton")) {
      anchors[i].href = anchors[i].href.toLowerCase().replace("http://groton","Notes://GROTON");
    }
  }

  //If there is no site contact name then send users to the Site Managers list
  let namePull = document.getElementById("a-siteContact");
  namePull.innerHTML = "<a href='/"+window.location.pathname.split("/")[1]+"/Lists/Site%20Managers'>Site Managers</a>.";

  //Only execute on a system page for list settings
  if(window.location.href.toLowerCase().indexOf("/_layouts/15/listedit.aspx?") >= 0) {
    const table = document.getElementById("idItemHoverTable");
    //Only execute if the table exists the table exists
    if(table) {
        const tableLength = table.rows.length;
        var breakNow = false;
        //Loop through all the rows in the table
        for(let i=tableLength;i--;) {
            let cellsLength = table.rows[i].cells.length;
            //Loop through all the cells in the table row
            for(let j=cellsLength;j--;) {
                //Find the row that has the text for the Web Address
                if(table.rows[i].cells[j].innerHTML === "Web Address:") {
                    //Get the web address and create an anchor element to insert into the address text area
                    let webAddress = table.rows[i].cells[j+1].innerHTML;
                    let anochorElement = document.createElement("a");
                    anochorElement.appendChild(document.createTextNode(webAddress));
                    anochorElement.href = webAddress;
                    table.rows[i].cells[j+1].innerHTML = "";
                    table.rows[i].cells[j+1].appendChild(anochorElement);
                    breakNow = true;
                    break;
                }
            }
            //Break if the work is done
            if(breakNow) break;
        }
    }
  }
});

//Function for toggeling the megamenu
function toggleMenu() {
  let menuContainer = document.getElementById("m-navigationbuttons");
  let isCollapsed = menuContainer.getAttribute('data-collapsed') === 'true';
  let arrowContainer = document.getElementById("a-menuDropdown");
  let arrowIcon = document.getElementById("a-menuDropdownArrow");

  if(isCollapsed) {
    arrowContainer.style.top = "143px";
    arrowIcon.className = "fas fa-chevron-up";
    expandSection(menuContainer);
    menuContainer.setAttribute('data-collapsed','false');
  } else {
    arrowContainer.style.top = null;
    arrowIcon.className = "fas fa-chevron-down";
    collapseSection(menuContainer);
  }
}

//Function for collapsing the megamenu
function collapseSection(element) {
  //Remove the bottom border
  document.getElementById("m-bottomHeader").style.borderBottom = "";

  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = '';

  //On the next frame (as soon as the previous style change has taken effect),
  //explicitly set the element's height to its current pixel height, so we
  //aren't transitioning out of 'auto'
  requestAnimationFrame(function() {
    element.style.height = '51.54px';
    element.style.transition = elementTransition;

    //On the next frame (as soon as the previous style change has taken effect),
    //have the element transition to height: 0
    requestAnimationFrame(function() {
      element.style.height = 0 + 'px';
    });
  });

  //Mark the section as "currently collapsed"
  element.setAttribute('data-collapsed', 'true');
}

//Function for expanding the megamenu
function expandSection(element) {
  //Show the bottom border
  document.getElementById("m-bottomHeader").style.borderBottom = "1px solid #fff";

  //Have the element transition to the height of its inner content
  element.style.height = '51.54px';

  //When the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function(e) {
    //Remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', arguments.callee);
  });

  //Mark the section as "currently not collapsed"
  element.setAttribute('data-collapsed', 'false');
}