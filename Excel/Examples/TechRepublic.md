# Excel Examples from TEchRepublic

## Create custom Excel add-ins ([TechRepublic Examples.xls](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/TechRepublic%20Examples.xls) & [SpecialButtons.xla](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/SpecialButtons.xla))
Although the add-ins that come with Excel are quite useful, you can also create your own custom add-ins that can be helpful to your Excel users. The add-in sample referred to in this article will create a new toolbar with two new buttons on it. The new buttons will enable you to make a single click when you want to perform the commands `Copy | Paste | Special Values `(CPSV) or `Paste | Special Values` (PSV). This comes in handy when you have cells containing formulas and you want to remove that formula and just show the resulting value.  
#### Using Excel's add-ins  
Add-ins are special Excel workbooks containing Visual Basic modules that can extend the capabilities of Excel. Excel comes with some add-ins already installed, and you may have looked at the Add-Ins menu in Excel. To use them, you simply need to turn them on. Each add-in gives you different options and capabilities. For example, if you open the Add-Ins screen (Tools | Add-Ins), you might find the first one listed as Access Links, assuming you have Microsoft Access installed. By selecting the check box for that add-in, you'll have some new options under your Data menu.  
CPSV copies and pastes the value or values directly into the same cell(s), whereas PSV requires that you copy your cell(s) first, choose a destination, and then click the PSV button, thus giving you the values in the new location. Normally, to paste the values of formulas, you would need to copy your cell(s), choose Edit | PasteSpecial, select values, and then click OK. So these new buttons can save your Excel users from having to click as much.  
#### Creating the add-in  
To start the creation of your add-in, simply open a new Excel workbook. During the development stages, save the workbook as an .xls file. However, when you've finished developing your VBA code module, you'll save this workbook as an add-in (.xla), instead of a workbook (.xls) file. When you save your .xls file as an .xla, the worksheets you have in the workbook become invisible and cannot be viewed. However, it’s important to note that you could populate data on those sheets, and then even allow your add-in to call upon the data from those sheets.  
First, make sure you have your Visual Basic toolbar available. Right-click anywhere on your Excel toolbar and choose Visual Basic. You should then have a new toolbar, which contains an icon for the Visual Basic Editor. This is where you'll build your new functionality. To begin, you need to insert a module into your project, so click Insert | Module within the Visual Basic Editor. Then, insert the two subroutines found in Listing A.  
**Listing A**
```vba
Sub CopyPasteSpecialValues()
On Error GoTo ErrExit
    Selection.Copy
    Selection.PasteSpecial Paste:=xlValues, Operation:=xlNone, SkipBlanks:= _
        False, Transpose:=False
ExitSub:
Exit Sub
ErrExit:
    MsgBox Err.Number & "   " & Err.Description, vbOKOnly, _
        "Error in SpecialButtons Add-In"
Resume ExitSub
End Sub

Sub PasteSpecialValues()
On Error GoTo ErrExit
    Selection.PasteSpecial Paste:=xlValues, Operation:=xlNone, SkipBlanks:= _
        False, Transpose:=False
ExitSub:
Exit Sub
ErrExit:
If Err.Number = 1004 Then
    MsgBox "You cannot Paste, unless you've not copied something first.", vbOKOnly, "Ooops - You silly bird"
Else
    MsgBox Err.Number & "   " & Err.Description, vbOKOnly, _
        "Error in SpecialButtons Add-In"
End If
Resume ExitSub
End Sub
```  
These routines give you the Paste Special functionality behind the two buttons. I have included a special error check in the PasteSpecialValues routine. This error check is important to this particular routine because it requires that the cell(s) first be copied before it (they) can be used. You could modify this add-in to disable the button until something is copied, which may be more effective for your users.  
That’s all you'll need for your module. Next, double-click on this workbook, so you can insert your final code within it. This subroutine will execute at the Open() event of the workbook, allowing you to add the toolbar with the buttons, assuming it’s not already there. Then, insert the code from Listing B.  
Listing B
```vba
Private Sub Workbook_Open()
Dim MyBar As CommandBar
'-- If the toolbar already exists, then exit sub.
For Each MyBar In Application.CommandBars
    If MyBar.Name = "SpecialButtons" Then
        Exit Sub
    End If
Next
Set MyBar = Application.CommandBars.Add("SpecialButtons")
'--Add the two buttons.
With Application
    Set myControl = MyBar.Controls _
        .Add(Type:=msoControlButton)
    With myControl
        '--The following is the image on the button.
        '--Set this id to whichever image id you would like.
        .FaceId = 9
        .Caption = "&CPSV"
        .OnAction = "CopyPasteSpecialValues"
    End With
    Set myControl2 = MyBar.Controls _
        .Add(Type:=msoControlButton)
    With myControl2
        .FaceId = 10
        .Caption = "&PSV"
        .OnAction = "PasteSpecialValues"
    End With
    MyBar.Visible = True
End With
End Sub
```
The `Type=msoControlButton` creates your simple button; however, there are many options here. You can create drop-down menu items, pop-ups, and much more. The `FaceId` property allows you to set the look of the button but not the functionality. You can have a custom image placed on the button, which is an entirely separate topic. For the purposes of this example, I have simply pointed to the image of another button (Id 9 & 10) that isn't being used by any standard Excel features. The `OnAction` property points to the subroutines you created previously in your module.  
It’s always best to compile your application before you finish, so click `Debug | CompileVBAProject`. Then, you can save your project as an .xla (add-in) file named SpecialButtons.xla.
#### Deploying the add-in to your users  
To deploy this to your users, place your SpecialButtons.xla add-in in a special folder on your client’s computer. You could place it in with all the other Excel add-ins, but this is located in different areas, depending on the operating system on the client. It would be best to search for all .xla files first—although, it doesn't really matter where on the hard disk the .xla file resides. I usually create my own custom add-ins directory on each machine.  
Once you've copied the file to your client, open Excel. Go to Tools | Add-Ins and click Browse. Locate your new SpecialButtons.xla file and select it. Once you include this add-in, your new toolbar will appear (see Figure A), centered in Excel.  
![Example 01](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2001.png)  
If the toolbar doesn't appear automatically, go to View | Toolbars and select SpecialButtons. Drag-and-drop it with all the other toolbars, and it will lock into place. From then on, when you open Excel, the add-in will be called upon and it will verify that the toolbar exists, and then create it, if needed.  

## Password Generator  ([TechRepublic Examples.xls](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/TechRepublic%20Examples.xls))
The heart of the random password generator is the RAND() function. By itself, the function returns a decimal value between 0 and 1. However, if you multiply this number by a particular value, you can generate a number within a specified range. For this spreadsheet, I wanted an equal chance of generating an uppercase letter, a lowercase letter, and a number.   
To begin, I want to generate a number between one and 15 using this code:   
`=RAND()*(15-1)+1`  
Next, I used nested IF functions to provide three possibilities: If the number is between one and five, we’ll refer to cell I100, where we’ll generate the value for a numeric character. If it’s greater than five, we’ll use another IF function to see if we’ll use an uppercase (6-10) letter by referring to the value in cell G100 or a lowercase (11-15) letter by using the value in cell H100. With the RAND statement in cell F100, the function in cell E100 looks like this:  
'=IF(F100>5,IF(F100>10,G100,H100),I100)'  
Next up are a trio of RAND() functions to generate the ASCII values of numbers and letters. By consulting an ASCII table, we know that the codes for numbers are between 48 and 57, lowercase letters are between 97 and 122, and uppercase letters are between 65 and 90. The functions to generate these number ranges are, respectively:  
```vba
=RAND()*(57-48)+48
=RAND()*(122-97)+97
=RAND()*(90-65)+65
```
Now that our IF statement in cell E100 returns a number from one of these three ranges, it’s time to use that value to generate an ASCII character. In cell A100, we place a CHAR() function with the cell address of our IF statement in the parentheses:  
`=CHAR(E100)`  
Cell A100 will now contain a number from zero to nine, a lowercase letter, or an uppercase letter. If you simply fill the IF, CHAR*(), and RAND() statements down seven rows, you’ll get a matrix of cells in the range A100:A107 that will form your password.  
Now all we need is a CONCATENATE() function in cell A110 to assemble the password from those eight cells. It looks like this:  
`=CONCATENATE(A100,A101,A102,A103,A104,A105,A106,A107,A108,A109)`   
#### Putting it all together  
Here’s how to combine the functions into a spreadsheet. Place the RAND() functions into cells F100:F107 to obscure the spreadsheet’s workings. A message to the user at the top of the screen and a simple cell reference (=A110) provides the eight-character password. Figure B shows the final spreadsheet. (We’ve hidden the intervening blank rows so you can see all the active cells.)  
To use the spreadsheet to generate random passwords, all you have to do is press F9, which causes Excel to recalculate the random numbers. If you wanted to weigh the possibility of uppercase or lowercase letters or numbers more heavily, you can adjust the values in the nested IF functions or alter the values to eliminate one type of character altogether.  

