	/*
	Name:		imagecollection.js
	Author:		Chris Durkin
	Date:		01-Feb-2000
	Descr:		JavaScript ImageCollection object - an associative array with some of the
				same features of a Visual Basic Collection	- used for preloading images
	*/
	
	function CollectionItem(nIndex, strName, nWidth, nHeight, strSrc) {
	
	// Descr:		constructor for a collection item
	// nIndex:		Index property - represents the ordinal zero based index
	// strName:		Name of the new object
	// nWidth:		width of the image
	// nHeight:		height of the image
	// strSrc:		the Src of the image
	
		this._Name = strName;
		this._Index = nIndex;
		img = new Image(nWidth, nHeight);
		img.src = strSrc;
		this._Value = img;
	}

	function Item(idx) {
	
	// Descr:		returns an item in the collection by name or index
	// idx:			the name or index of the element to retrieve
	// Returns:		a CollectionItem, or null if not found
	
		if (this._Items.length == 0) return null;
		var objReturn = null;
		
		if (isNaN(idx)) {
		// if index is not a number, use name
		// loop through array until one with the right name is found
			for(i=0; i < this._Items.length; i++) {
				if (this._Items[i]._Name == idx) {
					objReturn = this._Items[i];
					break;
				}
			}
		} else {
		// if index IS a number, use it as a direct ordinal index into array
			if ((idx > -1) && (idx < this._Items.length)) objReturn = this._Items[idx];
		}
		
		// return the Value of the object - e.g. the IMG object	
		if (objReturn == null) {
			return null;
		} else {
			return objReturn._Value;
		}
	}
	
	function Count() {
	
	// Descr:		returns the # of items in the collection
	// Returns:		the total items. Count will be one greater than the highest Index
		return this._Items.length;
	}
	
	function Add(nWidth, nHeight, strName, strSrc) {
	
	// Descr:		adds an image to the collection
	// nWidth:		width of the image in pixels
	// nHeight:		height of the image in pixels
	// strName:		Name property for the new image
	// strSrc:		SRC property for the new image
	
		var nNewIndex = this._Items.length;
		var obj = new CollectionItem(nNewIndex, strName, nWidth, nHeight, strSrc);
		this._Items[nNewIndex] = obj;
	}
	
	function Remove(idx) {
	
	// Descr:		removes an item from the collection
	// idx:			the Name or Index of the item to remove
	// Returns:		true on success, false otherwise
	
		var wasRemoved = false;
		
		if (this._Items.length == 0) return false;
		if (isNaN(idx)) {
		// if index is not a number, use name
		// loop through array until one with the right name is found
			for(i=0; i < this._Items.length; i++) {
				if (this._Items[i]._Name == idx) {
					this._Items.splice(i, 1);
					wasRemoved = true;
				}
			}
		} else {
		// if index IS a number, use it as a direct ordinal index into array
			if ((idx > -1) && (idx < this._Items.length)) {
				this._Items.splice(idx, 1);
				wasRemoved = true;
			}
		}
		
		if (wasRemoved == true) {
		// re-index the elements in the collection
			for (var x = 0; x < this._Items.length; x++) {
				this._Items[x]._Index = x;
			}
		}
		return wasRemoved;		
	}
	
	function ImageCollection() {
	
	// Descr:		constructor for the imagecollection object. 
	
		var arrTemp = new Array();
		this._Items = arrTemp;
		this.Item = Item;
		this.Count = Count;
		this.Add = Add;
		this.Remove = Remove;
	}
		
