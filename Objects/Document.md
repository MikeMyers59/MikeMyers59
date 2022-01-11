# Document Object

The Document Object is a child of the Application Object

## Declare the Document Object
```vbscript
Dim d as Object | d = document
```

## Properties & Methods 
| Property/Method | Description |  
| -- | -- |  
| document.forms[] | Array of form objects with an entry for each form in a document |  
| Title | Shows in the Window’s Title <br> `document.title = <Title>` |  

## Processes

### To explore Document object event sequences  
Using the code from the procedure you just completed, you can step through some actions in Word to see exactly what triggers these events.   
1. On the File menu, click New, click the EventsDemo.dot template in the New dialog box, and then click OK to trigger the New event.   
2. Close either a document based on the EventsDemo template or the template itself to trigger the Close event. 
3. Open an existing document based on the EventsDemo template to trigger the Open event.   

### Add code to Document object events  
In the following procedure, you'll add code to each of the Document object's three events.   
1. In Word, point to Macro on the Tools menu, and then click Visual Basic Editor.   
2. In the Project Explorer, double-click ThisDocument. (If the Project Explorer isn't already open in the Visual Basic Editor, click the Project Explorer toolbar button to open it.) 
3. In the Code window, click Document in the Object box.   
4. In the Procedure box, click each event to insert procedure templates into the Code window.   
5. Type or paste the following statements to the procedures to create the following subroutines: On the File menu, click Save. In the File name box, type EventsDemo, and then click Document Template (*.dot) in the Save as type box. Save this template in the same folder as your other templates (by default, C:\Program Files\Microsoft Office\Templates). Close the EventsDemo template.   

