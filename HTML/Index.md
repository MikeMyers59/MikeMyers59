# HyperText Markup Language (HTML)
HTML is an application of ISO Standard 8879:1986 ‑‑ Standard Generalized Markup Language (SGML). SGML is a system for defining structured document types, and markup languages to represent instances of those document types. HTML is one such markup language. Its syntax follows the syntax of SGML. An HTML file is an file of text whose character set includes [ISO‑8859‑1] and agrees with [ISO‑10646]. This is often commonly referred to as an ASCII file of text. This document text also includes instructions to a user agent (often called a browser) mostly about displaying the text. To formally identify the file as containing HTML elements, the beginning of the file should contain a line in SGML syntax identifying the version of HTML being used.

Developed by Tim Bernier-Lee of CERN as a method for sharing documents via the Internet. Without a doubt, HTML has become one of the most widely used technologies in the world today. HTML uses a fixed set of tags - approximately 100 tags in HTML 4.0.

HTML documents are plain-text (also known as ASCII) files that can be created using any text editor. You can also use word-processing software if you remember to save your document as "text only with line breaks."

The HyperText Markup Language (HTML) is composed of  tag elements that define a document and guide its display. This document presents a concise reference guide to HTML, listing the most commonly used elements of HTML.

This guide assumes that you:

· are able to use some Web browser
· have a general understanding of how Web servers and client browsers work
· have access to a Web server (or that you want to produce HTML documents for personal use in local‑viewing mode)
  
Users should be aware that HTML is an evolving language, and different World Wide Web browsers may recognize slightly different sets of HTML elements. The HTML specification is still under development and is controlled by the World Wide Web Consortium (W3C). Not all Web browsers will recognize the extension sets of HTML. 

HTML documents are plain‑text (also known as ASCII) files that can be created using any text editor (e.g., Notepad on a Windows machine). You can also use word‑processing software if you remember to save your document as "text only with line breaks." These HTML documents are composed of a set of elements that define a document and guide its display.

**NOTE**: HTML is not a programming language and an HTML document is not a computer program. It's a lot simpler than that. The definition of HTML specifies the grammar and syntax of markup tags that, when inserted into data, instruct browsers ‑‑ computer programs that read HTML documents ‑‑ how to present the document.

#### HTML ignores extra spaces, carriage returns and capitalization in tags

This is a good time to note that capitalization doesn't matter in hypertext tags, including anchor tags. Both <i> and <I> work identically in HTML.
  
In addition to capitalization, HTML also disregards carriage returns. If you want paragraph breaks, you use the <P> tag to add extra space after a paragraph. If you wish to simply force a line break after a particular word or phrase, you use the <BR> tag. 
  
#### HTML Coding Practices, Tips and Tricks  
  
To make an HTML coding more readable, you must:  
  
	1. Make all HTML tags in UPPERCASE, their attributes in lowercase and their method calls in caMel case.
	2. Attribute in tags should have values enclosed in quotation marks.
	3. Proper nesting of tags is essential. Use indentation to collect sections within tags.
	4. Close all tags, including the tags that the HTML 4.0 spec doesn't require you to close.  
  
###### Browsers Differ
  
Web browsers display HTML elements differently. Remember that not all codes used in HTML files are interpreted by all browsers. Any code a browser does not understand is usually ignored though.
  
You could spend a lot of time making your file "look perfect" using your current browser. If you check that file using another browser, it will likely display (a little or a lot) differently. Hence these words of advice: code your files using correct HTML. Leave the interpreting to the browsers and hope for the best.
  
###### Commenting Your Files
  
You might want to include comments in your HTML files. Comments in HTML are like comments in a computer program--the text you enter is not used by the browser in any formatting and is not directly viewable by the reader just as computer program comments are not used and are not viewable. The comments are accessible if a reader views the source file, however. 
  
Comments such as the name of the person updating a file, the software and version used in creating a file, or the date that a minor edit was made are the norm. 

To include a comment, enter:  
	`<!-- your comments here -->`  
You must include the exclamation mark and the hyphens as shown.  

###### Embed Only Anchors and Character Tags
  
HTML protocol allows you to embed links within other HTML tags:
```html
<H1><A HREF="Destination.html">My heading</A></H1>
Do not embed HTML tags within an anchor:
<A HREF="Destination.html">
<H1>My heading</H1>
</A>
```
  
Although most browsers currently handle this second example, the official HTML specifications do not support this construct and your file will probably not work with future browsers. Remember that browsers can be forgiving when displaying improperly coded files. But that forgiveness may not last to the next version of the software! When in doubt, code your files according to the HTML specifications.
  
Character tags modify the appearance of the text within other elements:
```html
<UL>
<LI><B>A bold list item</B>
<LI><I>An italic list item</I>
</UL>
```
Avoid embedding other types of HTML element tags. For example, you might be tempted to embed a heading within a list in order to make the font size larger:
```html
<UL>
<LI><H1>A large heading</H1>
<LI><H2>Something slightly smaller</H2>
</UL>
```
    
Although some browsers handle this quite nicely, formatting of such coding is unpredictable. For compatibility with all browsers, avoid these kinds of constructs. The Netscape `<FONT>` tag, which lets you specify how large individual characters will be displayed in your window, is not currently part of the official HTML specifications.
    
What's the difference between embedding a `<B>` within a `<LI>` tag as opposed to embedding a `<H1>` within a `<LI>`? Within HTML the semantic meaning of `<H1>` is that it's the main heading of a document and that it should be followed by the content of the document. Therefore it doesn't make sense to find a `<H1>` within a list.
    
Character formatting tags also are generally not additive. For example, you might expect that:
```html
<B><I>some text</I></B>
```
would produce bold‑italic text. On some browsers it does; other browsers interpret only the innermost tag.

###### Enhancing a Web site's accessibility 
Here are a couple of tips to keep in mind while making your Web pages that will help the visually impaired Web browsers do their job and give users a better online experience. 
    
	1. Set the "alt" attribute for the important <IMG>, <INPUT>, and <APPLET> elements in your page. 
	2. Setting the "lang" attribute aids the pronunciation of speech Web applications that are written to speak in different languages. 
	3. Mark abbreviations or acronyms with the <ABBR> and <ACRONYM> elements and use the "title" attribute to define them.   
    
###### Validate Your Code
    
When you put a document on a Web server, be sure to check the formatting and each link (including named anchors). Ideally you will have someone else read through and comment on your file(s) before you consider a document finished. 
    
You can run your coded files through an HTML validation service that will tell you if your code conforms to accepted HTML. If you are not sure your coding conforms to HTML specifications, this can be a useful teaching tool. Fortunately the service lets you select the level of conformance you want for your files (i.e., strict, level 2, level 3). If you want to use some codes that are not officially part of the HTML specifications, this latitude is helpful. 
    
## Files

- .htm
- .html
- .mhtml

## HTML Documents
An HTML document is composed of a single element:
	`<HTML> . . . </HTML>`
that is, in turn, composed of head and body elements:
	`<HEAD> . . . </HEAD>`
and
	`<BODY> . . . </BODY>`
or 
  `<FRAMESET>…</FRAMESET>`

## HTML Sections

#### HEAD Section 
The head element identifies the first part of your HTML‑coded document that contains the title. The title is shown as part of your browser's window. Elements usually placed in the head element: 
```html
<ISINDEX>
<TITLE> . . . </TITLE>
<BASE href="URL">
<LINK rev="RELATIONSHIP" rel="RELATIONSHIP" href="URL">
```
#### BODY Section

The second‑‑and largest‑‑part of your HTML document is the body, which contains the content of your document (displayed within the text area of your browser window). The tags explained below are used within the body of your HTML document.

## Converting HTML Files in a Particular Order
In order to convert a collection of HTML Files in a specific order, you have to create a table of contents file. That is, another HTML file that contains links to all the other files in the desired order. Such a file looks like:
```html
<html>
  <body>
    <h1>Table of Contents</h1>
    <p style="text-indent:0pt">
    <a href="file1.html">First File</a><br/>
    <a href="file2.html">Second File</a><br/>
      .
      .
      .
    </p>
  </body>
</html>
```
Then just add this HTML file to the GUI and use the convert button to create your ebook.

## Create a Favorites Icon For your Web Page
Several of the pages on my Microsoft Internet Explorer Favorites menu have customized icons associated with them. How can I create such an icon so that visitors who bookmark my site will see that icon in their own Favorites menus? 
    
It's easy. All you need is an icon of the cor­rect size and a place to store it on your Web server with the rest of the files for your site. Your visitor needs IE 5.0 or higher.
    
The first step is to create the icon. Using an icon editor, design whatever you want to display as an icon. The icon must be precisely 16 by 16 pixels; any variation from this size will cause IE to ignore the icon. Experiment with the number of colors you give the icon. If you can get away with using 256 colors or even 16 colors, you should do so, because some Web users still configure their systems to those limitations.
    
Save the file with the name Favicon.ico, then upload the icon to the root directory of your Web site. Whenever a visitor book­marks a page, IE then automatically checks the site's root directory for the Favicon.ico file. If it does not find one, IE sends an error message to your server, but the visitor will not receive such a message.
    
**Note**: On a user's machine, the icon is stored in the Temporary Internet Files folder. If the user empties the cache, the icon for the Favorites menu item disappears. To get it back, the user will have to delete that partic­ular Favorites item and then add it again. Alternatively, you can give the file a different name and provide a hyperlink to it inside the HEAD container. This hyperlink must be inside a LINK tag with a REL attri­bute, and the attribute's value must be set to "SHORTCUT ICON". The following HTML code results in a Favorites icon appearing exactly as if it were a Favicon.ico file:
```html
<HEAD>
<LINK REL="SHORTCUT ICON" HREF="http://www.mysite.com/bookmark.ico">
</HEAD>
```
In your own code, of course, the URL and filename will be different, and your HEAD container will likely contain additional code.
    
A visitor to your site will see the shortcut icon when he adds your home page to his Favorites menu. When he does, the icon will appear in the Favorites menu beside your site's name, and it will also appear in IE's Address bar when the visitor accesses your site via that menu.

## Disadvantages of HTML include
    
Link tracking:
    
• Web pages move constantly and Webmasters can’t keep up with changing URLs.  There are automatic link checkers that tell when a link is broken but the real problem is that HTML does not have the concept of a control link repository.
    
Syntax checking:
    
• HTML obstructs validation because it is not a rigid specification.  Rather than checking documents for validity, HTML browsers specifically ignore syntax violations to make the display process more robust.
    
Extensibility:
    
• Because HTML is not extensible, developers cannot create their own tags to reflect their content’s semantic relationships.
• HTML extensions are either proprietary features of the client or require approval by a committee.
• There is currently a W3C proposal for XHTML - extensible HTML which is an attempt to address this limitation.
    
Structure:
    
• HTML lacks support for structure such as nested information hierarchies.  Documents are relatively flat, which limits searching to full-text searches which makes navigation cumbersome.
    
Content awareness:

• HTML searches have to look at all the content of every page which causes it to come up with too many pages.  This is because HTML jumbles information and meta-information.  Style and logic are hard-coded inside the document.  Different views and presentations of the information have to be generated by the server. 
• Cascading Style Sheets (CSS) are an approach to solving this problem.
    
Data interchange:
    
• HTML does not help with automatic, reliable data interchange.  Its markup controls the appearance of a document but does not provide for tagged data fields.
    
Internationalization:
    
• support for special and international characters with two or more bytes and mathematical formulae is lacking or, at best, inconsistent in HTML.  Where provided, it sometimes breaks when changing platforms.
    
Reuse of data:
    
• HTML makes it difficult to reuse information.  For the same data to be published on the Web, printed as a catalog, and maintained in a database, conversion and sometimes manual reformatting is necessary.  This has to be repeated each time the information changes.
Dynamic content
• Today’s HTML-created pages do not let you refresh the look of a Web page - attributes like its color, font properties, font size, or background images - without loading a new page or invoking a program.
    
Object orientation:
    
• Today’s HTML tags do not map into an object model that would allow any part of a Web page to be treated as an object.

## Enhancing a Web Site's Accessibility 
  
1. Here are a couple of tips to keep in mind while making your Web pages that will help the visually impaired Web browsers do their job and give users a better online experience. 
2. Set the "alt" attribute for the important <img>, <input>, and <applet> elements in your page. 
3. Setting the "lang" attribute aids the pronunciation of speech Web applications that are written to speak in different languages. 
Mark abbreviations or acronyms with the <abbr> and <acronym> elements and use the "title" attribute to define them. 

