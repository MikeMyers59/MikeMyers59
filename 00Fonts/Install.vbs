FontFile = WScript.Arguments(0)
nameSpace = WScript.Arguments(1)

Set objShell = CreateObject("Shell.Application")
Set objFolder = objShell.Namespace(nameSpace)

Set objFolderItem = objFolder.ParseName(FontFile)
objFolderItem.InvokeVerb("Install")

'Set objFolderItem = objFolder.ParseName("GDCORP__.TTF")
'objFolderItem.InvokeVerb("Install")

'Set objFolderItem = objFolder.ParseName("GDLIM___.TTF")
'objFolderItem.InvokeVerb("Install")

'Set objFolderItem = objFolder.ParseName("GDPROP__.TTF")      
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("GDUNIV__.TTF")
'objFolderItem.InvokeVerb("Install")      
'Set objFolderItem = objFolder.ParseName("GDUNL___.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("HELVBLAK.TTF")  
'objFolderItem.InvokeVerb("Install")     
'Set objFolderItem = objFolder.ParseName("HELVCOND.TTF")  
'objFolderItem.InvokeVerb("Install")      
'Set objFolderItem = objFolder.ParseName("HELVET10.TTF")  
'objFolderItem.InvokeVerb("Install")    
'Set objFolderItem = objFolder.ParseName("HELVET11.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("HELVET12.TTF")  
'objFolderItem.InvokeVerb("Install")    
'Set objFolderItem = objFolder.ParseName("HELVET13.TTF")  
'objFolderItem.InvokeVerb("Install")   
'Set objFolderItem = objFolder.ParseName("HELVET14.TTF")  
'objFolderItem.InvokeVerb("Install")    
'Set objFolderItem = objFolder.ParseName("HELVET15.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("HELVET16.TTF") 
'objFolderItem.InvokeVerb("Install")     
'Set objFolderItem = objFolder.ParseName("HELVET17.TTF") 
'objFolderItem.InvokeVerb("Install")     
'Set objFolderItem = objFolder.ParseName("HELVETI1.TTF") 
'objFolderItem.InvokeVerb("Install")     
'Set objFolderItem = objFolder.ParseName("HELVETI2.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("HELVETI3.TTF")  
'objFolderItem.InvokeVerb("Install")    
'Set objFolderItem = objFolder.ParseName("HELVETI4.TTF")  
'objFolderItem.InvokeVerb("Install")   
'Set objFolderItem = objFolder.ParseName("HELVETI5.TTF")  
'objFolderItem.InvokeVerb("Install")    
'Set objFolderItem = objFolder.ParseName("HELVETI6.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("HELVETI7.TTF") 
'objFolderItem.InvokeVerb("Install")     
'Set objFolderItem = objFolder.ParseName("HELVETI8.TTF")  
'objFolderItem.InvokeVerb("Install")    
'Set objFolderItem = objFolder.ParseName("HELVETI9.TTF")   
'objFolderItem.InvokeVerb("Install")   
'Set objFolderItem = objFolder.ParseName("HELVETIC.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("SKANDARW.TTF")  
'objFolderItem.InvokeVerb("Install")    
'Set objFolderItem = objFolder.ParseName("SKANDATA.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("SKANDATR.TTF")      
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("SKANDATW.TTF")      
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNIVBLO_.TTF")      
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNIVBL__.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNIVBO__.TTF")      
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNIVB___.TTF")      
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNIVERS_.TTF")      
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNIVLO__.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("Univlto__.ttf")      
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNIVLT__.TTF")     
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNIVL___.TTF")     
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNIVO___.TTF")
'objFolderItem.InvokeVerb("Install")
'Set objFolderItem = objFolder.ParseName("UNVBBLO_.TTF")