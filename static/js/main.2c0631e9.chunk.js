(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[2],{16:function(e,n,t){"use strict";t.d(n,"e",(function(){return a})),t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return l})),t.d(n,"f",(function(){return c})),t.d(n,"g",(function(){return u}));var a="SET_MODAL_VIEW",r="SET_AMOUNT",o="CLOSE_MODAL",i="CLEAR_FORMS",c="SET_SELLER_DATA",u="UPDATE_SELLER_DATA",l=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/},42:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h})),t.d(n,"c",(function(){return f}));var a=t(20),r=t(0),o=t.n(r),i={amount:"",customInput:!1,modalView:-1,sellerData:{id:0,seller_id:"",cuisine_name:"",name:"",target_amount:0,amount_raised:0,num_contributions:0,num_donations:0,num_gift_cards:0,donation_amount:0,gift_card_amount:0,progress_bar_color:"",summary:"",story:"",accept_donations:!0,sell_gift_cards:!0,owner_name:"",owner_image_url:"",hero_image_url:"",business_type:"",num_employees:0,founded_year:0,website_url:"",menu_url:"",cost_per_meal:0}},c=t(19),u=t(16),l=function(e,n){var t=n.type,a=n.payload;switch(t){case u.e:return Object(c.a)({},e,{modalView:a});case u.d:return Object(c.a)({},e,{amount:a});case u.f:return Object(c.a)({},e,{sellerData:a});case u.g:return Object(c.a)({},e,{sellerData:Object(c.a)({},e.sellerData,{amount_raised:a})});case u.b:return Object(c.a)({},e,{modalView:-1,customInput:!1,amount:""});case u.a:return i;default:return e}},m=o.a.createContext(i),s=o.a.createContext((function(){return null})),d=function(e){var n=o.a.useReducer(l,i),t=Object(a.a)(n,2),r=t[0],c=t[1];return o.a.createElement(m.Provider,{value:r},o.a.createElement(s.Provider,{value:c},e.children))};function f(){var e=o.a.useContext(m);if(void 0===e)throw new Error("useModalPaymentState must be used within a CountProvider");return e}function h(){var e=o.a.useContext(s);if(void 0===e)throw new Error("useModalPaymentDispatch must be used within a CountProvider");return e}},45:function(e,n,t){"use strict";t.d(n,"b",(function(){return l})),t.d(n,"a",(function(){return s}));var a=t(3),r=t(0),o=t(95),i=t(4);function c(){var e=Object(a.a)(["\n  width: 100%;\n  height: 74vh;\n"]);return c=function(){return e},e}function u(){var e=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  div {\n    color: #ab192e;\n  }\n"]);return u=function(){return e},e}var l=function(e){var n=e.isPage;return r.createElement(m,{isPage:n},r.createElement(o.a,null))},m=i.a.div(u(),(function(e){return e.isPage?"100vh":"100%"})),s=i.a.div(c())},46:function(e,n,t){},47:function(e,n,t){e.exports=t.p+"static/media/logo.909f1479.svg"},51:function(e){e.exports=JSON.parse('{"paymentProcessing":{"amount":{"header":"Please select an amount or enter a custom amount","label1":"Select an amount","label2":"Or enter any amount","minimum":"Minimum","maximum":"Maximum","amount":"amount","submit":"Next"}},"buyMeal":{"header":"Gift a meal for ","subheader":"Send Chinatown Love will connect merchants with local organizations that will distribute your gifted meals to our community in need.","prompt":"Please enter how many meals to gift","explanationFirst":"By gifting a meal, your donation will still go directly to the merchant.","explanationSecond":"Our partners will then distribute vouchers with those who can benefit the most from a free meal.","totalLabel":"Total: "},"purchase":{"donation":"Donation for ","voucher":"Voucher for "},"navBar":{"header":{"home":"HOME","merchants":"MERCHANTS"},"languages":{"english":"ENG","chinese":"\u4e2d\u6587"}},"errorPage":{"body":{"header":"Sorry Your Dumpling Was Not Found","subHeader1":"The page you are trying does not exist or has been moved.","subHeader2":"Please try going back to the homepage.","link":"GO TO HOMEPAGE"}}}')},52:function(e){e.exports=JSON.parse('{"paymentProcessing":{"amount":{"header":"Please select an amount or enter a custom amount","label1":"Select an amount","label2":"Or enter an amount","minimum":"Minimum","maximum":"Maximum","amount":"amount","submit":"Next"}},"navBar":{"header":{"home":"HOME","merchants":"MERCHANTS"},"languages":{"english":"ENG","chinese":"\u4e2d\u6587"}},"errorPage":{"body":{"header":"Sorry Your Dumpling Was Not Found","subHeader1":"The page you are trying does not exist or has been moved.","subHeader2":"Please try going back to the homepage.","link":"GO TO HOMEPAGE"}}}')},67:function(e,n,t){e.exports=t(83)},72:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(43),i=t.n(o),c=(t(72),t(40)),u=t(23),l=t(51),m=t(52);c.a.use(u.f).init({initImmediate:!1,preload:["en","cn"],fallbackLng:"en",lng:"en",ns:["translation"],defaultNS:"translation",interpolation:{escapeValue:!1},resources:{en:{translation:l},cn:{translation:m}}});c.a;var s=t(20),d=t(6),f=t(13),h=t(35),p=t(45),b=t(3),w=t(4),E=t(36),v=t(60),g=t.n(v),x=t(61),O=t.n(x);t(46);function y(){var e=Object(b.a)(["\n  width: 150px;\n  height: 70px;\n\n  @media (max-width: 599px) {\n    width: 112px;\n    height: 50px;\n  }\n"]);return y=function(){return e},e}var j=function(e){e.theme;return r.a.createElement(S,{src:t(47),alt:"send chinatown love"})},S=w.a.img(y()),_=t(97);function k(){var e=Object(b.a)(["\n  cursor: pointer;\n"]);return k=function(){return e},e}function T(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n  transition: 0.1s;\n  padding: 0px 4px 2px 4px;\n  ","\n  "," :link {\n    color: black;\n  }\n  :hover {\n    color: #9e9e9e;\n  }\n"]);return T=function(){return e},e}function M(){var e=Object(b.a)(["\n  margin: 0;\n  transition: 0.1s;\n  color: #9e9e9e;\n  font-size: 14px;\n  cursor: pointer;\n  font-weight: 200;\n  :hover {\n    color: #a7182d;\n  }\n"]);return M=function(){return e},e}function P(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n  width: 78px;\n"]);return P=function(){return e},e}function C(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n  transition: 0.1s;\n  "," :link {\n    color: black;\n  }\n  :hover {\n    color: #9e9e9e;\n  }\n"]);return C=function(){return e},e}function N(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 125px;\n  justify-content: space-between;\n"]);return N=function(){return e},e}function L(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: ",";\n  width: ",";\n  ","\n"]);return L=function(){return e},e}function R(){var e=Object(b.a)(["\n  background-color: transparent;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 90%;\n  max-width: 1280px;\n  margin: 15px auto;\n  align-items: center;\n  font-size: 14px;\n  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);return R=function(){return e},e}var z=function(e){var n=Object(_.a)(),t=n.t,o=n.i18n,i=Object(a.useState)(!1),c=Object(s.a)(i,2),u=c[0],l=c[1],m=function(e,n){e.preventDefault(),o.changeLanguage(n)},d=function(){window.innerWidth<767&&!e.menuOpen?l(!0):(l(!1),e.setMenuOpen(!1))},h=!!Object(f.e)(window.location.pathname,"/merchants");Object(a.useEffect)((function(){return window.innerWidth<767?l(!0):l(!1),window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[]);return r.a.createElement(D,null,r.a.createElement(j,null),u?e.menuOpen?r.a.createElement(A,{compact:u.toString()},r.a.createElement(D,null,r.a.createElement(j,null),r.a.createElement(F,{onClick:function(n){return e.setMenuOpen(!1)}})),r.a.createElement(G,{compact:u.toString(),href:"https://sendchinatownlove.com/",i18nText:"navBar.header.home",altText:"HOME"}),r.a.createElement(V,{to:"/merchants",compact:u.toString(),onClick:function(n){return e.setMenuOpen(!1)}},t("navBar.header.merchants")),r.a.createElement(G,{compact:u.toString(),href:"https://www.sendchinatownlove.com/resource-center.html",i18nText:"RESOURCES",altText:"RESOURCES"})):r.a.createElement(H,null,r.a.createElement(W,null,r.a.createElement(U,{onClick:function(e){return m(e,"en")}},"ENG"),r.a.createElement("span",null,"|"),r.a.createElement(U,{onClick:function(e){return m(e,"cn")}},"\u4e2d\u6587")),r.a.createElement(g.a,{onClick:function(n){return e.setMenuOpen(!0)}})):r.a.createElement(A,{compact:u.toString()},r.a.createElement(G,{compact:u.toString(),href:"https://sendchinatownlove.com/",i18nText:"navBar.header.home",altText:"HOME"}),r.a.createElement(V,{to:"/merchants",compact:u.toString(),active:h.toString()},t("navBar.header.merchants")),r.a.createElement(G,{compact:u.toString(),href:"https://www.sendchinatownlove.com/resource-center.html",i18nText:"RESOURCES",altText:"RESOURCES"}),r.a.createElement(W,null,r.a.createElement(U,{onClick:function(e){return m(e,"en")}},"ENG"),r.a.createElement("span",null,"|"),r.a.createElement(U,{onClick:function(e){return m(e,"cn")}},"\u4e2d\u6587"))))},D=w.a.header(R()),A=w.a.div(L(),(function(e){return"true"===e.compact?"column":"row"}),(function(e){return"true"===e.compact?"100%":"50%"}),(function(e){return"true"===e.compact?"\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right:0;\n    background-color: white;\n    z-index: 10;\n  ":"\n    max-width: 400px;\n    justify-content: space-between;\n  "})),H=w.a.div(N()),B=w.a.a(C(),(function(e){return"true"===e.compact&&"\n    width: 100%;\n    margin: 16px auto;\n    text-align: center;\n  "})),G=function(e){var n=Object(_.a)().t,t=e.i18nText&&!n(e.i18nText).includes("navBar")?n(e.i18nText):e.altText;return r.a.createElement(B,Object.assign({},e,{compact:e.compact}),t)},W=w.a.div(P()),U=w.a.div(M()),V=Object(w.a)(E.a)(T(),(function(e){return"true"===e.compact&&"\n    width: 100%;\n    margin: 16px auto;\n    text-align: center;\n  "}),(function(e){return"true"===e.active&&"\n    border-bottom: 1.5px #9e9e9e solid;\n  "})),F=Object(w.a)(O.a)(k());function I(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n"]);return I=function(){return e},e}function J(){var e=Object(b.a)(["\n  padding: 0;\n  display: flex;\n"]);return J=function(){return e},e}function Y(){var e=Object(b.a)(["\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  @media (min-width: 600px) {\n    order: 2;\n  }\n  @media (max-width: 599px) {\n    flex-direction: row;\n  }\n"]);return Y=function(){return e},e}function $(){var e=Object(b.a)(["\n  width: 90%;\n  max-width: 1280px;\n  margin: 0 auto;\n  display: ",";\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: ",";\n\n  span {\n    margin-left: 24px;\n    color: #a8192e;\n  }\n  @media (min-width: 600px) {\n    justify-content: space-between;\n    height: 120px;\n  }\n  @media (max-width: 599px) {\n    padding: 0 16px 0 16px;\n    height: 80px;\n  }\n"]);return $=function(){return e},e}var q=function(e){var n=e.theme,t=void 0===n?"none":n;return r.a.createElement(K,{menuOpen:e.menuOpen,theme:t},r.a.createElement("a",{href:"https://sendchinatownlove.com/"},r.a.createElement(j,{theme:t})),r.a.createElement(Q,null,r.a.createElement(X,null,r.a.createElement(Z,{href:"https://www.facebook.com/Send-Chinatown-Love-100872288240891/"},r.a.createElement("span",{className:"fa fa-facebook"}))),r.a.createElement(X,null,r.a.createElement(Z,{href:"https://instagram.com/sendchinatownlove"},r.a.createElement("span",{className:"fa fa-instagram"}))),r.a.createElement(X,null,r.a.createElement(Z,{href:"mailto:hello@sendchinatownlove.com"},r.a.createElement("span",{className:"fa fa-envelope"})))))},K=w.a.footer($(),(function(e){return e.menuOpen?"none":"flex"}),(function(e){return"dark"===e.theme?"#f7f7f7":"#ffffff"})),Q=w.a.div(Y()),X=w.a.div(J()),Z=w.a.a(I()),ee=t(42);h.a.initialize("https://api.sendchinatownlove.com/");var ne=Object(d.a)();ne.listen((function(e){h.a.set({page:e.pathname}),h.a.pageview(e.pathname)}));var te=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(1),t.e(6)]).then(t.bind(null,204))})),ae=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,206))})),re=Object(a.lazy)((function(){return t.e(8).then(t.bind(null,130))})),oe=function(){var e=Object(a.useState)(!1),n=Object(s.a)(e,2),t=n[0],o=n[1],i=function(e){var n;switch(e){case"merchants":n=r.a.createElement(ae,{menuOpen:t});break;case"seller":n=r.a.createElement(te,{menuOpen:t});break;default:n=r.a.createElement(re,{menuOpen:t})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,null,r.a.createElement(z,{menuOpen:t,setMenuOpen:o}),n,r.a.createElement(q,{menuOpen:t})))};return r.a.createElement(f.b,{history:ne},r.a.createElement(a.Suspense,{fallback:r.a.createElement(p.b,{isPage:!0})},r.a.createElement(f.c,null,r.a.createElement(f.a,{path:"/merchants"},i("merchants")),r.a.createElement(f.a,{path:"/:id"},i("seller")),r.a.createElement(f.a,{path:"/:id#story"},i("seller")),r.a.createElement(f.a,null,i("error")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[67,3,4]]]);
//# sourceMappingURL=main.2c0631e9.chunk.js.map