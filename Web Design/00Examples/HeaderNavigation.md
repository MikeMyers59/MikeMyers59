# Header Navigation.

```html
<HEADER class="main">
  <DIV class="wrapper">
    <H1><A class="logo" href="#">Title Header</A></H1>
    <NAV>
      <A class="false" href="#">Menu Item 1</a>
      <A class="is-full" href="#"> Menu Item 2</A>
      <A class="ss-icon" href="#"> Menu Item 3</A>
    </NAV>
  </DIV>
</HEADER>
```

```css
header {
  display: block;
}
header.main{
  padding-top: 50px;
  height: 144px;
  position: relative;
  z-index: 99;
}
header.main nav {
  width: 64.285714285%
  float: right;
  padding-top: 2px
}
header.main span {
  position:relative
}
header.main span a {
  display:inline-block;
  margin:0;
  position:relative;
  z-index:1
}
header nav {
  text-align:right
}
header nav a, header nav span {
  margin-left:06.142857142%
}
header nav a {
  font-weight: 500;
  border-bottom: 2px solid transparent;
}
header nav .is-full,footer nav .is-full{
  color:#3bc492
}
header nav .is-full:hover,footer nav .is-full:hover{
  color:#30a884
}
header nav .ss-icon {
  color: #ccc;
  border-bottom: 0;
  vertical-align: middle;
}
header nav .ss-icon:hover {
  color: #34343f
}
.logo{
  background:url("//cdn.symbolset.com/images/logo.svg") no-repeat center;
  background-size:100%;
  border-bottom:0;
  display:inline-block;
  float:left;
  height:39px;
  opacity:1;
  width:172px;
}
.logo:hover{
  border:none;
  opacity:0.9;
}
.wrapper {
  zoom:1;
  width:100%;
  max-width:1048px;
  margin:auto;
  padding:0 20px;
}
.wrapper:before,.wrapper:after {
  content:"";
  display:table;
}
.wrapper:after {
  clear:both;
}
@media only screen and (max-width: 460px) {
  header.main nav {font-size:14px}
}

@media only screen and (max-width: 500px) {
  header nav a,header nav span {margin-left:4%}
}

@media only screen and (max-width: 700px) {
  header.main nav {width:100%;margin-right:0}
}

@media only screen and (max-width: 705px) {
  header nav a:first-child,header nav span:first-child {margin-left:0}
  header.main {height:auto;padding:20px 0;text-align:center}
  header.main nav {float:none;width:auto;text-align:center}
  .logo {float:none}
}

@media only screen and (max-width: 850px){
  header.main nav{font-size:18px}
}
```

**Note**: false as a class is not used!

