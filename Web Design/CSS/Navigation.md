# Navigation

## Nav List
Requires the image sprites home, next & preveious
```css
#navlist li {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 0;
}
#navlist li, #navlist a {
  height: 44px;
  display: block;
}
```
Example explained:
- `#navlist {position:relative;}` - position is set to relative to allow absolute positioning inside it  
- `#navlist li {margin:0;padding:0;list-style:none;position:absolute;top:0;}` - margin and padding are set to 0, list-style is removed, and all list items are absolute positioned  
- `#navlist li, #navlist a {height:44px;display:block;}` - the height of all the images are 44px  

```html
<ul id="navlist">
  <li id="home"><a href="#"></a></li>
  <li id="previous"><a href="#"></a></li>
  <li id="next"><a href="#"></a></li>
</ul>
```

