/**
 * 通用模块
 *
 */
var $win = $(window),
    $doc = $(document),
    $body = $('body', $doc);

/**
 * 图片加载
 */
$(function() {
    if (!$.fn.lazyload) return;
    $("img.lazy", $body).lazyload({
        effect: "fadeIn",
        threshold: 200,
        failure_limit: 0
    });
});



// 放大
$(function() {
    $("a[rel=fancybox-product]").fancybox({
        'overlayShow': true,
        'overlayColor': '#000',
        'overlayOpacity': 0.9,
        'opacity': 0.5,
        'transitionIn': 'elastic',
        'transitionOut': 'none',
        'titlePosition': 'over',
        'showCloseButton': false,
        'titleFormat': function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + ' </span>';
        }
    });
});



