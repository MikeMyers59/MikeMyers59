# Excel Tables

Manage information by using Excel tables, which make it easy to format data, sort, filter, add totals, and use formulas.   

The purpose behind tables is to make managing and analyzing related data easier. Learn how to put this new feature to work for you!   

One of my favorite additions to Excel 2007 is the table feature, which you might be tempted to ignore. I mean, isn't a spreadsheet really just a table? What's to improve, right? A lot—by formatting a spreadsheet as a table, Excel 2007 extends functionality, almost magically! Things that use to take a few clicks, now require no effort at all.  

Perhaps the easiest task is creating the table in the first place! To create a table, select any cell in the spreadsheet (with or without data) and press [CTRL]+T. When Excel displays the Create Table dialog box, click OK. If your spreadsheet contains header cells, you might need to check the My Table Has Headers option.

[TABLES 01] & [Tables 02]  

Excel adds a green bar format to the table and enables an AutoFilter for each column. If you don't like the default format, choose a new one (there are 60). To do so, simply choose a new one from the Table Styles gallery on the Design tab in the Table Tools ribbon. As you hover over each option, Excel updates the actual table, accordingly, so there's less experimentation and reformatting.  

[TABLES 03] & [Tables 04]  

Adding data couldn't be easier.  Select any cell in the row below the last row of data and enter a value—Excel will extend the table format to include the new row. In addition, any formulas that refer to the table will include the new row.  

Want totals? Click the Total Row option in the Table Style Options group on the Design tab (on the Table Tables ribbon). This is a toggle option that displays and hides a row of formulas at the bottom of the table. Notice that as you scroll down, the heading labels are still visible, without a single keystroke from you!  

[TABLES 05] & [Tables 06]  

The total row sums values in the last column only, but you can quickly add more formulas. Each column in the total row has a dropdown. Simply choose a function—and Excel does the rest!
If you add a formula to the first empty column to the right, the table extends to include this formula and copies the new formula to the remaining rows! (Be sure to update the temporary heading label.) Below, you can see what happens when Excel encounters a simple expression in cell H2. Excel knows you're working in a table and assumes that you want a consistent formula.  

[TABLES 07] & [Tables 08] & [Tables 09]   

If the table assumes too much, simply undo its work by choosing an option from the AutoCorrect dropdown.  

I've barely scratched the surface, but these are the features that I think most users will put to use the most. Many common spreadsheet tasks are now easier to implement and more intuitive. I'm in favor of anything that means less work for me!  

## Table Processes  
 
#### Change table format  

1. Click anywhere in the table.   
2. On the Design tab, in the Table Styles group, click the arrow at the bottom of the box.  
3. Move the insertion point over the various styles. See a live preview of what each style would look like in your table.   
4. Click to select a style.  
 
#### Create a table  

1. On a worksheet, select the range of cells that you want to include in the table. The cells can be empty or can contain data.  
2. On the Insert tab, in the Tables group, click Table.  
3. If the selected range contains data that you want to display as table headers, select the My table has headers check box.  
 
### Convert an Table Back to a Normal Range  

After you create a table in Microsoft Excel 2007, you may want to convert it back to a normal range.  

Note that when you convert a table to a normal range, the row headers will no longer include the sort and filter arrows and the structured references  (i.e. table name and column header references that are used in the table formulas) will be converted back to regular references.  

#### Convert Excel 2007 Table To A Normal Range:  

1. Right-click any cell within the table;  
2.  On the pop-up menu point to Table, then Convert to Range. You will be asked to confirm your action with a message “Do you want to convert the table to a normal range?”  
  
Note that after you convert the table back to a normal range, the table formatting remains. So, as you can see, this can be used as a neat way to format a range of cells with a table format that you like. On the other hand, if you do not want to retain the formatting left behind by the table, you will need to remove it manually.   

To convert all of your cells back to default formats, you can easily do this by selecting the entire table (CTRL+A) and then on the Home tab, click the Clear button in the Editing group and choose Clear Formats. However, this removes all formatting including number formats and cell alignment.  

To keep the existing number formatting and alignment options, first select the entire table (CTRL+A) and then remove the unwanted formats using the commands (e.g. Fill, Font, Borders, etc…) on the Home tab in the Font group or on the Mini toolbar when you right-click a cell in the table.  

If you want to experiment with some of the table formats, immediately after you create the table, you can click Undo on the Quick Access Toolbar (or press CTRL+Z) to convert the table back to a range and the table formatting will be removed.  

#### Create a "Live" Transposed Copy of a Table 

How to transpose rows and columns, part II. Let's say you want to see the same table in two parts of your worksheet, with one of them a transposed version of the other, and with any data that you change in the first version instantly changed in the other. This takes a bit of forethought, but it's easy when you get the idea. Select a table; count its rows and columns for example, if the table is at A1:H11, then it has 11 rows and 8 columns. Select a blank region of your worksheet with the dimensions transposed in this example, 8 rows and 11 columns. Select a range equal to the transposed size and press F2 to edit the formula. Enter =(TRANSPOSE(A1:H11), but with the range of your actual table. Press Ctrl-Shift-Enter, which is the little-known Excel keystroke that creates an array formula. Excel will put curly braces around the formula to indicate that it's an array formula. Any change you make in the original table will also appear in the transposed version, but you can't make changes directly to the transposed version. You can format this transposed table to suit your needs as the formatting is not carried with the data!

**Note**: Using Table names causes headers to be “lost,” so use the RxCx:Rx2Cx2 range. 

**Bonus tip**: To remove the transposed table, you have to select the whole thing and that can be tricky if you don't remember the exact dimensions of the array. The answer is to put the cursor in the array, press Ctrl-G to bring up the Go To dialog, click Special..., and click Current Array.   

#### Delete a table, and its data  

1. On a worksheet, select a table. Press CTRL+A twice to select the entire table, including the table headers.  
2. Press DELETE.   
 
#### Filter in a table  

1. Click a drop-down arrow on the column you want to filter.  
2. Clear the Select All check box, and then click on the boxes for the content you want to see. Or  
3. Depending on the type of information in the column, point to Number Filters, Text Filters, and so on to make your selection. Note that you can filter multiple columns.  
 
#### Sort in a table

1. When you create a table, drop-down arrows appear at the top of each column.   
2. Click an arrow to sort the column. Note that you can sort only one column at a time.  

## Use Quick Formula Auto-Fill  
By [Susan Harkins](http://www.techrepublic.com/meet-the-team/us/susan-harkins/) \| in [Microsoft Office](http://www.techrepublic.com/blog/microsoft-office/) April 1, 2011, 3:44 AM PST  
Excel 2007's new table feature eliminates the need to copy formulas; once you define a data range as a table, Excel will do it for you!  
Tables are new to Excel 2007 and at first, you might think…redundant…who needs them? They do appear to be just an easy way to apply some fancy formatting to a data range, but tables are far more than that. Tables have special properties that will make you more productive and efficient.  
![Tables 15](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Tables%2015.jpg)  
Tables offer a lot, but my favorite feature is the formula auto-fill. Normally, you enter a formula and use the fill handle to copy the formula as needed. For example, using the data range shown below, you might enter a SUM() function that sums `B3:E3` in cell `F3`. Then, you'd use the fill handle to copy that formula to `F4:F6`.
If you define your data range as a table, Excel will automatically copy the formula in F3 to `F4:F6` for you. To do so, you must first define the data range as a table, as follows:  

1. Select the data range. In this case, that's `A2:E6`.  
2. Click the Insert tab.  
3. Click Table in the Tables group.  
4. Click OK to close the Create Table dialog box. Excel formats the data range as a table.  
![Tables 16](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Tables%2016.jpg)
![Tables 17](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Tables%2017.jpg)
![Tables 18](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Tables%2018.jpg)  

Now, enter the following function into cell F3: `=SUM(B3:E3)` and press Enter. When you do, Excel automatically copies the formula to the remaining rows in the table. It isn't perfect: you'll still have to adjust the column width and enter a column heading. But, copying the formula is one less chore you have to do.  
It's not a huge deal, but if you can get Excel to do more work for you, why not? This particular behavior will come in handy when working with large data ranges.
The row behavior is different, but still very handy—let's take a quick look. Enter the following function in cell B7: `=SUM(B3:B6`. When you do, Excel displays a dropdown arrow next to the cell. Click it and you'll see a list of functions. Simply select one of the listed functions to quickly update the current function.   

## Use Table Nomenclature to Quickly Create Dynamic Formulas  
By [Susan Harkins](http://www.techrepublic.com/meet-the-team/us/susan-harkins/) \| in [Microsoft Office](http://www.techrepublic.com/blog/microsoft-office/), July 22, 2011, 3:17 AM PST   
In Excel, defining a data range as a table opens the door to a number of efficient behaviors. Susan Harkins explains how to use nomenclature to create and use dynamic formulas.   
If you're an Excel 2007 or 2010 user, you've probably discovered the new tables feature. Tables are an extension of Excel 2003's list feature. Defining a data range as a table opens the door to a number of efficient behaviors. I'll show you how to use one of my favorite table features, using table nomenclature to create and use dynamic formulas.  
First, you need a table. To create a table, select any cell in a data range. Then, click the Insert tab and click Insert in the Tables group. Or, press `[CTRL]+T`. In most cases, you won't need to change any of the default settings in the Create Tables dialog box. Using the example sheet below, the feature specifies the correct range and the table has headers, so click OK.   
![Tables 10](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Tables%2010.jpg)
![Tables 11](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Tables%2011.jpg)  
Next, name the table by clicking the contextual Design tab and entering a name into the Table Name control in the Properties group.  
With the setup out of the way, let's look at how table nomenclature aids in writing formulas. We'll write a dynamic COUNTIF() function that counts the number of sales per person. (The formula will work the same as it would if you weren't referencing a table.) You can put the formula most anywhere you like; I inserted a few new rows to add the formula above the table. In cell B2, enter  
`=COUNTIF(`  
At this point, you'd normally reference a column. Instead, after entering the opening parenthesis, enter the name of the table, followed by an opening bracket, as follows:  
`=COUNTIF(Sales[`  
When you enter the opening bracket, Excel will display a list of all the columns in the defined table. To complete the range argument, double-click the appropriate column. In this case, that's Personnel.  
Type the closing bracket, enter a comma to separate the range and criteria arguments and then specify the criteria argument by pointing to cell B1. Finish it off by entering a closing parenthesis and pressing Enter.  
![Tables 12](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Tables%2012.jpg)
![Tables 13](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Tables%2013.jpg)
![Tables 14](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Tables%2014.jpg)  
Change the name in cell B1 to update the formula in B2. If creating the formula this way doesn't seem any easier, it's probably because we've created one formula referencing one column. Once you define the table, you can quickly reference any column in it this way. If you have lots of references, you probably will find it more efficient than traditional referencing.  
That's not all though - let's add a new record and see what happens. In cell A13, enter Bill. Excel automatically extends the table to include the new row and Excel updates the COUNTIF()—you don't even have to complete the record! That's table nomenclature at work!  

