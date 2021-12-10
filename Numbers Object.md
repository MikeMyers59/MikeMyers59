# Number Object

## Number Systems

| Number System | Notation | Characters Used |  
| ---- | ---- | ---- |  
| Decimal (base 10) | A normal integer without a leading 0 (zero) (e.g., 752) | ```0 1 2 3 4 5 6 7 8 9``` |  
| Binary (base 2) |  | ``` 0 1 ``` |
| Octal (base 8) | An integer with a leading 0 (zero) (e.g., 056) |  ```0 1 2 3 4 5 6 7``` |  
| Hexadecimal (base 16) | An integer with a leading 0x or 0X (e.g., 0x5F or 0XC72) |  ```0 1 2 3 4 5 6 7 8 9 A B C D E F``` | 
| Roman |  | ```I V X L C M D``` |  

#### Convert Hexadecimal to Decimal
Requires: 
- arrHextoInt

```javascript
  function HextoDec(inColor, inIndex) {
    var i = arrHexToInt[inColor.substring(inIndex, inIndex + 1)];
    var j = arrHexToInt[inColor.substring(inIndex + 1, inIndex + 2)];
    return (i * 16) + (j * 1);
  }
```
