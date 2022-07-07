"use strict";(self.webpackChunkresume=self.webpackChunkresume||[]).push([[864],{552:function(e,n,t){t.d(n,{Z:function(){return c}});var r="Card_card__KkY+S",s=t(184),c=function(e){return(0,s.jsx)("div",{className:r,children:e.children})}},277:function(e,n,t){var r=t(683),s=t(861),c=t(885),o=t(757),u=t.n(o),a=t(791);function i(e,n){return"SEND"===n.type?{data:null,error:null,status:"pending"}:"SUCCESS"===n.type?{data:n.responseData,error:null,status:"completed"}:"ERROR"===n.type?{data:null,error:n.errorMessage,status:"completed"}:e}n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=(0,a.useReducer)(i,{status:n?"pending":null,data:null,error:null}),o=(0,c.Z)(t,2),d=o[0],f=o[1],l=(0,a.useCallback)(function(){var n=(0,s.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f({type:"SEND"}),n.prev=1,n.next=4,e(t);case 4:r=n.sent,f({type:"SUCCESS",responseData:r}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),f({type:"ERROR",errorMessage:n.t0.message||"Something went wrong!"});case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}(),[e]);return(0,r.Z)({sendRequest:l},d)}},409:function(e,n,t){t.d(n,{Lf:function(){return a},jR:function(){return d},KP:function(){return l},Ir:function(){return h},h_:function(){return x}});var r=t(683),s=t(861),c=t(757),o=t.n(c),u="https://quote-917b1-default-rtdb.firebaseio.com/";function a(){return i.apply(this,arguments)}function i(){return(i=(0,s.Z)(o().mark((function e(){var n,t,s,c,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/quotes.json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(t=e.sent,n.ok){e.next=8;break}throw new Error(t.message||"Could not fetch quotes.");case 8:for(c in s=[],t)a=(0,r.Z)({id:c},t[c]),s.push(a);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,s.Z)(o().mark((function e(n){var t,s,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/quotes/").concat(n,".json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(s=e.sent,t.ok){e.next=8;break}throw new Error(s.message||"Could not fetch quote.");case 8:return c=(0,r.Z)({id:n},s),e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,s.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/quotes.json"),{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(r=e.sent,t.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)(o().mark((function e(n){var t,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/comments/").concat(n.quoteId,".json"),{method:"POST",body:JSON.stringify(n.commentData),headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(r=e.sent,t.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=(0,s.Z)(o().mark((function e(n){var t,s,c,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/comments/").concat(n,".json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(s=e.sent,t.ok){e.next=8;break}throw new Error(s.message||"Could not get comments.");case 8:for(a in c=[],s)i=(0,r.Z)({id:a},s[a]),c.push(i);return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},864:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(791),s=t(45),c="QuoteItem_item__h9UI4",o=t(523),u=t(184),a=function(e){return(0,u.jsxs)("li",{className:c,children:[(0,u.jsxs)("figure",{children:[(0,u.jsx)("blockquote",{children:(0,u.jsx)("p",{children:e.text})}),(0,u.jsx)("figcaption",{children:e.author})]}),(0,u.jsx)(o.rU,{className:"btn",to:"/14/quotes/".concat(e.id),children:"View Fullscreen"})]})},i="QuoteList_list__fFFqE",d="QuoteList_sorting__ELD90",f=function(e){var n,t,c=(0,s.k6)(),o=(0,s.TH)(),f="asc"===new URLSearchParams(o.search).get("sort"),l=(n=e.quotes,t=f,n.sort((function(e,n){return t?e.id>n.id?1:-1:e.id<n.id?1:-1})));return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)("div",{className:d,children:(0,u.jsxs)("button",{onClick:function(){c.push({pathname:o.pathname,search:"?sort=".concat(f?"desc":"asc")})},children:["Sort ",f?"Descending":"Ascending"]})}),(0,u.jsx)("ul",{className:i,children:l.map((function(e){return(0,u.jsx)(a,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},l=t(552),p=t(277),h=t(409),m=t(993),x="NoQuotesFound_noquotes__GE3ln",j=function(){return(0,u.jsxs)("div",{className:x,children:[(0,u.jsx)("p",{children:"No quotes found!"}),(0,u.jsx)(o.rU,{className:"btn",to:"/14/new-quote",children:"Add A Quote"})]})},w=function(){var e=(0,p.Z)(h.Lf,!0),n=e.sendRequest,t=e.status,s=e.data,c=e.error;return(0,r.useEffect)((function(){n()}),[n]),"pending"===t?(0,u.jsx)("div",{className:"centered",children:(0,u.jsx)(m.Z,{})}):c?(0,u.jsx)("p",{className:"centered focused",children:c}):"completed"!==t||s&&0!==s.length?(0,u.jsx)(l.Z,{children:(0,u.jsx)(f,{quotes:s})}):(0,u.jsx)(j,{})}}}]);
//# sourceMappingURL=864.f27c6b87.chunk.js.map