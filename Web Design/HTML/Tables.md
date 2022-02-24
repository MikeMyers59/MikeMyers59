# Table Elements
| Element|Notes|Roadmap |  
| --- | --- | --- |  
| Table|A collection of Table Rows that may also have a Table Header <BR> class="alt-rows"|`<TABLE class="<Class>" id="<IDName>">  </TABLE>` |  
| Table Header|A Special Row|`<TR>` <BR>   `<TH>Header 1</TH>` <BR>   `<TH>Header 2</TH>` <BR> `[  <TH>Header 3</TH >]…` <BR> `</TR>` |  
| Table Row|A collection of Table Cells|`<TR>` <BR>   `<TD>Cell 1</TD>` <BR>   `<TD> Cell </TD>` <BR> `[  <TD>Cell 3 </TD >]…` <BR> `</TR>` |  
| Table Cell|Components of a Table Row|`<TD>  </TD>` |  
| Table Body | to contain the tables body section | <TBODY></TBODY> |  

## Table Template
```html
<TABLE width="100%" cellspacing="1">
  <TBODY>
    <TR>
      <TH></TH>
      <TH></TH>
      <TH></TH>
      <TH></TH>
    </TR>
    <TR>
      <TD></TD>
      <TD></TD>
      <TD></TD>
      <TD></TD>
    </TR>      
    <TR>
      <TD colspan="4">No data to present.</TD>
    </TR>
  </TBODY>
</TABLE>
```

```css
table {
  position: relative;
}
tr {
  position: inherit;
}
td {
  position: inherit;
  word-wrap: break-word;
}
```

