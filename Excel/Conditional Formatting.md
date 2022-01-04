# Excel Conditional Formatting  

Sometimes it’s hard to read and interpret data by scanning rows and rows of information. But you can use conditional formatting to make certain data stand out, helping you to analyze data, and to identify patterns and trends.  

## Quick Formatting: Data Bars, Color Scale, and Icon Sets

1. Select the cells you want to format.
2. On the Home tab, in the Styles group, click Conditional Formatting.
3. Point to the conditional formatting style you want to use:  

    - Data Bars  
    - Color Scales  
    - Icon Sets  
  
4. Move the cursor over the samples to see how the spreadsheet formatting changes. Click on the style that you want. If you don’t see the style you want, click More Rules at the bottom of the menu and make your choices.   
  
## Work with Highlight Cells Rules or Top/Bottom Rules  

1. Select the cells you want to format. 
2. On the Home tab, in the Styles group, click Conditional Formatting. 
3. Point to the conditional formatting style you want to use:

    - Highlight Cells Rules
    - Top/Bottom Rules

4. Select the style you want. 

## Clear conditional formatting from cells  
You can clear rules from selected cells, or you can clear rules from the entire sheet without selecting cells first. 

1. On the Home tab, in the Styles group, click Conditional Formatting. 
2. Point to Clear Rules, and select the option you want:
		- Clear Rules from Selected Cells
		- Clear Rules from Entire Sheet
		- Clear Rules from This Table
    
## Make your own conditional formatting rules   

1. Select the cells you want to format.  
2. On the Home tab, in the Styles group, click Conditional Formatting, and then click New Rule.  
3. In the New Formatting Rule dialog box, in the Select a Rule Type list, select a rule.  
4. Make your choices in the Edit the Rule Description boxes. Click OK.  
  
## Manage Conditional Formatting Rules  
You can always adjust conditional formatting after you have applied it.   

1. On the Home tab, in the Styles group, click Conditional Formatting, and then click Manage Rules at the bottom of the menu. The Conditional Formatting Rules Manager dialog box opens.  
2. Under Rules (applied in order shown), click on your rule. Then click Edit Rule. The Edit Formatting Rule dialog box appears.  
3. Make changes as necessary.  

## Show Duplicate Records  
Nothing we've yet seen has highlighted only the duplicate records. To the best of my knowledge, there's no quick built-in rule for doing so. You could work harder than necessary to come up with a formula that handles this, but if you're familiar with my work, you know what I'm going to say next—let's use a helper column instead!   
We can concatenate all the values to create a string for each record and then use a simple counting function to count them. Trust me, it'll be much easier than trying to do it all with a conditional rule.   
The first step is to concatenate the columnar values by entering the following expression into G4 and copying it to the remaining rows:  
`=CONCAT(B4:F4)`  
For the sake of convenience, I put the concatenated results next to the data set, but you can put them in an out-of-the-way spot where no one sees them. (Don't worry that the results display each date's serial value instead of its formatted value—it doesn't matter.) The next step is to add the conditional formatting rule as follows:   

1. Select the data set, `B4:F14`; don't include the concatenated strings in column G.  
2. Click Conditional Formatting in the Styles group on the Home tab.  
3. In the resulting dropdown, choose New Rule.  
4. In the top pane, select Use A Formula To Determine Which Cells To Format option.  
5. In the lower pane, enter the formula: `=COUNTIF($G$4:$G$14,$G4)>1` 
6. Click Format, click the Fill tab, choose a color, and click OK. Figure A shows the rule and the format in place.  
7. Click OK to see the results shown in Figure B.  
  
**Figure A** Count the concatenated strings.  
![Conditional 01](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Conditonal%2001.jpg)  
**Figure B** This simple conditional formatting rule highlights duplicate records.  
![Conditional 02](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Conditonal%2002.jpg)

The `COUNTIF()` function returns true if the concatenated string in the corresponding cell occurs more than once. When the result is true, the conditional formatting feature applies the specified format. If the counting function returns false, Excel doesn't apply any formatting. We could do this without the concatenated strings in column G. But we'd have to account for all the columns, and the resulting formulaic rule would be horribly complex to enter and maintain. When using this technique for your own work, be sure to apply the absolute and relative references as shown.  
Now there's one more possibility we should consider. You might not want to highlight the first occurrence of the duplicate record as the technique above does. You might want to highlight the second and any subsequent duplicates. Using the helper column technique, this requirement is easily accommodated.  
First, add a counting function to the data set by entering the following expression in I4 and copying it to the remaining records:  
`=IF(COUNTIF($G$4:G4,$G4)>1,"Duplicate")`  
The expression returns the string "Duplicate" for only one—record 11. Now, we can apply a conditional formatting rule that highlights only this record. If you like, you can delete the first conditional rule before adding the second. Either way, you can add the second rule as follows:   

1. Repeat steps 1 through 4 above.   
2. In the lower pane, enter the formula: `=$H4="Duplicate"`  
3. Click Format, click the Fill tab, choose a color, and click OK. Figure C shows the rule and the format.  
4. Click OK to see the results shown in Figure D.  
  
**Figure C** Enter a rule that ignores the first occurrence of the duplicate record.  
![Conditional 03](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Conditonal%2003.jpg)  
**Figure D** 	The new rule highlights only the record in row 11.  
![Conditional 04](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Conditonal%2004.jpg)  
If you need to filter the record, use the formulas and then filter out the duplicates by filtering for "Duplicate" in column H. 

## Show the Minimum and Maximum Values  
Obie has a large set of values and he wants to highlight the minimum and maximum value in each row. Fortunately, this is easily handled by Excel's conditional formatting feature. Figure A shows a simple data set with a grand total to the right for each row.   
**Figure A**![Conditional 05](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Conditional%2005.jpg)   
**Figure B**![Conditional 06](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Conditional%2006.jpg)   
	
We'll add two helper columns. In the first, we'll use the MIN() function to find the minimum value in each row. In the second, we'll use the MAX() function. Then, we'll apply a simple conditional formatting rule that highlights matching values in the Jan through Dec values for the corresponding minimum and maximum values in the helper columns.   
Start by adding the helper columns, as shown in Figure B:  

1. In O4, enter the following function and copy it to O5:O10: `=MIN(B4:M4)`
2. In P4, enter the following function and copy it to P5:P10: `=MAX(B4:M4)`
  
When entering the two functions, be careful not to include column N, the totaling column. In addition, don't worry about the error tags Excel displays. In this case, they're warning you that the expression doesn't include the adjacent column, which is what you want; you don't want to include the totaling column (column N). If you want to omit these tags, insert the two helper columns between the data set and the totaling column. The tags are harmless though (and don't apply to Excel 2003).
With the helper columns in place, you're ready to add the conditional formatting for the minimum value as follows:  

1. Select the data set, `B4:M10`.  
2. Click Conditional Formatting in the Styles group and choose New Rule. In Excel 2003, choose Conditional Formatting from the Format menu and skip to step 4. 
3. Click Use A Formula to determine which cells to format in the top pane.  
4. Enter the following expression in the control below: `=B4:M10=$O4` In Excel 2003, choose Formula Is from the Condition dropdown and enter the expression. 
5. Click Format and in the resulting dialog, click Fill (Patterns in Excel 2003), choose a color (red), and click OK (Figure C).  
6. Click OK a second time to return to the sheet, which now highlights the value in each row that matches the corresponding value in column O (the minimum value in that row).  
7. Repeat steps 1 through 6, using the formula =B4:M10=$P4 in step 4 and choosing the color green in step 5. Figure D shows the resulting sheet.  
  
**Figure C**![Conditional 07](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Conditional%2007.jpg)  
**Figure D**![Conditional 08](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Pics/Conditional%2008.jpg)  
	
Helper columns lend a great visual tool when working through a solution. But in this case, the rules are simple enough that you might not need them. You could skip the helper columns and add the MIN() and MAX() functions to the expressions (step 4). However, once others see the helper columns, they usually decide they can use them in other ways. In Obie's case, he already had the helper columns in his data set. All he had to do was add the conditional formatting rules. 

