$.fn.tabs = function () {
    var $this = $(this);
    $this.addClass('tabs-container');
    $('div > div:first-child').toggleClass('current').siblings().children('div.tab-item-content').hide();
    $('.tab-item').on('click', function(){
        if(!$(this).hasClass('current')){
            $(this).toggleClass('current').children('div.tab-item-content').show();
            $(this).siblings().removeClass('current').children('div.tab-item-content').hide();
        }
    });

    return $this;
};