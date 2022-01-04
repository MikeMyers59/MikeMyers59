# HTML Map Images

## Mapping your maps  
Creating image maps can be a tedious procedure. If you use a standard drawing or painting program that will give you coordinates, you'll have to carefully mark and measure your image's coordinates. Later you'll place those coordinates into a map definition file or a map description in HTML.  
An image's pixel coordinates begin at the 0,0 (X,Y) coordinate in the upper‑left corner of the picture. As you might image, more complex maps take quite a while to define.  
In addition to mapping coordinates, some servers may require that you supply map information in a specific format. Fortunately, there are shareware programs that map coordinate information.  
 
## Building your Own Maps  
It's easy to add a client‑side image map to your HTML documents. To invoke a client‑side image map, you'll see some new HTML codes ‑‑ USEMAP and MP. USEMAP points to the MAP coordinates table for that image. You create and name this map information, complete with the coordinates and destination information. You'll place this information within your HTML document.   
To begin, use an IMG tag to insert a graphic in your web document. Then add the USEMAP parameter to the IMG element along with the map name. Your tag should look like this (sample.gif is the image name, colormap is the map name):  
	`<IMG SRC="sample.gif" USEMAP="colormap"> `  
Next create the map definition colormap. For this example, the map will include only rectangles, so you will use the area type RECT followed by the coordinates for each rectangle you plan to link to another file or location. Place the coordinates of your image map in the map definition and save your complete HTML document (for this example we'll call the file testmap.html).

## A Basic MAP Image Setup  
```html
<!-- This is a client-side imagemap by Mapedit and also contains an inline image with an  appropriate USEMAP attribute referring to the map.-->
<img src="ENTRY.GIF" usemap="#ENTRY">
<map name="ENTRY">
  <area shape="rect" coords="24,143,530,179" href="net.htm">
  <area shape="rect" coords="22,190,530,220" href="web.htm">
  <area shape="rect" coords="23,233,530,263" href="hand.htm">
  <area shape="rect" coords="23,277,526,306" href="site.htm">
  <area shape="rect" coords="199,334,199,334" href="credit.htm">
  <area shape="rect" coords="222,322,473,345" href="copy.htm">
  <area shape="rect" coords="23,323,214,346" href="credit.htm">
  <area shape="default" nohref>
</map>
```  
 
## Testing the map definition  
In order to test your work, place the testmap.html file and your graphic in the same directory on your hard drive and open your web browser. Select Open a File... from the file menu and open testmap.html.  
Sample Code  
```html
<img src="SAMPLE.GIF" usemap="TESTMAP.HTML#COLORMAP"> 
<map name="COLORMAP"> 
  <area shape="rect" coords="24,143,530,179" href="HIT1.htm"> 
  <area shape="rect" coords="22,190,530,220" href="HIT2.htm"> 
  <area shape="rect" coords="23,233,530,263" href="HIT3.htm"> 
</map> 
```  

## Use Client Side Image Maps to Make Clickable Images  
- Building your Own Maps  
- Testing the map definition  
- Sample Code  

An image map can be just about any graphic you want to make "clickable." Each of the items on an image map guide you to other pages of information.   
Client‑side image maps allow you to offer clickable images that don't depend on CGIs, Web servers, HTTP, or your Internet provider. When you create client‑side image maps, or smart maps, you place the map coordinate information directly to your Web documents ‑‑ all the processing then takes place on the PC that views your Web pages. With client‑side image maps, you can offer maps from practically anywhere.  

## Map as a Menu
```html
<IMG src="Specials.gif" width=375 height=356 border=0 usemap="#Specials" ismap>
<MAP name="specials">
  <AREA href="TableOfContents.htm" shape=RECT coords="0,20,65,65">
  <AREA href="Features.htm" shape=RECT coords="65,5,140,65">
  <AREA href="FindArtistName.htm" shape=RECT coords="139,0,214,67">
  <AREA href="NewsStand.htm" shape=RECT coords="216,5,296,65">
  <AREA href="Game.htm" shape=RECT coords="297,0,382,65">
  <AREA href="Default.htm" shape=RECT coords="440,0,505,65">
</MAP>
```

## Map with Coordinates
```html
<IMG src="SAMPLE.GIF" usemap="TESTMAP.HTML#COLORMAP"> 
<MAP name="COLORMAP"> 
  <AREA shape="rect" coords="24,143,530,179" href="HIT1.htm"> 
  <AREA shape="rect" coords="22,190,530,220" href="HIT2.htm"> 
  <AREA hape="rect" coords="23,233,530,263" href="HIT3.htm"> 
</MAP> 
```



 
