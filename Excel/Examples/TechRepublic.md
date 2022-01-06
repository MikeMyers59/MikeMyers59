# Excel Examples from TEchRepublic

## Password Generator  ([TechRepublic.xls]())
The heart of the random password generator is the RAND() function. By itself, the function returns a decimal value between 0 and 1. However, if you multiply this number by a particular value, you can generate a number within a specified range. For this spreadsheet, I wanted an equal chance of generating an uppercase letter, a lowercase letter, and a number.   
To begin, I want to generate a number between one and 15 using this code:   
`=RAND()*(15-1)+1`  
Next, I used nested IF functions to provide three possibilities: If the number is between one and five, we’ll refer to cell I100, where we’ll generate the value for a numeric character. If it’s greater than five, we’ll use another IF function to see if we’ll use an uppercase (6-10) letter by referring to the value in cell G100 or a lowercase (11-15) letter by using the value in cell H100. With the RAND statement in cell F100, the function in cell E100 looks like this:  
'=IF(F100>5,IF(F100>10,G100,H100),I100)'  
Next up are a trio of RAND() functions to generate the ASCII values of numbers and letters. By consulting an ASCII table, we know that the codes for numbers are between 48 and 57, lowercase letters are between 97 and 122, and uppercase letters are between 65 and 90. The functions to generate these number ranges are, respectively:  
```vba
=RAND()*(57-48)+48
=RAND()*(122-97)+97
=RAND()*(90-65)+65
```
Now that our IF statement in cell E100 returns a number from one of these three ranges, it’s time to use that value to generate an ASCII character. In cell A100, we place a CHAR() function with the cell address of our IF statement in the parentheses:  
`=CHAR(E100)`  
Cell A100 will now contain a number from zero to nine, a lowercase letter, or an uppercase letter. If you simply fill the IF, CHAR*(), and RAND() statements down seven rows, you’ll get a matrix of cells in the range A100:A107 that will form your password.  
Now all we need is a CONCATENATE() function in cell A110 to assemble the password from those eight cells. It looks like this:  
`=CONCATENATE(A100,A101,A102,A103,A104,A105,A106,A107,A108,A109)`   
#### Putting it all together  
Here’s how to combine the functions into a spreadsheet. Place the RAND() functions into cells F100:F107 to obscure the spreadsheet’s workings. A message to the user at the top of the screen and a simple cell reference (=A110) provides the eight-character password. Figure B shows the final spreadsheet. (We’ve hidden the intervening blank rows so you can see all the active cells.)  
To use the spreadsheet to generate random passwords, all you have to do is press F9, which causes Excel to recalculate the random numbers. If you wanted to weigh the possibility of uppercase or lowercase letters or numbers more heavily, you can adjust the values in the nested IF functions or alter the values to eliminate one type of character altogether.  

