# Numbers Object

## Examples

### Check if Var is Binary
```vbscript
```

### 
```vbscript
Private Sub CheckBin(varBin As Variant)
 Dim intCtr As Integer
'Check for numeric value
 If Not (IsNumeric(varBin)) Then Err.Raise 13
'Check for valid binary range
 For intCtr = 1 To Len(varBin)
  If Mid(varBin, intCtr, 1) > 1 Then Err.Raise 6
 Next intCtr
'Check for maximum allowable value < 1111111111111111
 If Len(varBin) > 16 Then Err.Raise 6
End Sub
```

### Check if Var is Decimal
```vbscript
Private Sub CheckDec(varDec As Variant)
'Check for numeric value
 If Not (IsNumeric(varDec)) Then Err.Raise 13
'Check for maximum allowable value < 4294967295
 If varDec > 65535 Or varDec < 0 Then Err.Raise 6
End Sub
```

### Check if Var is Hexadecimal
```vbscript
Private Sub CheckHex(varHex As Variant)
 Dim intCtr As Integer, intAsc As Integer
'Check for valid hex range
 For intCtr = 1 To Len(varHex)
  intAsc = Asc(Mid(varHex, intCtr, 1))
  If (intAsc < 48 Or intAsc > 57) And (intAsc < 65 Or intAsc > 70) Then Err.Raise 13
 Next intCtr
'Check for maximum allowable value
 If Len(varHex) > 4 Then Err.Raise 6
End Sub
```

### Check if Var is Octal
```vbscript
Private Sub CheckOct(varOct As Variant)
 Dim intCtr As Integer
'Check for numeric value
 If Not (IsNumeric(varOct)) Then Err.Raise 13
'Check for valid octal range
 For intCtr = 1 To Len(varOct)
  If Mid(varOct, intCtr, 1) > 7 Then Err.Raise 6
 Next intCtr
'Check for maximum allowable value < 177777
 If varOct > 177777 Then Err.Raise 6
End Sub
```

### Check if Var is Roman Numeral
```vbscript
Private Sub CheckRoman(varRoman As Variant)
 Dim intCtr As Integer, char As String
 For intCtr = 1 To Len(varRoman)
  char = UCase(Mid(varRoman, intCtr, 1))
  Select Case char
   Case "I", "V", "X", "L", "C", "D", "M"
   Case Else: Err.Raise 6
  End Select
 Next intCtr
End Sub
```

### Compute Powers of 2
```vbscript
Sub TwoExpo (PowerValue)
  ExpoReturn = 2
  if PowerValue > 1 then 
    for i = 2 to PowerValue
      ExpoReturn = ExpoReturn * 2
    next
    TwoExpo = ExpoReturn
  end if
End Sub
```

### Convert Binary to Decimal
```vbscript
Function Bin2Dec(ByVal strBin As String) As Long
 Dim intCtr As Integer, intPower As Integer
 Bin2Dec = 0
 intPower = 0
 For intCtr = Len(strBin) To 1 Step -1
  Bin2Dec = Bin2Dec + CLng(Mid(strBin, intCtr, 1) * (2 ^ intPower))
  intPower = intPower + 1
 Next intCtr
End Function
```

### Convert Binary to Hexadecimal
```vbscript
Function Bin2Hex(ByVal strBin As String) As String
 Bin2Hex = Dec2Hex(Bin2Dec(strBin))
End Function
```

### Convert Binary to Octal
```vbscript
Function Bin2Oct(ByVal strBin As String) As String
 Bin2Oct = Dec2Oct(Bin2Dec(strBin))
End Function
```

### Convert Decimal to Binary
```vbscript
Private Function Dec2Bin(lngDec As Long) As String
 Dim lngCtr As Integer
 Do
  If (lngDec And 2 ^ lngCtr) = 2 ^ lngCtr Then
   Dec2Bin = "1" & Dec2Bin
  Else
   Dec2Bin = "0" & Dec2Bin
  End If
  lngCtr = lngCtr + 1
 Loop Until CLng(2 ^ lngCtr) > lngDec
End Function
```

### Convert Decimal to Hexadecimal
```vbscript
Function Dec2Hex(lngDec As Long) As String
 Dec2Hex = Hex(lngDec)
End Function
```

### Convert Decimal to Roman Numeral
```vbscript
Function Dec2Roman(ByVal lngNum As Variant) As String
 Const Digits = "IVXLCDM"
 Dim ctr As Integer, intDigit As Integer, _
   strTmp As String
 ctr = 1
 strTmp = ""
 Do While lngNum > 0
  intDigit = lngNum Mod 10
  lngNum = lngNum \ 10
  Select Case intDigit
   Case 1: strTmp = Mid(Digits, ctr, 1) & strTmp
   Case 2: strTmp = Mid(Digits, ctr, 1) & Mid(Digits, ctr, 1) & strTmp
   Case 3: strTmp = Mid(Digits, ctr, 1) & Mid(Digits, ctr, 1) & Mid(Digits, ctr, 1) & strTmp
   Case 4: strTmp = Mid(Digits, ctr, 2) & strTmp
   Case 5: strTmp = Mid(Digits, ctr + 1, 1) & strTmp
   Case 6: strTmp = Mid(Digits, ctr + 1, 1) & Mid(Digits, ctr, 1) & strTmp
   Case 7: strTmp = Mid(Digits, ctr + 1, 1) & Mid(Digits, ctr, 1) & Mid(Digits, ctr, 1) & strTmp
   Case 8: strTmp = Mid(Digits, ctr + 1, 1) & Mid(Digits, ctr, 1) & Mid(Digits, ctr, 1) & Mid(Digits, ctr, 1) & strTmp
   Case 9: strTmp = Mid(Digits, ctr, 1) & Mid(Digits, ctr + 2, 1) & strTmp
  End Select
  ctr = ctr + 2
 Loop
 Num2Roman = strTmp
End Function
```

### Convert Decimal to Binary
```vbscript
Function Dec2Oct(lngDec As Long) As String
 Dec2Oct = Oct(lngDec)
End Function
```

### Convert Hexadecimal to Binary
```vbscript
Private Function Hex2Bin(ByVal strHex As String) As String
 Dim intCtr As Integer
 For intCtr = 1 To Len(strHex)
  Hex2Bin = Hex2Bin & CStr(Dec2Bin(Hex2Dec(Mid(strHex, intCtr, 1))))
 Next intCtr
End Function
```

### Convert Hexadecimal to Decimal
```vbscript
Function Hex2Dec(ByVal strHex As String) As Long
' Check to see if string already begins with &H.
 If Left(strHex, 2) <> "&H" Then strHex = "&H" & strHex
' Check to see if string contains Decimals and strip 
' them out.
 If InStr(1, strHex, ".") Then strHex = Left(strHex, (InStr(1, strHex, ".") - 1))
 Hex2Dec = CLng(strHex)
End Function
```

### Convert Hexadecimal to Octal
```vbscript
Function Hex2Oct(ByVal strHex As String) As String
  Hex2Oct = Dec2Oct(CLng(Hex2Dec(strHex)))
End Function
```

### Convert Octal to Binary
```vbscript
Function Oct2Bin(ByVal strOct As String) As String
  Oct2Bin = Dec2Bin(Oct2Dec(strOct))
End Function
```

### Convert Octal to Decimal
```vbscript
Function Oct2Dec(ByVal strOct As String) As Long
' Check to see if string already begins with &O
 If Left(strOct, 2) <> "&O" Then strOct = "&O" & strOct
' Check to see if string contains Decimals and strip
' them out
 If InStr(1, strOct, ".") Then strOct = Left(strOct, (InStr(1, strOct, ".") - 1))
 Oct2Dec = CLng(strOct)
End Function
```

### Convert Roman to Decimal
```vbscript
Private Function Roman2Dec(strNum As Variant) As Double
 Const Digits = "IVXLCDM"
 Dim ctr As Integer, num As Double, intLen As Integer
 Dim strTmp As String, prevStr As String
 intLen = Len(strNum)
 For ctr = 1 To intLen
  strTmp = UCase(Mid(strNum, ctr, 1))
  Select Case strTmp
   Case "I" '1
    If ctr < intLen Then
     If InStr(1, Digits, Mid(strNum, ctr + 1, 1)) > InStr(1, Digits, strTmp) Then
      num = num - 1
     Else
      num = num + 1
     End If
    Else
     num = num + 1
    End If
   Case "V" '5
    If ctr < intLen Then
     If InStr(1, Digits, Mid(strNum, ctr + 1, 1)) > InStr(1, Digits, strTmp) Then
      num = num - 5
     Else
      num = num + 5
     End If
    Else
     num = num + 5
    End If
   Case "X" '10
    If ctr < intLen Then
     If InStr(1, Digits, Mid(strNum, ctr + 1, 1)) > InStr(1, Digits, strTmp) Then
      num = num - 10
     Else
      num = num + 10
     End If
    Else
     num = num + 10
    End If
   Case "L" '50
    If ctr < intLen Then
     If InStr(1, Digits, Mid(strNum, ctr + 1, 1)) > InStr(1, Digits, strTmp) Then
      num = num - 50
     Else
      num = num + 50
     End If
    Else
     num = num + 50
    End If
   Case "C" '100
    If ctr < intLen Then
     If InStr(1, Digits, Mid(strNum, ctr + 1, 1)) > InStr(1, Digits, strTmp) Then
      num = num - 100
     Else
      num = num + 100
     End If
    Else
     num = num + 100
    End If
   Case "D" '500
    If ctr < intLen Then
     If InStr(1, Digits, Mid(strNum, ctr + 1, 1)) > InStr(1, Digits, strTmp) Then
      num = num - 500
     Else
      num = num + 500
     End If
    Else
     num = num + 500
    End If
   Case "M" '1000
    If ctr < intLen Then
     If InStr(1, Digits, Mid(strNum, ctr + 1, 1)) > InStr(1, Digits, strTmp) Then
      num = num - 1000
     Else
      num = num + 1000
     End If
    Else
     num = num + 1000
    End If
  End Select
 Next ctr
 Roman2Dec = num
End Function
```

