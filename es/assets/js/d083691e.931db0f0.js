"use strict";(self.webpackChunkedudatas_docs=self.webpackChunkedudatas_docs||[]).push([[6614],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="Payment Plans",o={unversionedId:"financial/setup/payment_plans",id:"financial/setup/payment_plans",title:"Payment Plans",description:"By setting up payment plans, EDUDATAS will be be able to calculate how to subdivide the annual tuition",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/financial/setup/payment_plans.md",sourceDirName:"financial/setup",slug:"/financial/setup/payment_plans",permalink:"/es/docs/financial/setup/payment_plans",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"Financial Accounts",permalink:"/es/docs/financial/setup/financial_accounts"},next:{title:"Settings",permalink:"/es/docs/financial/setup/settings"}},p={},s=[],u={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"payment-plans"},"Payment Plans"),(0,r.kt)("p",null,"By setting up payment plans, EDUDATAS will be be able to calculate how to subdivide the annual tuition\ncharges throughout the year. Most schools will have monthly payment plan. Some will also have an annual\nplan or semiannual plan,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The name of the plan."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Number of payments"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The number of payments used to subdivide the charges."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Message"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A message which can be used to describe the payment plan on a from provided to the family."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Frequency period"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The number of times in a period that a payment will be due."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Frequency type"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Defines the period of time to be one of the following options.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Days"),(0,r.kt)("li",{parentName:"ul"},"Weeks"),(0,r.kt)("li",{parentName:"ul"},"Half-months"),(0,r.kt)("li",{parentName:"ul"},"Months"),(0,r.kt)("li",{parentName:"ul"},"Years"))),(0,r.kt)("li",{parentName:"ul"},"EDUDATAS will use this information to divide the charges into equal payments. For example, if the ",(0,r.kt)("strong",{parentName:"li"},"Number of payments")," is 10, and ",(0,r.kt)("strong",{parentName:"li"},"Frequency period")," is set to 1, and ",(0,r.kt)("strong",{parentName:"li"},"Frequency type")," is set to Months, the family will be charged the equal payments once a month for 10 months."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start date"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The date of the first payment."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Families"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The list of families that have this payment plan assigned."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Due Dates"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The list of due dates for this payment plan. From the list view, you can use the <%= member_macros_button %> and choose ",(0,r.kt)("strong",{parentName:"li"},"Generate Due Dates")," to have EDUDATAS generate the default due dates based on the ",(0,r.kt)("strong",{parentName:"li"},"Start date")," and the rest of the information mentioned above. When the end of year rollover is run, these dates will automatically be advanced one year. You can go into the list of due dates and change the dates if there are special reasons for doing so."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add Year to Dates"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EDUDATAS will automatically add one year to all of the due dates when doing an end of year rollover. If you need to do it manually, you can choose this option.")))))}c.isMDXComponent=!0}}]);