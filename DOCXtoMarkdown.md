# Convert DOCX files to Markdown

1. Use [Pandoc](#PANDOC) an commandline executable.
2. Use Save as HTML in Word, then convert the HTML to Markdown.
3. Use the [Writeage](https://www.writage.com/) add in to Word. (14 Day trial)  Bonus: You can also display/edit markdown files in Word!
4. Use [Mammoth](https://github.com/mwilliamson/mammoth.js). Bouns: This is also an API!

## PANDOC
Pandoc supports conversion from docx to markdown directly:
```dos
pandoc -f docx -t markdown foo.docx -o foo.markdown
```

Several markdown formats are supported:
```dos
-t gfm (GitHub-Flavored Markdown)  
-t markdown_mmd (MultiMarkdown)  
-t markdown (pandoc’s extended Markdown)  
-t markdown_strict (original unextended Markdown)  
-t markdown_phpextra (PHP Markdown Extra)  
-t commonmark (CommonMark Markdown)  
```

To save the images, add the option 
```dos
--extract-media=./
```
to the command above. It will create a folder media with all the images and they will be correctly shown in the markdown file. 

