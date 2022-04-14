# A jQuery Plain CSS Drop Down Menu. 
This jQuery based plain css drop down menu is very simple illustration that you don’t need any dramatic coding to achieve simple 2 level menu. CSS drop down menus are based only on Cascading Style Sheet functionality.
This example usesd very simple jQuery plugin which helps with “mouse over” event, and adds/removes some class from some elements.
So take it, use it, recommend it if you like it!

```html
<!DOCTYPE html>
<html> 

<head> 

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> 

<title>Webtoolkit.info jQuery menu</title> 

<style type="text/css"> 
#navigation { 
  font-family: georgia; 
  font-size: 18px; 
  padding: 0px; 
  margin: 0px; 
  list-style-type: none; 
} 
#navigation li { 
  position: relative; 
  float: left; 
  margin: 0px 1px 0px 0px; 
} 

#navigation li a { 
  display: block; 
  padding: 5px 35px; 
  -moz-border-radius-topleft: 5px; 
  -webkit-border-top-left-radius: 5px; 
  -moz-border-radius-topright: 5px; 
  -webkit-border-top-left-right: 5px; 
  background: #cc0000; 
  color: #ffffff; 
  text-decoration: none; 
} 

#navigation li ul { 
  position: absolute; 
  left: 0px; 
  top: 0px; 
  display: none; 
  padding: 0px; 
  margin: 0px; 
  list-style-type: none; 
} 

#navigation li.over { 
  top: 1px; 
} 

#navigation li.over a { 
  background: #009bcc; 
} 

#navigation li.over ul { 
  padding: 5px!important; 
  display: block; 
  background: #009bcc; 
  -moz-border-radius-bottomleft: 5px; 
  -webkit-border-bottom-left-radius: 5px; 
  -moz-border-radius-bottomright: 5px; 
  -webkit-border-bottom-left-right: 5px; 
  -moz-border-radius-topright: 5px; 
  -webkit-border-bottom-top-right: 5px; 
}
 
#navigation li.over ul li { 
  float: none; 
  margin: 0px!important; 
  top: 0px; 
} 

#navigation li.over ul li a { 
  font-size: 14px; 
  padding: 3px 30px; 
  background: none; 
  white-space: nowrap; 
} 

#navigation li.over ul li a:hover { 
  background: #00bbf7; 
  color: #000000; 
  -moz-border-radius: 5px; 
  -webkit-border-radius: 5px; 
} 
</style> 
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script> 

<script type="text/javascript"> 
      (function($){ 
        $.fn.extend({ 
          //plugin name - animatemenu 
          webtoolkitMenu: function(options) { 
            return this.each(function() { 
              //Assign current element to variable, in this case is UL element 
              var obj = $(this); 
              $("li ul", obj).each(function(i) { 
                $(this).css('top', $(this).parent().outerHeight()); 
              }) 
              $("li", obj).hover( 
                function () { $(this).addClass('over'); }, 
                function () { $(this).removeClass('over'); } 
              ); 
            }); 
          } 
        }); 
      })(jQuery); 
      $(document).ready(function() { 
          $('#navigation').webtoolkitMenu(); 
      }); 
    </script> 
  </head> 

<body> 

<ul id="navigation"> 
  <li><a href="">Sign up</a></li> 
  <li><a href="">Orders</a> 
  <ul> 
    <li><a href="">Dashboard</a></li> 
    <li><a href="">Order list</a></li> 
  </ul> 
  </li> 
  <li><a href=""><span><span>My account</span></span></a> 
  <ul> 
    <li><a href="">Dashboard</a></li> 
    <li><a href="">Profile</a></li> 
    <li><a href="">Change password</a></li> 
  </ul> 
  </li> 
</ul> 

</body> 

</html> 
```

