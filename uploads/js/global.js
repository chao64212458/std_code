/*!
 * GlobalMethod JavaScript Library v1.0.1
 *
 * Includes jquery.js
 *
 * Date: 2018-12-19T19:00Z
 */

$('.pcNav_view_l ul li').hover(function () {
    var index = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    console.log( $(this).parents('.pcNav_view').find('.pcNav_view_r .pcNav_view_list').eq(index))
    $(this).parents('.pcNav_view').find('.pcNav_view_r .pcNav_view_list').eq(index).addClass('active').siblings().removeClass('active')
},function () {
    
});


new WOW().init();


! function($, fn) {
    (fn($))()
}(jQuery, function() {
    var version = "1.0.1",

        GMethod = function() {


        };

    GMethod.fn = GMethod.prototype = {

        constructor: GMethod,
        data: {
            topNum: 90
        },
        init: function() {

            this.bindDom();
            this.addEvent();
            this.wScroll();
            this.imgW();
            this.getWidth()
        },

        bindDom: function() {
            this.$toTop = $('.toTop');
            this.$iNav = $(".i-nav");
            this.$divLink = $(".divLink");
            this.navBtn = $('.nav-btn');
            this.$img = $('img');
            this.$nToBottom = $('.n_toBottom') || "";
            this.$muted =  $('.pcNavTop .muted')
        },

        addEvent: function() {
            const base = this
                // 手机导航按钮
            this.navBtn.on('click', function() {
                $('.nav-table-cell').toggleClass('close');
                $('.mynav-ul').toggleClass('showNav');

            });
            //回到顶部
            this.$toTop.click(function() {
                base.toTop(0);
            });

            //锚点索引
            this.$divLink.click(function() {

                var m = $(this).attr('data');
                var t = $(m).offset().top - base.topNum;
                base.toTop(t);
            });

            this.$muted.click(function () {
                if($('.pcNav').hasClass('active')){
                    $('.pcNav').removeClass('active')
                }else {
                    $('.pcNav').addClass('active')
                }
            })
        },

        imgW: function() {
            this.$img.each(function() {
                var w = $(this).attr('width');
                var h = $(this).attr('height');
                if (w) {
                    $(this).css({ 'width': w + 'px', 'height': h + 'px', 'max-width': '100%' })
                }
            });
        },
        getWidth: function() {
            this.topNum = window.innerWidth > 1200 ? 80 : 60;
        },
        wScroll: function() {
            const base = this;


        },
        toTop: function(t) {
            $("html, body").animate({ scrollTop: t }, { duration: 500, easing: "swing" });
            return false;
        }

    };
    GMethod.prototype.init();
    return GMethod
});
