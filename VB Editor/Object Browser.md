# VBE Object Browser (OB)

The Object Browser is a tool that provides information about objects and their methods, properties, events, and constants. The Object Browser displays all objects available to Microsoft Access, including Microsoft Access objects, DAO objects, Visual Basic objects, and objects you've defined within your application.  
The object information that you see in the Object Browser comes from an application's object library. Each application that supplies objects to Microsoft Access has an object library that contains information about the application's objects, methods, properties, events, and constants.  
Note   Some objects show up in the Object Browser automatically when you start Microsoft Access. Others, such as the Microsoft Office objects, show up only after you have set a reference to the object library that contains them.  

## To use the Object Browser

1.	On the View menu, click Object Browser.  
2.	In the Project/Library box, click the object library whose objects you want to see, or click <All Libraries> to view the objects of all referenced libraries together. The Classes box lists all the objects in the object library you selected.  
3.	In the Classes box, click an object. The Members Of box lists the methods, properties, events, and constants associated with the object you selected.  

For example, if you click Access in the Project/Library box, all the objects in the Microsoft Access object library are displayed in the Classes box. If you then click an object in the Classes box, you can view the object's members: the methods, properties, events, and constants associated with that object in the Members Of box. A class definition includes all of an object's members. For example, if you click Control in the Classes box, you see the methods and properties of that Control object displayed in the Members Of box.  
  
Th Object Browser ![The Object Browser](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/Object%20Browser.jpg)  

From the Object Browser, you can get help on a particular object, method, property, or event. Just click the item you're interested in and then click the Help button 
  
The OB Help Button ![OB Help Button](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/OB%20Help%20Icon.gif)
  
on the Object Browser's toolbar. You can also copy a particular item to the Clipboard so that you can paste it into your code. Click the item you want to copy and click the Copy button 
  
The OB Copy Button ![OB Help Button](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/OB%20Copy%20Icon.gif)
  
on the Object Browser's toolbar.  
  
You can also view procedures that you've created yourself in Microsoft Access in the Object Browser. The Project/Library box displays the name of the current database and any other referenced databases, in addition to the other referenced object libraries. If you click a referenced database in the Project/Library box, the Classes box displays all standard modules in the database and their public procedures. If you select the current database, it also displays any class modules and their methods and properties. 

