# Excel Data Input & Validation

## Data Validation Function

### Input Restriction with Data Validation Function  
In order to retain the validity of data, sometimes you need to restrict the input value and offer some tips for further steps. For example, age in this sheet should be whole numbers and all people participating in this survey should be between 18 and 60 years old. To ensure that data outside of this age range isn’t entered, go to Data->Data Validation->Setting, input the conditions and shift to Input Message to give prompts like, “Please input your age with whole number, which should range from 18 to 60.” Users will get this prompt when hanging the pointer in this area and get a warning message if the inputted information is unqualified.  
![Validation 01](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Validation%2001.jpg)

### Validate Data to Make Drop Downs  
Creating a spreadsheet for others to use? If you want to create a drop-down menu of selections to use in particular cells (so they can't screw it up!), that's easy. Highlight the cell, go to the Data tab, and click Data Validation. Under "Allow:" select "List." Then in the "Source:" field, type a list, with commas between the options. Or, you could click the button next to the Source field and go back into the same sheet to select a data series—this is the best way to handle large lists. You can hide that data later, it'll still work. Data Validation is also a good way to restrict data entered—for example, give a date range, and people can't enter any dates before or after what you specify. You can even create the error message they'll see.


