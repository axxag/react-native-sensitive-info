(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(2),a=(r(0),r(155));const i={id:"security",title:"Security",sidebar_label:"Security"},o={id:"security",isDocsHomePage:!1,title:"Security",description:"Jailbroken/Rooted devices can access your iOS' Keystore and Android's shared preferences/keystore in plain text, so it is necessary to add another layer of protection.",source:"@site/docs/security.md",permalink:"/react-native-sensitive-info/docs/next/security",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/master/website/docs/security.md",version:"next",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1595974529,sidebar_label:"Security",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/react-native-sensitive-info/docs/next/installation"},next:{title:"deleteItem",permalink:"/react-native-sensitive-info/docs/next/deleteItem"},latestVersionMainDocPermalink:"/react-native-sensitive-info/docs"},c=[],s={rightToc:c};function p({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Jailbroken/Rooted devices can access your iOS' Keystore and Android's shared preferences/keystore in plain text, so it is necessary to add another layer of protection."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"iOS:")," it is implemented through ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/security/secaccesscontrol"}),"Access Control"),". Everytime the app wants to access the protected keychain item, a prompt by iOS will show up. Only after authentication success will return the requested item.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Android")," it is implemented through ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/hardware/fingerprint/FingerprintManager.html"}),"FingerprintManager")," + Keystore. Keystore has a function called ",Object(a.b)("inlineCode",{parentName:"p"},"setUserAuthenticationRequired")," which makes Keystore requires user authentication before getting value."))))}p.isMDXComponent=!0},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),b=n,f=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return r?a.a.createElement(f,c(c({ref:t},p),{},{components:r})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);