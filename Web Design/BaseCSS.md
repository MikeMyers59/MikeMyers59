# Base.CSS

**content** - provides a centered block for page content	`<DIV class="content">   </DIV>`
**content-style** - provides the styles of the content element but without the fixed width and centering	`<DIV class="content-style">   </DIV>`
**faq-accordian** - turn all divs on a page with the class 'faq-accordion' into jQuery UI accordions (requires FAQ.js& jQuery))	`<DIV class=" faq-accordian ">   </DIV>`
**full-width-accordion-content** – for those nested accordions to be full width 	`<DIV class=" full-width-accordion-content ">   </DIV>`
A Basic Accordion Setup	
```html
<DIV class="faq-accordion centered">`
  <H3 href="#">Accordion One</H3>
  <DIV>
    <P>Content.</P>  
  </DIV>
  <H3 href="#">Accordion Two</H3>
  <DIV>
    <P>Content.</P>  
  </DIV>
</DIV>
```
**jumbotron** – a Header/Sub-Header combination
```html
<DIV class="jumbotron">Alterations
  <H1>Example Content Title</H1>
  <P>example subtitle</P>
</DIV>
```
**monospace** - 	`<SPAN class="monospace">    </SPAN>`
**note-block** - applies the default style for blockquote elements to any element	`<DIV class="note-block">   </DIV>`

## Columns

Class (.) - Columns (Segment Across a Page) – use to segment data area
- **column-container** – use as an outer container	
- **column-of-two** – use to have two columns in the area	
- **column-of-three** – use to have three columns in the area	
- **column-of-four** – use to have four columns in the area
```html
<div class="column-container">
<!- Header – above the two columns
  <div class="centered section-header">
    Header
  </div>
  <div class="column-of-two centered" style="padding-right: 50px; padding-left: 50px; border:solid 5px blue” >
    This is the left column 
  </div>
  <div class="column-of-two centered" style="padding-right: 50px; padding-left: 50px; border:solid 5px blue">
    This is the right Column
  </div>
</div> <!—End Column Container -->
```

