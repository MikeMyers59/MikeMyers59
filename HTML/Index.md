# Index for HTML Folder

This folder contains HTML notes, snippets ans examples.

## Referencing File locations in HTML
| File Location | Source Call |
| ---- | ---- |
| Current Directory | src="<FileName>" |
| Current Directory’s subdirectory “scripts” | src="/scripts/<FileName>” |
| Parent’s “src” Subdirectory | src="../src/<FileName>” |

## Troubleshooting & Testing HTML with Browser Console

Use ```console.log()``` to add output data to the console to check process steps.

For XML try these checks to compare output:
- console.log(xml.toXMLString())
- console.log(xml.toString()) 

