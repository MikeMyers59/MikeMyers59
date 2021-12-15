# Objects

## Working with Objects in JavaScript
JavaScript includes built-in objects to work with elements of the currently loaded HTML document, as well as performing other useful tasks, such as mathematical calculations. It also offers the programmer the chance to create her own objects. 

#### Built-In Objects
JavaScript offers a set of built-in objects that provide information about the currently loaded Web page and its contents, as well as the current session of Navigator. In addition, these objects provide methods for working with their properties. 

Major JavaScript objects.
|Object|Description  |  
| --- | --- |   
| navigator |The navigator object provides properties that expose information about the current browser to JavaScript scripts.  |   
| window |The window object provides methods and properties for dealing with the actual Navigator window, including objects for each frame.  |   
| location |The location object provides properties and methods for working with the currently open URL.  |   
| history |The history object provides information about the history list and enables limited interaction with the list.  |   
| document |The document object is one of the most heavily used objects in the hierarchy. It contains objects, properties, and methods for working with document elements including forms, links, anchors, and with applets. |  
|string|The string object enables programs to work with and manipulate strings of text, including extracting substrings and converting text to upper- or lowercase characters.  |   
| Math|The Math object provides methods to perform trigonometric functions, such as sine and tangent, as well as general mathematical functions, such as square roots.  |   
| Date|With the Date object, programs can work with the current date or create instances for specific dates. The object includes methods for calculating the difference between two dates and working with times.  |   

#### Extending JavaScript: Creating Your Own Objects
In addition to a wide range of built-in objects, as a JavaScript programmer, you can create your own objects to use in your scripts. 

###### Properties
For example, if you need to build an object in JavaScript to represent the different types of airplanes sold by an aircraft manufacturer, you would have several pieces of information related to the airplane that you would want included in the object, including the following: 

-	Model 
-	Price 
-	Normal seating capacity 
-	Normal cargo capacity 
-	Maximum speed 
-	Fuel capacity 

Properties are like variables in traditional languages, such as C and Pascal. Variables are named containers which are used to hold pieces of data, such as numbers or text. Variables are discussed in more detail in Chapter 3, "Working with Data and Information."   
So, in JavaScript, if you call your object airplane, these properties might be referred to as: 

-	airplane.model
-	airplane.price
-	airplane.seating
-	airplane.cargo
-	airplane.maxspeed
-	airplane.fuel

  **Note**: As you will learn later, in JavaScript, the properties of objects are referred to by the structure object-name.property-name. 

###### Methods
Of course, having this information isn't worth much without ways to use the information. For instance, in this example, you want to be able to print out a nicely formatted description of the aircraft or be able to calculate the maximum distance the plane can travel based on the fuel capacity.   
In object-oriented terminology, these tasks are known as methods. Like properties, your methods might be referred to as:   

-	airplane.description()
-	airplane.distance() 

###### Objects within Objects
Objects can also include other objects in much the same way as properties and methods. For instance, the airplane manufacturer may want to include an object inside his object definition to handle information about the number of planes in use worldwide, who is using them, and their safety records. This information, along with methods for working with the information, could be combined into an object called airplane.record. This object could then include properties and methods such as: 

-	airplane.record.number_in_use
-	airplane.record.crashes
-	airplane.record.newscale() 

###### Instances
What you have created is a general description of an object that defines the information you want to work with and the ways you want to work with it. These general descriptions of objects are known as classes. In object-oriented programming, then, you can create specific instances of the class as needed.  
  **Note**: In object-oriented programming, creating specific copies of classes is known as creating instances. JavaScript itself is classless, but provides mechanisms to create instances of objects (thus providing the same basic functionality). We cover the details of creating objects and instances in Chapter 4, "Functions and Objects-The Building Blocks of Programs."  
For instance, in this example, the airplane manufacturer might want to create an instance of the airplane object for its newest aircraft, the SuperPlane. If this instance were created, then a program could assign specific values to the properties of the new instance by referring to superplane.price, superplane.model, and so on. Likewise, a description of the new plane could be printed out using superplane.description(). 

