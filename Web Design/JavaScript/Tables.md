# Handling Tables in JavaScript

```javascript
// returns the THEAD element of the summary table
function getTableHeader() {
  return getTable().querySelector('thead tr');
}
// returns the TBODY element of the summary table
function getTableBody() {
  return getTable().querySelector('tbody');
}
// returns the TH element for nth column
function getNthColumn(n) {
  return getTableHeader().querySelectorAll('th')[n];
}
    // loads all columns
function loadColumns() {
  var colNodes = getTableHeader().querySelectorAll('th'),
    colNode,
    cols = [],
    col,
    i;

  for (i = 0; i < colNodes.length; i += 1) {
    colNode = colNodes[i];
    col = {
      key: colNode.getAttribute('data-col'),
      sortable: !colNode.getAttribute('data-nosort'),
      type: colNode.getAttribute('data-type') || 'string'
    };
    cols.push(col);
    if (col.sortable) {
      col.defaultDescSort = col.type === 'number';
      colNode.innerHTML =
        colNode.innerHTML + '<span class="sorter"></span>';
    }
  }
  return cols;
}
```

