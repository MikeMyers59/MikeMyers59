# SharePoint Page Notes

![The SP Page](TheSPPage.png)
Key: 
  sic = Space Information Center
  fsi = favorite-space-icon


#### Breadcrumbs Horizontal Menu
```html
<div id="breadcrumb-section">  
  <ol id="breadcrumbs" aria-label="Breadcrumbs">
    <li class="first"><span class=""><a href="#">Pages</a></span></li>
    <li><span class=""><a href="#">Mikey’s Home</a></span></li>
  </ol>
</div>
```

#### Create a Right Side Drop Down Menu as part of the Content Section
```html
<DIV id="action-menu" class="aui-dropdown2 aui-style-default aui-layer most-right-menu-item" aria-hidden="true" resolved="" tabindex="-1">

<div class="aui-dropdown2-section">
  <ul id="action-menu-workflowToolsActions" class="section-workflowToolsActions first">
    <MenuList>
  </ul>
</div>
<div class="aui-dropdown2-section">
  <ul id="action-menu-primary" class="section-primary">
    <MenuList>
  </ul>
</div>
<div class="aui-dropdown2-section">
  <ul id="action-menu-secondary" class="section-secondary">
    <MenuList>
  </ul>
</div>
<div class="aui-dropdown2-section">
  <ul id="action-menu-label-tool" class="section-label-tool">
    <MenuList>
  </ul>
</div>
<div class="aui-dropdown2-section">
  <ul id="action-menu-modify" class="section-modify">
    <MenuList>
  </ul>
</div>

</DIV>
```

#### Create a Navigation Bar
```html
<div id="navbar1">
 <ul class="navbar">
 </ul>
</div>

<NAV id="navbar" class="navbar">
  <div class="dropdown_2columns">  <!-- Begin 2 columns container -->
    <div class="col_2"> </div>
    <div class="col_2"> </div>
  </div>  <!-- End 2 columns container -->
</NAV>
```

#### Create a Side Bar Container
```html
<DIV id="sidebar-container">
</DIV><!-- \#sidebar-container -->
```

#### Create a Vertical Drop Down Menu (Placed in same DIV as title or Icon)
```html
<nav id="user-menu-link-content" class="aui-dropdown2 aui-style-default aui-layer" aria-hidden="true" resolved="" tabindex="-1">
  <div class="aui-dropdown2-section"> <!-- Used to segment areas in dropdown menu -->
    <ul id="user-menu-link-user-preferences" class="aui-list-truncate section-user-preferences first">
      <li><a id="create-personal-space-link" href="https://#" class="   user-item personal-space create-personal-space-link " title="">Add personal space...</a></li>
    </ul>
  </div>
  <div class="aui-dropdown2-section"> <!-- Used to segment areas in dropdown menu -->
    <ul id="user-menu-link-user-preferences" class="aui-list-truncate section-user-preferences first">
      <li><a id="create-personal-space-link" href="#" class="   user-item personal-space create-personal-space-link " title="">Add more personal space...</a></li>
    </ul>
  </div>
</nav>
```

#### Horizontal Buttons
```html
<section role="dialog" id="quit-editor-dialog" class="aui-layer aui-dialog2 aui-dialog2-medium">
<header class="aui-dialog2-header"></header>
<div class="aui-dialog2-content"></div>
<footer class="aui-dialog2-footer">
  <div class="aui-dialog2-footer-actions">
    <button id="qed-publish-button" class="aui-button aui-button-primary update" resolved="">Update</button>
    <button id="qed-discard-button" title="Discard all unpublished changes" class="aui-button toolbar-item exit" resolved="">Revert page</button>
    <button id="qed-save-exit-button" class="aui-button aui-button-primary exit" resolved="">Keep draft</button><button id="qed-close-button" class="aui-button toolbar-item" resolved="">Close</button>
  </div>
</footer>
</section>
```

## Horizontal Footer
#footer defines this as a horizontal list.
```html
<div id="footer" role="contentinfo" style="margin-left: 285px;">
<section class="footer-body">
<ul id="poweredby">
  <li class="noprint">Powered by a Confluence</a></li>
  <li class="print-only">Printed by a Confluence</li>
  <li class="noprint">Report a bug</li>
  <li class="noprint"><a href="#" class="hover-footer-link" rel="nofollow">Some News</a></li>
  <li class="noprint"><a href="#" target="_blank">Go Home &amp; Get Support</a></li>
</ul>
</section>
</div> <!- End of Horizontal Footer -->
```

## Create a Help Drop Down Menu
```html
<a id="help-menu-link" class="aui-nav-link aui-dropdown2-trigger aui-dropdown2-trigger-arrowless" href="#" aria-haspopup="true" title="Help" resolved="" aria-controls="help-menu-link-content" aria-expanded="false">Help</a>
<!-- The Menu -->
<nav id="help-menu-link-content" class="aui-dropdown2 aui-style-default aui-layer" resolved="" tabindex="-1">
  <div class="aui-dropdown2-section">
    <ul id="help-menu-link-leading" class="aui-list-truncate section-leading first">
      <li><a id="confluence-help-link" href="https://docs.atlassian.com/confluence/docs-714/" class="    " title="Visit the Confluence documentation home" target="_blank">Online Help</a></li>
      <li><a id="keyboard-shortcuts-link" href="#" class="    " title="View available keyboard shortcuts (Type '?')">Keyboard Shortcuts</a></li>
      <li><a id="feed-builder-link" href="https://wiki.navsea.navy.mil/dashboard/configurerssfeed.action" class="    " title="Create your custom RSS feed.">Feed Builder</a></li>
      <li><a id="whats-new-menu-link" href="https://confluence.atlassian.com/display/DOC/Confluence+7.14+Release+Notes" class="    " title="">What’s new</a></li>
      <li><a id="gadget-directory-link" href="#" class="   user-item administration-link " title="Browse gadgets provided by Confluence">Available Gadgets</a></li>
      <li><a id="confluence-about-link" href="https://wiki.navsea.navy.mil/aboutconfluencepage.action" class="    " title="Get more information about Confluence">About Confluence</a></li>
    </ul>
  </div>
</nav> <! End of the Menu -->
```

## iFrame Container (in Main)
```html
<div id="content" class="space space-approvals workflow-collector">
  <div id="cw-space-workflows-report">
    <div id="cwreport-iframe" class="cml-iframe-wrapper">
      <iframe allowtransparency="true" src="/iframe.htm" id="cwreport-iframe_iframe" scrolling="no" class="cml-iframe" width="100%" height="600" frameborder="0"></iframe>
    </div>
  </div>
</div>
```

## Side Bar Header
Displays the avatar & user’s name
```html
<DIV class="acs-side-bar-space-info tipsy-enabled">

<div class="avatar">
  <div class="space-logo">
    <div class="avatar-img-container">
      <div class="avatar-img-wrapper">
        <a href="#" title="Mikey">
          <img class="avatar-img" src="images/user-avatar.jpg" alt="Mikey">
        </a>
      </div>
    </div>
  </div>
</div>

<div class="space-information-container">
<div class="name">
  <a href="#" title="Mikey's">Mikey's</a>
</div>
</div>

</DIV>
```

