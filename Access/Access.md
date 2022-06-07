# Access

## **Teach Your Users to Analyze Access Data With Pivot Tables and Charts**
In “[Teach users to manipulate data with Excel pivot tables](http://www.techrepublic.com/article.jhtml?id=r00320001218det03.htm)” and “[Present your Excel data with pivot charts](http://www.techrepublic.com/article.jhtml?id=r00320001226det03.htm),” I explained how to use pivot tables and pivot charts to analyze data interactively in an Excel spreadsheet. Until recently, the only way we could teach users to perform this type of analysis on Access data was to show them how to import their Access database into Excel using MS Query or teach them how to create a CrossTab query in Access. Both methods require students to spend a good deal of time learning about the intricacies of databases. And by the time they’ve learned that, they have often lost sight of their goal—getting the information they need quickly.

Fortunately, MS Office 97 changed all that. In the following example, I’ll show you how to teach your students to use the PivotTable Wizard in Access to analyze their data.
#### **Use a small database**
Start with a simple database like the one shown in **Figure 1**. All the records should be visible on the screen without scrolling. Likewise, use an absolute minimum of fields (i.e., only the ones needed in your pivot table demo). It is also a good idea to presort the database to make it easier for the students to check the pivot table results against the actual data in the table.

|<p>**Figure 1**</p><p></p><p>This database provides a range of employee information.</p>|<p>**Figure 2**</p><p></p><p>Click on New to begin building a new form object.</p>|
| :- | :- |  

#### **Start by building a form**
After pointing out the various fields of data contained in this database, formulate a question that can be easily answered by the information in the table. In this lesson, we’ll use the question: What is the sum of all salaries by gender?

Because pivot tables are form objects in Access, you must first return to the Database Window by closing the Employees table. Next, click on the Forms button under Objects. To build a new form object, click on the New button in the toolbar (see **Figure 2**).

|<p>**Figure 3**</p><p></p><p>This pivot table will draw its data from the Employees table.</p>|<p>**Figure 4**</p><p></p><p>The basics of using PivotTable objects in Access</p><p></p>|
| :- | :- |  

#### **The New button will open the New Form** 
Dialogue box, shown in **Figure 3**. Select the PivotTable Wizard to create a form that includes an Excel pivot table. Then choose the table that will provide the pivot table’s data, which in this example is Employees.

After clicking OK, a screen appears that provides an introduction to using Excel PivotTable objects in Access forms (see **Figure 4**). Click on Next to continue.

|<p>**Figure 5**</p><p></p><p>The Gender and Salary fields will be used for this PivotTable object.</p>|<p>**Figure 6**</p><p></p><p>One more click and the pivot table is created.</p>|
| :- | :- |  

The next dialog box asks which data fields will be needed for the PivotTable object. Since we are looking for salaries by gender, we only need to select the Gender and Salary fields (see **Figure 5**).

Clicking Next brings us to the last dialog box of the PivotTable Wizard, shown in **Figure 6**. At this point, click on Finish.

|<p>**Figure 7**</p><p></p><p>The Edit PivotTable Object button is at the bottom of the PivotTable Form window.</p>|<p>**Figure 8**</p><p></p><p>Drop the fields into their appropriate locations.</p>|
| :- | :- |  

#### **Building the pivot table on the form**
We are now ready to begin building the pivot table onto the pivot table form. To begin, select the Edit PivotTable Object button (see **Figure 7**). This will activate Excel.

You can now build the pivot table as you would in Excel. First, refresh the data by clicking once on the Refresh Data button in the toolbar (the one with the red exclamation point). Next, click-and-drag the Gender field to the Drop Row Fields Here box. Then, click-and-drag the Salary field to the Drop Data Items Here box (see **Figure 8**).

|<p>**Figure 9**</p><p></p><p>The sum of all employee salaries by gender is now provided by the pivot table.</p>|<p>**Figure 10**</p><p></p><p>The pivot table will now display the average salary by gender.</p>|
| :- | :- |  

The results appear immediately in the pivot table (see **Figure 9**). You can now analyze the data further with a few mouse clicks.

Suppose you want to know the average salary by gender. First, click on A3 and then on the Field Settings button in the PivotTable toolbar. This will bring up the PivotTable Field dialogue box. From here, select Average in the Summarize By scroll box (see **Figure 10**).

|<p>**Figure 11**</p><p></p><p>Note that the format of cells B5 through B7 has been changed to Currency.</p>|<p>**Figure 12**</p><p></p><p>By using Count, we can generate the total number of employees by gender.</p>|
| :- | :- |  

After clicking OK, the following results are displayed (see **Figure 11**).
#### **Using Count**
In a similar manner, you can compare the total number of female employees with the total number of male employees in the organization by choosing Count from the PivotTable Field box (see **Figure 12**).

|<p>**Figure 13**</p><p></p><p>The total number of employees by gender</p>|<p>**Figure 14**</p><p></p><p>This pivot table can be used again for further analysis as often as needed.</p>|
| :- | :- |

The results of choosing Count are shown in **Figure 13**.
#### **Don’t forget to save your work**
When you are finished with your analysis, you can save the pivot table form. In this example, it is simply saved as PivotTable Form (see **Figure 14**).

|<p>**Figure 15**</p><p></p><p>Click on Edit PivotTable Object and begin a new analysis.</p>|<p>**Figure 16**</p><p></p><p>Use a pivot chart this time to display your data.</p>|
| :- | :- |  

Once saved, you will not need to build it again. It can be used as often as you want to analyze the Employees table. To demonstrate this, double-click on the PivotTable Form object in the Database Window. When opened, the PivotTable Form shows the results of the last analysis (see **Figure 15**). To perform another analysis, click on Edit PivotTable Object, which will take you back to Excel. At this point, you will need to refresh the data by clicking the Refresh Data button in the PivotTable toolbar.
#### **Use a pivot chart to display your results**
Now, let’s look at the following question: What is the minimum salary paid by gender? However, rather than working interactively with the PivotTable Form, let’s interact with a PivotTable Chart instead. First, click the Chart Wizard button in the PivotTable toolbar (see **Figure 16**).

The resulting chart is shown in **Figure 17**. Note that it displays the data for the previous analysis. To find the minimum salaries, first click on the Count of Salary field button in the upper left corner of the chart. Then, click on the Field Settings button in the PivotTable toolbar to display the PivotTable Field dialogue box.

|<p>**Figure 17**</p><p></p><p>A new analysis can be displayed in just a few steps.</p>|<p>**Figure 18**</p><p></p><p>The minimum salaries of employees will now be displayed.</p>|
| :- | :- |
Next, select Min from the Summarize By scroll box (see **Figure 18**).

After clicking OK, the graph changes dynamically and provides the minimum salary paid by gender (see **Figure 19**).
##### **Ready to go**
After this short lesson, your students should be ready to follow the step-by-step demo to build a new PivotTable form that will perform more complex analysis such as comparing the average salaries by gender for each division. This type of analysis would have taken much longer to teach with Access CrossTab queries. Using the PivotTable Wizard, however, students can begin analyzing their Access data within hours.

What do you think of Mary Ann’s lesson on using pivot tables and pivot charts in Access? Will this information help you teach your users? Your feedback is important to us. [Post a comment](http://www.techrepublic.com/forumdiscuss/post.jhtml?parent_id=0) or [write to Mary Ann Richardson](mailto:support@techrepublic.com?subject=Write%20to:%20Mary%20Ann%20Richardson%20-%20Teaching%20Access%20Pivot%20Tables%20&%20Pivot%20Charts) and let us know what you think.

|<p>**Figure 19**</p><p></p><p>This chart illustrates the minimum salary paid by gender.</p>|
| :- |

 
