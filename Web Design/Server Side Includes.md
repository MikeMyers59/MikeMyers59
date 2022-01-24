# Server Side Includes (SSI)

`<!--#config timefmt="%Y" --> `      - what does it do?
`<!--#config timefmt="%A, %B %d, %Y"-->`

`<!--#include virtual="/homepages/organizations/OMTweb/footer.html" -->`

`<!--[if { lt | lte | gte | gt | ! | none } mso { 9 | 10 | none }]--> … <!--[endif]-->`
`<!--[if { lt | lte | gte | gt | ! | none } ppt]--> … <!--[endif]-->`
`<!--[if { lt | lte | gte | gt | ! | none } IE { 7 | 8 | 9 }]> … <!--[endif]-->`

REMOTE_USER:  `<!--#echo var="REMOTE_USER" -->`

Current Time:  `<!--#echo var="DATE_LOCAL"-->`

Last Updated:  `<!--#echo var="LAST_MODIFIED" -->`  - does it work???

