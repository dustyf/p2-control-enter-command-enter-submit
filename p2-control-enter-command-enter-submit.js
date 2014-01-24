jQuery('#posttext').keydown(function (e) {
	if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
		jQuery('#new_post #submit').trigger('click');
	}
});
jQuery('#posttitle').keydown(function (e) {
	if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
		jQuery('#new_post #submit').trigger('click');
	}
});
jQuery('#tags').keydown(function (e) {
	if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
		jQuery('#new_post #submit').trigger('click');
	}
});
jQuery('#comment').keydown(function (e) {
	if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
		jQuery('#commentform #comment-submit').trigger('click');
	}
});