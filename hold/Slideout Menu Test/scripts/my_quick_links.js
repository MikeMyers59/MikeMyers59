/*****************************************************************************
File Name  : my_quick_links.js
Author     : S. Davison (145385)
Description: All functions related to using My Quick Links
             Abilty to generate the list, add, edit, and delete items
             Ability to add or delete quick links based on hyperlink on page
******************************************************************************/
//Set Global Variables
var myLinkCount;
var returnedItems = null;
var quickLinkAddClientContext = null;
var quickLinkMenuList = null;
var createList = false;
var NUM_MENUS, menusLoaded = 0;
var hov = 1, timer;
//var quickLinkModal;

//When the DOM has loaded execute Javascript
document.addEventListener("DOMContentLoaded", function(event) {
    //quickLinkModal = document.getElementById("a-myLinkTooltip"); //asign the quickLinkModal variable
    //NUM_MENUS = document.getElementsByClassName("m-megaMenuItemContainer").length; //Get the number of menus
    //quickLinkModal.addEventListener("mouseover",reset_timer,false); //Add an event listener to the quickLinkModal
});

//Function to reset the mouseover timer
function reset_timer() {
    clearTimeout(timer);
    hov = 1;
}

//Function to update the menu counter when all the menus have been accounted for then query the list with a false parameter
//This will not create the My Quick Links list but it will add a listener to every anchor tag in the main content of the page
function update_menus_loaded() {
    //-1 from NUM_MENUS for the "Home" that only displays on mobile
    if(++menusLoaded == NUM_MENUS-1) {
        query_my_list(false);
    }
}

//This function loads the list and runs the query asynchronously
function query_my_list(CREATE_LIST) {
    createList = CREATE_LIST;

    //Get the current context
    quickLinkAddClientContext = new SP.ClientContext("https://homeport.ecms.gdeb.com");
    //Get the My Quick Links list. Alter this code to match the name of your list
    quickLinkMenuList = quickLinkAddClientContext.get_web().get_lists().getByTitle('My Quick Links');
    //Create a new CAML query
    let caml = new SP.CamlQuery();
    //Create the CAML that will return only items with the created by 'me'
    caml.set_viewXml("<View><Query><Where><Eq><FieldRef Name='Author' LookupId='True'/><Value Type='Lookup'><UserID/></Value></Eq></Where><OrderBy><FieldRef Name='URL'/></OrderBy></Query></View>");
    //Specify the query and load the list oject
    returnedItems = quickLinkMenuList.getItems(caml);
    quickLinkAddClientContext.load(returnedItems);
    //Run the query asynchronously, passing the functions to call when a response arrives
    quickLinkAddClientContext.executeQueryAsync(query_my_list_success, query_my_list_failure);
}

//Function for successful list loading
function query_my_list_success(sender, args) {
    //Assign the number of items to the myLinkCount variable
    myLinkCount = returnedItems.getEnumerator().$2_0.length;
    //If the create list variable is set then trigger the list to be created
    //Otherwise simply attach mouse listeners to all the anchor tags in the main content section
    if(createList) {
        create_my_list();
    } /*else {
        let anchors = document.getElementById("o-mainContent").getElementsByTagName("a");
        const ANCHORS_LENGTH = anchors.length;
        for(let i = ANCHORS_LENGTH;i--;) {
            if(anchors[i].id != "a-myLinkTooltipAnchor" && anchors[i].href && anchors[i].href.indexOf("javascript") != 0) {
                anchors[i].addEventListener("mouseover",show_quick_link_modal,false);
                anchors[i].addEventListener("mouseout",hide_quick_link_modal,false);
            }
        }
    }*/
    createList = false;
}

function query_my_list_failure(sender, args) {
    console.log("Failed getting count: "+args.get_message());
}

function create_my_list() {
    myQuickLinkContent.innerHTML = "";

    //Get an enumerator for the items in the list
    const ENUMERATOR = returnedItems.getEnumerator();
    //Formulate HTML from the list items
    let markup = '<table class="ms-listviewtable">';
    //Loop through all the items
    while (ENUMERATOR.moveNext()) {
        const LIST_ITEM = ENUMERATOR.get_current();
        markup +=  '<tr class="ms-itmHoverEnabled " setedgeborder="true">\
                        <td class="ms-cellstyle ms-vb-title ms-positionRelative ms-vb-lastCell" isecb="TRUE" height="100%">\
                            <div class="ms-vb ms-tableCell ms-list-TitleLink ms-vb-menuPadding itx">\
                                <a href="' + LIST_ITEM.get_item('URL').$2_1 + '">' + LIST_ITEM.get_item('URL').$3_1 + '</a><br>\
                            </div>\
                            <div class="ms-list-itemLink ms-tableCell ms-alignRight a-menuItem" id="menuID-' + LIST_ITEM.get_item("ID") + '" >\
                                <div class="ms-core-menu-box ms-core-defaultFont ms-shadow" style="top:15px;position:absolute;visibility:visible;left:148px;width:127px;display:none;">\
                                    <ul class="ms-core-menu-list">\
                                        <li type="option" text="Edit Item" class="ms-core-menu-item ">\
                                            <a class="ms-core-menu-link a-editMenuItem" id="editID-' + LIST_ITEM.get_item("ID") + '" title="Edit Item">\
                                                <div class="ms-core-menu-label">\
                                                    <span class="ms-core-menu-title">Edit Item</span>\
                                                </div>\
                                            </a>\
                                        </li>\
                                        <li type="option" text="Delete Item" class="ms-core-menu-item">\
                                            <a class="ms-core-menu-link a-deleteMenuItem" id="deleteID-' + LIST_ITEM.get_item("ID") + '" title="Delete Item">\
                                                <div class="ms-hide">\
                                                    <img src="/_layouts/15/images/delitem.gif" alt="" title=""">\
                                                </div>\
                                                <div class="ms-core-menu-label">\
                                                    <span class="ms-core-menu-title">Delete Item</span>\
                                                </div>\
                                            </a>\
                                        </li>\
                                    </ul>\
                                </div>\
                                <a class="ms-lstItmLinkAnchor ms-ellipsis-a" href="#">\
                                    <img class="ms-ellipsis-icon" src="/_layouts/15/images/spcommon.png?rev=23" alt="Open Menu"/>\
                                </a>\
                            </div>\
                         </td>\
                    </tr>';
    }
    markup += '</table>';

    //If there are less than 20 items (0 is a number in this case) then show the ability to add an item
    if(myLinkCount < 20) {
        markup += '<span id="a-addLinkSpan">\
                       <hr/>\
                       <a href="#" id="a-addQuickLink">\
                           <span style="height:10px;width:10px;position:relative;display:inline-block;overflow:hidden;" class="s4-clust">\
                           <img src="/_layouts/15/images/fgimg.png?rev=23" alt="" style="left:-0px !important;top:-32px !important;position:absolute;"/>\
                           </span>&nbsp;ADD A LINK\
                       </a>\
                   </span>\
                   <br/>\
                   <i>You can add up to 20 quick links.</i>\
                   <br/>\
                   <i>For additional information see the <a href="https://homeport.ecms.gdeb.com/Pages/My-Links-Tutorial.aspx">instructions</a></i>';
    }
    //I'm unsure why calling 'myQuickLinkContent' works but it does, so I'm not touching it
    myQuickLinkContent.innerHTML = markup;

    //If there are less than 20 items (0 is a number in this case) then allow the user to add an item
    if(myLinkCount < 20) {
        //Make adding quick link item appear in modal dialog
        document.getElementById("a-addQuickLink").onclick = function() {
            displayLayover("/Lists/My%20Quick%20Links/NewForm.aspx?IsDlg=1");
            //Monitor the overlay for a transition ending even, this way the overlay must exist and can be worked with
            document.getElementsByClassName("ms-dlgOverlay")[0].addEventListener("transitionend", function(){
                //Create an observer instance to monitor for the overlay being hidden (closed)
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if(mutation.attributeName == "style") {
                            query_my_list(true);
                        }
                    })
                });

                // Start observing the target node for configured mutations
                observer.observe(document.getElementsByClassName('ms-dlgOverlay')[0], {attributes:true});
            });
        }
    }

    //Show the menu item on click
    let menuItems = document.getElementsByClassName("a-menuItem");
    const menuItemsLength = menuItems.length;
    for (let i = menuItemsLength; i--;) {
        menuItems[i].onclick = function() {
            this.firstElementChild.style.display = "block";
        }
        menuItems[i].firstElementChild.onmouseleave = function() {
            let myElement = this;
            hov = 0;
            timer = setTimeout(function(){if(hov==0)myElement.style.display = "none";},4500);
        }
        menuItems[i].firstElementChild.onmouseenter = function() {
            reset_timer();
        }
    }

    //Allow editing of the my quick link items
    let editItems = document.getElementsByClassName("a-editMenuItem");
    const editItemsLength = editItems.length;
    for (let i = editItemsLength; i--;) {
        editItems[i].onclick = function() {
            displayLayover("/Lists/My%20Quick%20Links/EditForm.aspx?ID=" + this.id.split("-")[1]  + "&IsDlg=1");
            //Monitor the overlay for a transition ending even, this way the overlay must exist and can be worked with
            document.getElementsByClassName("ms-dlgOverlay")[0].addEventListener("transitionend", function() {
                //Create an observer instance to monitor for the overlay being hidden (closed)
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if(mutation.attributeName == "style") {
                            query_my_list(true);
                        }
                    })
                });

                // Start observing the target node for configured mutations
                observer.observe(document.getElementsByClassName('ms-dlgOverlay')[0], {attributes:true});
            });
        }
    }

    //Allow for deletion of the quick link items
    let deleteItems = document.getElementsByClassName("a-deleteMenuItem");
    const deleteItemsLength = deleteItems.length;
    for (let i = deleteItemsLength; i--;) {
        deleteItems[i].onclick = function() {
            createList = true;
            delete_list_item(this.id.split("-")[1]);
        }
    }
}

//Function to show the quick link modal
function show_quick_link_modal(event) {
    const THIS_HREF = this.href;
    const THIS_DESC = this.text;
    if(THIS_HREF && THIS_HREF.indexOf("javascript") != 0) {
        //Get an enumerator for the items in the list
        const ENUMERATOR = returnedItems.getEnumerator();
        if(myLinkCount < 20) {
            document.getElementById("a-myLinkTooltipAnchor").classList.remove("a-deleteItem");
            document.getElementById("a-myLinkTooltipAnchor").classList.add("a-addItem");
            reset_timer();
            quickLinkModal.style.visibility = "visible";
            if(this.parentElement.nodeName != "SPAN") {
                $(this).wrap("<span></span>");
            }
            $("#a-myLinkTooltip").insertAfter(this);
            let quickLinkValue = new SP.FieldUrlValue();
            quickLinkValue.set_url(THIS_HREF);
            quickLinkValue.set_description(THIS_DESC);
            quickLinkModal.onclick = function(){add_list_item("URL",quickLinkValue);return false;};
        } else {
            while (ENUMERATOR.moveNext()) {
                const LIST_ITEM = ENUMERATOR.get_current();
                if(THIS_HREF == LIST_ITEM.get_item('URL').$2_1 && THIS_DESC == LIST_ITEM.get_item('URL').$3_1) {
                    document.getElementById("a-myLinkTooltipAnchor").classList.remove("a-addItem");
                    document.getElementById("a-myLinkTooltipAnchor").classList.add("a-deleteItem");
                    reset_timer();
                    quickLinkModal.style.visibility = "visible";
                    if(this.parentElement.nodeName != "SPAN") {
                        $(this).wrap("<span></span>");
                    }
                    $("#a-myLinkTooltip").insertAfter(this);
                    quickLinkModal.onclick = function(){delete_list_item(LIST_ITEM.get_item("ID"));return false;};
                    break;
                }
            }
        }
    }
}

function hide_quick_link_modal(event) {
    hov = 0;
    timer = setTimeout(function(){
        if(hov==0) {
            quickLinkModal.style.visibility = "hidden";
            if(quickLinkModal.parentElement.nodeName == "SPAN") {
                $("#"+quickLinkModal.id).unwrap();
            }
        }
    }, 4500);
}

function add_list_item(field,value) {
    let itemCreateInfo = new SP.ListItemCreationInformation();
    this.oListItem = quickLinkMenuList.addItem(itemCreateInfo);

    oListItem.set_item(field,value);
    oListItem.update();

    quickLinkAddClientContext.executeQueryAsync(add_list_item_success, action_list_item_failure);
    //quickLinkModal.style.visibility = "hidden";
}

  function add_list_item_success(sender, args) {
    w3_open("m-quickLinkDrawer");
  }

  function action_list_item_failure(sender, args) {
    console.log('Request failed. ' + args.get_message() + '\n' + args.get_stackTrace());
  }

  //Function to delete a list item
function delete_list_item(itemId) {
    if(confirm("Are you sure you would like to delete the item?")) {
        //Get the existing list context
        let deleteItemOList = quickLinkMenuList;
        //Set the item to be deleted
        this.oListItem = deleteItemOList.getItemById(itemId);
        //Queue the item for deletion
        oListItem.deleteObject();
        //Execute deletion
        quickLinkAddClientContext.executeQueryAsync(Function.createDelegate(this,this.delete_list_item_success), Function.createDelegate(this,this.action_list_item_failure));
        //quickLinkModal.style.visibility = "hidden";
    }
}
//When successful deletion log the result
function delete_list_item_success(sender, args) {
    w3_open("m-quickLinkDrawer");
}