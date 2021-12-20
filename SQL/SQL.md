# Structured Query Language (SQL)

SQL action statements are semicolon (;) delimited.

| Command | Description |  
| --- | --- |  
| alter | `alter { table \| } <Name> { add \| } <FieldNameClause>` |  
| create | `create [ Public ] { table \| synonym \| view } <TableName> as <SelectStmnt>` |  
| drop | `drop { sequence \| synonym \| table \| view }` |  
| exit | Used in script files to quit the processing. |  
| grant | `grant <selectClause> to public` |
| insert | `insert into <Table> values <ValueSet>` <BR> `INSERT INTO DEPT VALUES (10,'ACCOUNTING','NEW YORK');` |  
| rem | Comment line, ignored by processor. |
| select | `select <FieldList> from <TableName> [where <WhereClause>] [with <WithClause>]` |  
| set | Set's variables related to SQL scripting. <BR> `set termout off` |
| update | `update <TableName> set <FieldItemChangeClause> [where <WhereClause>]

## Examples

[ProductProfile.sql](https://github.com/MikeMyers59/MikeMyers59/blob/main/SQL/Examples/ProductProfile.sql) - Creates a table.

