/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-prefixed-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,a;for(var f in g)if(g.hasOwnProperty(f)){if(e=[],n=g[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],a=s.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function i(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?_.className.baseVal=n:_.className=n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function a(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=f(w?"svg":"body"),e.fake=!0),e}function c(e,t,r,o){var i,s,a,l,u="modernizr",p=f("div"),c=d();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),p.appendChild(a);return i=f("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=l,_.offsetHeight):p.parentNode.removeChild(p),!!s}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(n[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function v(e,n,o,i){function l(){p&&(delete N.style,delete N.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var p,d,c,v,h,y=["modernizr","tspan","samp"];!N.style&&y.length;)p=!0,N.modElem=f(y.shift()),N.style=N.modElem.style;for(c=e.length,d=0;c>d;d++)if(v=e[d],h=N.style[v],a(v,"-")&&(v=s(v)),N.style[v]!==t){if(i||r(o,"undefined"))return l(),"pfx"==n?v:!0;try{N.style[v]=o}catch(g){}if(N.style[v]!=h)return l(),"pfx"==n?v:!0}return l(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?v(a,n,o,i):(a=(e+" "+E.join(s+" ")+s).split(" "),u(a,n,t))}var y=[],g=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){g.push({name:e,fn:n,options:t})},addAsyncTest:function(e){g.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var _=n.documentElement,w="svg"===_.nodeName.toLowerCase(),x="Moz O ms Webkit",S=C._config.usePrefixes?x.split(" "):[];C._cssomPrefixes=S;var b=function(n){var r,o=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var s=0;o>s;s++){var a=prefixes[s],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};C.atRule=b;var E=C._config.usePrefixes?x.toLowerCase().split(" "):[];C._domPrefixes=E;var z={elem:f("modernizr")};Modernizr._q.push(function(){delete z.elem});var N={style:z.elem.style};Modernizr._q.unshift(function(){delete N.style}),C.testAllProps=h;C.prefixed=function(e,n,t){return 0===e.indexOf("@")?b(e):(-1!=e.indexOf("-")&&(e=s(e)),n?h(e,n,t):h(e,"pfx"))};o(),i(y),delete C.addTest,delete C.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);

var PREFIXED_TRANSFORM = Modernizr.prefixed('transform');

function videoUrlToEmbed(url){
	
	var vimeoRe = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
	var youtubeRe = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	var match, id;
	
	if(url.indexOf('vimeo') > -1){
		match = url.match(vimeoRe);
		id = match[3];
		return 'https://player.vimeo.com/video/' + id + '?autoplay=1';
	} else {
		match = url.match(youtubeRe);
		id = match[7];
		return "//www.youtube.com/embed/" + id + "?showinfo=0&autoplay=1";
	}
	
}

$(function(){
    
    var $doc = $(document);
    var $lazyImgs = $('.lazy-img');
    var $body = $('body');
    
    $('.video-container').each(function(){
        
        var $this = $(this);
        
        var $svg = $this.children('svg');
        
        var url = videoUrlToEmbed( $this.data('video-url') );
        
        $svg.click(function(){
            
            $svg.remove();
            
            $this.append( $('<iframe>').attr({
                'src': url,
                allowfullscreen: true,
                webkitallowfullscreen: true
            }));
            
        })
        
    })
    
    $('#menu-toggle').click(function(){
        $body.toggleClass('menu-open');
    })
    
    $doc.on('touchmove', function(e){
        if($body.hasClass('menu-open')) e.preventDefault();
    })
    
    function lazyLoad(){
        
        if(!$lazyImgs.length) return;
        
        var top = $doc.scrollTop();
        var bottom = top + window.innerHeight;
        
        $lazyImgs = $lazyImgs.filter(function(){
            
            var $this = $(this);
            
            var thisTop = $this.offset().top;
            var thisBottom = thisTop + $this.height();
            
            if( thisTop < bottom && thisBottom > top ){
                
                var src = $this.data('src');
                
                if( $this.is('img') ){
                    
                    $this.attr('src', src);
                    
                } else {
                    
                    $this.css('background-image', 'url(' + src + ')');
                    
                }
                
                return false;
                
            } else {
                
                return true;
                
            }
            
        });
        
    }
    
    lazyLoad();
    
    $(window).on('resize scroll', lazyLoad);
    
    $('.home-carousel').each(function(){
        
        var $slider = $(this);
        
        var $slides = $slider.children().map(function(){
            return {
                element: $(this),
                loaded: false
            }
        });
        
        function loadSlide ( i ) {
            
            var slide = $slides[ i ];
            
            if ( !slide || slide.loaded ) return;
            
            slide.element.css('background-image', 'url(' + slide.element.data('src') + ')');
            slide.loaded = true;
            
        }
        
        function goToSlide(i){
            
            var slide = $slides[i];
            
            loadSlide( i );
            loadSlide( i + 1 );
            
            $slider.css( PREFIXED_TRANSFORM, 'translateX(-' + (100 / $slides.length) * i + '%)' );
            
        }
        
        goToSlide(0);
        
        var currSlide = 1;
        
        setInterval(function(){
            
            goToSlide(currSlide);
            
            if(currSlide === $slides.length - 1){
                currSlide = 0;
            } else {
                currSlide++;
            }
            
        }, 8000)
        
    })
    
})