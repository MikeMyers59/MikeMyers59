# Browsers

## CrEdge (Microsoft)

#### Make Your Shortcut Open an URL in InPrivate Browsing  
You might want to open a specific web site always in InPrivate Browsing mode. In this case, you can add its address (URL) to the shortcut target. For instance, you can create a shortcut with the following target:  
```dos
"%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" -inprivate https://portal.apps.mil/
```  
Then every time you click on the shortcut you will have Flank Speed  opened in an InPrivate window.
Basic Link Formats:  
(64-bit Windows - Opens Microsoft Edge Stable InPrivate browsing window to a specific site)
```dos
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" -inprivate [URL]
msedge.exe -inprivate [URL]
```
(64-bit Windows - Opens Microsoft Edge Stable InPrivate browsing window to a specific site always in new window)
```dos
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" -inprivate -new-window [URL]
msedge.exe -inprivate -new-window [URL]
```
For those challenging Websites that require Internet Explorer:
```dos
"C:\Program Files\Internet Explorer\iexplore.exe" [-private] [URL]
iexplore.exe [-private] [URL]
```

**InPrivate** browsing is a private browsing mode in which no browsing history, download history, cookies and site data, and form fill data are remembered. Microsoft Edge saves downloaded files as well as any new favorites created while browsing InPrivate. By default, while browsing InPrivate, Microsoft does not collect any info about websites you visit for product improvement purposes. Your school, workplace, or internet service provider may still be able to see your browsing activity. Browsing data for the specific InPrivate session is cleared after all InPrivate windows are closed.

