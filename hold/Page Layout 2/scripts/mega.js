/*****************************************************************************
File Name  : mega.js
Author     : S. Davison (145385)
Description: File for mega menu functionality
******************************************************************************/
const full_opacity = '1.0';
const faded_opacity = '0.3';

//When the DOM has loaded execute Javascript
$(document).ready(function() {
  //Add the navigation
  $("#o-navigationAboutEB").load("/_catalogs/masterpage/root/html/navigation-about-eb.html");
  $("#o-navigationLocations").load("/_catalogs/masterpage/root/html/navigation-locations.html");
  $("#o-navigationPrograms").load("/_catalogs/masterpage/root/html/navigation-programs.html");
  $("#o-navigationBusinessSupportManagement").load("/_catalogs/masterpage/root/html/navigation-business-support-and-management.html");
  $("#o-navigationDesignEngineering").load("/_catalogs/masterpage/root/html/navigation-design-and-engineering.html");
  $("#o-navigationConstruction").load("/_catalogs/masterpage/root/html/navigation-construction.html");
  $("#o-navigationSustainment").load("/_catalogs/masterpage/root/html/navigation-sustainment.html");
  $("#o-navigationStrategicImprovement").load("/_catalogs/masterpage/root/html/navigation-strategic-improvement.html");
  $("#o-navigationExternalCollaborators").load("/_catalogs/masterpage/root/html/navigation-external-collaboration.html");
});

//Set the opacity when a mega menu is open
$(document).on("click","nav", function() {
    const menuContainers = document.getElementsByClassName("o-navigationSubcontainer");
    var allClosed = true;
    let menuContainersLength = menuContainers.length;
    while(menuContainersLength--) {
      if (menuContainers[menuContainersLength].classList.contains("w3-show-flex")) {
        allClosed = false;
        break;
      }
    }
    if (allClosed) {
        $("#contentBox").css("opacity", full_opacity);
        $("footer").css("opacity", full_opacity);
    } else {
        $("#contentBox").css("opacity", faded_opacity);
        $("footer").css("opacity", faded_opacity);
    }
});

//Close menu and reset opacity when not clicking in the megamenu
//Applies to the header, contentbox, footer, and a-closeNavigationButton
$(document).on("click","header, #contentBox, footer, .a-closeNavigationButton", function() {
    $(".m-navigationPanel").each(function(i, obj) {
        obj.className = obj.className.replace(" w3-show-flex", "");
        $(".m-subPanel").each(function(j, obj2) {
            close_subnavigation(obj2.id);
        });
    });
    $("#contentBox").css("opacity", full_opacity);
    $("footer").css("opacity", full_opacity);

    //Close all the menus when clicking elsewhere on the screen
    let menuDiv = document.getElementById("o-navigationLinks");
    let menuDivChildLength = menuDiv.children.length;
    while(menuDivChildLength--) {
        menuDiv.children[menuDivChildLength].className = menuDiv.children[menuDivChildLength].className.replace(" w3-show-flex", "");
    }
    deactivateMenu();
});

//Open megamenu
//param menuElement - the menu element being opened
function megamenu_open(menuButton,menuElement) {
  var menu = document.getElementById(menuElement); //The menu element
  var openMenus = document.getElementsByClassName("w3-show-flex"); //All other menu elements that may be showing
  deactivateMenu();
  if(!menuButton.classList.contains("a-activeMenuButton")) {
    menuButton.className += " a-activeMenuButton";
  }

  //If the menu is not showing then hide all other open menus and show the requested menu
  //Otherwise hide the menu and show the image (the image will not display until the menu is open again)
  if (menu.className.indexOf("w3-show-flex") == -1) {
    let openMenusLength = openMenus.length; //Amount of open menus
    for (let i=openMenusLength;i--;) {
      openMenus[i].className = openMenus[i].className.replace(" w3-show-flex", "");
    }
    menu.className += " w3-show-flex";
  } else {
    menu.className = menu.className.replace(" w3-show-flex", "");
    const lengthSubchild = menu.children[0].children.length - 1;
    menu.children[0].children[lengthSubchild].className = menu.children[0].children[lengthSubchild].className.replace("  w3-hide", "");
  }
}

//Deactivate the menu items
function deactivateMenu() {
    let megaMenus = document.getElementsByClassName("a-activeMenuButton");
    let megaMenusLength = megaMenus.length;
    for(let i = megaMenusLength;i--;) {
      megaMenus[i].blur();
      megaMenus[i].className = megaMenus[i].className.replace(" a-activeMenuButton","");
    }
  }

//Open subnavigation
//param navigationElement - the navigation (submenu) element being opened
function open_subnavigation(navigationElement) {
    const element = document.getElementById(navigationElement); //The initial element
    var elementSubpanel = element.parentElement.parentElement; //The element's subpanel
    let elementMenu = elementSubpanel.parentElement; //The navigation menu

    //Get all the sub menus
    let elementMenus = document.getElementsByClassName("m-navigationPanelSublinks");

    //For each of the sub menus do not show
    //This will hide any of the open menus before showing the requested one
    let elementMenusLength = elementMenus.length; //Amount of sub menus
    while(elementMenusLength--) {
        elementMenus[elementMenusLength].className = elementMenus[elementMenusLength].className.replace(" w3-show-flex", "");
    }

    //show the requested subpanel
    elementSubpanel.className += " w3-show-flex";
    //hide the menu image
    //it's important to use 2 spaces because otherwise it will hide ' w3-hide'-small
    const elementMenuChildLength = elementMenu.children.length - 1;
    elementMenu.children[elementMenuChildLength].className += "  w3-hide";
}

//Close subnavigation
//param navigationElement - the navigation (submenu) element being closed
function close_subnavigation(navigationElement) {
    const element = document.getElementById(navigationElement); //The initial element
    let elementSubpanel = element.parentElement.parentElement; //The element's subpanel
    let elementMenu = elementSubpanel.parentElement; //The navigation menu

    //hide the requested subpanel
    elementSubpanel.className = elementSubpanel.className.replace(" w3-show-flex", "");
    //show the menu image
    //it's important to use 2 spaces because otherwise it will hide ' w3-hide'-small
    const elementMenuChildLength = elementMenu.children.length - 1;
    elementMenu.children[elementMenuChildLength].className = elementMenu.children[elementMenuChildLength].className.replace("  w3-hide", "");
}