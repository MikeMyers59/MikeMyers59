# Frames in HTML

## Frames Tags
| Tag | Description | Attributes | Examples |  
| --- | --- | --- | --- | 
| `<DL>...</DL>` | definition or glossary list <BR> Note: The \<DT> and \<DD> entries can contain multiple paragraphs (indicated by <P> paragraph tags), lists, or other definition information and are the internal elements of the definition list. |  | `` |  
| `<DT>...</DT>` | A term to be defined (used within definition list) | Compact | `` |  
| `<DD>...</DD>` | Definition of term (used within definition list) |  | `` |  
| `<OL>…</OL>` | Ordered List: Your average ordered list counts 1, 2, 3, etc. The TYPE tag is also added to this element to allow authors to specify whether they want their list items marked with: capital letters |  | `` |  
| `<UL>.../UL>` | Unordered or Bulleted List: Your basic bulleted list has a default progression of bullet types that changes as you move through indented levels. From a solid disc, to a circle to a square. |  | `` |  
| `<LI>...</LI>` | List Item: To give even more flexibility to lists, the TYPE tag is added to the LI element as well. It takes the same values as either UL or OL depending on the type of list you are in, and it changes the list type for that item, and all subsequent items. (used within Ordered or Unordered Lists, Menus and Directories) |  | `` |  

## Ordered List
```html
<OL>
  <LI> oranges
  <LI> peaches
  <LI> grapes
</OL>
```

## Unordered List
```html
<UL>
  <LI>Item 1 
  <LI>Item 2
  <LI>Item 3
</UL>
```

