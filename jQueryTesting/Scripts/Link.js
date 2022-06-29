var tmpExample = {
  ready : function() {
	//Siblings Check
    $('ul#tmpPlaces li.tmpExampleCity').siblings().addClass('tmpSiblings');
	
	// Highlight Links
    $('ul#tmpFavorites').find('li').addClass('tmpFound');	
	
	//Open the Dialog Box  
	$('input#tmpDialogueOpen').click(
      function($e) {
        $e.preventDefault();
        $('div#tmpDialogue').addClass('tmpDialogueOn');
      }  
	);
	
	//Close the Dialog Box
    $('input#tmpDialogueClose').click(
      function($e) {
        $e.preventDefault();
        $('div#tmpDialogue').removeClass('tmpDialogueOn');
      }
    );
	
    // Get all links…
    $('ul#tmpFavorites li a').click(
      function($e) {
        $e.preventDefault();
        window.open(this.href, 'FavoriteLink', '');
      }
    );
  }
};

$(document).ready(tmpExample.ready);