# CDATA

CDATA sections provide a way to tell the parser that there is no markup in the characters contained by the CDATA section. This makes it much easier to create documents containing sections where markup characters might appear, but where no markup is intended. CDATA sections are commonly used for scripting language content and sample XML and HTML content.

CDATA sections are used to escape blocks of text containing characters which would otherwise be recognized as markup. CDATA sections begin with the string `<![CDATA[ and end with the string ]]>`. The string ]]> must not occur inside CDATA section.

#### CDATA Block
A CDATA section starts with `<![CDATA[" and ends with "]]>`:

```xml
<![CDATA[
  <PlainTextData>
]]>
```

The CDATA section in the document map uses the following syntax.
```HTML
<![CDATA[An in-depth look at creating applications with XML, using <, >,]]>
<![CDATA[  
  This is a multiline example.
]]>
```
