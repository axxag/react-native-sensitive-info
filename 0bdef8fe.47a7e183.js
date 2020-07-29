(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{102:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(2),i=(t(0),t(155));const r={id:"installation",title:"Installation",sidebar_label:"Installation"},c={id:"version-5.x/installation",isDocsHomePage:!1,title:"Installation",description:"First of all, install it using npm or yarn",source:"@site/versioned_docs/version-5.x/installation.md",permalink:"/react-native-sensitive-info/docs/5.x/installation",editUrl:"https://github.com/mCodex/react-native-sensitive-info/tree/master/website/versioned_docs/version-5.x/installation.md",version:"5.x",lastUpdatedBy:"Mateus Andrade",lastUpdatedAt:1596029033,sidebar_label:"Installation",sidebar:"version-5.x/someSidebar",previous:{title:"Overview",permalink:"/react-native-sensitive-info/docs/5.x/"},next:{title:"Security",permalink:"/react-native-sensitive-info/docs/5.x/security"},latestVersionMainDocPermalink:"/react-native-sensitive-info/docs"},o=[{value:"Master branch (using Keychain and Android Shared Preferences)",id:"master-branch-using-keychain-and-android-shared-preferences",children:[]},{value:"Keystore branch (using Keychain and Keystore)",id:"keystore-branch-using-keychain-and-keystore",children:[]},{value:"Next (v6.0.0)",id:"next-v600",children:[]},{value:"Linking",id:"linking",children:[{value:"React-Native &gt;= 0.60",id:"react-native--060",children:[]},{value:"React-Native &lt; 0.60",id:"react-native--060-1",children:[]}]}],l={rightToc:o};function s({components:e,...n}){return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"First of all, install it using ",Object(i.b)("inlineCode",{parentName:"p"},"npm")," or ",Object(i.b)("inlineCode",{parentName:"p"},"yarn")),Object(i.b)("h3",{id:"master-branch-using-keychain-and-android-shared-preferences"},"Master branch (using Keychain and Android Shared Preferences)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save react-native-sensitive-info\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-sensitive-info\n")),Object(i.b)("h3",{id:"keystore-branch-using-keychain-and-keystore"},"Keystore branch (using Keychain and Keystore)"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save git://github.com/mCodex/react-native-sensitive-info#keystore\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add git://github.com/mCodex/react-native-sensitive-info#keystore\n")),Object(i.b)("h3",{id:"next-v600"},"Next (v6.0.0)"),Object(i.b)("p",null,"This version includes keystore usage by default. Also, includes many fixes and improvements which were outdated in keystore's branch due to lack of maintenance and only available in master's branch. You can read more ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mCodex/react-native-sensitive-info/releases/tag/v6.0.0"}),"here"),". "),Object(i.b)("p",null,"You can install by running:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install --save react-native-sensitive-info@next\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-sensitive-info@next\n")),Object(i.b)("h2",{id:"linking"},"Linking"),Object(i.b)("h3",{id:"react-native--060"},"React-Native >= 0.60"),Object(i.b)("h4",{id:"ios"},"iOS"),Object(i.b)("p",null,"Should be automatically linked when you run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"pod install\n")),Object(i.b)("p",null,"Then:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn ios\n")),Object(i.b)("h4",{id:"android"},"Android"),Object(i.b)("p",null,"Should be automatically linked when you run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn android\n")),Object(i.b)("h3",{id:"react-native--060-1"},"React-Native < 0.60"),Object(i.b)("h4",{id:"ios-1"},"iOS"),Object(i.b)("h5",{id:"using-cocoapods"},"Using cocoapods"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-pod"}),"pod 'react-native-sensitive-info', path: \"../node_modules/react-native-sensitive-info\"\n")),Object(i.b)("h5",{id:"not-using-cocoapods"},"Not using cocoapods?"),Object(i.b)("p",null,"Go to your XCode, in the project navigator:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Right click Libraries"),Object(i.b)("li",{parentName:"ul"},"Add Files to ","[your project's name]"),Object(i.b)("li",{parentName:"ul"},"Go to ",Object(i.b)("inlineCode",{parentName:"li"},"node_modules/react-native-sensitive-info")),Object(i.b)("li",{parentName:"ul"},"Add the .xcodeproj file")),Object(i.b)("p",null,"In XCode, in the project navigator, select your project."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add the libRNSensitiveInfo.a from the RNSensitiveInfo project to your project's Build Phases \u279c Link Binary With Libraries"),Object(i.b)("li",{parentName:"ul"},"Click .xcodeproj file you added before in the project navigator and go the Build Settings tab. Make sure ",Object(i.b)("inlineCode",{parentName:"li"},"All")," is toggled on (instead of 'Basic')."),Object(i.b)("li",{parentName:"ul"},"Look for Header Search Paths and make sure it contains both ",Object(i.b)("inlineCode",{parentName:"li"},"$(SRCROOT)/../react-native/React")," and ",Object(i.b)("inlineCode",{parentName:"li"},"$(SRCROOT)/../../React")," - mark both as recursive. (Should be OK by default.)")),Object(i.b)("h4",{id:"macos"},"MacOS"),Object(i.b)("p",null,"Same steps as iOS but change the Base SDK to macOS in ",Object(i.b)("strong",{parentName:"p"},"Libraries/RNSensitiveInfo.xcodeproj"),"."),Object(i.b)("h4",{id:"android-1"},"Android"),Object(i.b)("p",null,"Go to ",Object(i.b)("inlineCode",{parentName:"p"},"settings.gradle")," inside your android project folder and paste this lines there:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"include ':react-native-sensitive-info'\n\nproject(':react-native-sensitive-info').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-sensitive-info/android')\n")),Object(i.b)("p",null,"and paste it into build.gradle:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"compile project(':react-native-sensitive-info')\n")),Object(i.b)("p",null,"In your ",Object(i.b)("inlineCode",{parentName:"p"},"MainApplication.java")," add:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"import br.com.classapp.RNSensitiveInfo.RNSensitiveInfoPackage; //<- You must import this\n\nprotected List<ReactPackage> getPackages() {\n    return Arrays.<ReactPackage>asList(\n        new MainReactPackage(),\n        new RNSensitiveInfoPackage(), // <- Add this line\n    );\n}\n")),Object(i.b)("h5",{id:"windows"},"Windows"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the solution in Visual Studio for your Windows apps.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Right click your in the Explorer and click Add > Existing Project....")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigate to ",Object(i.b)("inlineCode",{parentName:"p"},"./node_modules/react-native-sensitive-info/windows/RNSensitiveInfo/RNSensitiveInfo/")," and add RNSensitiveInfo.csproj.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Right click on your React Native Windows app under your solutions directory and click ",Object(i.b)("inlineCode",{parentName:"p"},"Add > Reference"),"....")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check the RNSensitiveInfo you just added and press Ok")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open MainPage.cs in your app"))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c#"}),"using RNSqlite2;\n\nget\n  {\n      return new List<IReactPackage>\n      {\n          new MainReactPackage(),\n          new RNSensitiveInfoPackage(),\n      };\n  }\n")))}s.isMDXComponent=!0},155:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=b(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(t),u=a,O=d["".concat(c,".").concat(u)]||d[u]||p[u]||r;return t?i.a.createElement(O,o(o({ref:n},s),{},{components:t})):i.a.createElement(O,o({ref:n},s))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<r;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);