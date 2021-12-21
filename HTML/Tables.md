# Tables in HTML

## Table Tags
| Tag | Description | Attributes | Examples |  
| --- | --- | --- | --- |  
| `<TABLE>…</TABLE>` | Table Container | border, cellspacing, cellpadding,  cols, colspec, align, valign, nowrap, height, width, bgcolor | `` |  
| `<TH> … </TH>` | Table Header (used inside row tags); used in place of the \<TD> tag for column labeling. | align, colspan, nowrap, rowspan, valign | `<TH colspan=3>Mikey's Sites to Visit</TH>` |  
| `<TR> …</TR>` | Table Row |  | `` |  
| `<TD> … </TD>` | Table Data Cell (Column) (used inside row tags) | align, colspan, nowrap, rowspan, valign | `` |  
| `` |  |  | `` |  
| `` |  |  | `` |  
| `` |  |  | `` |  
| `` |  |  | `` |  
| `` |  |  | `` |  


## Table Example
```html
<TABLE cellpadding=0 cellspacing=5 border=0 BGCOLOR="#9900FF">
  <TR>
    <TD valign="middle" nowrap>
    <TD>
      &nbsp;&nbsp;Home&nbsp;&nbsp;
    </TD>
    <TD>
       &nbsp;&nbsp;Menu&nbsp;&nbsp;
    <TD>
      &nbsp;&nbsp;Specials&nbsp;&nbsp;
    </TD>
    <TD>
      &nbsp;&nbsp;Business Hour&nbsp;&nbsp;
    </TD>
  </TR>
</TABLE>
```

