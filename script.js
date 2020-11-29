jQuery(document).ready(function(){
    $('#hamburger').click(function(){
        if($('.visible')[0]){
            $('.menu_mobile').removeClass('visible');
        }else{
            $('.menu_mobile').addClass('visible');
        }
    });
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });
});