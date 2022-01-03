# Frames in HTML

Frames divide Web pages into multiple, scrollable regions where you can present information in a more flexible and useful fashion. Each region, or frame, has several features: 

- A Frame can be given an individual URL, so it can load information independent of the other frames on the page.  
- A Frame can be given a NAME, allowing it to be targeted by other URLs.  
- A Frame can resize dynamically if the user changes the window's size. (Resizing can also be disabled, ensuring a constant frame size.)   
  
This allows you to: 

- Place elements that the user should always see, such as control bars, copyright notices, and title graphics in a static, individual frame. As the user navigates the site in "live" frames, the static frame's contents remain fixed, even though adjoining frames redraw.  
- Table of contents are more functional. One frame can contain TOC links that, when clicked, display results in an adjoining frame.  
- Frames side-by-side design allows queries to be posed and answered on the same page, with one frame holding the query form, and the other presenting the results.  

The intelligent use of frames can give your pages a cleaner look and make them easier to navigate. Dividing a page into frames is actually quite simple. The basic frames document defines the frames and areas used by the called HML documents which are displayed within the frames. Each frame is a regular, complete html document. If you wanted to divide your page into 2 side by side frames, then you would put one complete html document in the left frame and another complete html document in the right frame. 

## Frames Tags
| Tag | Description | Attributes | Examples |  
| --- | --- | --- | --- |  
| `<FRAMESET>...</FRAMESET>` | Defines the frame set and spacing for columns within. The number of columns defines the number of list items needed to define each column and its contents. Replaces the <body> tag with frames. Framesets can be used within one another. | cols, marginwidth,, marginheight, noresize, rows, scrolling | `<FRAMESET cols="%, %, %, …" framespacing="integer"> </FRAMESET>` |  
| `<FRAME>` | FRAMESET list item, defines the column within the frames set; replaces the entire HTML Body section when supported by browsers. | marginwidth, marginheight, name, noresize, scrolling, src | `<FRAME src="url" marginwidth="integer" marginheight="integert" scrolling="auto">` |  
| `<IFRAME >…</IFRAME>` | Displays as an inline frame within the body of an otherwise frameless document | align, border, frameborder, framespacing, height, hspace, id, marginheight, marginwidth, name, scrolling, src, style, vspace, width | `` |  
| `<NOFRAMES>...</NOFRAMES>` | If a browser does not support frames, it refers to the NOFRAMES tag. The <BODY> tag is used within the NOFRAMES tag for alternate content. |  | `` |  

## Create a Frames Page
Start by creating a normal HTML page without the body section and defining just how things are going to look. Using the FRAMESET tag, tell the browser to split the main window into 2 columns, each occupying 50% of the window using the following:
```html
<FRAMESET COLS="50%, 50%">
</FRAMESET> 
```
Then, we must tell the browser what to put in each frame. 
```html
<FRAMESET COLS="50%, 50%">
  <FRAME SRC="LeftFrame.html"></FRAME>
  <FRAME SRC="RightFrame.html"></FRAME>
</FRAMESET> 
```
**Note**: This assumes that the files RightFrame.htm and LeftFrame.htm are in the same directory as your frame page. Also, graphics files can also be used as a frame source.  
The <FRAMESET> tag specifies how to divide the browser display and can be used to split the screen in columns using the COL= attribute or rows using the ROWS= attribute. The divisions can be in percentages, pixels or points. An Asterisk can be used to specify all remaining area.  

Let’s create a frames page. Start by creating a normal HTML page without the body section and defining just how things are going to look. Using the FRAMESET tag, tell the browser to split the main window into 2 columns, each occupying 50% of the window using the following.   
In the following, a page is divided into 5 equal rows:  
```html
  <FRAMESET ROWS="20%, 20%, 20%, 20%, 20%">
  <FRAME SRC="Frame1.html">
  <FRAME SRC=" Frame2.html">
  <FRAME SRC=" Frame3.html">
  <FRAME SRC=" Frame4.html">
  <FRAME SRC=" Frame5.html">
</FRAMESET> 
```
    
For more complex frame pages, embedded framesets can be used. First divide the page in one direction (ie COLS or ROWS) and then include an embedded frames set within to split in the other direction. The following is an example of multiple frame sets to quarter the screen:  
```html
<FRAMESET COLS="50%, 50%">
  <FRAMESET  ROWS="50%, 50%">
    <FRAME SRC="Frame1.html">
    <FRAME SRC=" Frame2.html">
  </FRAMESET>
  <FRAMESET  ROWS="50%, 50%">
    <FRAME SRC="Frame3.html">
    <FRAME SRC=" Frame4.html">
 </FRAMESET>
</FRAMESET> 
```

Here is an important point. Let's suppose that you make a frame 100 pixels wide on the left, and 100 pixels wide on the right. Since you are running an 800x600 screen you make the 3rd and middle area 600 pixels wide. Everything looks just dandy... to you. My screen is set at 640x480. Those 100 pixel wide frames you put in your page are now 80 pixels wide on my screen. If you use any absolute dimensions in your <FRAMESET> tags ALWAYS have at least one * as an elastic frame. That way everything will look good to everyone and there will be peace across the land once again.  

The reason this happens is because you have specified that the left window should be 15%. 15% of what? 15% of whatever their horizontal screen resolution is. That means that that left window might look a little different to different people. How to fix you say? Glad you asked... Just use an absolute dimension for the left window and make the right window elastic (such as <FRAMESET COLS="120,*">). It's good idea to make that absolute dimension just a wee bigger than it needs to be. Give the stuff in that left window a little breathing room. For example, if 100 pixels gives a good but snug fit... make the window 120 or 125 pixels.   
You can have more than one leftover frame and specify a size relationship between them.   
```html
<FRAMESET COLS="50,*,2*">
  <FRAME SRC="Frame1.html">
  <FRAME SRC="Frame2.html">
  <FRAME SRC="Frame3.html">
</FRAMESET> 
```
Now's also a good time to think about the poor folks that are using non frames capable browsers. Although most, if not all of your visitors will be able to see frames, there is a hapless minority that's trying to peruse the web with outdated equipment. If you would like to help these folks out you can write a non frames version of your main page and add it thusly... 
```html
<FRAMESET COLS="50,*">
  <FRAME SRC="MenuFrame.html">
  <FRAME SRC="MainFrame.html">
  <NOFRAMES>
    [Put a Normal HTML Body Section Here to Identify this is a frames based page !]
  </NOFRAMES>
</FRAMESET>
```
If someone is using an old browser, it will skip everything above and come straight down here. Frames-capable browsers will ignore what is between the <NOFRAMES> tags.   
With the exception of frameset and frame attributes, this covers the basic frames page.  

## Syntax - Names, Targets, and Window Control
Frames divide Web pages into multiple, scrollable regions where you can present information in a more flexible and useful fashion. Each region, or frame, has several features: 
    
- A Frame can be given an individual URL, so it can load information independent of the other frames on the page. 
- A Frame can be given a NAME, allowing it to be targeted by other URLs. 
- A Frame can resize dynamically if the user changes the window's size. (Resizing can also be disabled, ensuring a constant frame size.) 
- This allows you to: 
- Place elements that the user should always see, such as control bars, copyright notices, and title graphics in a static, individual frame. As the user navigates the site in "live" frames, the static frame's contents remain fixed, even though adjoining frames redraw. 
- Table of contents are more functional. One frame can contain TOC links that, when clicked, display results in an adjoining frame. 
- Frames side-by-side design allows queries to be posed and answered on the same page, with one frame holding the query form, and the other presenting the results. 


## Fine Tune Your Frames  
Often the frame for content text is pushed too close to another frame, leaving no room in between. You can avoid such design flaws in your Web sites by using the MARGINWIDTH and MARGINHEIGHT attributes of the <FRAME> tag to define the space (in pixels) between the frame contents and the frame borders (much like the CELLPADDING attribute of the  <TABLE> tag). This ensures that the pages inside a frame don't smack into the sides of the other frames. For example, the following code creates a 10‑pixel margin between the frames.  
```html
	<FRAMESET cols="20%, 65%, 15%" framespacing="0">
	  <FRAME src="First.htm" marginwidth="10" marginheight="10" scrolling="Auto">
	  <FRAME src="Second.htm" marginwidth="10" marginheight="10" scrolling="Auto">
	  <FRAME src="Third.htm" marginwidth="10" marginheight="10" scrolling="Auto">
	</FRAMESET>
```
## Use Targets in Frames 
```html
	<A HREF="a.html" TARGET="frame1">A</A>
	<A HREF="b.html" TARGET="frame2">B</A>
	<A HREF="c.html" TARGET="frame3">C</A>
```
