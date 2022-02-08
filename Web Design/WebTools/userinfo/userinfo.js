// webtools/userinfo/userinfo.js

const userInfo = {
  'firstName' : '',
  'middleName' : '',
  'lastName' : '',
  'badge' : '',
  'phone' : '',
  'email' : '',
  'department' : '',
  'mailzone' : '',
  'title' : '',
  'ids' : '',
  'ntids' : '',
  'caenids' : '',
  'deskphone' : '',
  'mobilephone' : '',
  'faxnumber' : '',
  'displayName' : '',
  'username' : '',
  'set' : 'no'
};

/* check if jQuery is loaded, load if not */
if(typeof jQuery === 'undefined') {
  var script = document.createElement( 'script' );
  script.type = 'text/javascript';
  script.src = '/jquery/jquery_latest/jquery.min.js';
  jQuery('head').append(script);
}


/**
* Find information for logged in user by matching on WINDOWS_ID from Employee Directory or NT_ID in userList.json
* @param {object} response - response information object from employee directory or userlist.json
* @param {string} username - Windows ID of logged in user
*/
function matchId (response, username) {
  var result = null;
  var data = null;
  var idField = null;
  
  // Select id field based on data format
  if (response.data) {
    data = response.data;
    idField = 'WINDOWS_ID';
  } else {
    data = response;
    idField = 'NT_ID';
  }
  
  for(var i=0; data.length; i++) {
    var idString = data[i][idField];
    var idArray = idString.split(';');
    if (idArray.indexOf(username) != -1) {
      result = data[i];
      break;
    }
  }
  return result;
}


/**
* Populate userInfo with response from employee directory based on provided username
* @param {object} response - response information object from employee directory or userlist.json
* @param {string} username - Windows ID of logged in user
* @param {function} [userInfoDataLoad] - optional callback function 
*/
function setUser(response, username, userInfoDataLoad) {
  if (typeof userInfoDataLoad === 'undefined') { userInfoDataLoad = false; }
  
  // check if userInfo is accessible/exists
  if(!userInfo){console.log('Unable to access userInfo object, some functionality on this page may not work properly.'); return false;}
  
  var result = matchId(response, username);
  
  userInfo.firstName = result.FNAME;
  userInfo.middleName = result.MNAME;
  userInfo.lastName = result.LNAME;
  userInfo.badge = result.BADGE;
  userInfo.phone = result.PHONE;
  userInfo.email = result.EMAIL || 'webmaster@gdeb.com';
  userInfo.department = result.DEPT;
  userInfo.mailzone = result.MAIL_ZONE || 'notfound';
  userInfo.title = result.TITLE || 'notfound';
  userInfo.ids = (result.WINDOWS_ID + result.CAEN_ID) || 'notfound';
  userInfo.ntids = result.WINDOWS_ID || 'notfound';
  userInfo.caenids = result.CAEN_ID || 'notfound';
  userInfo.deskphone = result.PHONE;
  userInfo.mobilephone = result.CELL || 'notfound';
  userInfo.faxnumber = result.FAX || 'notfound';
  userInfo.displayName = result.FNAME + ' ' + result.LNAME;
  userInfo.username = username;
  userInfo.set = 'yes';

  Object.freeze(userInfo);
  
  // If a function was provided to be performed on completion of load, execute
  if(typeof userInfoDataLoad == 'function'){userInfoDataLoad();}
}


/**
* Get user information from employee directory 
* @param {string} username - Windows ID of logged in user
* @param {function} [userInfoDataLoad] - optional callback function 
*/
function getUser(username, userInfoDataLoad) {
  if (typeof userInfoDataLoad === 'undefined') { userInfoDataLoad = false; }
  jQuery.ajax({
    type: 'POST',
    url: '/php/ebit/phonebook/search.php',
    dataType: 'json',
    data: { windows_id : username, output : 'json' },
    xhrFields: {
      withCredentials: true
    }
  }).done(function(response){
    
    setUser(response, username, userInfoDataLoad);
    
  }).fail(function(){
    /* 
    * If information cannot be found in Employee Directory fallback to userlist.json.  
    * User is likely not an Electric Boat employee
    */
    jQuery.ajax({
      type: 'GET',
      url: '/phonebook/userlist.json',
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      }
    }).done(function(response){
      
      setUser(response, username, userInfoDataLoad);
      
    }).fail(function(){
      
      for (var key in userInfo) {
        userInfo[key] = 'error';
      }
      return false;
      
    });
    
  });
}


/**
* Gets and sets user information for currently logged in user
* @param {function} [userInfoDataLoad] - optional callback function 
*/
function getCurrentUser(userInfoDataLoad) {
  if (typeof userInfoDataLoad === 'undefined') { userInfoDataLoad = false; }
  
  jQuery.ajax({
    type: 'GET',
    url: '/webtools/userinfo/username.html',
    cache: true,
    async: true,
    dataType: 'html'
  }).done(function(data) {
    
    userInfo.username = data;
    if(!userInfo.username){return false;}
    getUser(userInfo.username, userInfoDataLoad);
    
  }).fail(function(){
    
    for (var key in userInfo) {
      userInfo[key] = 'error';
    }
    return false;
    
  });
  return true;
}

/**
* Called by application / page with a function to be executed upon completion of user information load
* @param {function} userInfoDataLoad - callback function 
*/
function rebuildUserInfo(userInfoDataLoad) {
  getCurrentUser(userInfoDataLoad);
  return true;
}

/* Get and set user information for logged in user on load */
if(jQuery) {
  getCurrentUser();
} else {
  console.log('jQuery is not loaded on this page.  "userinfo.js" requires jQuery to function.');
}


