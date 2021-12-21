# Referenecing in HTML

You can include either a full path or a relative path to your file. An image tag containing a full path to a file called smiley.gif might read 
```html
<IMG SRC="../pub/www/users/cwilde/art/smiley.gif"> .
```
The relative path is somewhat easier to work with, particularly if you set up your own personal pages on a Web server and wish to keep your graphics files in a separate directory. In this case, all you need to include is the path to the image file relative to the document that contains the link. For example, if you were to include the smiley.gif file in your home page, `/pub/www/users/cwilde/home.html`, the tag would need to include only the name of the directory and the filename. The relative path image tag 
```html
<IMG SRC="art/smiley.gif"> 
```
is obviously much easier to type, and in this case, achieves the same result as the full path. In this type of path, the `art/` subdirectory or folder must reside inside the `cwilde/` folder or directory. 

You can link to documents in other directories by specifying the relative path from the current document to the linked document. For example, a link to a file NYStats.html located in the subdirectory `AtlanticStates` would be: 
```html
<A HREF=“AtlanticStates/NYStats.html”>New York</A>
```
These are called relative links because you are specifying the path to the linked file relative to the location of the current file. You can also use the absolute pathname (the complete URL) of the file, but relative links are more efficient in accessing a server. 

Pathnames use the standard UNIX syntax. The UNIX syntax for the parent directory (the directory that contains the current directory) is "..". (For more information consult a beginning UNIX reference text such as Learning the UNIX Operating System from O'Reilly and Associates, Inc.) 

If you were in the NYStats.html file and were referring to the original document US.html, your link would look like this: 
```html 
<A HREF=“../US.html”>United States</A>
```
In general, you should use relative links because: 

	1. it's easier to move a group of documents to another location (because the relative path names will still be valid) 
	2. it's more efficient connecting to the server 
	3. there is less to type 
  
However use absolute pathnames when linking to documents that are not directly related. For example, consider a group of documents that comprise a user manual. Links within this group should be relative links. Links to other documents (perhaps a reference to related software) should use full path names. This way if you move the user manual to a different directory, none of the links would have to be updated. 
    
