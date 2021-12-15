# OneNote Object Model

- OneNote uses a simple object model of nested hierarchical objects.

The base object is the `Notebook` which contain `SectionGroups` and `Section` objects which in turn contain `Page` objects.

- Page contain the actual note information including text, image, lists, table and other formatted content.
- Page itself is further decomposed into a hierachical structure containing page object `OEChildren` elements.
- Each Page specifies a `Title` and a `PageLevel`.
- Each OEChildren can further contain:
  - Text
  - List
  - Table
  - Image
  - Further OEChildren elements.
- Formatted text is maintained as CDATA HTML content.
- A table is specified with the following format:
```xml
Table:
<one:OE>
    <one:Table>
    <one:Columns>
        <one:Column index=0 width=>
        <one:Column index=n width=>
    </one:Columns>
    <one:Row>
        <one:Cell>
            <one:T>
        <one:Cell>
    </one:Row>
```

## OneNote object model synopsis:
```xml
Notebook
    SectionGroup
        SectionGroup
        Section
    Section
        Page
            OEChildren
```

