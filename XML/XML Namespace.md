# XML Namespace

A mechanism that allows developers to uniquely qualify the element names and relationships and to make these names recognizable. By doing so, they can avoid name collisions on elements that have the same name but are defined in different vocabularies. They allow tags from multiple namespaces to be mixed, which is essential if data is coming from multiple sources. Namespaces ensure that element names do not conflict, and clarify who defined which term.  

A namespace identifies an XML vocabulary defined within a URN. An attribute on an element, attribute, or entity reference associates a short name with the URN that defines the namespace; that short name is then used as a prefix to the element, attribute, or entity reference name to uniquely identify the namespace. Namespace references have scope. All child nodes beneath the node that specifies the namespace inherit that namespace. This allows nonqualified names to use the default namespace. See also RDF namespace.

#### What Is an XML Namespace?  

An XML namespace is a collection of names that can be used as element or attribute names in an XML document. The namespace qualifies element names uniquely on the Web in order to avoid conflicts between elements with the same name. The namespace is identified by some Uniform Resource Identifier (URI), either a Uniform Resource Locator (URL), or a Uniform Resource Name (URN), but it doesn't matter what, if anything, it points to. URIs are used simply because they are globally unique across the Internet.

Namespaces can be declared either explicitly or by default. With an explicit declaration, you define a shorthand, or prefix, to substitute for the full name of the namespace. You use this prefix to qualify elements belonging to that namespace. Explicit declarations are useful when a node contains elements from different namespaces. A default declaration declares a namespace to be used for all elements within its scope, and a prefix is not used.

#### How Do I Declare an Explicit Namespace?

The following explicit declaration declares bk and money to be shorthand for the full names of their respective namespaces. The xmlns attribute is an XML keyword for a namespace declaration.
```xml
<BOOKS>  
  <bk:BOOK xmlns:bk="urn:example.microsoft.com:BookInfo"  
           xmlns:money="urn:Finance:Money">  
    <bk:TITLE>Creepy Crawlies</bk:TITLE>  
    <bk:PRICE money:currency="US Dollar">22.95</bk:PRICE>  
  </bk:BOOK>  
</BOOKS>  
```
### How Do I Declare a Default Namespace?

A namespace declared without a prefix becomes the default namespace for the document. All elements and attributes in the document that do not have a prefix will then belong to the default namespace. The following example declares that the <BOOK> element and all elements and attributes within it (<TITLE>, <PRICE>, currency) are from the namespace urn:example.microsoft.com:BookInfo.
```xml
<BOOK xmlns="urn:example.microsoft.com:BookInfo">
  <TITLE>Creepy Crawlies</TITLE>
  <PRICE currency="US Dollar">22.95</PRICE>
</BOOK>![image](https://user-images.githubusercontent.com/95873583/145896848-a8201b16-0600-4f56-bb19-98b5b2987e6f.png)
```
  
