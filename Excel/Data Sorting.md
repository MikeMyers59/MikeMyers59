# Excel Data Sorting

Learning how to sort in Excel is a quick process; it's painless and simple thanks to Excel's intuitive nature. However, knowing what Excel is doing and how it interprets your data will help you move from those easy sort tasks that Excel handles for you to more complex sorting tasks. In this article, we'll discuss sort basics and work through two simple examples where Excel does most of the work for you. Then, we'll tackle a more difficult concept—sorting by rows. Finally, we'll review a few situations that can bring unexpected results. Afterward, you'll have the knowledge you need to start sorting like a pro!  

I'll be using Excel 2013 on a Windows 7 system. I'll offer instructions for other versions when they're significantly different, but for the most part, you should be able to work through this article regardless of your version.   

In Excel: Click anywhere in the range, go to Data | Sort, and Excel lets you sort on up to three columns.  

“Sorting in Access is easier in many ways,” I said. If you want to sort your records on a single column, you have three choices:  

• Click anywhere in that column and then click the Sort Ascending button, located on the Table Datasheet toolbar.   
• Click in the column on which you want to sort, go to Records | Sort, and choose either the Ascending or Descending option.   
• Right-click a column and choose either Sort Ascending or Sort Descending from the context menu.  

#### Before you sort  

What you do before you sort is important; Excel relies on three things:   

• The sort range   
• The sort key   
• The sort order  

First, Excel needs to know what data to sort. You'll seldom sort a single column of data, unless of course your data is confined to a single column. Usually, a data set comprises multiple columns and rows. Fortunately, Excel is smart enough to do this for you; when you click inside the data set, Excel uses contiguous data to evaluate the current sort range. In other words, Excel expands the range from the current cell to include rows and columns until it encounters a blank row or column. Excel can handle blank cells, so don't worry about those. However, a blank column or row is the boundary that Excel uses to set a data range.   

Second, a sort key identifies the data that's being sorted. Most sort keys are confined to a single column of data. For example, you might want to sort students by grade average or personnel by hire date. Both are simple sorts based on a single-column sort key, but Excel sorts the entire sort range. The other columns of data are along for the ride to keep your records intact, but they're not part of the sort key.   

Finally, once Excel knows the extent of the sort range and by what values to sort, Excel needs to know the sort order. Usually, sort order means ascending or descending. For example, you might want to see those grade averages by highest to lowest or lowest to highest. Or you want to see employees most recently hired or those who have been with the company the longest. Excel sorts text values from a to z or z to a.   

#### To sort  

There are more complex sorts and even custom sorts, but those are beyond the scope of this article. However, you should know there's more to look forward to. For now, let's start with some basic sorts. To perform most sorts in Excel, you'll do the following:   

1. Click inside the column containing the sort key (within the data range).   
2. Click the Home tab.   
3. Click the Sort & Filter option in the Editing group.   
4. Choose a sort order.   
  
If you're using Excel 2003, there are two sort buttons on the Standard toolbar. For more complex options, choose Sort from the Data menu.  

#### Single key sort  

Most sort keys are a single column and these tasks can be handled quickly. Remember, clicking a cell in the sort key column before the sort identifies the data range and the sort key. To illustrate a simple sort, let's sort our example data by the region values as follows:   

1. Click any cell inside the Region column. Excel will sort A1:E33 by the region values. In Excel 2003, click a cell and then skip to step 3.  
2. Click Sort & Filter in the Editing group (Home tab).  
3. Specify a sort order by choosing Sort A To Z, an ascending sort. In Excel 2003, click the Sort Ascending icon on the Standard toolbar.  
  
You can also use the keyboard if you prefer:   

• Ascending: [Alt]+H+S+S  
• Descending: [Alt]+H+S+O  
  
#### Multiple key sort  

Most sorts have a single-column sort key, but that won't always be the case. Fortunately, you can sort by the values in more than one column. When doing so, you'll identify the sort keys (columns) using the Sort dialog box instead of clicking before the sort.   

Let's suppose that not only do you want to sort the example data by region, but you want to see the highest sale for each region first. To accomplish this, do the following:  

1. Click any cell inside the data set. In Excel 2003, click a cell, choose Sort from the Data menu, and skip to step 4.   
2. Click Sort & Filter in the Editing group (Home tab).   
3. Choose Custom Sort.   
4. In the resulting dialog, choose Region from the Sort By dropdown. The other two options should default to Values and A To Z. (These settings are based on your prior sort, so you probably won't need to change anything.)   
5. Click Add Level. (This step isn't necessary in Excel 2003.)  
6. Set the second level by choosing Value from the Then By dropdown and Largest To Smallest from the Order dropdown.   
7. Before clicking OK, check the My Data Has Headers option (Header row in Excel 2003). By default, it's checked, which is what we want because our data range has a header row. (I'll expound on this option later.) 
8. Click OK to see the sorted results.   
This time, Excel sorts the amounts in the Value column within each region group. In other words, there's a sort within a sort. When the region changes, Excel restarts the second sort level.   

#### Row sort  

Our first two examples are columnar sorts, the most common way to sort. Most sorting tasks will be accomplished in this way. Excel also lets you sort by rows, although you will seldom have need for this option. (You can't sort a Table object by rows.) However, it can be useful when you need to rearrange your data by columns. You could manually move them, of course. But if you know this simple trick, Excel can rearrange the data much quicker than you can.   

Now, let's use this option to rearrange the order of columns in our example data in two different ways. First, we'll arrange the columns alphabetically by the header text. Then, we'll mix them up a bit. First, let's do the alphabetic sort as follows:  

1. Click any cell inside the data set. In Excel 2003, click a cell, choose Sort from the Data menu, and skip to step 4.   
2. Click Sort & Filter in the Editing group (Home tab).   
3. Choose Custom Sort.   
4. Click Options.   
5. Choose Sort Left To Right and click OK.   
6. From the Sort By dropdown, choose row 1. You don't need to change the other settings, but you could.   
7. Delete the Then By row from the last sort task.    
  
The results might not be what you expected. The sort didn't transpose the columns; it arranged them in alphabetical order from left to right. If that's what you want, you're done, except for fixing the formula in the Commission column.   

The above example doesn't make a lot of sense unless an a-to-z or z-to-a arrangement is what you want. What might make a bit more sense is to rearrange the columns in a specific order. For example, we can use this option to rearrange the data range in the following order:  

• Personnel  
• Region   
• Date  
• Value  
• Commission  
  
You use the row sorting option as follows to accomplish this:

1. Select the first row (the header row) and insert a new row above by clicking Insert in the Cells group (Home tab). Or right-click the selected row and choose Insert. 
2. In each column in row 1, enter a value that represents that column's new position in the data set. For instance, Personnel will be the first column, so in C1 enter the value 1. 
3. Reformat the values as numbers if necessary.   
4. Repeat the previous example for sorting by rows, choosing Row 1 as before in step 6 and Smallest To Largest for the order. Row 1 contains the numbers you're using to rearrange the columns.   
  
When you're done rearranging the columns, be sure to delete the row of values.  

#### What if...  

Earlier, I advised you to check the My Data Has Headers option. If it's unchecked Excel will interpret the first row of your data set as an ordinary row of data and sort those values with the rest of your data. Fortunately, most of the time Excel interprets the first row's status as data or a header row correctly, but checking this option will help you avoid the task of undoing a bad sort.  

You might be wondering how Excel knows (or not) whether the top row in the data range is a header row. Excel depends on different formatting, such as font, fill color, and so on, between the first row and the rest of the data. In addition, if you separate the header row from the first row of data with a thick border, Excel assumes the first row is a header. Excel is good at getting this option right, but if it makes a mistake, you can quickly unsort the mess by pressing [Ctrl]+Z.   

If you get unexpected results—the sort seems incorrect—check the values carefully. Most likely, a value you think is stored as one data type is stored as another. For instance, sometimes values, dates, and times are stored as text instead of numbers. When this happens, Excel sorts the numbers and text differently, placing the text data at the bottom.  

When using the Sort dialog, Excel will often warn you if it encounters text and numbers in the same column (sort key). You can choose to sort anything that looks like a number as a number or to sort them separately.   

#### Custom Lists  

Select Custom Lists under Order in the Sort dialog box!  

[Data Sorting 01]

