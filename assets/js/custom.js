// Avoid `console` errors in browsers that lack a console.
(function(){var e;var t=function(){};var n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"];var r=n.length;var i=window.console=window.console||{};while(r--){e=n[r];if(!i[e]){i[e]=t}}})()


// Custom scripts
jQuery(document).ready(function() {


  // Carousel Auto
  $('#myCarousel.slide').carousel({ interval: 6000, cycle: true });


  // Scrollspy offset
  $('[data-spy="scroll"]').scrollspy({ offset: 100 });


  // Tooltip & Popover
  $("[data-toggle=tooltip]").tooltip();
  $("[data-toggle=popover]").popover();


  // Affix
  $('.navbar-fixed-top').affix({ offset: { top: 40, bottom: null } });


  //Back-top Button scroll fade
  $(window).scroll(function() {
    if ($(this).scrollTop() > 150)
       { $('.back-top-fade').fadeIn(); }
  else { $('.back-top-fade').fadeOut();}
  });


  // Smooth Scroll
  $('.navbar-fixed-top a').smoothScroll({offset: -73 });
  $('.back-top a').smoothScroll({offset: -100 });


  // Scroll fade
  var fadeStart=0 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=200 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('.no-touch .scroll-fade');

  $(window).bind('scroll', function(){
    var offset = $(document).scrollTop()
        ,opacity=0;

    if( offset<=fadeStart ){
        opacity=1;

    }else if ( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }

    fading.css('opacity',opacity);
  });


// Syntax Highlighting
  $( 'pre' ).addClass( 'prettyprint' );
  $("pre[class=prettyprint]").each( function() {
    if ( ($(this).html().split(/\n/).length-1) > 3 ) {
        $(this).addClass( 'linenums' );
    }
  });


  // Syntax Highlighting
  $( 'pre' ).addClass( 'prettyprint' );
  $("pre[class=prettyprint]").each( function() {
    if ( ($(this).html().split(/\n/).length-1) > 3 ) {
      $(this).addClass( 'linenums' );
    }
  });


// End
});




// Selected Menu
$(function(){
var url = window.location.pathname,
  urlRegExp = new RegExp(url == '/' ? window.location.origin + '/?$' : url.replace(/\/$/,''));
  $('.navbar .nav li.page-link a').each(function(){
    if(urlRegExp.test(this.href.replace(/\/$/,''))){
      $(this.parentNode).addClass('active');
    }
  });
});




/* FitVids 1.1 - http://fitvidsjs.com/ */
!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],d=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",a=document.createElement("div");a.innerHTML='<p>x</p><style id="fit-vids-style">'+d+"</style>",r.appendChild(a.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];i.customSelector&&e.push(i.customSelector);var r=t(this).find(e.join(","));r=r.not("object object"),r.each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),r=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),d=i/r;if(!e.attr("id")){var a="fitvid"+Math.floor(999999*Math.random());e.attr("id",a)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*d+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);


/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ */
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});


/* Smooth Scroll - v1.5.5 - https://github.com/kswedberg/jquery-smooth-scroll */
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?t(require("jquery")):t(jQuery)})(function(t){function e(t){return t.replace(/(:|\.|\/)/g,"\\$1")}var l="1.5.5",o={},n={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},s=function(e){var l=[],o=!1,n=e.dir&&"left"===e.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var e=t(this);e[n]()>0?l.push(this):(e[n](1),o=e[n]()>0,o&&l.push(this),e[n](0))}}),l.length||this.each(function(){"BODY"===this.nodeName&&(l=[this])}),"first"===e.el&&l.length>1&&(l=[l[0]]),l};t.fn.extend({scrollable:function(t){var e=s.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=s.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(l,o){if(l=l||{},"options"===l)return o?this.each(function(){var e=t(this),l=t.extend(e.data("ssOpts")||{},o);t(this).data("ssOpts",l)}):this.first().data("ssOpts");var n=t.extend({},t.fn.smoothScroll.defaults,l),s=t.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(l){var o=this,r=t(this),i=t.extend({},n,r.data("ssOpts")||{}),c=n.exclude,a=i.excludeWithin,f=0,h=0,u=!0,d={},p=location.hostname===o.hostname||!o.hostname,m=i.scrollTarget||t.smoothScroll.filterPath(o.pathname)===s,S=e(o.hash);if(i.scrollTarget||p&&m&&S){for(;u&&c.length>f;)r.is(e(c[f++]))&&(u=!1);for(;u&&a.length>h;)r.closest(a[h++]).length&&(u=!1)}else u=!1;u&&(i.preventDefault&&l.preventDefault(),t.extend(d,i,{scrollTarget:i.scrollTarget||S,link:o}),t.smoothScroll(d))}),this}}),t.smoothScroll=function(e,l){if("options"===e&&"object"==typeof l)return t.extend(o,l);var n,s,r,i,c,a=0,f="offset",h="scrollTop",u={},d={};"number"==typeof e?(n=t.extend({link:null},t.fn.smoothScroll.defaults,o),r=e):(n=t.extend({link:null},t.fn.smoothScroll.defaults,e||{},o),n.scrollElement&&(f="position","static"===n.scrollElement.css("position")&&n.scrollElement.css("position","relative"))),h="left"===n.direction?"scrollLeft":h,n.scrollElement?(s=n.scrollElement,/^(?:HTML|BODY)$/.test(s[0].nodeName)||(a=s[h]())):s=t("html, body").firstScrollable(n.direction),n.beforeScroll.call(s,n),r="number"==typeof e?e:l||t(n.scrollTarget)[f]()&&t(n.scrollTarget)[f]()[n.direction]||0,u[h]=r+a+n.offset,i=n.speed,"auto"===i&&(c=u[h]-s.scrollTop(),0>c&&(c*=-1),i=c/n.autoCoefficient),d={duration:i,easing:n.easing,complete:function(){n.afterScroll.call(n.link,n)}},n.step&&(d.step=n.step),s.length?s.stop().animate(u,d):n.afterScroll.call(n.link,n)},t.smoothScroll.version=l,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=n});
