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
    
Although some browsers handle this quite nicely, formatting of such coding is unpredictable. For compatibility with all browsers, avoid these kinds of constructs. The Netscape <FONT> tag, which lets you specify how large individual characters will be displayed in your window, is not currently part of the official HTML specifications.
    
What's the difference between embedding a <B> within a <LI> tag as opposed to embedding a <H1> within a <LI>? Within HTML the semantic meaning of <H1> is that it's the main heading of a document and that it should be followed by the content of the document. Therefore it doesn't make sense to find a <H1> within a list.
    
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

## Resources

- [Beginner's Guide to writing HTML](www.ncsa.uiuc.edu/demoweb/html-primer.html)
- [The Web Designer, N Laviolette. Many references](www.kosone.com/people/nelsonl/nl.htm)
- [Thoughts on style from Jorn Barger](www.mcs.net/~jorn/html/hyper.html)
- http://goforit.unk.edu/ma200/tutors.htm
- [HTML Development SkillDrill](http://skilldrill.brainbuzz.com/TestDescr.asp?htxtTestID=3)
- [Form Tutor](http://junior.apk.net/~jbarta/tutor/forms/index.html)
- [Table Tutor](http://junior.apk.net/~jbarta/tutor/tables/index.html)

## HTML Documents
An HTML document is composed of a single element:
	`<HTML> . . . </HTML>`
that is, in turn, composed of head and body elements:
	`<HEAD> . . . </HEAD>`
and
	`<BODY> . . . </BODY>`
or 
  1<FRAMESET>…</FRAMESET>!

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


