/*
    Updates page with site information
*/
document.addEventListener("DOMContentLoaded", function(event) {
    var siteContact = 'esprague@gdeb.com';
    var siteMessage = 'Webpage Questions/Suggestions?  Contact: Eric Sprague';
    var siteTitle = 'Department 705: TRF Bangor Planning Yard Support';
    
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