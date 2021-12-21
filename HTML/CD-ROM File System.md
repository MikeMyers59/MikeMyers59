# CD-ROM File System

## Creating File Shortcuts on CD-ROM
I have pictures from nine families that I want to put on a CD. I've given each family its own folder. Many of the pictures have members of multiple families in them. I'd like to put copies of those in each folder but that puts me over the capacity of a CD. If I put a picture file in one folder, is there a way to put a pointer or shortcut to it in the other folders? It's easy on a PC, but when I burn a disc, the shortcuts still point to the PC drive where the original file is located.

Using regular file shortcuts will cause problems. Even if you create shortcuts pointing to the files already on the CD and then burned those shortcuts, you have a problem when the recipient's CD drive isn't assigned to the same letter as yours. Instead, try creating a very simple HTML file containing relative links to all the photos. You can place this file in the root directory of the CD, so that all recipients can use it as an index to the entire CD, or you can create separate index files for each family. You can create the HTML file using Notepad. Assuming you have laid out the entire contents of the CD on your hard drive before burning, you can even test the HTML file right on the hard drive. The file might look like this:
```html
<HTML>

<BODY>
  <H1>Family Pictures</H1>
  <H2>Hatfield Family</H2>
  <A HREF="file://wedding\BobCarol.jpg">Bob and Carol wedding</A></P>
  <P><A HREF="file://hatfields\Alice.jpg">Alice</A></P>
  <H2>McCoy Family</H2>
  <P><A HREF="file://wedding\BobCarol.jpg">Carol and Bob wedding</A></P>
  <P><A HREF="file://mccoys\Ted.jpg">Ted</A></P>
</BODY>

</HTML>
```
The figure shows what this index file looks like in Internet Explorer. Just copy the example file, duplicate the lines for individual pictures, and substitute your own filenames. Notice that the file:// links don't include a drive letter. That means they link to files in locations relative to the HTML file's own location. On your hard drive, it might be C:\myphotocd. On the CD drive, it will be D:\ or whatever letter is assigned to that drive.

