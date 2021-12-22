# Excel Arrays

If you've done even a little programming, you've probably run across the term array. For Excel, an array is a collection of items. Those items can reside in a single row (called a one-dimensional horizontal array), a column (a one-dimensional vertical array), or multiple rows and columns (a two-dimensional array). You cannot create three or more dimensional arrays or array formulas in Excel.  

[Arrays 01]  

An array formula is a special formula that operates on a range of values that can perform multiple calculations on one or more of the items in an array. Array formulas can return either multiple results or a single result. For example, you can place an array formula in a range of cells and use the array formula to calculate a column or row of subtotals. You can also place an array formula in a single cell and then calculate a single amount. An array formula that resides in multiple cells is called a multi-cell formula, and an array formula that resides in a single cell is called a single-cell formula.  

#### To create an array computation  

1. Enter the required formula in the formula bar, for example:
`=SUM(C2:C11*D2:D11)`
2. Press CTRL+SHIFT+ENTER, and the shown formula becomes:
	`{=SUM(C2:C11*D2:D11)}`

**Note**: The formula bar indicates that this is an array formula by enclosing it in curly braces {}. You cannot add the braces by typing them in! Typing the opening brace makes the cell a string value. As an added safety measure, you must press CTRL+SHIFT+ENTER to confirm any change to the array formula. Not performing the CTRL+SHIFT+ENTER to make it an array calculations causes the results to show the first calculation only!  

#### Finding out a unique match from the given data set for a specific condition  

Let’s say we wanted to find the name of the manager with the highest sales figures. Now this is where the power of array formulas truly comes to light. IF we were to use normal formulas, this would have required at least as many formulas as there are managers, if not more. However we can accomplish the same in a single array formula using:  
`=OFFSET(A1,MAX(IF(SUMIF((A2:A10),(A2:A10),(D2:D10))=MAX(SUMIF((A2:A10),(A2:A10),(D2:D10))),ROW(A2:A10),””))-1,0)`  
What we are doing here is to check if the sum of sales for a particular manager is equal to the sum of sales for the person with the highest sales. If true, then return the row number. The IF function returns an array of row numbers pertaining to the sales manager with the highest sales figures otherwise it returns a blank. Using the MAX function, we find the row where the last occurrence of the Name takes place and then using the OFFSET function, return the name from that row.  

#### F9 Key  
When working with array formulas, you can have a look at these array constants yourself.  

1. Select C2:C6-B2:B6 in the formula.  

[Arrays 02]  

2. Press F9.  

[Arrays 03]  

That looks good. Elements in a vertical array constant are separated by semicolons. Elements in a horizontal array constant are separated by commas.

#### Disadvantages of using array formulas  

Array formulas can seem magical, but they also have some disadvantages:  

· You may occasionally forget to press CTRL+SHIFT+ENTER. Remember to press this key combination whenever you enter or edit an array formula.  
· Other users may not understand your formulas. In practice, array formulas are typically undocumented in a worksheet, so if other people need to modify your workbooks, you should either avoid array formulas or make sure those users understand how to change them.  
  
Depending on the processing speed and memory of your computer, large array formulas can slow down calculations.

