/*
    Updates page with site information
*/
document.addEventListener("DOMContentLoaded", function(event) {
    var siteContact = '';
    var siteMessage = '';
    var siteTitle = 'Computer Systems Support';
    
    if (siteContact != '')
    {
        document.getElementById('pcontainer').style.display = 'block';
        document.getElementById('pcontainer').innerHTML = 'Page PoC: <a href="mailto:' + siteContact + '">' + siteContact + '</a>';
    }
    if (siteMessage != '')
    {
        document.getElementById('sitemessage').style.display = 'block';
        document.getElementById('sitemessage').innerHTML = siteMessage;
    }
    if (siteTitle != '') {
        document.getElementById('siteTitle').textContent = siteTitle; 
    }
});