# Access Notes

- http://www.iaccessworld.com/hide-navigation-pane-full-menu-shortcut-menu/

### Quick Facts
- Access uses "*" for the wildcard instead of "%".  
- Open Access without running Macros by holding the `SHIFT` key when opening the database.  
- Open your database, go to `File > Database Properties` and click the `Contents` tab. There you'll see a plain-text list of all the Tables, Queries, Forms, Reports, Data Access Pages, Macros, and Modules in the database.
- The ampersand is a reserved character in Access: Access formats the character immediately following an ampersand as underlined, so add an `&` in a Label to make a keyboard shortcut with the following letter. Letters can only be used once in each form. To use the ampersand as a character, enter it twice as `&&` will be displayed as `&`.
- Use a blank form as the base form. Set it to `Popup` Y; `Modal` N then set the menu & all other forms to `Popup` Y, `Modal` Y.
- Set a Forms property `AutoCenter` to Yes opens the form in the center of the screen regardless of where you last left it. This setting works in newer versions after setting the default Document Window Options property to Overlapping Windows. (Look in the Current Database options in the Application Options section.) 
- Set a Forms property `Resize` to Yes opens your form to its designed size and not the size last used. 

### Access Ribbon Menus  
- **File** - Menu items to Open, Close, Create new, Save and Print databases and their contents. This menu also has the Exit item to exit Access.  
- **Edit** - Cut, Copy, Paste, Delete  
- **View** - View different database objects (tables, queries, forms, reports)  
- **Insert** - Insert a new Table, Query, Form, Report, etc.  
- **Tools** - A variety of tools to check spelling, create relationships between tables, perform analysis and reports on the contents of the database.  
- **Window** - Switch between different open databases.  
- **Help** - Get help on Access.  
- **Developer** - Allows access to macros & scriptng tools.  

### Keyboard Shortcuts
| Process | Description |  
| -- | -- |  
| Copy the current selection. | [CTRL] + C  |  
| Display the database window. | [F11]  |  
| Insert a carriage return in a memo or text field. | [CTRL] + [ENTER]  |  
| Insert the current time. | [CTRL] + :  |  
| Insert the data from the same field in the previous record. | [CTRL] + '  |  
| Insert the day's date. | [CTRL] + ;  |  
| Open a new database. | [CTRL] + N  |  
| Paste the contents from the clipboard. | [CTRL] + V  |  
| Save the current database. | [CTRL] + S  |  
| Summon the Find And Replace dialog box. | [CTRL] + F  |  
| Summon the Open dialog box. | [CTRL] + O  |  
| Summon the Print dialog box. | [CTRL] + P  |  
| Switch between the Visual Basic Editor and the previous active window. | [ALT] + [F11]  |  
| Undo changes made to the current field. | [ESC]  |  
| Undo changes made to the current record. | [ESC] + [ESC]  |  
| Undo the most recent change you've made. | [CTRL] + Z  |  

## Access Data Types
- https://support.office.com/en-us/article/Introduction-to-data-types-and-field-properties-30ad644f-946c-442e-8bd2-be067361987c?ui=en-US&rs=en-US&ad=US#refcalculated  

| Data Type |Use to display |  
| -- | -- |  
| Text |Short, alphanumeric values, such as a last name or a street address. Note, beginning in Access 2013, Text data types have been renamed to Short Text. |  
| Number |Numeric values, such as distances. Note that there is a separate data type for currency. |  
| Currency |Monetary values. |  
| Yes/No |Yes and No values and fields that contain only one of two values.  |  
| Date/Time |Date and Time values for the years 100 through 9999. |  
| Rich Text |Text or combinations of text and numbers that can be formatted using color and font controls.  |  
| Calculated Field |Results of a calculation. The calculation must refer to other fields in the same table. You would use the Expression Builder to create the calculation. Note, Calculated fields were first introduced in Access 2010. |  
| Attachment |Attached images, spreadsheet files, documents, charts, and other types of supported files to the records in your database, similar to attaching files to e-mail messages. |  
| Hyperlink |Text or combinations of text and numbers stored as text and used as a hyperlink address. |  
| Memo |Long blocks of text. A typical use of a Memo field would be a detailed product description. Note, beginning in Access 2013, Memo data types have been renamed to Long Text. |  
| Lookup |Displays either a list of values that is retrieved from a table or query, or a set of values that you specified when you created the field. The Lookup Wizard starts and you can create a Lookup field. The data type of a Lookup field is either Text or Number, depending on the choices that you make in the wizard. <BR> Lookup fields have an additional set of field properties, which are located on the Lookup tab in the Field Properties pane. |  

**Note**: Attachment and Calculated data types aren't available in .mdb file formats.

#### Hyperlink 
Introduced in Access 9, this field type for storing links to files on:  
- your computer (a file name);  
- a network (a UNC name);  
- the Internet (a URL address).  

A hyperlink entry contains three parts separated by pound signs (#). The template is:  
 `display text # file name # any reference within the file`  
Use the Insert menu to add a hyperlink entry, and Access takes care of the three parts. Only the "display text" part of the field is shown, and clicking on the field executes the link. 
So how can you view its full contents or edit the field?   
1. Click the attached label, to move the cursor into the hyperlink field. (If the field has no label, use the Tab key.)   
2. Press F2 to edit the field. All three parts of the hyperlink are displayed for editing.   

Some examples may help show how this works:  
| Hyperlink Contents|Displays|When Clicked  |  
| -- | -- | -- |  
| My photo#c:\pix\photo.bmp#|My photo|Loads picture into MS Paint.  |  
| SS data#ss.xls#Sheet 1!G9|SS data|Loads spreadsheet into Excel, selecting cell G9.  |  
| Do labels#\\jane\pub\label.doc#|Do labels|Loads the network document into WinWord.  |  
| Edit Clients##Clients|Edit Clients|Opens Clients form in current database (no file specified).  |  
| Sales info##Query Sales|Sales info|Runs the Sales query in the current database.*  |  
| IBM#http://www.ibm.com#|IBM|Loads your web browser and opens the URL.  |  
| #www.canon.com#|www.canon.com|Loads your web browser, assuming prefix of "http://". |  
**NOTE**: The word "Query" in this hyperlink is optional. However, if the current database had a form named Sales, Access would open the form in preference to the query.

## Date and Time  
MS Access includes a built-in Date/Time data type that is ideal for storing chronological point-data (e.g. birthdate, date/time of an event, and so forth). It is not, however, very good for storing duration times(e.g. times for a sporting event). It can be used for such, but when the time exceeds 23:59:59, instead of going on to 24:00:00, it goes to 12/31/1899 00:00:00. See below for details on the way I recommend using to store duration times.  
Access stores a Date/Time field as a double-precision floating point number. The number represents the number of days(and fractions of day) since 12/30/1899 12:00:00 am. Hence, a value of 1 would translate to 12/31/1899 12:00:00am, and a value of 2.5 would be 1/1/1900 12:00:00 PM. These values can be manipulated by either standard mathematical functions or by the many Date-related functions Access provides. See below for a list and description of Access's Date/Time functions.  
| Format | Description |  
| -- | -- |  
| Short Date |Display the date in a short format. Depends on your regional date and time settings. For example, 3/14/2001 for USA. |  
| Medium Date |Display the date in medium format. For example, 3-Apr-09 for USA. |  
| Long Date |Display the date in a long format. Depends on you're the regional date and time settings. For example, Wednesday, March 14, 2001 for USA.  |  
| Time am/pm |Display the time only using a 12 hour format that will respond to changes in the regional date and time settings.  |  
| Medium Time |Display the time followed by AM/PM. |  
| Time 24hour |Display the time only using a 24 hour format that will respond to changes in the regional date and time settings |  

Date format components
| Format | Description |  
| -- | -- |  
| d|Day of the month in one or two numeric digits, as needed (1 to 31). |  
| dd|Day of the month in two numeric digits (01 to 31). |  
| ddd|First three letters of the weekday (Sun to Sat). |  
| dddd|Full name of the weekday (Sunday to Saturday). |  
| w|Day of the week (1 to 7). |  
| ww|Week of the year (1 to 53). |  
| m|Month of the year in one or two numeric digits, as needed (1 to 12). |  
| mm|Month of the year in two numeric digits (01 to 12). |  
| mmm|First three letters of the month (Jan to Dec). |  
| mmmm|Full name of the month (January to December). |  
| q|The quarter of the year (1 to 4). |  
| y|Number of the day of the year (1 to 366). |  
| yy|Last two digits of the year (01 to 99). |  
| yyyy|Full year (0100 to 9999). |  

Time format components
| Format | Description |  
| -- | -- |  
| h|Hour in one or two digits, as needed (0 to 23). |  
| hh|Hour in two digits (00 to 23). |  
| n|Minute in one or two digits, as needed (0 to 59). |  
| nn|Minute in two digits (00 to 59). |  
| s|Second in one or two digits, as needed (0 to 59). |  
| ss|Second in two digits (00 to 59). |  

Clock format components
| Format | Description |  
| -- | -- |  
| AM/PM|Twelve-hour clock with the uppercase letters "AM" or "PM," as appropriate. For example, 9:34PM. |  
| am/pm|Twelve-hour clock with the lowercase letters "am" or "pm," as appropriate. For example, 9:34pm. |  
| A/P|Twelve-hour clock with the uppercase letter "A" or "P," as appropriate. For example, 9:34P. |  
| a/p|Twelve-hour clock with the lowercase letter "a" or "p," as appropriate. For example, 9:34p. |  
| AMPM|Twelve-hour clock with the appropriate morning/afternoon designator as defined in the regional settings of Windows. |  

Predefined formats 
| Format | Description |  
| -- | -- |  
| c|Same as the General Date predefined format. |  
| ddddd|Same as the Short Date predefined format. |  
| dddddd|Same as the Long Date predefined format. |  
| ttttt|Same as the Long Time predefined format. |  

#### Number
|  Format |Use to display  |  
| -- | -- |  
| General |Numbers without additional formatting exactly as it is stored. |  
| Currency |General monetary values. |  
| Euro |General monetary values stored in the EU format. |  
| Fixed |Numeric data.  |  
| Standard |Numeric data with decimal. |  
| Percentage |Percentages. |  
| Scientific |Calculations. |  

#### Yes/No
In Access, a Yes/No field stores only two values: Yes or No. If you use a text box to display a Yes/No field, the value displays as -1 for Yes and 0 for No.
| Data Type |Use to display  |  
| -- | -- |  
| Check Box |A check box. |  
| Yes/No |Yes or No options |  
| True/False |True or False options. |  
| On/Off |On or Off options. |  

### What to do when Null isn't Null  
Many end users encounter a problem when they use Microsoft Access 97, 2000, or 2002 as a front-end viewer for data files created by the "big" relational database management system in the house. Namely, certain Access SQL commands don't work the same way they do in native Access. While some anomalies can only be explained by referring to application-specific documentation, others are resolved with easy workarounds.  
Here's one scenario that causes frequent frustrations: On the Access side, the user tries to enter Is Null or Is Not Null as a validation rule for a field or as the criteria in a query. If the database field owned by the third-party application isn't null-able, the query will fail to retrieve the records it should.  
If the database engine detects that error, it may display a message to help the user make appropriate changes. But when the lack of support for a null goes undetected, the user may be left wondering why a perfectly good query didn't work.  
When you work with a database in which null isn't null, try this workaround. Instead of Is Null, use ="" (equal sign followed by a pair of quotation marks). When you want to specify Is Not Null, enter >"" (greater than sign followed by a pair of quotation marks). The two sets of quotation marks represent a zero-length string, which frequently succeeds when Is Null and Is Not Null fail. 

# Images
As Access database will grow HUGE storing the pictures inside it, the generally accepted way of doing this is to store the path to the file in a field, then adding an image control to a form. In the onCurrent event of the form, run a line of code like:
```vbscript
me.image1.picture = me.path_to_pic_field
```

## Image Properties  
The **Picture Type** property lets you determine whether Access embeds a copy of the image or links to the image. If you're only going to use the image in one report, you might as well embed it. However, if you're going to use the image in more than one report or in a number of forms, consider linking instead. That way, in each instance, Access stores only the link to the image, not the image itself.   
The **Picture Size Mode** property defaults to Clip, which works the best for most images. (The Stretch and Zoom settings can distort the image.) The Picture Alignment property, which defaults to Center, lets you determine the position on the page where the background image appears.   
If you want a busier background design, set the **Picture Tiling** property to Yes. When you do, Access will cover the entire report page with tiled copies of the image.  

# Processes
| Process | Description |  
| -- | -- |  
| Add a Designer Background | Open your report in Design View, go to View | Properties, and click the Format tab of the Report dialog box. Start by entering the path to your image, or click the Build button for the Picture property and navigate to the image you want to use for the background of your report. BMP, ICO, WMF, DIB, and EMF files are officially supported formats. |  
| Compact a Database | Go to `Tools | Database Utilities | Compact and Repair Database` | 
| Copy Records | In the Datasheet view, you can select a single record by clicking on any field in the record you want to copy and going to Edit | Select Record. You can also click on the Record Selector (the gray box at the leftmost edge of the datasheet) to select a single record, or, to select multiple records, you can click-and-drag in the Record Selector column. To copy the selected record(s), press `[CTRL] + C`. |  
| Open Database in Exclusive Mode | Begin by launching Access, then go to `File > Open`. Select the database you want to protect by clicking once on the database's name. <BR> Click the drop-down arrow that appears on the right edge of the Open dialog box's Open button. <BR> From the resulting list, choose `Open Exclusive`. When you do, Access will open the database like it normally does. |
| Paste a Table into a Dataset | Click the `*` to select the entire empty row, then paste. |  
| Remove a Database Password | Go to `Tools > Security` and choose the `Unset Database Password` option. Enter the password and Access will remove it.  |  
| Save Table to Excel | To convert the entire table, go to File | Export and change the Save As Type option to the appropriate Excel version. |  
| Set a Default Field Size | To do so, Go to `Tools > Options >Tables/Queries`. In the `Default Field Sizes` section, enter the new default value for the Text/Number fields.  |  
| Set a password for your database | Open the file in Exclusive mode. <BR> Go to `Tools > Security > Set Database Password`. Enter the password twice and click OK.  |  
| Sorting in Access | If you want to sort your records on a single column, you have three choices: <br> - Click anywhere in that column and then click the Sort Ascending button, located on the Table Datasheet toolbar. <br> - Click in the column on which you want to sort, go to Records | Sort, and choose either the Ascending or Descending option. <br> - Right-click a column and choose either Sort Ascending or Sort Descending from the context menu. |
| Undo Design Changes | Open the File menu and choose Revert. Choosing Revert restores the form or report to the state it was in before you started the current editing session. |  

## Boost keyboard efficiency 
Users expect ease of use from an interface. If you work in Access on a regular basis, you can customize the way the interface responds to the keyboard. If you teach Access, new users will appreciate learning how to be master of their keyboard domains. 
Access users seem to fiddle most with the way Access responds to arrow keys. To investigate your options, go to Tools | Options | Keyboard and to the section labeled Arrow Key Behavior. You should base your settings choices on your most common editing activity. 
For example, if you do a lot of entering in a field and in almost all cases you replace the entire entry, you probably want to set the Behavior Entering Field selection to Select Entire Field and set the Arrow Key Behavior selection to Next Field. 
On the other hand, you might routinely edit portions of entries in a field. When Access is set to select the entire field upon entry, you'll have to press [F2] or use the mouse to deselect the entry and get to work. In that case, you'll probably want to change the Behavior Entering Field to Go To Start Of Field and set the Arrow Key Behavior to Next Character. 

### Convert Access 2000 or Access 2002 - 2003 database to the .accdb format  
To convert an Access 2000 or Access 2002 - 2003 database (.mdb) to the .accdb file format, you must first open the database by using Access 2007 or Access 2010, and then save it in the .accdb file format.  
1. On the File tab, click Open.  
2. In the Open dialog box, select and open the Access 2000 or Access 2002 - 2003 database (.mdb) that you want to convert.  
  **Note**: If the Database Enhancement dialog box appears, the database is using a file format that is earlier than Access 2000.   
3. On the File tab, click Save & Publish, and then, under Database File Types click Access Database (*.accdb).  
4. Click Save As. If any database objects are open when you click Save As, Access prompts you to close them prior to creating the copy. Click Yes to make Access close the objects, or click No to cancel the entire process. If needed, Access will also prompt you to save any changes. 
5. In the Save As dialog box, type a file name in the File name box, and then click Save.  

Access creates the copy of the database, and then opens the copy. Access automatically closes the original database.  

## Convert Backwards  
When you want to convert an Access 97 (or older) database to Access 2000 or 2002, the process is straightforward: Launch Access 2000, go to File | Open, navigate to the old database, and click OK. At the Convert/Open Database dialog box, you'll have the choice of converting the database to the new format or opening it while maintaining backward compatibility.  
However, if you need to convert an Access 2000 database back to Access 97, File | Save As won't help--but you can still convert an Access 2000 database into a format that Access 97 can use. 
To do so, follow these steps:  
- Open the database, go to Tools | Database Utilities | Convert Database, and select To Prior Access Database Version.  
- Enter a new name in the Convert Database Into dialog box. The file extension will remain the same, MDB.  

As is typically the case when you convert any program file to an earlier format, in the conversion to the older version you may lose some features or functionality that existed in the newer version.

## Copy data from one Access table to another 
Before Office XP, Access users who wanted to copy columns of data from one table to another in a database had to copy and paste each column separately. With XP's Office Clipboard Task Pane, Access users can copy as many as 24 columns of data to the clipboard, and then later paste some or all of the columns into another table. Follow these instructions to copy data from one Access table to another.  
First, follow these steps to collect the columns of data you wish to copy:  
1. Click Edit | Office Clipboard to display the Clipboard Task Pane.  
2. Open the table from which you want to copy the data, and select the first column of data to copy.  
3. Click Copy, and a partial listing of data for that column will appear as an item in the Clipboard Task Pane.  
4. Repeat Steps 2 and 3 for each column of data you wish to add to the clipboard.  
5. Close the source table.  

Next, follow these steps to paste the columns to a new table:  
1. Open the table to which you want to copy the data, and select the blank column in which you want to paste an item from the clipboard. To avoid errors, ensure that the data type of the destination column is the same as that of the column to be pasted.  
2. In the Clipboard Task Pane, click the item that lists the column you want to paste and confirm the paste.  
3. Rename the field if necessary.  
4. Repeat Steps 1 through 3 for each item you wish to paste from the clipboard.  
5. Save your changes before closing the new table.  
	
Before closing the Clipboard Task Pane, click the Clear All button to clear the clipboard.  

## Link an Access database to an Excel spreadsheet 
If you currently use Excel as your database software, you aren't limited to Excel's filtering and reporting functions. You can use Access tools to create queries and reports on spreadsheet data without importing that data into Access. Follow these steps: 
	1. In an existing Access database, click File | Get External Data | Link Tables. 
	2. In the Link dialog box's Look In text box, select the folder that contains the spreadsheet to which you want to link. 
	3. Select Microsoft Excel in the Files Of Type text box, select the Excel file, and click Link. 
	4. When the Link Spreadsheet Wizard presents a view of the data, click Next. 
	5. Select the First Row Contains Column Headings check box, enter a name for the linked table, and click Finish. 
The external table, identified with an Excel worksheet icon and link arrow, is now listed as a table object in your database. Any changes made to the spreadsheet in Excel will automatically be reflected in any query, report, or form derived from the linked table.

## Publish Database Contents On An Intranet 
Are you looking for a fast and easy way to publish the contents of an Access database on your company intranet? Access' Data Page Wizard is the answer.  
Start by creating a Web page designed for read-only purposes, one that will display the contents of a database, such as the company telephone list. First, open the database file. In the Objects list, click Pages, and double-click Create Data Access Page By Using Wizard. Like most of the other design wizards, the first page design screen asks you to decide which fields from which tables and queries you want to include on the page. Next, you'll be asked about grouping options, then sorting options.  
When you get to the screen where the first question asks for the title of your new page, go ahead and enter the title. Next, select the Do You Want To Apply A Theme To Your Page? check box. Click Finish, and Access will launch the Theme dialog box.  
In the Theme dialog box, you'll be able to preview dozens of combinations of fonts, colors, and backgrounds for your intranet page. If you already have a data page (.htm file) to which you'd like to apply a theme, open that file in Design view. Then go to Format | Theme to launch the Theme dialog box. To preview your resulting data page, point to it with your Web browser. 

## Use Find Command
1. Switch to Datasheet or Form view.  
2. Select the column (or field) you wish to search. If you wish to search all fields or columns, do not select one.  
3. Click Find button on the Toolbar.  
4. In the Find What box, type the value you want to find. You can use wildcards if you don’t know the exact value.  
5. In the Search box, select one of the options.  
6. If you do not have the exact value of the record in the Find What box, choose an option in the Match box.  
7. Choose any other options.  
8. Click Find First.  
9. If the first record found is not the desired record, choose Find Next. Repeat choosing Find Next until you have completed your search.  
10. Click Close.  

## Use Subdatasheets To View Data In A Related Table 
Subdatasheets let users view related records in two tables that share a one-to-many relationship. For example, in a library database, the Authors table and the Books table have a one-to-many relationship; in other words, each record in the Authors table can have more than one record in the Books table.  
Follow these steps to insert subdatasheets to view the related records in these tables:  
- Open the primary table (in this example, the Authors table) and click Insert | Subdatasheet. 
- In the Subdatasheet dialog box, select the related table (in this example, the Books table). 
- In the Link Child Fields drop-down box, select the primary key for the Books table. 
- In the Link Master Fields drop-down box, select the primary key for the Authors table. 
- Click OK. 

If asked, click Yes to establish a relationship between the two tables.  
The subdatasheets are inserted in the Authors Table, which is indicated by a small plus sign displayed in the first column of each record. Clicking the plus sign will display the related records in the Books table.  

