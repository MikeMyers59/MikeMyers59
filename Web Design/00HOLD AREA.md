# HOLD AREA

- [FAQ.css]() - requires jQuery
  ```html
  <script type="text/javascript" src="js/faq.js"></script>
  ```
- [FontAwesome](http://fontawesome.com) 
  - [FA Kits](https://fontawesome.com/kits/249fc961f6/)
  - [FA License](http://fontawesome.com/license)
  Include this link in the HEAD Section:
  ```html
  <link type="text/css" href="css/font-awesome.css" rel="Stylesheet">
  ```
  Using the icon set is extremely simple.  Create a <SPAN> element and set the class to fa fa-<IconName>. Calls to the Icons: (FA – FA Free)
  ```html
  <SPAN class="fa fa-file-excel-o fa-1x"> </SPAN> - Excel Spreadsheets <BR>
  <SPAN class="fa fa-file-pdf-o fa-1x"></SPAN> - PDF Documents <BR>
  <SPAN class="fa fa-folder-open fa-1x"></SPAN> - Folder<BR>
  <SPAN class="fa fa-shield fa-1x"> </SPAN> - Security Access Limited <BR>
  ```

- [jQuery API](http://api.jquery.com/)  
- [jQueryUI](http://jqueryui.com/) - User Interface
- [jQueryUI API](http://api.jqueryui.com/)  
- [Mustache]() - `<script type="text/javascript" src="js/mustache.js"></script>`  
- [Popper.js](https://popper.js.org/) 

- [PrismJS]((http://prismjs.com/)
  - [Language List](http://prismjs.com/index.html#languages-list)
  ```html
  <link href="prism.css" rel="stylesheet" />
  <script src="prism.js"></script>
  <pre><code class="language-css">p { color: red }</code></pre>
  <pre><code class="language-markup">&lt;p class="red">red text &lt;/p></code></pre>
  <script type="text/plain" class="language-markup"><p>Example</p></script>
  ```

### Attributes
-webkit-appearance	button \| none \| textfield
-webkit-box-shadow	0 5px 10px rgba(0,0,0,0.2)
-webkit-transition	opacity .15s linear
-webkit-transition-duration	.35s
-webkit-transition-property	height,visibility
-webkit-transition-timing-function	ease
-webkit-user-select	none

### File Locations
Use the following Folders are used:
•	<ROOT> - the index, icon files and this document
•	css – for Style Sheets (css, less, etc.)
•	files – documents linked within the page
•	fonts – fonts required to support the page (FontAwesome)
•	images – the unique pictures used by the site
•	scripts – the JavaScript files (jQuery, Menu, etc.)

### WebDev Functions
grayscale(50%)
sepia(50%)
translate(-50%,-50%)

### CSS
```css
/* Variables */
:root{
  --VarName: "Value";
}

.border0 {
  border: 0;
}
.disabled {
  opacity: 0.50;
}
.margin0 {
  margin: 0;
}

.container{
  width:1100px;
  position:relative;
}

.wrapper{
  text-align:left;
  position:relative;
  width:1100px;
  margin:0 auto;
}

.code {
  background-color:#fff;
  border-left:4px solid #4CAF50;
  font-family: Consolas,"Courier New", monospace;
  font-size: 1.2em;
  padding:8px 12px;
  width:auto;
  word-wrap:break-word
}
```

|  Element|Roadmap|Notes |
| --- | --- | --- | 
|  Anchor`|`<A href=”UR”L>  </A>`| |
|  Blockquote|`<BLOCKQUOTE>  </BLOCKQUOTE>`| |
|  Button|`<BUTTON>  </BUTTON>`| |
|  Headers|`<H1> </H1>` <br>  `<H2>  </H2>` <br> `<H3>  </H3>` <br> `<H4> </H4>` <br> `<H5> </H5>` <br> `<H6> </H6>` | |
|  Image|`<IMG src=URL />`| |
|  Script|`<SCRIPT type="text/javascript" >…</SCRIPT>`|In Head or Body areas. |
|  Style|`<STYLE type="text/css" >…</STYLE>`|In Head area. |


## Anchors
Referencing Note: “#” refers to the current document (page), so #<Location> will take you to the location in the document. For a location in the document called “_Top”, a <Location> is defined by an Anchor element such as:
<A name="_top”></A>


## Containers
![Containers](Containers.png) 

|  Element|Roadmap|Notes |
| --- | --- | --- | 
|  Division | `<DIV>  </DIV>` | `class="column-container"` <br>  `class="column-of-two"` <br> `class="column-of-three"` |
|  Article | `<ARTICLE>…</ARTICLE>` | |
|  Header | `<HEADER>…</HEADER>` | |
|  Aside | `<ASIDE>…</ASIDE>` | |
|  Section | `<SECTION>…</SECTION>` | |
|  Content | `<CONTENT>…</CONTENT>` | |
|  Footer | `<FOOTER>…</FOOTER>` | |
|  Navigation | `<NAV>  </NAV>` | |
|  Paragraph | `<P>  </P>` | `class="centered"` |
|  Span | `<SPAN></SPAN>` | Used for small area style changes or identification of an area in the document. |

## Conventions  
| Source | Convetion Used | Notes |
| --- | --- | --- |
| ID Name | #PascalCase |  |
| Class Name | .camelCase |  |
| CSS Variable Name | --lowercase |  |  

## Head Section
Set your Icons using in the HEAD Section:
```html
<link rel="icon" href=" favicon.png" type="image/png">
<link rel="shortcut icon" href=" favicon.ico" type="image/x-icon">
```

Alternately use if the icons aren’t stored in your ROOT directory: 
```html
<link rel="icon" href="https://www.ebnet.gdeb.com/favicon.png" type="image/png">
<link rel="shortcut icon" href="https://www.ebnet.gdeb.com/favicon.ico" type="image/x-icon">
```

Set your META Data using the following in the HEAD Section:
```html
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Scripts
```html
<link type="text/css" href="js/jquery-ui.css" rel="Stylesheet">
<link type="text/css" href="js/jquery-ui_002.css" rel="Stylesheet">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery-migrate.js"></script>
<script type="text/javascript" src="js/jquery-ui.js"></script>
```

## Namespace  
| Namespace | Source| Notes |  
| --- | --- | --- |  
| bi- | Bootstrap Icon |  |  
| fa- | Font Awesome |  |  
| material- | Google Icon |  |  

# Add to Mike's Retirement Menu

Do Not Call List- You can register your numbers cell phones and landlines on the national Do Not Call list at no cost by calling 888-382-1222 or 866-290-4236 (TTY). You must call from the phone number you wish to register.

Home Emergency
- https://www.navbug.com/washington/kitsap_county_traffic.htm#popmap
- https://www.pse.com/outage/outage-map
- https://secure.pscleanair.org/AirQuality/NetworkMap 
- Bremerton: https://www.bing.com/search?q=98312%20weather&FORM=PRWEHI&refig=af146f355f7b4b67b80eab1c02ed102a&httpsmsn=1 
- Poulsbo: https://www.bing.com/search?q=98370+weather&qs=WA&pq=98370+weather&sc=5-13&cvid=517CA61710B94410BE7063E744E66742&FORM=QBRE&sp=1
- https://airnow.gov/index.cfm?action=airnow.local_city&cityid=246 
- https://www.localconditions.com/weather-kitsap-county-washington/wa279/traffic.php

NBK page: https://www.facebook.com/kitsapnavy/

### Links
```html
<div>
  <a href="https://suicidepreventionlifeline.org/">National Suicide Prevention Hotline 1-800-273-TALK (8255)</a>
</div>
```

# Bootstrap Examples

## Content Section with Two Columns 

Requires Bootstrap, row & col are Bootstrap classes
```html
<div id="ContentBody">
  <div class="row">
    <div id="LeftSide" class="col">
      <h5> Left Side Matter</h5>
    </div>
    <div id="RightSide" class="col">
      <h5> Right Side Matter</h5>
    </div>
  </div>
</div>
```
```css
#ContentBody{
  background-color:#04272f;
}
#ContentBody h5 {
  Color: white;
}
```

## Focus Content Section

Requires Bootstrap, row & col are Bootstrap classes
```html
<div id="Focus" class="row">
<div class="mainSection col">
   <div class="focusTitle">Focus</div>
     <div id="FocusContent">
       <div class="row">
         <div class="col" style="margin-top:10px">
         </div>
         <div class="col" style="margin-top:10px">
         </div>
         <div class="col" style="margin-top:10px">
         </div>
         <div class="col" style="margin-top:10px">
         </div>
      </div>
    </div>
  </div>
  <div id="Framework" class="MainSection col-3">
    <div class="MainSectionTitle">Strategic Framework</div>
    <div id="FrameworkContent">
   </div>
  </div>
  <div id="EmergencyLinks" class="MainSection col-lg-3">
    <div class="MainSectionTitle">Emergency</div>
      <div id="EmergencyText">
        <div class="row">
          <div class="col"> [Emergency Items List] </div>
        </div>
      </div>
    </div>
  </div>
</div>  <!-- End of Commander Focus -->
</div>  <!—End of Row -->
```
```css
#EmergencyLinks {
  margin-right: 30px;
  padding-left: 0;
  padding-right: 0
}
#EmergencyLinks a {
  color:#04272f;
  text-decoration: none;
  font-size: 14px;
}
#EmergencyText {
  margin-right: 15px;
  margin-left: 20px
}
#Focus {
  background-color: #8f8f8a;
  margin-left: 30px;
  padding-left: 0;
  padding-right: 0;
}
#Focus a {
  color: #04272f;
  text-decoration: none;
  font-size: 14px;
}
#FocusContent {
  margin-left: 20px;
  margin-right: 15px;
}
#Framework { 
  padding-left: 0;
  padding-right: 0;
}
#FrameworkContent {
  text-align: center;
}
.Emergency {
  background-color: #ff6122;
}
.Emergency p:first-child {
  color: #ff0;
}
.focusTitle {
  background-color: #cbcbc9;
  color: #000;
  padding-left: 20px;
  height: 28px
}
.mainSection {
  background-color: #cbcbc9;
  color: #000;
  margin: 10px;
  border-radius: 5px;
}
.MainSectionTitle{
  background-color: #8f8f8a;
  color: #000;
  padding-left: 20px;
  height: 28px
}
.MainSectionTitle img {
  height: 20px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 16px;
  margin-right: 16px;
}

```

## Main Section

Requires Bootstrap, row & col are Bootstrap classes
```html
<div id="Misc" class="MainSection">
  <div class="row">
    <div class="col-2">
    </div>
    <div class="col-4">
    </div>
    <div class="col-4">
    </div>
    <div class="col-2">
    </div>
  </div>  <!-- End of Row -->
</div>  <!-- End of Misc-MainSection -->
```
```css
#Misc {
  background-color: #97a3a4;
  margin-right: 15px;
  margin-left: 15px;
  padding: 15px;
  font-size: 0.9em;
}
#Misc a {
  color:#04272f;
  text-decoration:none
  ;font-size:14px;
}
#Misc h5 {
  text-shadow:1px 1px #8f8f8a;
}
.mainSection {
  background-color: #cbcbc9;
  color: #000;
  margin: 10px;
  border-radius: 5px;
}
```

## Social Media List

Requires BootStrap & HPsprites.png
```html
<div id="socialMediaLinks" class="row">
  <div id="facebook">
    <a href="https://www.facebook.com/[FBUserID]">  </a>
  </div>
  <div id="twitter">
    <a href="https://twitter.com/[TWUserID]">  </a>
  </div>
  <div id="flickr">
    <a href="https://www.flickr.com/[FLUserID]">  </a>
  </div>
  <div id="youTube">
    <a href="https://www.youtube.com/[YTUserID]">
  </div>
  </a>
</div>
```
```css
#socialMediaLinks {
  bottom: 0;
  padding-bottom: 30px;
  padding-top: 10px;
  padding-left: 70%;
}
#socialMediaLinks div {
  margin-right: 10px;
}
#facebook {
  width: 30px;
  height: 40px;
  background: url('images/HPsprites.png');
  background-position: 0;
}
#twitter {
  width: 48px;
  height: 40px;
  background: url('images/HPsprites.png');
  background-position: -30px;
}
#flickr {
  width: 43px;
  height: 40px;
  background: url('images/HPsprites.png');
  background-position: -125px
}
#youTube {
  width: 44px;
  height: 40px;
  background: url('images/HPsprites.png');
  background-position: -256px;
}
```

## Status Bar

Requires Bootstrap, row & col are Bootstrap classes
```html
<!-- InfoStatus Bar -->
<div id="Status" class="row">
  <div class="col">
    <p>STATUS</p>
  </div>
</div> <!-- End of InfoStatus Bar -->
```
```css
#Status{
  background-color:#ff6122;
  text-align:center;
}
#Status a:link,
#Status a:visited,
#Status a:active,
#Status a:hover{
  color: #ff0;
}
```

## Top News Digests

Requires Bootstrap, row & col are Bootstrap classes
```html
<!-- Top News -->
<div id="NewsContainer" class="MainSection">
  <div class="MainSectionTitle">
    <img id="NewspaperIcon" src="images/newspaper.gif">
    Top News
  </div>
  <div id="News">
    <div class="row">
      <div class="col"> <h5>A</h5> [Digest Items go here] </div>
      <div class="col"> <h5>B</h5> [Digest Items go here] </div>
    </div>
  </div>
</div>  <!-- End of Top News You Can Use -->
```
```css
/* Container Classes */
.MainSection {
  background-color: #cbcbc9;
  color: #000; 
  margin: 10px;
  border-radius: 5px;
}
.MainSectionTitle {
  background-color: #8f8f8a;
  color: #000;
  padding-left: 20px;
  height: 28px;
}
.MainSectionTitle img {
  height: 20px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-left: 16px;
  margin-right: 16px;
}
#NewsContainer {
  margin-top: 20px;
  margin-right: 15px;
}
#News {
  min-height: 235px;
}
/* Digest Classes */

.DigestItem {
  border: .5px;
  border-radius: 5px;
  border-style: solid;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 10px;
  margin-left: 10px;
  border-color: #8f4330;
}
.DigestItem {
  background-color: #fdf2eb;
}
.DigestItem p {
  margin: 6px;
}
.DigestTitle {
  color: #746853;
  text-decoration: none;
  font-size: 1.1em;
  font-family: Calibri;
  font-weight: 400px
}
.DigestText {
  color:#04272f;
  text-decoration: none;
  font-size:.8em;
  font-family: Calibri;
}
.Digest a:hover {
  text-decoration: none;
}
```

# Headers & Banners

A typical breakdown of a header/banner:
| Linked Apps Icon | User Icon/Avatar | Title & Left Justified Menu | Right Justified Menu |
| --- | --- | --- | --- |  

### Linked Apps Icon
```html
<DIV class="header-apps">  <!-- Linked Apps Icon & Menu -->
  <button class="-dropdown2-trigger app-switcher-trigger dropdown2-trigger-arrowless marked" href="#">
    <img src="images/toc.png" alt="Apps">
  </button>
</DIV>
```

### Title & Left Justified Menu
```html
<DIV class="header-primary"> <!-- Left Justified Menu Bar -->
  <!-- Menu Bar -->
  <ul class="nav" style="width: auto;">
    <li>
      <a id="space-menu-link" class="aui-dropdown2-trigger aui-nav-link" aria-controls="space-menu-link-content" aria-haspopup="true" role="button" title="Spaces" tabindex="0" data-aui-trigger="" resolved="" aria-expanded="false" href="#space-menu-link-content">Spaces</a>

<div id="space-menu-link-content" class="aui-dropdown2 aui-dropdown2-in-header aui-layer" role="menu" resolved="" tabindex="-1" hidden="">
  <ul class="nav">
    <li>Another Submenu</li>
    <li><a id="view-user-profile-link" href="#" title="">Profile</a></li>
    <li><a id="view-mytasks-link" href="#n" title="">Tasks</a></li>
    <li><a id="user-settings-link" href="#" title="">Settings</a></li>
    <li><a id="quizzes-link" href="#" title="">Quizzes</a></li>
    <li><a id="courses-link" href="#" title="">Courses</a></li>
  </ul>
</div>
    </li>
    <li><a href="#" class=" nav-imagelink" title="Calendars"><span>Marbles</span></a></li>
  </ul>
</DIV> <!-- End of Left Justified Menu BarSection -->
```

# KeyFrames

### Spin
```css
@keyframes Spin360{
  from {transform:rotate(0deg)}
  to {transform:rotate(360deg)}
}
```

# Navigation Menus

### Menu Container
```html
<div class="topMenu">
  [Menu List]
</div>
```
```css
.topMenu {
}
```

### Menu List
Simple:
```html
<ul>
  [MenuListItems]
</ul>
```
Drop Down Menu:
```html
<li class="dropdown">
  <a href="javascript:void(0);" class="dropbtn">Contacts</a>
  [DropMenuContentList]
</li>
```

### Menu List Items
```html
<li> [AnchorItem] </li>
```

### DropMenu Content List
```html
<div class="dropdown-content">
  [MenuList]
</div>
```

### Quick Launch Menu
```html
<div id="QuickLaunchMenu" class="noindex ms-core-listMenu-verticalBox">
  <ul id="LeftSideMenu" class="root ms-core-listMenu-root static">
    <li class="static">
      <span class="menu-item-text"> [MenuItem] </span>
      <ul class="static">
        [SubMenuList]
      </ul>
    </li>
  </ul>
</div>
```

## User Icon or Avatar

```html
<!-- User Icon -->
<span id="logo" class=" header-logo">
  <a href="#" aria-label="Go to home page">
    <img src="images/user-avatar.jpg" alt="Mikey's Wiki">
  </a>
</span>
```

# SVG Examples

### SVG Right Pointing Triangle:
```html 
<svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
  <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
</svg>
```

### SVG Left Pointing Triangle: 
```html
<svg viewBox="0 0 16000 16000" style="position:absolute;top:0;left:0;width:100%;height:100%;">
  <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
</svg>
```
