# Frames in HTML

## Frames Tags
| Tag | Description | Attributes | Examples |  
| --- | --- | --- | --- |  
| `<FRAMESET>...</FRAMESET>` | Defines the frame set and spacing for columns within. The number of columns defines the number of list items needed to define each column and its contents. Replaces the <body> tag with frames. Framesets can be used within one another. | cols, marginwidth,, marginheight, noresize, rows, scrolling | `<FRAMESET cols="%, %, %, …" framespacing="integer"> </FRAMESET>` |  
| `<FRAME>` | FRAMESET list item, defines the column within the frames set; replaces the entire HTML Body section when supported by browsers. | marginwidth, marginheight, name, noresize, scrolling, src | `<FRAME src="url" marginwidth="integer" marginheight="integert" scrolling="auto">` |  
| `<IFRAME >…</IFRAME>` | Displays as an inline frame within the body of an otherwise frameless document | align, border, frameborder, framespacing, height, hspace, id, marginheight, marginwidth, name, scrolling, src, style, vspace, width | `` |  
| `<NOFRAMES>...</NOFRAMES>` | If a browser does not support frames, it refers to the NOFRAMES tag. The <BODY> tag is used within the NOFRAMES tag for alternate content. |  | `` |  
| `` |  |  | `` | 

