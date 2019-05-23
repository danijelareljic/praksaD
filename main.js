let arrowWidth = $('.prevNext').width();
$('.prevNext').hover(function(){ 
    $(this).width('10%');
}, function(){
    $(this).width(arrowWidth);
});