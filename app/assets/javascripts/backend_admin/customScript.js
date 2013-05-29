$(document).ready(function() {

    // Adds title attributes and classnames to list items

    $("ul#nav li a:contains('Dashboard')").addClass("dashboard").attr('title', 'Dashboard');
    $("ul#nav li a:contains('Pages')").addClass("pages").attr('title', 'Pages');
    $("ul#nav li a:contains('Assets')").addClass("assets").attr('title', 'Assets');
    $("ul#nav li a:contains('Comments')").addClass("comments").attr('title', 'Comments');
    $("ul#nav li a:contains('Widgets')").addClass("widgets").attr('title', 'Widgets');
    $("ul#nav li a:contains('Maps')").addClass("maps").attr('title', 'Maps');
    $("ul#nav li a:contains('Search')").addClass("search").attr('title', 'Search');
    $("ul#nav li a:contains('Trash')").addClass("trash").attr('title', 'Trash');
    $("ul#nav li a:contains('Settings')").addClass("settings").attr('title', 'Settings');

    // Animate sidebar navigation



    $('ul#nav li:has(ul)').hover(function(){
        $('.flyoutBg').stop().animate({ left : '175px' }, 300);
        $(this).find('ul').stop().animate({'left' : '175px'}, 300);
    }, function() {
        $('.flyoutBg').stop().animate({ left : '25px' }, 300);
        $(this).find('ul').stop().animate({'left' : '25px'}, 300);
    });



    $notice = $('p.wps-notice');
    if($notice.length) {
        $notice.fadeOut(2000);
    }



    $(".slidingDiv").hide();
    $(".show_hide").show();

    $('.show_hide').click(function(){
        $(".slidingDiv").slideToggle();
    });

    $(".double a.button").click(function(){
    $(".double a.button.checked").removeClass("checked");
        $(this).prev("input.RadioClass").attr("checked","checked");
    $(this).addClass("checked");
        //alert($(this).data('id'))
        //alert($(this).data('action'))
        /*$.ajax({
            type: 'PUT',
            url: '/posts/1/',
            data: ""
        });*/

        if($("#new_record").data('value')==true){
            $(".new_post_visible input:checkbox").attr('checked', $(this).data('action'));
            $("#post_is_public").attr("checked",$(this).data('action'));
        }else{
            $(".p_post_visible").attr('checked', $(this).data('action'));
            $("#post_is_public").attr("checked",$(this).data('action'));
            $("#p_post form").submit();
        }
    });

});
