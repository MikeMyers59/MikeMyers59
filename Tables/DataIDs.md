# Constants and Variable Identification (DataIDs)

These are conventional lead ins to constant and variable names that signify their usage and/or source.

| Lead In | Type | Notes |
| ---- | ---- | ---- |
| ac | Access Database Constant |  |  
| api | API Declarations of External Functions |  
| arr | Array | { }; comma separated values; starts with 0 |  
| bol | Boolean  | True, False [System.Boolean] |  
| byt | Byte | 8 bits numeric value 0 to 255 [System.Byte] |  
| cbo | Combo Box |   |  
| ch | Char | C; can hold any Unicode[1] character [System.Char] |  
| col | Collection of Objects | any type that exposes the ICollection interface; collections store multiple values and provide a way for iterating through those values (may be called a List in other programming languages)   [System.Collections] |  
| dat | Date | # #;  {January 1, 0001 (0001-01-01T00:00:00) through 1 second before midnight on December 31, 9999 (9999-12-31T23:59:59)} [System.DateTime] |  
| dec | Decimal | D; decimal numbers with a precision of 28 significant digits [System.Decimal] |  
| dbl | Double | Any floating point number, or R; 8 byte floating point value <BR>(-1.7976931348623157E308 through 1.7976931348623157E308) [System.Double] |  
| int | Integer | An integral value in the range of type Integer (-2,147,483,648 to 2,147,483,647), or I; 2 byte integer [System.Int32] |  
| lng | Long | An integral value outside the range of type Integer; 4 byte  (-9,223,372,036,854,775,808 to -2,147,483,649, or 2,147,483,648 to 9,223,372,036,854,775,807), or L [System.Int64] |  
| lkp | Lookup | Not typically updated; used for referencing and selection lists |  
| obj | Object | base type from which all other types are derived; replaces Variant type as default [System.Object] |  
| sh | Short | S (-32768 to 32767) [System.Int16] |  
| sng | Single | F; 4 byte floating point value (-3.40282347E38 through 3.40282347E38) [System.Single] |  
| str | String (Array of Characters) | " " <BR>A list of characters [System.String] |  
| tbl | Table | Typically hold the business data |  
| vb | Visual Basic Constant |   |  
| xl | Excel Spreadsheet Constant |   |  
