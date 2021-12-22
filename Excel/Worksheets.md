# Excel Worksheets

## Worksheet Processes

#### Add a Background Image
For a Non-Printable Background Image: Use Page Layout > Background

You can use a picture as a sheet background that shows up on the screen but does not print out. Depending on the image size and type, the background picture is either stretched across your sheet or tiled.  
[Worksheet 02]  
	1. Click the sheet that you want to display with a background. Make sure you only select one worksheet.
	2. On the Page Layout tab, find the Page Setup group, click Background.
	3. Browse through your pictures and select the one you want to add, and then click Insert.
  
The selected picture is repeated to fill the sheet.

**Tips** – Adding a Sheet Background Image  

• **Improve readability by choosing your picture carefully** – It’s a good idea to use an image that provides a lot of contrast with your main content to make it easy to read. If your font color is black and you are using a lot of dark colors on your sheets, it makes sense to choose a very light colored background image or make it semi-transparent with an image editor. If your foreground is mostly white or bright colors then you can use a dark image.  
• **Improve readability by formatting** – Another way to improve readability is to hide cell gridlines and apply solid color shading to cells that contain data.  
• **Watch out for large file sizes** – Whenever you add images to Excel you must remember that these can really increase the file size of your workbook if you choose a large image.  
• **Recommended file types** – I’ve read that Enhanced Metafile pictures usually provide the best resolution for the smallest file size for graphics in Office programs, but if metafile pictures are used as backgrounds in Excel they will increase the workbook size more than larger picture types. It’s been recommended that for best results you should use Web-compatible image types like GIF, TIF, PNG, or JPG.  

Background image does not print out – As noted earlier, method 1 of adding a custom background image does not give you a printable background. If you want to see your background when you print out your page, use method 2.  

#### Insert a Picture in Excel > Insert > Picture

You can insert a background image and then add another image on top. Both images will show up on screen and should also print out, unlike with method 1 where the background image does not print out. 

[Worksheet 01]  
	1. Click the sheet that you want to display with a background. Make sure you only select one worksheet.
	2. On the Insert tab, find the Illustrations group, click Picture.
	3. Browse through your pictures and select the one you want to add, and then click Insert.
	4. The selected picture is inserted once on your sheet at the selected cell.
  
Resize the picture and reposition it as you like.

#### Line Up Multiple Sheets in the Same Worksheet for Inspection

Here's the same slide as the one in the last tip, but with a box at the upper right illustrating yet another tip. How did I get two sheets from the same worksheet to appear on the same screen? Simple. On the View tab, I clicked New Window, then View Side by Side. By default, the Synchronous Scrolling option is turned on, so that you can scroll through both pages by dragging the slider bar in one of them. But you can turn off Synchronous Scrolling if you prefer to scroll through each sheet separately.

#### Manipulating Page Breaks  

There are two ways of creating page breaks:  

• Insert them manually, from the Page Layout tab  
• Using Page Break Preview  

To insert a page break manually, select the row or column header where you want the page to break, then from the Page Layout tab of the ribbon, click the Breaks drop-down and select Insert Page Break.  

Insert page break [Worksheet 10]  

To adjust page breaks, use Page Break Preview.   

Click the Page Break Preview icon in the lower-right corner, then drag the lines. Dotted lines are automatic page breaks, and if you insert page breaks, those lines will be solid.  

Adjust page breaks. [Worksheet 11]  

#### Reverse and Transpose data with these powerful but simple solutions  

Reversing and transposing an Excel data set doesn't have to be a complicated process. Susan Harkins explains how to cut to the chase.   

Often, a solution is simpler than you first imagine if you break the problem down a bit and apply built-in features in a creative way. For instance, in this article, I'll show you how to move and reverse a data set. Neither task is difficult, but doing both seems to complicate things, and therefore, you overthink the solution. With that simple task quickly solved, we'll move on to another seemingly complicated problem—reversing and transposing!  

###### Reverse the order  

Reversing a data set isn't difficult although I've seen a lot of convoluted solutions for doing so. The simplest solution is to add a column of consecutive values adjacent to the data set and sort by the new column. It doesn't hurt a bit. If you want to keep the original order, copy the data and sort the copy. You don't have to copy and sort at the same time, although, you will see online solutions that do so using arrays and other complex solutions—nobody really needs to work that hard.   

Now, let's assume you want to keep the original data's order but you also need it reversed. First, copy the data to the new location, as shown in Figure A. Then, add a column of consecutive values to the copied data set by entering 1, 2, and 3 (I4:I6) adjacent to the copied dataset. With such a small data set, you can easily enter the values manually. If the range is larger, use the fill handle to complete your list of consecutive values. First, enter 1 in I4. Then, double-click the fill handle and choose Fill Series from the AutoFill options at the bottom of the range. Doing so will change your column of 1s to a consecutive list.   

Figure A [Worksheet 03] 

###### Copy the data set and enter a list of consecutive values adjacent to it.  

The next step is to sort the copied data set by the new column of values. To do so, click any cell in the new column (column I) and choose Sort Largest To Smallest from the Sort & Filter dropdown in the Editing group, as shown in Figure B. If Excel asks you to expand the range, click Sort to confirm. As you can see in Figure C, you have a reversed data set in a new location, and the original data exists in its original order. At this point, you can delete the consecutive values (or not).  

Figure B Choose a descending sort. [Worksheet 04]  

Figure C Sorting the consecutive values reserves the order of the data. [Worksheet 05]  

###### Transpose the data set  

Reversing the rows was easy. Now, let's complicate the problem a bit by reversing and transposing the data. Again, achieving the results is much easier than you might initially think. First, let's look at a quick transposing example:  

1. Select the data set (B4:D6) and press Ctrl + C to copy it to the Clipboard.   
2. Select F4 and choose Transpose from the Paste dropdown in the Clipboard group (Figure D). The results are shown in Figure E.   

Figure D Choose Transpose (T). [Worksheet 06]  
Figure E Here are the transposed results. [Worksheet 07]  

###### Transpose the reversed set  

The values in row 4 are now in column F. The values in row 5 are in column G, and the values in row 6 are in column H. But the results aren't reversed and while the process to transpose and reverse is still simple, knowing when to do which complicates things a bit. But don't worry.   

If you want the transposed values reversed, simply add the adjacent column of consecutive values and sort the new data set, as shown in Figure F. On the other hand, if you want the reversed data set transposed, approach the problem in that order, as shown in Figure G. First, copy the data set and reverse it, then transpose it. If you compare the two resulting data sets, you'll see that the final data sets aren't the same.  

Figure F Reverse the transposed results. [Worksheet 08] 	

Figure G Transposing the reversed data set takes an additional step. [Worksheet 09]  

###### Easier than you thought  

You want this data to look like what? Sometimes a problem only seems big, as I've shown in this article. Considering when to reverse and when to transpose is the hardest part of this easy-to-implement solution. I'm not suggesting that every request to reorganize your data will be so easily achieved. But with a little creative use of built-in tools, you might achieve what you need more easily than you initially anticipate.  

## Worksheet VBA Examples

#### Alphabetizing Worksheet Tabs

Is there is a quick way to alphabetize the worksheets in her workbook? There is no built-in method to do this, but it is possible to use a macro to do the sorting for you. I'll present two approaches in this tip. The first provides a simple way to do the sorting.  
```VBA
Sub SortSheets1()
  Dim I As Integer
  Dim J As Integer
  For I = 1 To Sheets.Count - 1
    For J = I + 1 To Sheets.Count
      If UCase(Sheets(I).Name) > UCase(Sheets(J).Name) Then
        Sheets(J).Move Before:=Sheets(I)
      End If
    Next J
  Next I
End Sub
```
This macro sorts the worksheet tabs by name in ascending order. If you want to sort them in descending order, all you need to do is change the > in the center line to <.  

The macro works great if you have a relatively low number of worksheets in your workbook. If, when you run the macro, you note that it takes a great deal of time to run, you may want to use a more efficient sorting algorithm in the macro. For instance, the following is a version that reads the names of all the worksheets into an array, sorts the array using the BubbleSort algorithm, and then does the actual arranging:  
Sheet Sort
```vba
Sub SortSheets2()
  Dim I As Integer
  Dim sMySheets() As String
  Dim iNumSheets As Integer
  iNumSheets = Sheets.Count
  Redim sMySheets(1 To iNumSheets)
  For I = 1 To iNumSheets
    sMySheets(I) = Sheets(I).Name
  Next I
  BubbleSort sMySheets
  For I = 1 To iNumSheets
    Sheets(sMySheets(I)).Move Before:=Sheets(I)
  Next I
End Sub
```

Bubble Sort
```vba
Sub BubbleSort(sToSort() As String)
  Dim Lower As Integer
  Dim Upper As Integer
  Dim I As Integer
  Dim J As Integer
  Dim K As Integer
  Dim Temp As String
  Lower = LBound(sToSort)
  Upper = UBound(sToSort)
  For I = Lower To Upper - 1
    K = I
    For J = I + 1 To Upper
      If sToSort(K) > sToSort(J) Then
        K = J
      End If
    Next J
    If I <> K Then
      Temp = sToSort(I)
      sToSort(I) = sToSort(K)
      sToSort(K) = Temp
    End If
  Next I
End Sub
```

Anyone who has programmed for some time knows that BubbleSort is a good general-purpose sorting routine, but there are faster ones available. For instance, if you have quite a few worksheets, and they start out very disorganized, you may find that the QuickSort algorithm is more beneficial. All you would need to do to change the above to use QuickSort is add the QuickSort algorithm as a subroutine (you can find the algorithm in any good Visual Basic programming book) and then call the procedure from within the main SortSheets macro. (This means changing the line where BubbleSort is now called.)  

There is another difference between this second macro and the first. The first macro does not pay attention to the case of the text used to name your worksheets. Thus, MyWorksheet would be viewed the same as MYWORKsheet. The second macro does pay attention to text case, and sorts accordingly. Of course, this is not a particularly big issue, since Excel doesn't pay attention to case in worksheet names, either.  

Just a quick note: The BubbleSort routine shown above is general-purpose in nature. That means it will work for sorting any array, not just for sorting the names of worksheet tabs.  
```vba
Sub Sort_Active_Book()
  Dim i As Integer
  Dim j As Integer
  Dim iAnswer As VbMsgBoxResult
' Prompt the user as which direction they wish to
' sort the worksheets.
   iAnswer = MsgBox("Sort Sheets in Ascending Order?" & Chr(10) _
     & "Clicking No will sort in Descending Order", _
     vbYesNoCancel + vbQuestion + vbDefaultButton1, "Sort Worksheets")
   For i = 1 To Sheets.Count
      For j = 1 To Sheets.Count - 1
' If the answer is Yes, then sort in ascending order.
         If iAnswer = vbYes Then
            If UCase$(Sheets(j).Name) > UCase$(Sheets(j + 1).Name) Then
               Sheets(j).Move After:=Sheets(j + 1)
            End If
' If the answer is No, then sort in descending order.
         ElseIf iAnswer = vbNo Then
            If UCase$(Sheets(j).Name) < UCase$(Sheets(j + 1).Name) Then
               Sheets(j).Move After:=Sheets(j + 1)
            End If
         End If
      Next j
   Next i
End Sub
```


