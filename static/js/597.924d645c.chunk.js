"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{597:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(152),c=n(791),o=n(871),i=n(431),u=n(184);function a(){var e=(0,o.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),a=n[0],f=n[1];return(0,c.useEffect)((function(){(0,i.$w)(e).then((function(e){console.log(e),f(e.cast)}))}),[e]),(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:a.map((function(e){var t=e.cast_id,n=e.name,r=e.character,c=e.profile_path;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200"+c,alt:"actor"}),(0,u.jsx)("p",{children:n}),(0,u.jsxs)("p",{children:["Character: ",r]})]},t)}))})})}},431:function(e,t,n){function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,{Pg:function(){return l},$w:function(){return p},Xj:function(){return h},Aj:function(){return s},z1:function(){return d}});var i="https://api.themoviedb.org/3/",u="movie",a={api_key:"37055092bc16af00ecdaade257ad346c",language:"ua"};function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new URLSearchParams(o(o({},a),t));return fetch("".concat(i).concat(e,"?").concat(n)).then((function(e){return e.json()})).catch((function(e){return e}))}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"day";return f("trending/".concat(u,"/").concat(e))}function l(e){return f("movie/".concat(e))}function p(e){return f("movie/".concat(e,"/credits"))}function h(e){return f("movie/".concat(e,"/reviews"))}function d(e){return f("search/movie",{query:e})}}}]);
//# sourceMappingURL=597.924d645c.chunk.js.map