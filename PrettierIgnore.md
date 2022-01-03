# Prettier Ignore File

- [Prettier](https://prettier.io/)
- [Prettier Ignores](https://prettier.io/docs/en/ignore.html)  
- `.prettierignore`:  works just like a `.gitignore`

To exclude files from formatting, create a .prettierignore file in the root of your project. .prettierignore uses gitignore syntax.

This way you can run prettier --write . to make sure that everything is formatted (without mangling files you don’t want, or choking on generated files). And – your editor will know which files not to format!

A properly formatted comment will exclude the next node in the abstract syntax tree from formatting. 

A list of propely formaatted comments:
| Language | Comment |  
| --- | --- |  
| CSS  | `/* prettier-ignore */` |  
| HTML  | `<!-- prettier-ignore -->` |  
| JavaScript  | `// prettier-ignore` |  
| JSX  | `{/* prettier-ignore */}` |  
| Markdown  | `<!-- prettier-ignore -->` |  
| YAML | `# prettier-ignore` |

## Extreme Example
```
# PRETTIER SUCKS AND IS NOT ALLOWED TO RUN IN THIS PROJECT
# This file is here to make sure Prettier does NOT change anything to this project!
# The Prettier rules suck major ass and makes code look worse than if you practice
# good code ethics yourself. Learn to fucking code! Do NOT remove this ignore file,
# or you will be shot, fired, kicked, deleted and terminated!

# Ignore common extensions
*.asp
*.aspx
*.bundle.js
*.bundle.js.map
*.bundle.min.js
*.bundle.min.js.map
*.cgi
*.config
*.cshtml
*.css
*.css.map
*.dhtml
*.editorconfig
*.fcgi
*.gitignore
*.htaccess
*.htm
*.html
*.inc
*.js
*.js.map
*.json
*.less
*.md
*.min.js
*.min.js.map
*.node
*.php
*.php2
*.php3
*.php4
*.php5
*.rss
*.sass
*.scss
*.shtml
*.ssi
*.txt
*.xhtm
*.xhtml
*.xml

# Ignore other extensions
*.a4p
*.a5w
*.adr
*.aex
*.alx
*.an
*.ap
*.appcache
*.aro
*.asa
*.asax
*.ascx
*.ashx
*.asmx
*.asr
*.atom
*.att
*.awm
*.axd
*.bml
*.bok
*.br
*.browser
*.btapp
*.bwp
*.ccbjs
*.cdf
*.cer
*.cfm
*.cfml
*.cha
*.chat
*.chm
*.cms
*.codasite
*.compressed
*.con
*.cpg
*.cphd
*.crdownload
*.crl
*.crt
*.csp
*.csr
*.dap
*.dbm
*.der
*.dcr
*.disco
*.discomap
*.dll
*.dml
*.do
*.dochtml
*.docmhtml
*.dothtml
*.download
*.dwt
*.ece
*.edge
*.epibrw
*.esproj
*.ewp
*.faces
*.fcgi
*.freeway
*.fwp
*.fwtb
*.fwtemplate
*.fwtemplateb
*.fmp
*.gne
*.gsp
*.h5p
*.har
*.hdm
*.hdml
*.htc
*.htx
*.hxs
*.hype
*.hypersources
*.hypetemplate
*.hypesymbol
*.idc
*.iqy
*.itms
*.itpc
*.iwdgt
*.jcz
*.jhtml
*.jnlp
*.jsonl
*.jsp
*.jspa
*.jspx
*.jss
*.jst
*.jvs
*.jws
*.kcmsf
*.key
*.kit
*.lasso
*.lbc
*.maff
*.map
*.mapx
*.master
*.mht
*.mhtml
*.mjs
*.moz
*.mspx
*.muse
*.mvc
*.mvr
*.ndjson
*.nod
*.nzb
*.nxg
*.obml
*.obml15
*.obml16
*.ognc
*.olp
*.opml
*.oth
*.p12
*.p7
*.p7b
*.p7c
*.pac
*.page
*.pem
*.phtm
*.phtml
*.ppthtml
*.pptmhtml
*.prf
*.pro
*.psp
*.ptw
*.pub
*.qam
*.qbo
*.qbx
*.qf
*.qrm
*.rflw
*.rhtml
*.rjs
*.rt
*.rw3
*.rwp
*.rwsw
*.rwtheme
*.saveddeck
*.sdb
*.seam
*.sht
*.shtm
*.site
*.sitemap
*.sites
*.sites2
*.sparkle
*.spc
*.srf
*.ssp
*.stc
*.stl
*.stm
*.stml
*.stp
*.strm
*.suck
*.svc
*.svr
*.swz
*.tpl
*.tvpi
*.tvvi
*.ucf
*.uhtml
*.url
*.vbd
*.vbhtml
*.vdw
*.vlp
*.vrml
*.vrt
*.vsdisco
*.wbs
*.wbxml
*.wdgt
*.web
*.webarchive
*.webarchivexml
*.webbookmark
*.webhistory
*.webloc
*.website
*.wgp
*.wgt
*.whitt
*.widget
*.wml
*.wn
*.woa
*.wpp
*.wpx
*.wsdl
*.xbel
*.xbl
*.xd
*.xfdl
*.xht
*.xpd
*.xss
*.xul
*.xws
*.zfo
*.zhtml
*.zul
*.zvz

# Ignore images (when inadvertently opened by user)
*.gif
*.jpeg
*.jpg
*.png
*.svg
*.tif
*.tiff

# Ignore fonts (when inadvertently opened by user)
*.eot
*.svg
*.ttf
*.woff
*.woff2

# Ignore folders (** = infinite depth)
.git/**
.history/**
.sass-cache/**
.vscode/**
download/**
node_modules/**
template/**
template/public/**
template/src/**

# Ignore all
# Put as last rule, because Prettier may ignore this (according to reviews online)
/*
```
