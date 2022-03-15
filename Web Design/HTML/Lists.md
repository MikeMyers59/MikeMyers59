# List Elements
| Element|Notes|Roadmap |  
| --- | --- | --- |  
| Definition List||`<DL>`  <BR> `[  <DT>  </DT>` <BR>   `<DD>  </DD>]…` <BR> `</DL>` |  
| Ordered List|class="lower-alpha-bullets" <BR> class="numbered-bullets" <BR> class="upper-roman-bullets"|`<OL>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR> `</OL>` |  
| Unordered List|class="no-bullets" <BR> class="circle-bullets" <BR> class="square-bullets"|`<UL>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR>   `<LI>  </LI>` <BR> `</UL>` |  

## Remove Gaps in Lists  
Gap between list items – its the most annoying bug for internet explorer.  
You can remove it if you clean all spaces between li and ul elements, o you can just comment those spaces like in example below.  
```html
<ul id="navigation"><!-- 
    --><li><a href="">Sign up</a></li><!-- 
    --><li><a href="">Orders</a><!-- 
        --><ul><!-- 
            --><li><a href="">Dashboard</a></li><!-- 
            --><li><a href="">Order list</a></li><!-- 
        --></ul><!-- 
    --></li><!-- 
    --><li><a href=""><span><span>My account</span></span></a><!-- 
        --><ul><!-- 
            --><li><a href="">Dashboard</a></li><!-- 
            --><li><a href="">Profile</a></li><!-- 
            --><li><a href="">Change password</a></li><!-- 
        --></ul><!-- 
    --></li><!-- 
--></ul> 
```

