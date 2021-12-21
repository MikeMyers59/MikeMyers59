# Forms in HTML

## Form Tags
| Tag | Description | Attributes | Examples |  
| --- | --- | --- | --- |  
| `<FORM> … </FORM>` | Specifies font attributes to selected text; SIZE defaults to 3, and has a valid range of 1‑7 Use DIV or SPAN with attribute font instead. | action, enctype, method, target | `<FORM action="http://www.cc.ukans.edu/cgi‑bin/register" method=post> ... </FORM>` |  
| `<INPUT>` | Define an input field where the user may enter information (used in a form) | size, maxlength, type, name, value, checked, align, border, src, style, vspace | `<INPUT type="radio" value="1" id="opt1">` <BR> `<LABEL for="opt1">This is the first option.</LABEL> <INPUT type="button" name="btnOK" id="btnOK" value="OK" onclick="btnOK_onclick()">` |  
| `<LABEL>…</LABEL>` |  |  | `<LABEL for="opt1">This is the first option.</LABEL>` |  
| `<OPTION>` | Define a select field option (used within a selection area in a form) | selected | `<option>Apples` <BR> `<option selected>Bananas` |  
| `<SELECT> . . . </SELECT>` | Define a select field,  a set of optional list items from which the user can select one or more items | name,  size, multiple |  |  
| `<TEXTAREA>...</TEXTAREA>` | Defines a rectangular field where the user may enter text data (used  in a form) | cols, name, rows,  wrap |  |  

