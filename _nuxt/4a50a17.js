(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{266:function(t,e,n){var content=n(280);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(104).default)("13715590",content,!0,{sourceMap:!1})},277:function(t,e,n){t.exports=n.p+"img/volume.99e68dc.png"},278:function(t,e,n){t.exports=n.p+"img/mute.3c8aee3.png"},279:function(t,e,n){"use strict";n(266)},280:function(t,e,n){var o=n(103)(!1);o.push([t.i,".sound[data-v-521fc7ca]{opacity:1;visibility:visible;box-sizing:content-box;overflow:hidden;padding:1rem;width:2.35vw;min-width:46px;cursor:pointer;transform:translateX(1rem) translateY(50%);transition:opacity 2s cubic-bezier(.165,.84,.44,1) 2s}.fade-in-enter-active[data-v-521fc7ca]{transition:opacity 2s cubic-bezier(.165,.84,.44,1)}.fade-in-enter[data-v-521fc7ca]{opacity:0}.is-fixed--bot-right[data-v-521fc7ca]{right:4.4vw;bottom:5.2vw}",""]),t.exports=o},360:function(t,e,n){"use strict";n.r(e);n(36),n(27),n(35),n(11),n(52),n(33),n(53);var o=n(20),r=n(63),c=(n(81),n(293));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"SoundButton",data:function(){return{audioPlay:!1,line:null,sound:new c.Howl({src:["/sound/just-way.mp3"],loop:!0,autoplay:!1})}},computed:l({},Object(r.c)(["menuIsOpen"])),mounted:function(){},methods:l(l({},Object(r.b)(["toggleMute"])),{},{toggleAudio:function(){this.audioPlay=!this.audioPlay,this.toggleMute(),this.audioPlay?(this.sound.play(),this.sound.fade(0,.3,1e3)):(this.sound.stop(),this.sound.fade(.3,0,1e3))},initLine:function(){},render:function(){}})},y=(n(279),n(51)),component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade",appear:""}},[o("div",{staticClass:"sound is-fixed--bot-right",on:{click:function(e){return t.toggleAudio()}}},[t.audioPlay?o("img",{attrs:{src:n(277),alt:"",width:"22px"}}):o("img",{attrs:{src:n(278),alt:"",width:"22px"}})])])}),[],!1,null,"521fc7ca",null);e.default=component.exports}}]);