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

