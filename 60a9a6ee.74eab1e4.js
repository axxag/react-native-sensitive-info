(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return c}));var r=t(2),i=(t(0),t(155));const o={id:"hasEnrolledFingerprints",title:"hasEnrolledFingerprints",sidebar_label:"hasEnrolledFingerprints"},a={id:"version-6.x/hasEnrolledFingerprints",isDocsHomePage:!1,title:"hasEnrolledFingerprints",description:"Checks the enrollment status of fingerprints on the device (Android only).",source:"@site/versioned_docs/version-6.x/hasEnrolledFingerprints.md",permalink:"/react-native-sensitive-info/docs/hasEnrolledFingerprints",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/master/website/versioned_docs/version-6.x/hasEnrolledFingerprints.md",version:"6.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596029033,sidebar_label:"hasEnrolledFingerprints",sidebar:"version-6.x/someSidebar",previous:{title:"getItem",permalink:"/react-native-sensitive-info/docs/getItem"},next:{title:"isSensorAvailable",permalink:"/react-native-sensitive-info/docs/isSensorAvailable"}},s=[],l={rightToc:s};function c({components:e,...n}){return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Checks the enrollment status of fingerprints on the device ",Object(i.b)("strong",{parentName:"p"},"(Android only)"),". "),Object(i.b)("p",null,"It will return ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if detected otherwise returns ",Object(i.b)("inlineCode",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"hasEnrolledFingerprints(): Promise<boolean>\n")),Object(i.b)("p",null,"Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import RNSInfo from 'react-native-sensitive-info';\n\nSINFo.hasEnrolledFingerprints();\n")))}c.isMDXComponent=!0},155:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return t?i.a.createElement(f,s(s({ref:n},c),{},{components:t})):i.a.createElement(f,s({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);