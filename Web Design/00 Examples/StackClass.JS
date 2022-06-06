/* ==================================================================
FILE:   Stack.js
DESCR:  Stack object. 
================================================================== */

/*
DESCR:   Stack class.
*/
function stack() {
   this.pointer = -1
   this.topItem
   this.aItems = new Array
   this.push    = push
   this.pop     = pop
   this.isEmpty = isEmpty
   this.clear   = clear
}

   /*
   DESCR:  Push an item onto the stack 
   PARAMS:  item  A variable of any type.   
   */
   function push( item ) {
      this.topItem = item
      this.aItems[ ++this.pointer ] = item
   }

   /*
   DESCR: Remove item from stack
   RETURNS: The item.
   */
   function pop() {
      if ( this.isEmpty() ) return null
      this.topItem = this.aItems[ this.pointer - 1 ]
      return this.aItems[ this.pointer-- ]
   }

   /*
   DESCR:   Empties the stack.
   */
   function clear() {
      this.pointer = -1
      this.topItem = null
   }

   /*
   DESCR: Tests if stack is empty
   RETURNS: true if the stack contains no members; false otherwise.
   */

   function isEmpty() {
      return ( this.pointer < 0 ? true : false )
   }

// End class definition: stack.