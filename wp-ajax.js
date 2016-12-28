/*and first you have to decalre the ajaxurl in header*/
/*
<script type="text/javascript">
	var ajaxurl = "<?php echo admin_url('admin-ajax.php'); ?>";
</script>
*/
jQuery(document).ready(function () {
    jQuery('#regfirstname').keyup(function () {
        //alert('hello');
        jQuery.ajax({
            url: ajaxurl,
            data: {
                'action':'reg_user_name_check',
                //name : $('#regfirstname').val(),
            },
            success:function(data) {
                // This outputs the result of the ajax request
                console.log(data);
            },
            error: function(errorThrown){
                //console.log(errorThrown);
            }
        });
});


/*and this code block for function.php*/
/*
add_action('wp_ajax_reg_user_name_check', 'prefix_ajax_reg_user_name_check');
add_action('wp_ajax_nopriv_reg_user_name_check', 'prefix_ajax_reg_user_name_check');

function prefix_ajax_reg_user_name_check(){
	echo "hello console";
}
*/

http://wordpress.stackexchange.com/questions/97502/admin-ajax-is-returning-0
