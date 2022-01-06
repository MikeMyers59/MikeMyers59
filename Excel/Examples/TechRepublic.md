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

## Manage Multiple Possibilities with Excel Scenarios ([TechRepublic Examples.xls](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/TechRepublic%20Examples.xls))  
An Excel spreadsheet is a wonderful tool for “what if” analysis because you can change results throughout the workbook by editing a single cell. A disadvantage to this process, however, is that it isn’t always easy or convenient to restore the original values, especially when you’re changing multiple cells.  
Fortunately, Excel offers the Scenario Manager, which allows you to substitute values in a number of cells and save that condition under a unique name. By invoking a number of scenarios, you can easily demonstrate to customers and managers the impact of different events or possibilities.  
#### The original scenario  
Let’s quickly recap the situation. We’re beginning a software rollout on Dec. 1, and we have to be finished by the end of the year. The project will require at least 160 hours of work. We currently have one technician available for the job, but we can hire more from a consulting firm for a $200-a-head surcharge. Technicians make a standard $50 an hour ($75 overtime).   
We’ll assume that we can’t fudge the amount of time the project will take (we set up the spreadsheet with some conditional formatting to warn us if the total hours don’t equal 160) or begin prior to Dec. 1 (actually Dec. 3 since Dec. 1 is a Saturday). While only a one-hour adjustment can bring us back to Dec. 31, we’ll also assume that finishing early is desirable, and there’s even extra money in the budget! Therefore, our options are to bring in more contractors, allow overtime, or both.  
#### Applying scenarios  
Although you can use the Scenario Manager to apply a nigh-infinite number of combinations, we’ll restrict the scenarios we examine to two: paying our sole contractor some overtime or hiring additional contractors. Once we’ve created the scenarios, we’ll be able to compare our solutions. First, we’ll invoke the Scenario Manager to save our current (and unacceptable) condition.  
Choose Scenarios from the Tools menu. In the Scenario Manager dialog box, click Add. In the resulting dialog box, type Original in the Scenario Name text box, as shown in Figure A. Click OK.  
**Figure A**  
![Examples 02](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2002.png)  
Even though this scenario will reflect the spreadsheet’s current values, we have to establish the range of cells that will potentially change so we can restore their values. In the Changing Cells text box, type D8:D10 or use the Collapse Dialog button at the right side of the text box to manually select the cells that hold the # Technicians, Regular Hours, and OT Hours values.  
When you click OK, you’ll see the Scenario Values dialog box. Ensure the values for cells D8, D9, and D10 are 1, 160, and 0, respectively, as shown in Figure B, and click OK.  
**Figure B**  
![Examples 03](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2003.png)  
#### Single contractor overtime  
Now let’s see what happens when we pay our current technician a bit of overtime to get the job done faster. We’ll authorize 40 hours of overtime, leaving 120 standard hours. The Scenario Manager dialog box should still be active; if not, choose Tools | Scenarios. In the Scenario Manager dialog box, click Add. In the Add Scenario dialog box, call this scenario Single Contractor Overtime. (Be as descriptive as possible so you can distinguish the scenarios later.)  
When you click OK, you’ll again see the Scenario Values dialog box. This time, we’ll provide new values. For cell D9, type 120 and enter 40 in the text box for cell D10; the value in D8 remains the same.  
Click OK, ensure that the Single Contractor Overtime scenario is selected, and click Show. Excel reports that we now finish on Dec. 21 with an additional $1,000 cost, as you can see in Figure C.  
**Figure C**  
![Examples 04](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2004..png)  
We now have a solution, but is it the most cost-effective one? Here’s where the Scenario Manager really shines: By letting you easily switch between different data sets, you can quickly determine the best solution. In this case, since the Scenario Manager dialog box doesn’t obscure any of the changing cells (a luxury you might not always enjoy), you can even click back and forth between scenarios and observe the changes instantly.  
#### Three contractors  
In the Scenario Manager dialog box, click Add again. The Add Scenario dialog box appears. In the Scenario Name text box, type Three Consultants. The Changing Cells (D8:D10) should already appear in the proper text box; if not, enter that range. Click OK to invoke the Scenario Values dialog box.  
Now let’s see what happens when we bring in two outside consultants (by charging $200 for each additional technician, we ensured that values would be different for various combinations). Enter 3 in the text box for cell D8 and 0 in the text box for cell D10. This time, there’s a twist: Since 160 doesn’t divide equally among 3, we’ll enter a formula, not a value, for cell D9. In cell D9’s text box, type =160/3. When you click OK, you’ll see the message box shown in Figure D, informing you that Excel converted your formula into a value.  
**Figure D**  
![Examples 05](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2005.png)  
Click OK to dismiss the message, and Excel returns you to the Scenario Manager dialog box. Sure enough, when you select Three Contractors and click Show, Excel displays 53.3333333 in cell D9, as you can see in Figure E. Nevertheless, the total hours are exactly 160; recall that we’d established conditional formatting to highlight cell D16 if it contained any other value. This scenario gives us a completion date of 12/10 with a cost of $8,400.  
**Figure E**  
![Examples 06](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2006.png)  
#### Compare the possibilities  
Now that we’ve created the scenarios, we can compare them to determine the best solution. Figure F summarizes the results.  
**Figure F**  
![Examples 07](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2007.png)  
As you can see, bringing in two more consultants gets us finished the earliest and at the least additional cost. Excel’s Scenario Manager made this “what if” analysis a snap!  

## Use Check Boxes to Create a List-Totaling Spreadsheet  
As my office’s resident Excel guru, I often discover handy tricks unknown to many casual Excel users. For example, the Excel’s Scenario feature (select Tools | Scenarios) lets you save different values in the same cells without retyping.  
But sometimes you may have a list of values you want to total in varying combinations, such as a price list. One way to accomplish this task would be to mark certain cells and then add the values in the associated cells. Unfortunately, this solution is difficult, because:  
-	Marking a cell requires clicking in a cell, typing a character, and then pressing [Enter].   
-	Removing a mark involves selecting a cell and pressing [Delete].   
-	Unless you set up input restrictions, the character used to mark the cell could vary, which might affect conditional formulas.  

Fortunately, Excel’s Forms toolbar offers a much more intuitive solution: check boxes. You can easily set up a spreadsheet list that, when the associated check boxes are selected, totals the values of the selected items. Here’s how to set up an intuitive checklist in Excel 2000.  
#### Setting up the check boxes  
We’ll demonstrate the technique with a spreadsheet you may download. The example spreadsheet lists PC components in column A and their prices in column B. Simple functions show how much all the listed components cost and their average prices, but the checklist you build totals the items checked in any combination.  
First, format column C to a width of 1.86 to hold the check boxes.  
Invoke the Forms toolbar by navigating to View | Toolbars | Forms or by right-clicking a toolbar and choosing Forms. Select the Check Box tool and then click the cell in column C next to the price of the first component. If necessary, use your arrow keys to nudge the box so it sits squarely over the column (see Figure A). (The check box doesn’t occupy the cell but rather sits on top of it like any Excel object; I will discuss how to take advantage of this property in a moment.)  
**Figure A**  
![Examples 08](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2008.png)  
Now you’ll need to format the check box. First, select the default check box text and delete it. Now, either select the Control Properties button on the Forms toolbar or right-click your new check box and choose Format Control. The Format Control dialog box appears. Enter the address of the cell beneath the check box in the Cell link text box, as shown in Figure B, and click OK.  
**Figure B**  
![Examples 09](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2009.png)  
Unfortunately, this process can get a bit tedious, as you need to repeat it for each item. However, you can’t simply copy and paste one formatted check box because doing so selects all items when you check any one box.  
When you’re finished creating the check boxes, you can improve their appearance by dragging or nudging them individually, or you can use a quick method to align them. Select the Arrow tool on the Drawing toolbar. Shift-click each check box to select them. From the Drawing toolbar’s Draw menu, select Align or Distribute and then choose Align Left, as shown in Figure C. (Don’t choose Align Center; since the check boxes might be of different widths, doing so would skew the column.) Be sure to deselect the Arrow tool when you’ve finished.  
**Figure C**  
![Examples 10](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2010.png)  
Now, since the check boxes are currently deselected, the cells they’re over (and linked to) hold a value of False. The value becomes True when the check box is selected and reverts to False when deselected. You can take advantage of this fact to create some conditional formulas that’ll total the selected components.  
#### The formulas  
As we mentioned, the SUM function in cell F4 adds the prices in column B. To keep them inconspicuous, we’ll put the conditional formulas in column H. Our first item is in row 4, so in cell H4, enter:  
`=IF(C4=TRUE,B4,"")`  
Use Excel’s Fill feature to copy the formula to the other rows. Now, in cell F6, enter a simple SUM function that adds the values in column H. That’s all there is to it!  
Now when the user selects a check box, the value of the underlying cell becomes True. (By setting the width of column C to 1.86, you prevent the text from appearing.) Excel displays the corresponding value in column H and adds it to the total in cell F6 (see Figure D). If you want, you can format column H so the values are invisible by making the text color white, as shown in the downloadable example.  
**Figure D**  
![Examples 11](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2011.png)  
One nice thing about the check box technique is that it works even if the list is reordered. As you can see in Figure E, we’ve sorted the list by price, but the spreadsheet still functions exactly as before. Of course, if you add items to the list, you’ll need to add corresponding check boxes, and if you delete an item, be sure to delete its check box!  
**Figure E**  
![Examples 12](https://github.com/MikeMyers59/MikeMyers59/blob/main/Excel/Examples/Examples%2012.png)  

