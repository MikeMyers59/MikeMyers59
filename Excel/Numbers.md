# Excel Numbers

## Formatting Numbers

Number Format	Displays as:
| Format String | Description |  
| --- | --- |  
| `#,##0` | the comma in the format tells Excel to use commas, the octothorpe (pound sign) is merely a placeholder for the comma, and tells Excel not to put digits there if none are needed, and there are no decimal digits. |  
| `$#,##0;[Red]$#,##0` | first part of this two part format tells Excel to use a dollar sign and a comma thousands separator for positive numbers. The second part tells Excel to make negative numbers red, then use the dollar sign and thousands separator (but no minus sign, since it isn't explicitly stated). Since there is no third number format, Excel uses the first for zero values. |  
| `[Blue]$#,##0;[Red]$#,##0;$#,##0` | color positive numbers blue, negatives red, and keep zeros in their default black. |  
| `[Blue][>=3000]$#,##0;[Red][<0]$#,##0;$#,##0` | numbers equal to or greater than 3000 are colored blue; negative numbers are colored red; everything else is black.  |  
| `[<0.1]0.000;[<1]0.00;0.0` | Sets decimal places to three digits if less than 0.1, and two decimal places if less than 1 and greater than 0.1, otherwise use only 1 decimal place. |  
| `#,##0` | 1,234,500 |  
| `0.000E+00` | 1.235E+06 |  
| `0.00E+00` | 1.23E+06 |  
| `0.0E+00` | 1.2E+06 |  
| `0.000E+0` | 1.235E+6 |  
| `0.00E+0` | 1.23E+6 |  
| `0.0E+0` | 1.2E+6 |  

The colors that are available in number formats are [Black], [Blue], [Cyan], [Green], [Magenta], [Red], [White], and [Yellow].

### Formating Examples

### Dates and Times  
Internally, Excel stores dates as a number representing the elapsed days since January 1, 1900 (actually, since December 31, 1899, because the Lotus programmers thought 1900 was a leap year, and Microsoft kept the error either because they also thought it was a leap year, or for compatibility with Lotus 1-2-3, then the spreadsheet market leader). Excel stores times as the fraction of a day since midnight. Any given date-time is a number whose integer part represents the date and whose fractional part represents the time. I am using 1:30 in the afternoon of July 4, 2004 for this illustration.  
Just as there are several ways to represent numbers, there are many ways to format dates and times. You construct a date-time format by stringing together smaller building blocks. Fortunately these are pretty easy to remember, and they are not case sensitive. Any punctuation you want in the value is included in the number format.  
YYYY is the four-digit year (2004) and YY is the two-digit year (04). MMMM is the month spelled out (July), MMM is the abbreviated month (Jul), MM is the two-digit month, with a leading zero if required (07), and M is the one or two digit month (7). Since M is already reserved for a single numerical digit, so Excel uses MMMMM for a one-letter abbreviation (in the sequence J-F-M-A-M-J-J-A-S-O-N-D).  
DDDD is the day spelled out (Sunday), DDD is the abbreviated day (Sun), DD is the two-digit day, with a leading zero if required (04), and D is the one or two digit day (4). Unlike MMMMM above for one character month abbreviations, there is no DDDDD format that gives just the first character of the day's name. HH is the two-digit hour (01 or 13, depending on whether AM/FM is specified), H is the one-digit hour (1 or 13), MM is the two-digit minute (30), M is the one-digit minute, SS is the two-digit second, and S is the one-digit second. AM/PM is specified for a 12-hour clock, or omitted for a 24-hour clock.  
If you are dealing with times only, you can use [H] to increment hours beyond 24, [M] to increment minutes beyond 60, or [S] to increment seconds beyond 60. You wouldn't use all three in a format, you would use a format like [H]:MM:SS.  
The table below illustrates how Sunday July 4, 2004 01:30 PM is displayed using various number formats:  

![Number 01](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2001.jpg)

![Number 02](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2002.jpg)

![Number 03](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2003.jpg)

![Number 04](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2004.jpg)

![Number 05](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2005.jpg)

![Number 06](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2006.jpg)

## Suppress Zero Display  

### Supress Zeros in a Cell  
When using an expression that might return a zero, you can wrap that expression in an IF() function to suppress a 0 result. Generally, you won't want to do this, but to be comprehensive, you'll want to know how to do this.   
Our simple expression in column D is `=B3+C3`, and two of them (D5 and D7) both return 0. Select cell D3 and enter the expression
	`=IF(B3+C3=0,"",B3+C3)`
and copy to D4:D7. Figure A shows the results; D5 and D7 are blank. The IF() function evaluates the real expression that sums the two values and returns an empty string ("") when the result is 0. If it isn't 0, the IF() returns the non-zero result. The big difference between this solution and the first two is that you'll use this only with expressions, not values.  
Figure A:![Numbers 07](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2007.jpg)

Wrap your expression in an IF() to suppress displaying a 0.

### Supressg Zeros in a Range  
You can limit the cells that suppress zero by applying a custom format. As a result, you control which cells to suppress. You get more control, but it does usurp your formatting capabilities and might require a bit of thought.  
Before we continue, we need to review a custom format's structure, or syntax:  
	`positive; negative; zero; text`
The simplest custom format that will suppress zero is:  
	`0;0;;@`
The zeros are placeholders and will display any positive or negative value. Leaving the third component, the zero component, empty is what suppresses zeros. The @ is a text placeholder, similar to the 0 placeholder. Now, let's apply this custom format and see what happens:  

1. Select the range you want to format. In this case that's B3:D7.
2. Click the Number group's More button (on the Home tab).
3. In the Category list, click Custom (at the bottom). 
4. Enter 0;0;;@ in the Type control, as shown in Figure B.
5. Click OK to close the dialog.
  
Figure B: ![Number 08](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2009.jpg)
 
Apply this simple custom number format to suppress zeros.  
At first, it looks like it worked fine, but compare the formatted results in Figure C to the original data to in Figure B. We've lost the currency symbol and the decimal places. (If you remove the @ symbol, the format will also suppress all text.)  
Figure C:![Number 09](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2006.jpg)

The custom format didn't work as expected.  
The good news is we can easily modify the custom format so it accommodates our needs. Specifically, retry using the $0.00;$0.00;;@ format. In Figure D, you can see that the second format maintains the currency symbol and the decimal places. If a custom format won't work for you, you might want to use a formula.     
Figure D:![Number 10](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2010.jpg)

This format handles the requirements.

### Supress Zeros in a Worksheet  
The easiest method to suppress zeros is a simple setting with an all-or-nothing result, which is both a pro and a con, depending on your needs. Remember, this setting works on the entire sheet:  

1. Click the File tab, choose Options in the left pane, and then click Advanced in the left pane. 
2. In the Display options for this worksheet section, uncheck Show a Zero in Cells that Have Zero Value (Figure E). 
3. Click OK to close the dialog.  
 
Figure F shows the results of unchecking this option to the left; you can see where zeros, expressions that evaluate to zero, and blanks were for comparison. (Column D contains the simple expression, =B3+C3, and three cells are blank.) Just remember that the entire sheet is suppressing zero. Try to enter 0 or an expression that returns zero in an empty cell. You can enter it, and you can see it in the Formula bar, but you can't see it in the cell. If this setting is overkill, you can use a custom format.  
Figure E:![Number 11](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2011.jpg)  

Uncheck this option to hide all zeros.  
Figure F:![Number 12](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Numbers%2012.jpg)  

This option suppresses literal zero values and expressions resulting in zero.  

