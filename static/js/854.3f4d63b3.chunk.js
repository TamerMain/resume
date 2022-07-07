"use strict";(self.webpackChunkresume=self.webpackChunkresume||[]).push([[854],{552:function(e,t,n){n.d(t,{Z:function(){return o}});var r="Card_card__KkY+S",s=n(184),o=function(e){return(0,s.jsx)("div",{className:r,children:e.children})}},277:function(e,t,n){var r=n(683),s=n(861),o=n(885),u=n(757),a=n.n(u),c=n(791);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(0,c.useReducer)(i,{status:t?"pending":null,data:null,error:null}),u=(0,o.Z)(n,2),f=u[0],l=u[1],p=(0,c.useCallback)(function(){var t=(0,s.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:r=t.sent,l({type:"SUCCESS",responseData:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return(0,r.Z)({sendRequest:p},f)}},409:function(e,t,n){n.d(t,{Lf:function(){return c},jR:function(){return f},KP:function(){return p},Ir:function(){return h},h_:function(){return x}});var r=n(683),s=n(861),o=n(757),u=n.n(o),a="https://quote-917b1-default-rtdb.firebaseio.com/";function c(){return i.apply(this,arguments)}function i(){return(i=(0,s.Z)(u().mark((function e(){var t,n,s,o,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(o in s=[],n)c=(0,r.Z)({id:o},n[o]),s.push(c);return e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)(u().mark((function e(t){var n,s,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not fetch quote.");case 8:return o=(0,r.Z)({id:t},s),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return d.apply(this,arguments)}function d(){return(d=(0,s.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/comments/").concat(t.quoteId,".json"),{method:"POST",body:JSON.stringify(t.commentData),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not add comment.");case 8:return e.abrupt("return",{commentId:r.name});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return v.apply(this,arguments)}function v(){return(v=(0,s.Z)(u().mark((function e(t){var n,s,o,c,i;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a,"/comments/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(s=e.sent,n.ok){e.next=8;break}throw new Error(s.message||"Could not get comments.");case 8:for(c in o=[],s)i=(0,r.Z)({id:c},s[c]),o.push(i);return e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},854:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(791),s=n(885),o=n(45),u=n(552),a=n(993),c="QuoteForm_form__1iEVX",i="QuoteForm_loading__uNMeD",f="QuoteForm_control__11930",l="QuoteForm_actions__TmUpm",p=n(184),d=function(e){var t=(0,r.useState)(!1),n=(0,s.Z)(t,2),d=n[0],h=n[1],m=(0,r.useRef)(),x=(0,r.useRef)();return(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)(o.NL,{when:d,message:function(e){return"Are you sure you want to leave? All your entered data will be lost"}}),(0,p.jsx)(u.Z,{children:(0,p.jsxs)("form",{onFocus:function(){h(!0)},className:c,onSubmit:function(t){t.preventDefault();var n=m.current.value,r=x.current.value;e.onAddQuote({author:n,text:r})},children:[e.isLoading&&(0,p.jsx)("div",{className:i,children:(0,p.jsx)(a.Z,{})}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("label",{htmlFor:"author",children:"Author"}),(0,p.jsx)("input",{type:"text",id:"author",ref:m})]}),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("label",{htmlFor:"text",children:"Text"}),(0,p.jsx)("textarea",{id:"text",rows:"5",ref:x})]}),(0,p.jsx)("div",{className:l,children:(0,p.jsx)("button",{onClick:function(){h(!1)},className:"btn",children:"Add Quote"})})]})})]})},h=n(277),m=n(409),x=function(){var e=(0,o.k6)(),t=(0,h.Z)(m.KP),n=t.sendRequest,s=t.status;(0,r.useEffect)((function(){"completed"===s&&e.push("/14/quotes")}),[s,e]);return(0,p.jsx)(d,{isLoading:"pending"===s,onAddQuote:function(e){n(e)}})}}}]);
//# sourceMappingURL=854.3f4d63b3.chunk.js.map