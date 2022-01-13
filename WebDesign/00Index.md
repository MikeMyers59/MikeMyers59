# Web Design

## CSS: Cascade Style Sheets

#### Adapting to Media Size
```html
/*  Mobile  */
@media screen (max-width: 767px) {
  <Adaptive CSS Script>
}
/*  Tablet  */
@media screen and (min-width: 768px) and (max-width: 1199px) {
  <Adaptive CSS Script>
}
/*  Tablet and Laptop/Desktop  */
@media screen and (min-width: 768px) {
  <Adaptive CSS Script>
}
/*   Laptop/Desktop  */
@media screen and (min-width: 1200px) {
}
```

### Pseudo Selectors
| Selector | Description | Example |  
| --- | --- | --- |  
| :after |  |  |  
| :before  |  |  |   
| :checked  |  |  |   
| :first-of-type  |  |  |   
| :focus  |  |  |   
| :hover  |  |  |   
| :not(<Selector>)  |  |  |   
| :nth-of-type(\<IndexNumber> \| even \| odd)  |  | `#table1 .col:nth-child(even)` |   
| :visited |  |  |  |  

## Handling Measurements

#### Base for Modular Font Scale
| Pixel(px) | EM(em) |  
| --:| --: |  
| 2 | 0.125 |  
| 4 | 0.250 |  
| 8 | 0.500 |  
| 12 | 0.750 |  
| 14 | 0.875 |  
| 16 | 1.000 |  
| 20 | 1.250 |  
| 32 | 2.000 |  
| 36 | 2.250 |  
| 64 | 4.000 |  
| 128 | 8.000 |  
| 256 | 16.000 |  
| 512 | 32.000 |  
  
## Examples

#### Simple.css

| Area | List | 
| -- | -- |  
| Background Color | .black  <BR> .white  <BR> .red  <BR> .green  <BR> .blue  |  
| Borders | .rounded-corners <BR> .shadow |  
| Margins & Padding | .margins0 <BR> .margins5 <BR> .padding0 <BR> .padding5 |  
| Text Color | .blacktext  <BR> .whitetext  <BR> .redtext  <BR> .greentext  <BR> .bluetext |  
| Text Style | .lowercase <BR> .uppercase <BR> .monospace <BR> .textcenter  <BR> .textitalic <BR> .textleft  <BR> .textright  <BR> .textstrong |  
| Vertical Alignment | .vabottom <BR> .vamiddle <BR> .vatop |  
