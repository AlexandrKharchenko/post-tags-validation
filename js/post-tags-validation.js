jQuery(document).ready(function() {
	
	// FIX: after preview post - button disabled
	jQuery('#post-preview').click(function(){
		setTimeout(function(){
		
			jQuery('#post-preview').removeClass('disabled').prop('disable' , false);
			jQuery('#publish').removeClass('disabled').prop('disable' , false);
			jQuery('#save-post').removeClass('disabled').prop('disable' , false);	
			
		} , 1000);
		
	});
	
	jQuery('#publish').click(function(){
		
		$publishStatus = jQuery('#post_status').val();
		$savePostBtn = jQuery('#save-post');
		$tags = jQuery('.tagchecklist').html();
		
		if($tags !== undefined){
			
			// Stop publish if
			// - Empty tags block and attempt first publish
			if($publishStatus === 'publish' && $tags.length === 0) {
				alert('You can publish only with the tags');
				jQuery('#title').focus();
				return false;
			}
			
			
			// - Empty title and attempt publish Pending Review
			if($savePostBtn.length > 0 && $publishStatus === 'pending' && $tags.length === 0) {
				alert('You can publish "Pending Review" only with the tags. You can just save it - "Save as Pending"');
				jQuery('#title').focus();
				return false;
			}
				
			
			// - Empty title and attempt publish draft
			if($savePostBtn.length > 0 & $publishStatus === 'draft' && $tags.length === 0) {
				alert('You can publish a draft only with the tags. You can just save it - "Save Draft"');
				jQuery('.spinner').css("visibility", "hidden");
				jQuery('#title').focus();
				return false;
			}
		
		}
	});
	
	

});