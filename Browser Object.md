# Browser Object

## Open a Browser with Content
Requires:
- objShell

| Browser | Procedure |  
| ---- | ---- |  
| Google Chrome | ```Function openChrome(strURL)``` <br> ```  objShell.run("""C:\Program Files (x86)\Google\Chrome\Application\chrome.exe""" + strURL)``` <br> ```End Function ``` | 
| Microsoft Edge | ```Function openEdge(strURL)``` <br> ```  objShell.run("microsoft-edge:" + strURL)``` <br> ```End Function``` | 
| Mozilla FireFox | ```Function openFireFox(strURL)``` <br> ```  objShell.run("""C:\Program Files (x86)\Mozilla Firefox\firefox.exe""" + strURL)``` <br> ```End Function  ```  |  


