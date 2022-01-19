# HTML BODY Section

## Use Comments to Block Page & show end of DIVs with IDs
Use you comments to make block sections within the body. This will make readbility better and locating offending HTML easier. This is an eaxmple of a three column content with Header, Navigation and Footer as single columns.  
```html
<!--    =====================     HEADER SECTION         =====================     -->
<DIV id="header">
  <H1>Your Header</H1>
</DIV>
<!--    =====================     NAVIGATION SECTION     =====================     -->
<NAV>
</NAV>
<!--    =====================     CONTENT SECTION        =====================     -->
<DIV id="content">
  <!--    =========== #content-left ===========    -->
  <DIV id="content-left">
  </DIV>    <!-- content-left -->
  <!--    =========== #content-main ===========    -->
  <DIV id="content-main">
  </DIV>    <!-- content-main -->
  <!--    =========== #content-right ===========   -->
  <DIV id="content-right">
  </DIV>    <!-- content-right -->
</DIV>  <!-- content -->
<!--    =====================     FOOTER SECTION         =====================     -->
<DIV id="footer">
</DIV>    <!-- footer -->
```

#### CSS Support Required:
```css
/* ===== All Common Style ===== */
* {
  font-family:arial,sans-serif;
}

/* Set your color Scheme */
:root {
  --Base : #FFF;
  --Accent1 : #FFF;
  --Accent2 : #FFF;
  --Accent3 : #FFF;
  --Light : #FFF;
  --Dark : #FFF;
}

/* ===== Resets of Common Elements ===== */
h1, h2, h3, h4, h5, h6 { margin:0; padding:0; }  
h1 { font-size:2.0em; color:var(--Base); font-weight:bolder; line-height:1.5em; padding-bottom:2px; margin-top:2em; margin-bottom:5px;   border: 2px solid var(--Accent1); }
h2 { font-size:1.8em; color:var(--Base); font-weight:bold;   line-height:1.5em; padding-bottom:2px; margin-top:2em; margin-bottom:2.5px; border: 2px solid var(--Accent1); }
h3 { font-size:1.6em; color:var(--Base); font-weight:normal; line-height:1.5em; padding-bottom:2px; margin-top:2em; margin-bottom:0;     border: 2px solid var(--Accent2); }
h4 { font-size:1.4em; color:var(--Base); font-weight:normal; line-height:1.5em; padding-bottom:2px; margin-top:2em; margin-bottom:0;     border: 2px solid var(--Accent3); }
h5 { font-size:1.2em; color:var(--Base); font-weight:normal; line-height:1.5em; padding-bottom:2px; margin-top:2em; margin-bottom:0;     border: 2px solid var(--Accent3); }
h6 { font-size:1.0em; color:var(--Base); font-weight:normal; line-height:1.5em; padding-bottom:2px; margin-top:2em; margin-bottom:0;     border: 2px solid var(--Accent3); }
a { color:#369; }
a:hover { color:#060; }
a:hover { color:#060; }
ol li, ul li { margin-bottom:0.5em; line-height:1.4em; } 
p { line-height:1.4em; }

/* ===== Simple Settings ===== */
.center { text-align:center; }
.margin20 { padding-left:20px; }
.clear { clear:both; }
.hidden { display:none; }

/* ===== Specific IDs ===== */
#header { }
#content { }
#content-left { }
#content-main { }
#content-right { }
#footer {  }
.container{ }

/* ===== Setup the Printout - ignore the left & right content sections ===== */
@media print{
.container{ width:auto; }
#content{ width:auto; float:none; border:none; margin:0 0.5in; }
#content-main{ width:auto; margin:0; height:auto; float:none; border:none; }
#content-left{ display:none; }
#content-right{ display:none; }
}
```  

## Make a Container or Wrapper
'''html
<DIV class="container">
</DIV>
<DIV class="wrapper">
</DIV>
```

