# HTML

```html
<!DOCTYPE html>
<HTML style="--hue: 194.8993288590604; --sat: 97.38562091503269%; --lum: 30%;" lang="en">

</HTML>
```

## Conditional HTML
| Operators | Description |  
| -- | -- |  
| gt | Greater Than  |  
| gte | Greater Than or Equal |  
| lt | Less Than |  
| lte | Less Than or Equal |  

```html
<!--[if gte IE 9]>
<![endif]-->

<!--[if lt IE 9]>  
<![endif]-->
```

## Elements

### Common Elements
| Element|Notes|Roadmap |  
| Anchor||`<A href=URL>  </A>` |  
| Blockquote||`<BLOCKQUOTE>  </BLOCKQUOTE>` |  
| Button||`<BUTTON>  </BUTTON>` |  
| Headers||`<H1>  </H1>` <BR> `<H2>  </H2>` <BR> `<H3>  </H3>` <BR> `<H4>  </H4>` <BR> `<H5>  </H5>` <BR> `<H6>  </H6>` |  
| Image||`<IMG src=URL />` |  
| Script|In Head or Body areas.|`<SCRIPT type="text/javascript" >…</SCRIPT>`|  
| Style|In Head area.|`<STYLE type="text/css" >…</STYLE>` |  

### Container & Section Elements
| Element|Notes|Roadmap |  
| --- | --- | --- |  
| Division|class="column-container" <BR> class="column-of-two" <BR> class="column-of-three"|<DIV>  </DIV> |  
| Article||`<ARTICLE>…</ARTICLE>` |  
| Header||`<HEADER>…</HEADER>` |  
| Aside||`<ASIDE>…</ASIDE>` |  
| Section||`<SECTION>…</SECTION>` |  
| Content||`<CONTENT>…</CONTENT>` |  
| Footer||`<FOOTER>…</FOOTER>` |  
| Navigation||`<NAV>  </NAV>` |  
| Paragraph|class="centered"|`<P>  </P>` |  
| Span|Used for small area style changes or identification of an area in the document. |`<SPAN></SPAN>` |  

![Simple Container Interaction Chart](HTMLContainerExample.jpg)

### List Elements
| Element|Notes|Roadmap |  
| --- | --- | --- |  
| Definition List||`<DL>`  <BR> `[  <DT>  </DT>` <BR>   `<DD>  </DD>]…` <BR> `</DL>` |  
| Ordered List|class="lower-alpha-bullets" <BR> class="numbered-bullets" <BR> class="upper-roman-bullets"|`<OL>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR> `</OL>` |  
| Unordered List|class="no-bullets" <BR> class="circle-bullets" <BR> class="square-bullets"|`<UL>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR> `</UL>` |  

### Table Elements
| Element|Notes|Roadmap |  
| --- | --- | --- |  
| Table|A collection of Table Rows that may also have a Table Header <BR> class="alt-rows"|`<TABLE >  </TABLE>` |  
| Table Header|A Special Row|`<TR>` <BR>   `<TH>Header 1</TH>` <BR>   `<TH>Header 2</TH>` <BR> `[  <TH>Header 3</TH >]…` <BR> `</TR>` |  
| Table Row|A collection of Table Cells|`<TR>` <BR>   `<TD>Cell 1</TD>` <BR>   `<TD> Cell </TD>` <BR> `[  <TD>Cell 3 </TD >]…` <BR> `</TR>` |  
| Table Cell|Components of a Table Row|`<TD>  </TD>` |  

