# Excel Cells

## Add a Diagonal Line to a Cell
When creating a classmate address list, for example, you may need a diagonal link in the first cell to separate different attributes of rows and columns. How to make it? Everyone knows that Home->Font-> Borders can change different borders for a cell, and even add different colors. However, if you click More Borders, you will get more surprises, like a diagonal line. Click it and save—you can now make it immediately.  

## Add a Drop Down List to a Cell
Drop-down lists are very useful data entry tools we see just about everywhere, and you can add custom drop-down lists to your own Excel worksheets. It’s easy and we’ll show you how.  
Drop-down lists make it easier and more efficient to enter data into your spreadsheets. Simply click the arrow and select an option. You can add drop-down lists to cells in Excel containing options such as Yes and No, Male and Female, or any other custom list of options.  
It’s easy to add a drop-down list to a cell in Excel, but the process is not intuitive. Drop-down lists are created using the Data Validation feature. We’re going to create a drop-down list with a selection of age ranges to show you how it’s done.  
To begin, enter the list of age ranges into sequential cells down a column or across a row. We entered our age ranges into cells A9 through A13 on the same worksheet, as shown below. You can also add your list of options to a different worksheet in the same workbook.  
![Cells 08](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2008.jpg)
![Cells 09](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2009.jpg)  
Now, we’re going to name our range of cells to make it easier to add them to the drop-down list. To do this, select all the cells containing the drop-down list items and then enter a name for the cell range into the Name box above the grid. We named our cell range Age.  
Now, select the cell into which you want to add a drop-down list and click the “Data” tab.  
![Cells 10](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2010.jpg)
![Cells 11](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2011.jpg)  
In the Data Tools section of the Data tab, click the “Data Validation” button.  
The Data Validation dialog box displays. On the Settings tab, select “List” from the Allow drop-down list (see, drop-down lists are everywhere!).  
![Cells 12](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2012.jpg)
![Cells 13](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2013.jpg)  
Now, we’re going to use the name we assigned to the range of cells containing the options for our drop-down list. Enter =Age in the “Source” box (if you named your cell range something else, replace “Age” with that name). Make sure the “In-cell dropdown” box is checked.  
The “Ignore blank” check box is checked by default. This means that the user can select the cell and then deselect the cell without selecting an item. If you want to require the user to select an option from the drop-down list, uncheck the Ignore blank check box.  
You can add a popup message that displays when the cell containing the drop-down list is selected. To do this, click the “Input Message” tab on the Data Validation dialog box. Make sure the “Show input message when the cell is selected” box is checked. Enter a Title and an Input message and then click the “OK” button.  
![Cells 14](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2014.jpg)
![Cells 15](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2015.jpg)  
When the cell containing the drop-down list is selected, you’ll see a down arrow button to the right of the cell. If you added an input message, it displays below the cell. The down arrow button only displays when the cell is selected.  
Click the down arrow button to drop down the list of options and select one.  
![Cells 16](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2016.jpg)
![Cells 17](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2017.jpg)  
If you decide you want to remove the drop-down list from the cell, open the Data Validation dialog box as described earlier and click the “Clear All” button, which is available no matter which tab is selected on the dialog box.  
The options on the Data Validation dialog box are reset to their defaults. Click “OK” to remove the drop-down list and restore the cell to its default format.  
![Cells 18](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2018.jpg)
![Cells 19](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2019.jpg)  
If there was an option selected when you removed the drop-down list, the cell is populated with the value of that option.  
Follow this process to add drop-down lists to other cells as needed. You can use the same list for multiple drop-down lists. If you have many drop-down lists you need to add on a worksheet, you may want to put the lists of options on another worksheet in the same workbook. You can hide the worksheet containing your lists of options to prevent them from being changed.  
**Note**: To carry the Data Validation for each new record, select the range with the data validation fields and set it as a table.  

## Add an Image to a Cell  
Before you follow the steps below, it’s important that you have the image on your computer already, and that you know where it is. You will need to browse to it during the tutorial.  

1. Open your spreadsheet in Excel 2010.  
2. Select the cell into which you want to paste the picture.  
3. Click the Insert tab at the top of the window.  
![Cells 01](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2001.jpg)
![Cells 02](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2002.jpg)  
4. Click the Picture button in the Illustrations section of the ribbon at the top of the window.  
5. Browse to the picture that you want to add to your spreadsheet, select it, then click the Insert button.  
6. (optional): Manually resize the cell so that the picture is contained within it. You can do this by clicking the right border of the column letter at the top of the spreadsheet, then dragging it so that the cell is wide enough for the image. You can then repeat this with the row number. Your finished cell and image will look something like the image below.  
![Cells 03](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2003.jpg)

Have you been looking for a good Excel resource where you can learn more about using the program? The Excel 2010 Bible has excellent reviews on Amazon and covers topics ranging from beginner to advanced.  
If you want to lock the image to a cell in Excel 2010, then you need to follow a couple of other steps. This will allow you to cut and paste the columns in your spreadsheet and include the picture along with the cells.  

1. Position the image so that it is contained entirely within the cell.  
![Cells 04](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2004.jpg)
  ![Cells 05](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2005.jpg)
  ![Cells 06](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2006.jpg)  
3. Right-click the image, then click Size and Properties.  
4. Click Properties in the column at the left side of the Format Picture window.  
5. Check the option to the left of Move and size with cells, then click the Close button.  
![Cells 07](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Cells%2007.jpg)  

## Put Same Data into Multiple Cells  
For some reason, you may have to write the same thing over and over again in cells in a worksheet. That's excruciating. Just click the entire set of cells, either by dragging your cursor, or by holding the Ctrl key as you click each one. Type it on the last cell, then hit [CTRL] + [ENTER] - and what you typed goes into each cell selected.   

