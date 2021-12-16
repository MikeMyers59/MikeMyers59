# CSS: Cascade Style Sheets

This folder contains CSS notes, snippets and example code.

CSS is a container of Rules that modify the browser display of elements.

The Rule: Each rule has exactly two parts:

-	a selector that defines the HTML element(s) to which the rule applies
-	a collection of one or more properties, which describes the appearance of all elements in the document that match the selector.

**Note**: An HTML element can belong to multiple classes if you wish, simply by listing the classes (separated by spaces) in the class attribute. 

**Note**: Element IDs are required to be unique and for a single instance.

#### CSS Implementation
Style can be implemented in three ways: Internal, Inline and External.

###### Internal (Anywhere in document)
```css
<style type="text/css">
<CSSRules>
</style>
```

###### In Line
```css
<<ElementName> style=<RuleList>>
```

###### External (In head Section only)
```css
<link href="<FilePathName>" rel="stylesheet" type="text/css" />
```

#### CSS Rules

CSS Rule for a Paragraph![CSS P Rule](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/CSS%20Rule%20Example.png)
```css
<STYLE type="text/css"> 
p {
  font-weight: bold;
  color: blue; 
}
</STYLE>
```

#### Selector Format
```css
<ElementName>
<ElementName>.<ClassName>
.<ClassName>
#<IdentificationName>
```

#### The Box Model
The Box![The CSS Box Model](https://github.com/MikeMyers59/MikeMyers59/blob/main/00Pics/CSS%20Box%20Model.png)  
**Note**: The visible width of the box is determined by adding together the content width, the padding and the border.


## CSS Constants
|Constants|Description|Value|Type |
| --- | --- | --- | --- |  
| dashed|||border-style |
| dotted|||border-style |
| double|||border-style |
| groove|||border-style |
| hidden|||border-style |
| inset|||border-style |
| none|||border-style |
| display |
| text decoration |
| outset|||border-style |
| ridge|||border-style |
| solid|Default||border-style |
| aqua|||color |
| black||#000000|color |
| blue||#0000FF|color |
| gray||#808080|color |
| green||#00FF00|color |
| navy|||color |
| purple|||color |
| red||#FF0000|color |
| silver||#C0C0C0|color |
| white||#FFFFFF|color |
| yellow|||color |
| block|override for inline elements||display |
| inline|override for block elements||display |
| list-item|||display |
| table-footer-group|||display |
| table-header-group|||display |
| large |||font size |
| medium |||font size |
| small |||font size |
| x-large |||font size |
| x-small |||font size |
| xx-large|||font size |
| xx-small |||font size |
| italic|||font style |
| normal|||font style |
| font weight |
| bold|||font weight |
| circle|||list-style-type |
| disc|||list-style-type |
| none|||list-style-type |
| square|||list-style-type |
| absolute|||position |
| relative|||position |
| 999%|percentage||size |
| 999em|||size |
| 999ex|||size |
| 999pt|points||size |
| 999px|pixels||size |
| line-through|||text decoration |
| overline|||text decoration |
| underline|||text decoration |
| lowercase|||text-transform |
| uppercase|||text-transform |


## CSS Selectors
| Selector | Description | Example |  
| --- | --- | --- | 
| Universal |  | `*` |
| Single Element |  | `H1` |
| List of Elements | comma separated list | `H1, H2, H3` |
| Attribute |  | `INPUT[type="text"]` |
| Descendant |  | `P SPAN` |
| Parent-Child |  | `BODY > P` |
| Adjacent |  | `P + H3` |
| Class |  | `.ClassName` |
| ID |  | `#ElementID` |
| Element with Pseudo-Element/Psuedo-Class |  | `P:first-line` |
| Combinations |  | `H1.ClassName, P SPAN` |
| Comments |  | `/* <Message> */` |
| Psuedo Class |  | `Hover` <BR> `active` <BR> `focus` <BR> `link` <BR> `visited` <BR> `lang()` |
| Psuedo Elements |  | `first-letter` <BR> `first-line` <BR> `first-child` |
|  |  | `` |


## CSS Examples

#### Drop Cap a Leading Paragraph
```css
P:first-letter {
  font-size: 150%;
}
```

#### Make Borders Bold, Dotted and Purple
```css
.bolddottedborder {
  border-width: 10px;
  border-style: dotted;
  border-color: purple;
}
```

#### Header 1 Reset
```css
H1 {
  font-size: x-large;
  background-color: navy;
  color: white;
  padding-top: 2em;
  padding-bottom: .2em;
  padding-left: .4em;
}
```

