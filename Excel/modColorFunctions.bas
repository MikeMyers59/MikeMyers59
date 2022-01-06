Attribute VB_Name = "modColorFunctions"
Option Explicit
Option Compare Text
Option Base 1
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' modColorFunctions
' By Chip Pearson, chip@cpearson.com
'       www.cpearson.com
'       This module described at www.cpearson.com/Excel/Colors.aspx
' Date: 24-January-2008.
' Last Update: 13-April-2012
'
' This module contains procedures for working with colors in
' Excel. The following functions are provided:
'       ChooseColorDialog
'           This display a standard Windows color picker
'           dialog and returns the selected RGB Long.
'       ColorIndexesOfRange
'           This returns an array of the color indexes
'           of the interior or font of a specified range.
'       RGBLong
'           This returns the RGB Long Integer from a Red,
'           Blue, and Green color values.
'       ColorIndexOfRGBLong
'           This returns the ColorIndex associated with an
'           RGB color value.
'       RGBLongFromColorIndex
'           This returns the RGB value corresponding to
'           a ColorIndex.
'       ColorIndexOfRange
'           This returns an array of ColorIndex values
'           of a range of cells. The ColorIndex of either
'           the Font property or the Interior property may
'           be used.
'       ColorIndexOfOneCell
'           This returns the ColorIndex of a single cell.
'           The ColorIndex of either the Font property or
'           the Interior property may be used.
'       IsValidColorIndex
'           This indicates whether a value is a valid ColorIndex.
'       RGBComponentsFromRGBLong
'           This returns a 1-base 3-element array contain the
'           component Red, Green, and Blue values of an RGB color.
'       RGBComponentsFromRGBLongToVariables
'           This sets ByRef Long variables to the component
'           Red, Green, and Blue values of an RGB color.
'       IsValidRGBLong
'           This indicates if a Long Integer is a valid RGB color.
'       CountColors
'           This counts the number of cells in a range that have
'           a specified color index.
'           The ColorIndex of either the Font property or
'           the Interior property may be used.
'       SumColors
'           This sums the cells that have a specified color
'           index value. You can specify different ranges
'           for the color test range and the values to sum
'           range (e.g., sum values in C where colum A is red).
'           The ColorIndex of either the Font property or
'           the Interior property may be used.
'       DefaultColorPallet
'           This returns an array of the DEFAULT color values.
'           The array is either a 1-based array of 56 RGB colors
'           or a 0-based array of 57 elements where
'           element 0 = -1 And elements 1 to 56 are RGB colors,'
'           depending on the Option Base of the module that
'           contains the function. Regardless of Option Base,
'           a ColorIndex may be used as an index into the array.
'       DefaultColorNames
'           This returns an array of the DEFAULT US-English
'           color names. These are the same names that appear
'           as control tips in the color drop down for the
'           fill color and text color command buttons. ColorIndex
'           values 1 to 16 and 26 to 56 have names. ColorIndex
'           values from 17 to 25 do not have names. The array
'           is properly based so that a ColorIndex value may
'           be used as the index into the array.
'       IsColorIndexDefault
'           This returns TRUE if color corresponding to the
'           specified ColorIndex is the default Excel color
'           or FALSE if the color corresponding to the specified
'           ColorIndex is not the system default.
'       IsColorPalletDefault
'           This returns TRUE if the color pallet for the specified
'           workbook is unchanged, or FALSE if the color pallet
'           has been changed.
'       ColorName
'           This returns the US-English name of a specified RGB
'           color. The specified RGB color must be present in
'           the Excel Default Pallet, but it is not required
'           that the RGB color reside the same location in the
'           Excel Default Pallet as the location in the current
'           in-use pallet. If no matching RGB color is found,
'           the result is vbNullString. If the color resides
'           in the Excel Default Pallet in locations 17 through
'           25 (inclusive), the result is "UNNAMED". There
'           is no way to get a color name if the RGB color
'           is not a member of the Excel Default Pallet.
'       RangeOfColors
'           This returns a Range object containing the individual
'           cells whose Font or Interior have the specified
'           color index.
'
'
' In all functions, ColorIndex is a value between 1 and 56
' (inclusive) or xlColorIndexNone or xlColorIndexAutomatic.
' RGBLong is a Long Integer between &H00000000 and &H00FFFFFF.
' An RGB color is stored in a 8-byte Long Integer, having bytes
' equal to, left to right:
'   ||00|BB|GG|RR||
'   where BB are the Blue bytes, GG are the Green bytes, and
'   RR are the Red bytes.
'
' NOTE: These functions are designed for the Excel 97/2003
' version of Excel. Therefore, they work only with Excel's
' 56 color pallet. It does not cover colors or theme colors.
' It uses the ColorIndex property to work with the 56 color
' pallet.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Public Const C_RGB_RED As Long = &HFF&
Public Const C_RGB_GREEN As Long = &HFF00&
Public Const C_RGB_BLUE As Long = &HFF0000
Public Const C_RGB_WHITE As Long = &HFFFFFF
Public Const C_RGB_BLACK As Long = &H0&
Public Const C_MIN_COLOR_INDEX = 1
Public Const C_MAX_COLOR_INDEX = 56
Public Const C_MIN_RGB = C_RGB_BLACK
Public Const C_MAX_RGB = C_RGB_WHITE
Public Const C_SHIFT_ONE_BYTE = &H100&
Public Const C_SHIFT_TWO_BYTES = &H10000


Private Declare Function GetActiveWindow Lib "user32.dll" () As Long
Private Declare Function ChooseColorDlg Lib "comdlg32.dll" Alias "ChooseColorA" ( _
    pChoosecolor As CHOOSECOLOR) As Long


Private Const CC_RGBINIT = &H1&
Private Const CC_FULLOPEN = &H2&
Private Const CC_PREVENTFULLOPEN = &H4&
Private Const CC_SHOWHELP = &H8&
Private Const CC_ENABLEHOOK = &H10&
Private Const CC_ENABLETEMPLATE = &H20&
Private Const CC_ENABLETEMPLATEHANDLE = &H40&
Private Const CC_SOLIDCOLOR = &H80&
Private Const CC_ANYCOLOR = &H100&


Private Type CHOOSECOLOR
    lStructSize As Long
    hwndOwner As Long
    hInstance As Long
    rgbResult As Long
    lpCustColors As Long
    flags As Long
    lCustData As Long
    lpfnHook As Long
    lpTemplateName As String
End Type


Private dwCustClrs(0 To 15) As Long
Private Init As Boolean

Public Function ChooseColorDialog(DefaultColor As Long) As Long
    Dim lpChoosecolor As CHOOSECOLOR
    With lpChoosecolor
        .lStructSize = Len(lpChoosecolor)
        .hwndOwner = GetActiveWindow
        .rgbResult = DefaultColor
        .lpCustColors = VarPtr(dwCustClrs(0))
        .flags = CC_ANYCOLOR Or CC_RGBINIT Or CC_FULLOPEN
    End With
    If ChooseColorDlg(lpChoosecolor) Then
        ChooseColorDialog = lpChoosecolor.rgbResult
    Else
        ChooseColorDialog = -1
    End If
End Function


Function RGBLong(Red As Long, Green As Long, Blue As Long) As Long
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' RGBLong
' This function returns a Long integer representing the color
' defined by the Red, Green, and Blue values. It returns -1
' if any parameter is not in the range 0 <= V <= 255.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    If (Red < 0) Or (Red > 255) Then
        RGBLong = -1
        Exit Function
    End If
    If (Green < 0) Or (Green > 255) Then
        RGBLong = -1
        Exit Function
    End If
    If (Blue < 0) Or (Blue > 255) Then
        RGBLong = -1
        Exit Function
    End If
    RGBLong = RGB(Red, Green, Blue)
End Function

Function ColorIndexOfRGBLong(RGBLong As Long) As Long
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' ColorIndexOfRGBLong
' This returns the ColorIndex into the color pallet of the
' color represented by RGBLong. It returns -1 if the RGBLong
' is not found in the pallet or if RGBLong is < C_RGB_BLACK or
' greater than C_RGB_WHITE.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim V As Variant
If (RGBLong < C_RGB_BLACK) Or (RGBLong > C_RGB_WHITE) Then
    ColorIndexOfRGBLong = 0
    Exit Function
End If

V = Application.Match(RGBLong, ThisWorkbook.Colors, 0)
If IsError(V) = True Then
    ColorIndexOfRGBLong = 0
Else
    ColorIndexOfRGBLong = CLng(V)
End If

End Function

Function RGBLongFromColorIndex(ColorIndex As Long) As Long
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' RGBLongFromColorIndex
' This returns the RGB Color corresponding to the specified
' ColorIndex. It returns -1 if ColorIndex is not between 1
' and 56.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
If (ColorIndex <= 0) Or (ColorIndex >= 57) Then
    RGBLongFromColorIndex = -1
Else
    RGBLongFromColorIndex = ThisWorkbook.Colors(ColorIndex)
End If
End Function

Function ColorIndexOfRange(InRange As Range, _
    Optional OfText As Boolean = False, _
    Optional DefaultColorIndex As Long = -1) As Variant
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' ColorIndexFromRange
' This function returns an array of values, each of which is
' the ColorIndex of a cell in InRange. If InRange contains both
' multiple rows and multiple columns, the array is two dimensional,
' number of rows x number of columns. If InRange is either a single
' row or a single column, the array is single dimensional. If
' InRange has multiple rows, the array is transposed before
' returning it. The DefaultColorIndex indicates what color
' index to value to substitute for xlColorIndexNone and
' xlColorIndexAutomatic. If OfText is True, the ColorIndex
' of the cell's Font property is returned. If OfText is False
' or omitted, the ColorIndex of the cell's Interior property
' is returned.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Dim Arr() As Long
Dim NumRows As Long
Dim NumCols As Long
Dim RowNdx As Long
Dim ColNdx As Long
Dim CI As Long
Dim Trans As Boolean

Application.Volatile True
If InRange Is Nothing Then
    ColorIndexOfRange = CVErr(xlErrRef)
    Exit Function
End If
If InRange.Areas.Count > 1 Then
    ColorIndexOfRange = CVErr(xlErrRef)
    Exit Function
End If
If (DefaultColorIndex < -1) Or (DefaultColorIndex > 56) Then
    ColorIndexOfRange = CVErr(xlErrValue)
    Exit Function
End If

NumRows = InRange.Rows.Count
NumCols = InRange.Columns.Count

If (NumRows > 1) And (NumCols > 1) Then
    ReDim Arr(1 To NumRows, 1 To NumCols)
    For RowNdx = 1 To NumRows
        For ColNdx = 1 To NumCols
            CI = ColorIndexOfOneCell(Cell:=InRange(RowNdx, ColNdx), _
                OfText:=OfText, DefaultColorIndex:=DefaultColorIndex)
            Arr(RowNdx, ColNdx) = CI
        Next ColNdx
    Next RowNdx
    Trans = False
ElseIf NumRows > 1 Then
    ReDim Arr(1 To NumRows)
    For RowNdx = 1 To NumRows
        CI = ColorIndexOfOneCell(Cell:=InRange.Cells(RowNdx, 1), _
            OfText:=OfText, DefaultColorIndex:=DefaultColorIndex)
        Arr(RowNdx) = CI
    Next RowNdx
    Trans = True
Else
    ReDim Arr(1 To NumCols)
    For ColNdx = 1 To NumCols
        CI = ColorIndexOfOneCell(Cell:=InRange.Cells(1, ColNdx), _
            OfText:=OfText, DefaultColorIndex:=DefaultColorIndex)
        Arr(ColNdx) = CI
    Next ColNdx
    Trans = False
End If

If IsObject(Application.Caller) = False Then
    Trans = False
End If

If Trans = False Then
    ColorIndexOfRange = Arr
Else
    ColorIndexOfRange = Application.Transpose(Arr)
End If

End Function

Function ColorIndexOfOneCell(Cell As Range, OfText As Boolean, _
    DefaultColorIndex As Long) As Long
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' ColorIndexOfOneCell
' This returns the ColorIndex of the cell referenced by Cell.
' If Cell refers to more than one cell, only Cell(1,1) is
' tested. If OfText True, the ColorIndex of the Font property is
' returned. If OfText is False, the ColorIndex of the Interior
' property is returned. If DefaultColorIndex is >= 0, this
' value is returned if the ColorIndex is either xlColorIndexNone
' or xlColorIndexAutomatic.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim CI As Long

Application.Volatile True
If OfText = True Then
    CI = Cell(1, 1).Font.ColorIndex
Else
    CI = Cell(1, 1).Interior.ColorIndex
End If
If CI < 0 Then
    If IsValidColorIndex(ColorIndex:=DefaultColorIndex) = True Then
        CI = DefaultColorIndex
    Else
        CI = -1
    End If
End If

ColorIndexOfOneCell = CI

End Function

Private Function IsValidColorIndex(ColorIndex As Long) As Boolean
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' IsValidColorIndex
' This returns TRUE if ColorIndex is between 1 and 56 or equal
' to either xlColorIndexNone or xlColorIndexAutomatic. It
' returns FALSE otherwise.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Select Case ColorIndex
    Case 1 To 56, xlColorIndexNone, xlColorIndexAutomatic
        IsValidColorIndex = True
    Case Else
        IsValidColorIndex = False
End Select
End Function


Function RGBComponentsFromRGBLong(RGBLong As Long) As Long()
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' RGBComponentsFromRGBLong
' This accepts an RGBLong and returns a 1-based array with
' three elements, containing, left-to-right, the Red, Green,
' and Blue components of the RGB Color. If RGBLong is not
' a valid RGB color, all elements of the returned array
' are -1.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Dim Arr(1 To 3) As Long

If IsValidRGBLong(RGBLong:=RGBLong) = False Then
    Arr(1) = -1
    Arr(2) = -1
    Arr(3) = -1
    Exit Function
End If

Arr(1) = RGBLong And C_RGB_RED
Arr(2) = (RGBLong And C_RGB_GREEN) \ C_SHIFT_ONE_BYTE ' shift right 1 byte
Arr(3) = (RGBLong And C_RGB_BLUE) \ C_SHIFT_TWO_BYTES ' shift right 2 bytes

RGBComponentsFromRGBLong = Arr

End Function

Function RGBComponentsFromRGBLongToVariables(RGBLong As Long, _
    ByRef Red As Long, ByRef Green As Long, ByRef Blue As Long) As Boolean
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' RGBComponentsFromRGBLongToVariables
' This set the variables references Red, Green, and Blue to
' the component colors of the RGBLong color. It returns
' True if RGBLong is a valid color (between &H00000000 and
' &H00FFFFFF) or False if RGBLong is not a valid RGB color.
' If RGBLong is invalid, the component variables are set to -1.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim Arr As Variant
If IsValidRGBLong(RGBLong) = True Then
    Arr = RGBComponentsFromRGBLong(RGBLong)
    Red = Arr(1)
    Green = Arr(2)
    Blue = Arr(3)
    RGBComponentsFromRGBLongToVariables = True
Else
    Red = -1
    Green = -1
    Blue = -1
    RGBComponentsFromRGBLongToVariables = False
End If

End Function

Function IsValidRGBLong(RGBLong As Long) As Boolean
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' IsValidRGBLong
' This returns True if RGBLong is between &H00000000 and
' &H00FFFFFF or False otherwise.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
If (RGBLong >= C_MIN_RGB) And (RGBLong <= C_MAX_RGB) Then
    IsValidRGBLong = True
Else
    IsValidRGBLong = False
End If

End Function

Function CountColor(InRange As Range, ColorIndex As Long, _
    Optional OfText As Boolean = False) As Long
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' CountColor
' This function counts the cells in InRange whose ColorIndex
' is equal to the ColorIndex parameter. The ColorIndex of the
' Font is tested if OfText is True, or the Interior property
' if OfText is omitted or False. If ColorIndex is not a valid
' ColorIndex (1 -> 56, xlColorIndexNone, xlColorIndexAutomatic)
' 0 is returned. If ColorIndex is 0, then xlColorIndexNone is
' used if OfText is Fasle or xlColorIndexAutomatic if OfText
' is True. This allows the caller to use a value of 0 to indicate
' no color for either the Interior or the Font.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Dim R As Range
Dim N As Long
Dim CI As Long

If ColorIndex = 0 Then
    If OfText = False Then
        CI = xlColorIndexNone
    Else
        CI = xlColorIndexAutomatic
    End If
Else
    CI = ColorIndex
End If


Application.Volatile True
Select Case ColorIndex
    Case 0, xlColorIndexNone, xlColorIndexAutomatic
        ' OK
    Case Else
        If IsValidColorIndex(ColorIndex) = False Then
            CountColor = 0
            Exit Function
        End If
End Select

For Each R In InRange.Cells
    If OfText = True Then
        If R.Font.ColorIndex = CI Then
            N = N + 1
        End If
    Else
        If R.Interior.ColorIndex = CI Then
            N = N + 1
        End If
    End If
Next R

CountColor = N

End Function

Function SumColor(TestRange As Range, SumRange As Range, _
    ColorIndex As Long, Optional OfText As Boolean = False) As Variant
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' SumColor
' This function returns the sum of the values in SumRange where
' the corresponding cell in TestRange has a ColorIndex (of the
' Font is OfText is True, or of the Interior is OfText is omitted
' or False) equal to the specified ColorIndex. TestRange and
' SumRange may refer to the same range. An xlErrRef (#REF) error
' is returned if either TestRange or SumRange has more than one
' area or if TestRange and SumRange have differing number of
' either rows or columns. An xlErrValue (#VALUE) error is
' returned if ColorIndex is not a valid ColorIndex value.
' If ColorIndex is 0, xlColorIndexNone is used if OfText is
' False or xlColorIndexAutomatic if OfText is True. This allows
' the caller to specify 0 for no color applied.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim D As Double
Dim N As Long
Dim CI As Long

Application.Volatile True
If (TestRange.Areas.Count > 1) Or _
    (SumRange.Areas.Count > 1) Or _
    (TestRange.Rows.Count <> SumRange.Rows.Count) Or _
    (TestRange.Columns.Count <> SumRange.Columns.Count) Then
    SumColor = CVErr(xlErrRef)
    Exit Function
End If
    
If ColorIndex = 0 Then
    If OfText = False Then
        CI = xlColorIndexNone
    Else
        CI = xlColorIndexAutomatic
    End If
Else
    CI = ColorIndex
End If

Select Case CI
    Case 0, xlColorIndexAutomatic, xlColorIndexNone
        ' ok
    Case Else
        If IsValidColorIndex(ColorIndex:=ColorIndex) = False Then
            SumColor = CVErr(xlErrValue)
            Exit Function
        End If
End Select

For N = 1 To TestRange.Cells.Count
    With TestRange.Cells(N)
    If OfText = True Then
        If .Font.ColorIndex = CI Then
            If IsNumeric(SumRange.Cells(N).Value) = True Then
                D = D + SumRange.Cells(N).Value
            End If
        End If
    Else
        If .Interior.ColorIndex = CI Then
            If IsNumeric(SumRange.Cells(N).Value) = True Then
                D = D + SumRange.Cells(N).Value
            End If
        End If
    End If
    End With
Next N
            
SumColor = D

End Function

Function ColorName(RGBLong As Long) As String
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' ColorName
' This function returns the US-English color name corresponding
' to the RGBLong color value. If the position of the RGBColor
' in the DEFAULT pallet is between 1 and 16 or 26 and 56, the
' color name is returned. If the location is between 17 and 25
' or the color is not in the DEFAULT pallet, the result is
' vbNullString. It is NOT required that the pallet in use be
' the default pallet, only that the RGBLong is one of the colors
' in the default pallet. The location of RGBLong in the current
' pallet is irrelevant.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Dim N  As Long
Dim DefaultNdx As Long
Dim DefaultPallet As Variant
Dim ColorNames As Variant

If IsValidRGBLong(RGBLong:=RGBLong) = False Then
    ColorName = vbNullString
    Exit Function
End If

DefaultPallet = DefaultColorPallet()
DefaultNdx = 0
For N = C_MIN_COLOR_INDEX To C_MAX_COLOR_INDEX
    If RGBLong = DefaultPallet(N) Then
        DefaultNdx = N
        Exit For
    End If
Next N
If DefaultNdx = 0 Then
    ColorName = vbNullString
Else
    ColorNames = DefaultColorNames()
    ColorName = ColorNames(DefaultNdx)
End If

End Function




Function DefaultColorPallet() As Variant
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' DefaultColorPallet
' This returns an array of the DEFAULT color values for
' Excel 2003. Effects of an Option Base setting for the
' module that contains this function (NOT the module from
' which this function was called):
'   Option Base 0
'       Array is 0-based with 57 elements, element 0
'           is -1. Elements 1 to 56 are RGB colors.
'   Option Base 1
'       Array is 1-based with 56 elements, all of which are
'           RGB colors.
'   Option Base Omitted
'       Same as Option Base 0
' This allows the ColorIndex as the index into the array
' regardless of the module's Option Base setting.
''''''''''''' ''''''''''''''''''''''''''''''''''''''''''''''''''
Dim L(1) As Long
If LBound(L) = 0 Then
    DefaultColorPallet = Array(-1, _
        &H0&, &HFFFFFF, &HFF&, &HFF00&, &HFF0000, &HFFFF&, &HFF00FF, &HFFFF00, &H80&, &H8000&, _
        &H800000, &H8080&, &H800080, &H808000, &HC0C0C0, &H808080, &HFF9999, &H663399, &HCCFFFF, &HFFFFCC, _
        &H660066, &H8080FF, &HCC6600, &HFFCCCC, &H800000, &HFF00FF, &HFFFF&, &HFFFF00, &H800080, &H80&, _
        &H808000, &HFF0000, &HFFCC00, &HFFFFCC, &HCCFFCC, &H99FFFF, &HFFCC99, &HCC99FF, &HFF99CC, &H99CCFF, _
        &HFF6633, &HCCCC33, &HCC99&, &HCCFF&, &H99FF&, &H66FF&, &H996666, &H969696, &H663300, &H669933, _
        &H3300&, &H3333&, &H3399&, &H663399, &H993333, &H333333)
Else
    DefaultColorPallet = Array( _
        &H0&, &HFFFFFF, &HFF&, &HFF00&, &HFF0000, &HFFFF&, &HFF00FF, &HFFFF00, &H80&, &H8000&, _
        &H800000, &H8080&, &H800080, &H808000, &HC0C0C0, &H808080, &HFF9999, &H663399, &HCCFFFF, &HFFFFCC, _
        &H660066, &H8080FF, &HCC6600, &HFFCCCC, &H800000, &HFF00FF, &HFFFF&, &HFFFF00, &H800080, &H80&, _
        &H808000, &HFF0000, &HFFCC00, &HFFFFCC, &HCCFFCC, &H99FFFF, &HFFCC99, &HCC99FF, &HFF99CC, &H99CCFF, _
        &HFF6633, &HCCCC33, &HCC99&, &HCCFF&, &H99FF&, &H66FF&, &H996666, &H969696, &H663300, &H669933, _
        &H3300&, &H3333&, &H3399&, &H663399, &H993333, &H333333)
End If
End Function


Function DefaultColorNames() As Variant
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' DefaultColorNames
' This returns an array of the US-English color names associated with the
' DEFAULT color pallet. Effect of the Option Base statement of the module
' that contains this function (NOT the module from which this function is
' called):
'       Option Base 0
'           The returned array is 0-based with 57 elements, with element 0
'           equal to "UNNAMED" and elements 1 to 56 having the color name
'       Option Base 1
'           The returned array is 1-based with 56 elements, each of which
'           is a color name.
'       Option  Base Omitted
'           Same as Option Base 0
'   Regardless of the module's Option Base statement, the ColorIndex is
'   a valid index into the array.
'
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim L(1) As Long
If LBound(L) = 0 Then
    DefaultColorNames = Array("UNNAMED", _
    "Black", "White", "Red", "Bright Green", "Blue", "Yellow", "Pink", "Turquoise", _
    "Dark Red", "Green", "Dark Blue", "Dark Yellow", "Violet", "Teal", "Gray 25%", "Gray 50%", _
    "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", _
    "Dark Blue", "Pink", "Yellow", "Turquoise", "Violet", "Dark Red", "Teal", "Blue", _
    "Sky Blue", "Light Turquoise", "Light Green", "Light Yellow", "Pale Blue", "Rose", "Lavender", "Tan", _
    "Light Blue", "Aqua", "Lime", "Gold", "Light Orange", "Orange", "Blue Gray", "Gray 40%", _
    "Dark Teal", "Sea Green", "Dark Green", "Olive Green", "Brown", "Plum", "Indigo", "Gray 80%")
Else
    DefaultColorNames = Array( _
    "Black", "White", "Red", "Bright Green", "Blue", "Yellow", "Pink", "Turquoise", _
    "Dark Red", "Green", "Dark Blue", "Dark Yellow", "Violet", "Teal", "Gray 25%", "Gray 50%", _
    "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", "UNNAMED", _
    "Dark Blue", "Pink", "Yellow", "Turquoise", "Violet", "Dark Red", "Teal", "Blue", _
    "Sky Blue", "Light Turquoise", "Light Green", "Light Yellow", "Pale Blue", "Rose", "Lavender", "Tan", _
    "Light Blue", "Aqua", "Lime", "Gold", "Light Orange", "Orange", "Blue Gray", "Gray 40%", _
    "Dark Teal", "Sea Green", "Dark Green", "Olive Green", "Brown", "Plum", "Indigo", "Gray 80%")
End If

End Function

Function IsColorIndexDefault(ColorIndex As Long) As Boolean
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' IsColorIndexCustom
' This tests whether the RGB color corresponding to ColorIndex is the
' default pallet color or a custom color in the pallet. If the color corresponding
' to the ColorIndex is the same as the default color, the function returns TRUE.
' If the ColorIndex is not the default, the function return FALSE. If ColorIndex
' is not valid, the result is TRUE.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim ColorPallet As Variant
Dim DefaultRGB As Long
Dim PalletRGB As Long
ColorPallet = DefaultColorPallet()
If (ColorIndex < C_MIN_COLOR_INDEX) Or (ColorIndex > C_MAX_COLOR_INDEX) Then
    IsColorIndexDefault = False
    Exit Function
End If
DefaultRGB = ColorPallet(ColorIndex)
PalletRGB = ThisWorkbook.Colors(ColorIndex)
If DefaultRGB = PalletRGB Then
    IsColorIndexDefault = True
Else
    IsColorIndexDefault = False
End If

End Function

Function IsColorPalletDefault(Optional Workbook As Workbook = Nothing) As Boolean
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' IsColorPalletDefault
' This returns True or False indicating whether the color pallet associated
' with Workbook is the default pallet or has been modifed. The function returns
' True if all the colors in the pallet are the default colors or False if one
' or more colors have been modified from the default. The Workbook parameter
' specifies which workbook's pallet to test. If this parameter is missing, the
' ActiveWorkbook is tested.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim WB As Workbook
Dim DefaultPallet As Variant
Dim N As Long
If Workbook Is Nothing Then
    If Application.ActiveWorkbook Is Nothing Then
        IsColorPalletDefault = True
    Else
        Set WB = ActiveWorkbook
    End If
Else
    Set WB = Workbook
End If
DefaultPallet = DefaultColorPallet()
For N = 1 To 56
    If WB.Colors(N) <> DefaultPallet(N) Then
        IsColorPalletDefault = False
        Exit Function
    End If
Next N

IsColorPalletDefault = True

End Function

Function RangeOfColor(TestRange As Range, _
    ColorIndex As Long, Optional OfText As Boolean = False) As Range
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' RangeOfColors
' This function returns a Range object containing the individual cells of
' TestRange whose Font (if OfText is True) or Interior (if OfText is False or
' omitted) has the color index specified by ColorIndex. Note that the function
' may return Nothing.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Dim R As Range
Dim RR As Range
Dim CI As Long

If ColorIndex = 0 Then
    If OfText = False Then
        CI = xlColorIndexNone
    Else
        CI = xlColorIndexAutomatic
    End If
Else
    CI = ColorIndex
End If

If ColorIndex <> 0 Then
    If IsValidColorIndex(ColorIndex) = False Then
        Exit Function
    End If
End If

For Each R In TestRange.Cells
    If OfText = False Then
        If R.Interior.ColorIndex = CI Then
            If RR Is Nothing Then
                Set RR = R
            Else
                Set RR = Application.Union(RR, R)
            End If
        End If
    Else
        If RR Is Nothing Then
            Set RR = R
        Else
            Set RR = Application.Union(RR, R)
        End If
    End If
Next R
Set RangeOfColor = RR

End Function

Function ColorNameOfRGB(RGBLong As Long) As String
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' ColorNameOfRGB
' Returns the name of the color specified by RGBLong
' if RGBLong is in the application default pallet.
' Otherwise, returns vbNullString.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Dim N As Long
Dim V As Variant
If IsValidRGBLong(RGBLong) = False Then
    Exit Function
End If
V = Application.Match(RGBLong, ThisWorkbook.Colors, 0)
If IsError(V) = True Then
    Exit Function
End If

V = DefaultColorNames(V)
If V <> vbNullString Then
    ColorNameOfRGB = V
End If

End Function

Function ColorIndexesOfRange(OfRange As Range, ColorIndex As Long, _
    Optional OfText As Boolean = False) As Variant
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''
' ColorIndexesOfRange
' This returns an array of the color indexes of the cells
' in OfRange. If OfText is False or omitted, the Interior
' (fill) color is tested. if OfText is True, the color
' of the font is tested.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Dim Arr() As Long
Dim R As Long
Dim C As Long
ReDim Arr(OfRange.Rows.Count, OfRange.Columns.Count)
For R = 1 To OfRange.Rows.Count
    For C = 1 To OfRange.Columns.Count
        If OfText = False Then
            Arr(R, C) = OfRange(R, C).Interior.ColorIndex
        Else
            Arr(R, C) = OfRange(R, C).Font.ColorIndex
        End If
    Next C
Next R
ColorIndexesOfRange = Arr

End Function