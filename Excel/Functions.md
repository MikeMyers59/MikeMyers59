# Excel Functions

| Function | Description | VBA |  
| -- | -- | -- |  
| AND()| | XL |  
| AVERAGE()| | XL |  
| CHAR() |Returns the character with the ASCII number provided in the argument   XL ||  
| CONCATENATE() |Combines the characters in selected cells into a string | XL |  
| COUNT()| | XL |  
| COUNTNUMS()| | XL |  
| DATEDIF() | to calculate elapsed calendar time <BR> `=DATEDIF(<StartDate,<EndDate>,<CalendarUnitOption)` <BR> **Years**. In the expression `DATEDIF(A2,B2,"Y")`, the "Y" parameter tells the function to return the number of whole years between the two dates. <br> **Months**. The expression `DATEDIF(A2,B2,"YM")` returns the number of months between the two dates, without regard to the years. <BR> **Days**. Finally, the expression `DATEDIF(A2,B2,"MD")` returns the number of days in the interval without regard to month and year. | XL |  
| Environ$()|use to find out information such as the username, system root, number of processors, domains and home drives from a system Environmental Variable. | XL |  
| FIND()| | XL |  
| IF() |Test the generated number to determine the character type  | XL |  
| IF()| | XL |  
| INDEX()|return the corresponding item in column/row/range | XL |  
| LOWER()|Convert to lower case characters | XL |  
| MATCH()|returns the position of the matching item in column/row/range | XL |  
| MAX()()| | XL |  
| MIN| | XL |  
| OR()| | XL |  
| PMT()|Payment calculation <br> PMT(interest_rate,term-in-months,loan_amount) | XL |  
| PRODUCT()| | XL |  
| RAND() |Generate a random number within a given range; to generate a number between one and 15 use: `=RAND()*(15-1)+1` | XL |  
| STDDEV()| | XL |  
| STDDEVP()| | XL |  
| SUM()| | XL |  
| VAR()| | XL |  
| VLOOKUP()|Vertical Lookup | XL |  

#### DateDiff Options
| OPTION |RETURNS  |  
| -- | -- |  
| "Y" |Full years between dates  |  
| "M" |Full months between dates  |  
| "D" |Days between dates  |  
| "YM" |Months between dates, ignoring year  |  
| "MD" |Days between dates, ignoring month and year  |  
| "YD" |Days between dates, ignoring year  |  

