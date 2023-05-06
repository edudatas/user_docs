"use strict";(self.webpackChunkedudatas_docs=self.webpackChunkedudatas_docs||[]).push([[4253],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2223:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={},r="Discount Types",l={unversionedId:"financial/setup/discount_types",id:"financial/setup/discount_types",title:"Discount Types",description:"Many schools offer some sorts of discounts to the families. Some discounts may apply automatically to all",source:"@site/docs/financial/setup/discount_types.md",sourceDirName:"financial/setup",slug:"/financial/setup/discount_types",permalink:"/docs/financial/setup/discount_types",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/docs/financial/setup/"},next:{title:"Financial Accounts",permalink:"/docs/financial/setup/financial_accounts"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"discount-types"},"Discount Types"),(0,i.kt)("p",null,"Many schools offer some sorts of discounts to the families. Some discounts may apply automatically to all\nfamilies based on certain criteria such as multiple child discounts, while other discounts may only apply\nto certain families. EDUDATAS can help determine the discounts and apply them to the family line items."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Financial account"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Choose the account that you want to use to keep track of the discounts that have been applied."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Name"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Give the discount a name that will indicate the type of discount."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Child"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Indicates if the discount is to be applied to the tuition amount of the child or to the tuition amount of the family. This is primarily important if you indicate that the discount is a percent discount."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Child number"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If this is a child discount, indicate the number of the child for which this discount will be applied. In the ",(0,i.kt)("strong",{parentName:"li"},"Settings"),", you will determine if you start counting the family's children with the oldest being number 1 or the youngest."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Percent"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Indicates if the discount is a percentage discount or a flat amount."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Percent off balance"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the discount is a percentage discount, this option indicates if the percentage should be calculated off of the total charges or off the balance once other discounts are calculated. For example, if a family had total charges of 1000, and two discounts of 20%, if this option is not selected, the family would receive two discounts of 200 for a total discount of 400. With the option selected, the first 20% discount would be for 200 while the next 20% would be for 160 (20% of the 1800 balance) for a total discount of 360."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Amount"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This should be the flat amount of the discount or the percentage number of the discount."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Automatic"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Indicates if EDUDATAS should automatically apply the discount when calculating the family's charges if it applies to the student or family."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Discount limitations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Each of the discounts can be limited to only apply to certain school levels or school grades. To do so,",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Click on the number under this column."),(0,i.kt)("li",{parentName:"ul"},"Click on <%= create_new_button %> for the Discount Limitations"),(0,i.kt)("li",{parentName:"ul"},"Choose either ",(0,i.kt)("strong",{parentName:"li"},"School Level")," or ",(0,i.kt)("strong",{parentName:"li"},"School Grade")," from the ",(0,i.kt)("strong",{parentName:"li"},"Discountable type"),"."),(0,i.kt)("li",{parentName:"ul"},"Choose the corresponding ",(0,i.kt)("strong",{parentName:"li"},"School Level")," or ",(0,i.kt)("strong",{parentName:"li"},"School Grade")," from your school's options."),(0,i.kt)("li",{parentName:"ul"},"Click on <%= create_button %>"),(0,i.kt)("li",{parentName:"ul"},"Repeat steps 2-5 as necessary."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Family setup charges"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The number of items that have been calculated for a family of this discount type. To see all of them, click on the number shown under this column."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Family line items"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The number of items that have been created of this discount type. To see all the discounts, click on the number shown under this column.")))))}m.isMDXComponent=!0}}]);