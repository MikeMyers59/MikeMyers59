# Page Header

## HTML with CSS
```css
.pageheader {
    min-width: 50%;
	max-width: 90%;
	margin-left:auto;
	margin-right:auto;
	margin-top: 10px;
	margin-bottom: 10px;
	border-style: solid;
	border-width: 1px;
	border-bottom-width: 3px;
	border-color: #dddddd;
	background-color:#FFFFFF;
	padding-left: 5px;
	padding-right: 5px;
}
.pagetitle {
	font-size: 2.25em;
	font-family: Arial;
	text-align: center;
}
```

```html
<div class="pageheader">
  <h1 id="pagetitle" class="pagetitle">The Title</h1>
</div>
```

```javascript
<script>
  document.getElementById('pagetitle').innerText = document.title;
</script>
```

