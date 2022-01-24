# Browsers

### Popular Browsers and DevTools  


### Browser Independent OnLoad Calls
```javascript
if (window.addEventListener) window.addEventListener("load", <YourOnloadFunction>, false);
else if (window.attachEvent) window.attachEvent("onload", <YourOnloadFunction>);
else window.onload = <YourOnloadFunction>;
```

# Chrome (Google)  

### Chrome Extensions

# CrEdge (Microsoft)  

# FireFox (Mozilla)  

### Enable NTLM & Kerberos
NTLM and Kerberos are not activated by default in Firefox. To make it work, you need to follow these steps:
1. Navigate to the URL `about:config`.  
2. Click past the warning of harmful consequences.  
3. Type `negotiate-auth` into the filter at the top of the page, in order to remove most of the irrelevant settings from the list.  
4. Double-click on `network.negotiate-auth.trusted-uris`. A dialogue box for editing the value should appear.  
5. Enter the required hostname(s) and/or URL prefix(es) then click OK. For the above example, it is `http://localhost:3000`  

[More detailed info here](http://www.microhowto.info/howto/configure_firefox_to_authenticate_using_spnego_and_kerberos.html) .

