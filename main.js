function init_carousel(){$("a").tooltip(),$(".regular").slick({dots:!1,infinite:!0,slidesToShow:6,slidesToScroll:1,autoplay:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1}}]}),$("#quote-carousel").carousel({pause:!0,interval:4e3})}function init_scrolls(){$(window).scroll(function(){$(this).scrollTop()>50?$(".navbar").addClass("shadow"):$(".navbar").removeClass("shadow")}),$(window).scroll(function(){$(this).scrollTop()>85?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()}),$("#back-to-top").click(function(){return $("#back-to-top").tooltip("hide"),$("body,html").animate({scrollTop:0},800),!1}),$(".scrollPage").click(function(t){t.preventDefault();var o=$(this).data("target")||$(this).attr("href");return $("body,html").animate({scrollTop:$(o).offset().top-$(".navbar-fixed-top").height()},800),!1}),$("#back-to-top").tooltip("show")}function _get_url_param(t,o){var e=new RegExp("[?&]"+t+"=([^&#]*)").exec(window.location.href);return e&&decodeURIComponent(e[1])||o}function getUtmData(){return{utm_source:Cookies.get("utm_source")||"Organic Search",utm_campaign:Cookies.get("utm_campaign")||"None",utm_medium:Cookies.get("utm_medium"),utm_content:Cookies.get("utm_content")}}function getCTAPage(){return{cta_page:_get_url_param("cta_page","")}}function getLeadTrackingData(){return $.extend({},getUtmData(),getCTAPage())}function validateEmail(t){return/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)}