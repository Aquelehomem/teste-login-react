(this["webpackJsonpteste-react-login2"]=this["webpackJsonpteste-react-login2"]||[]).push([[0],{42:function(t,e,n){t.exports=n(60)},47:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(19),c=n.n(r),i=(n(47),n(14)),s=n(12),u=n(3),l={h1:20,h2:"24px",h3:"28px",h4:"15px",h5:"14px",font_family:"Lato",Lato_font_import:"@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap')",Hex:"#3455AB",RGB:"rgba(52,85,171,40%)",RGBplaceholder:"rgba(52,85,171,70%)",HSB:"hsb(223,70,67,100%)",redHexCode:"#E23851",redRGB:"rgba(226,56,81,100%)",redHsb:"351-75-89 100%",blackHexCode:"#263046",blackRGB:"38-48-70 100%",blackHsb:"221-46-27 100%",riskedEye:"url('eye-off-outline.svg')",eye:"images/eye-outline.svg"},d=n(15),p=n(16),m=n(10),f=n(34),h=n.n(f),b=n(36),x=n.n(b),g=n(27),E=n.n(g),v=n(37),y=function(t){return{type:"FETCH_USERS_FAILURE",value:t}};function w(){var t=Object(i.a)(["\n\twidth: 501px;\n\theight: 230px;\n\ttransition: all 0.5s;\n\tbackground-color: white;\n\tz-index: ",";\n\topacity: ",';\n\tmargin: 0 auto;\n\tborder: 1px;\n\t//border: 1px solid gray;\n\tborder-radius: 3px;\n\tbox-shadow: 0px 0px 13px -2px rgba(0, 0, 0, 0.5);\n\tposition: absolute;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\tfont-family: "Lato";\n\tdiv.title {\n\t\tcolor: ',";\n\t\tfont-weight: 800;\n\t\tfont-size: ","px;\n\t\tpadding: 28px 26px;\n\t\tborder-bottom: 1px solid #ccd5ea;\n\t}\n\tdiv.text {\n\t\tpadding: 16px 26px;\n\t\tborder-bottom: 0.5px solid #ccd5ea;\n\t\tfont-size: ","px;\n\t\tfont-weight: 500;\n\t\tcolor: #69707f;\n\t}\n\tdiv.buttonContainer {\n\t\tborder-radius: 3px;\n\t\tpadding: 14px;\n\t\tdisplay: flex;\n\t\tjustify-content: flex-end;\n\t\tdiv {\n\t\t\theight: 40px;\n\t\t\twidth: 220px;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\tinput {\n\t\t\t\twidth: 47%;\n\t\t\t\theight: 100%;\n\t\t\t\talign-self: center;\n\t\t\t\tbackground: none;\n\t\t\t\tborder: none;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tcolor: #ccd5ea;\n\t\t\t\tfont-weight: 400;\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t\tinput:nth-of-type(2) {\n\t\t\t\tbackground-color: ",";\n\t\t\t\tcolor: white;\n\t\t\t\tfont-weight: 700;\n\t\t\t\t:hover {\n\t\t\t\t\tbackground: ",";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);return w=function(){return t},t}var O=d.a.div(w(),(function(t){return t.hideModal?"-1":"5"}),(function(t){return t.hideModal?"0":"1"}),(function(t){return t.styles.blackHexCode}),(function(t){return t.styles.h1}),(function(t){return t.styles.h5}),(function(t){return t.styles.Hex}),(function(t){return t.styles.blackHexCode}));var j=Object(m.b)((function(t){return{hideModal:t.hideModal,usuarioAutenticado:t.usuarioAutenticado}}),(function(t){return{hideModalFn:function(){return t({type:"HIDE_MODAL"})}}}))((function(t){var e=t.styles,n=t.hideModal,a=t.hideModalFn,r=t.usuarioAutenticado,c=Object(u.e)();return o.a.createElement(O,{styles:e,hideModal:n},o.a.createElement("div",{className:"title"},o.a.createElement("span",null,"Sess\xe3o em Andamento")),o.a.createElement("div",{className:"text"},"Existe outra sess\xe3o em andamento com esse usu\xe1rio. Se voc\xea continuar, a sess\xe3o ser\xe1 encerrada. Deseja encerrar a outra sess\xe3o?"),o.a.createElement("div",{className:"buttonContainer"},o.a.createElement("div",null,o.a.createElement("input",{type:"button",onClick:function(){return a()},value:"cancelar"}),o.a.createElement("input",{type:"button",onClick:function(){return c.push("/dashboard"),c.push({state:r}),void c.go()},value:"confirmar"}))))}));function S(){var t=Object(i.a)(["\n\theight: 512px;\n\twidth: 350px;\n\tmargin: auto;\n\tpadding: 12px;\n\tcolor: ",';\n\tfont-family: "Lato";\n\tposition: relative;\n\tz-index: 0;\n\t.title {\n\t\tdisplay: block;\n\t\tfont-size: ',"px;\n\t\tmargin: 0 0 73px 0;\n\t\tfont-weight: 800;\n\t}\n\t.labelContainers {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tfont-weight: 600;\n\t\tfont-size: 14px;\n\t\tmargin: 20px 0;\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tposition: relative;\n\t\tz-index: 0;\n\t\tinput {\n\t\t\tmargin: 10px 0 0 0;\n\t\t\tpadding: 15px;\n\t\t\tborder: solid 0.1px ",";\n\t\t\tborder-radius: 5px;\n\t\t\t::placeholder {\n\t\t\t\tcolor: ",";\n\t\t\t\tfont-size: 15px;\n\t\t\t\tfont-weight: 500;\n\t\t\t}\n\t\t}\n\t}\n\t.checkBox_RememberMe {\n\t\tmargin: 30px 0 0 0;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tcolor: ",";\n\t\tdiv {\n\t\t\tdisplay: flex;\n\t\t\twidth: 120px;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t\t.forgotPassword {\n\t\t\tborder-bottom: 1px solid;\n\t\t\tpadding: 0 0 3px 0;\n\t\t\ttext-decoration: none;\n\t\t\tcolor: unset;\n\t\t}\n\t}\n\tinput.submit {\n\t\twidth: 100%;\n\t\tpadding: 10px;\n\t\tmargin: 40px 0 0 0;\n\t\tborder: none;\n\t\tborder-radius: 5px;\n\t\tcolor: #ccd5ea;\n\t\tfont-weight: 600;\n\t\tbackground-color: ",";\n\t\t:hover {\n\t\t\tcolor: white;\n\t\t\tbackground-color: ",";\n\t\t}\n\t}\n\tinput.active {\n\t\tcolor: white;\n\t\tbackground-color: ",";\n\t}\n"]);return S=function(){return t},t}var C=d.a.div(S(),(function(t){return t.styles.blackHexCode}),(function(t){return t.styles.h1}),(function(t){return t.styles.RGB}),(function(t){return t.styles.RGBplaceholder}),(function(t){return t.styles.Hex}),(function(t){return t.styles.RGB}),(function(t){return t.styles.blackHexCode}),(function(t){return t.styles.Hex})),k={position:"absolute",top:"40px",left:"300px",cursor:"pointer",fill:"rgba(52,85,171,40%)"},R=Object(m.b)((function(t){return{user:t.user,usuarioAutenticado:t.usuarioAutenticado}}),(function(t){return{editForm:function(e){return t(function(t){return{type:"EDIT_FORM",value:t}}(e))},fetchUser:function(e){return t((n=e,function(){var t=Object(v.a)(E.a.mark((function t(e){var a,o;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e({type:"FETCH_USERS_REQUEST"}),t.next=4,fetch("http://ec2-18-231-156-69.sa-east-1.compute.amazonaws.com/v1/users/token",{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8",Accept:"application/json"},body:JSON.stringify(n)}).then((function(t){return t.json()})).catch((function(t){return console.log(t+"servidor n\xe3o disponivel")}));case 4:return a=t.sent,t.next=7,a;case 7:(o=t.sent).success?(e({type:"FETCH_USERS_SUCCESS",payload:"usuario autenticado"}),console.log("autenticado")):(e(y(o.data.message)),console.log("falhou"));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));var n}}}))((function(t){var e=t.styles,n=t.user,r=t.editForm,c=t.fetchUser,i=(t.usuarioAutenticado,Object(a.useState)(!1)),s=Object(p.a)(i,2),u=s[0],l=s[1],d=Object(a.useState)(!1),m=Object(p.a)(d,2),f=m[0],b=m[1],g=Object(a.useState)("101694"),E=Object(p.a)(g,2),v=E[0],y=E[1],w=Object(a.useState)("fmgusmao"),O=Object(p.a)(w,2),S=O[0],R=O[1],_=Object(a.useState)("12345"),F=Object(p.a)(_,2),A=F[0],H=F[1];Object(a.useEffect)((function(){M()}),[v,S,A]);var M=function(){r({account:v,username:S,password:A})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,{styles:e,active:u},o.a.createElement("span",{className:"title"},"Dados de Acesso"),o.a.createElement("form",{onSubmit:function(t){return function(t){t.preventDefault(),""!==n.account&&""!==n.username&&""!==n.password?c({account:v,username:S,password:A}):alert("campo(s) vazio(s)")}(t)}},o.a.createElement("div",{className:"labelContainers"},o.a.createElement("label",{htmlFor:"contratante"},"Contratante"),o.a.createElement("input",{onFocus:function(){return l(!0)},type:"text",id:"contratante",placeholder:"Digite o ID contratante",name:"contratante",value:v,onChange:function(t){y(t.target.value),M()}})),o.a.createElement("div",{className:"labelContainers"},o.a.createElement("label",{htmlFor:"usuario"},"Usu\xe1rio"),o.a.createElement("input",{onFocus:function(){return l(!0)},type:"text",id:"usuario",placeholder:"Digite seu usu\xe1rio",name:"usuario",value:S,onChange:function(t){R(t.target.value),M()}})),o.a.createElement("div",{className:"labelContainers"},o.a.createElement("label",{htmlFor:"senha"},"Senha"),o.a.createElement("input",{onFocus:function(){return l(!0)},type:f?"text":"password",id:"senha",placeholder:"Digite sua senha",name:"senha",className:"password",value:A,onChange:function(t){H(t.target.value),M()}}),f?o.a.createElement(x.a,{style:k,onClick:function(){return b(!1)}}):o.a.createElement(h.a,{style:k,onClick:function(){return b(!0)}})),o.a.createElement("div",{className:"checkBox_RememberMe"},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"lembrar_me"},o.a.createElement("input",{type:"checkbox",id:"lembrar_me",name:"lembrar_me"})),o.a.createElement("span",null,"Lembrar-me")),o.a.createElement("a",{href:"#",className:"forgotPassword"},"Esqueceu sua senha?")),o.a.createElement("input",{type:"submit",className:u?"active submit":"submit",value:"Entrar"}))),o.a.createElement(j,{styles:e}))}));var _=Object(u.f)((function(t){var e=t.location.state?"Hello world":"n\xe3o autenticado!";return o.a.createElement("div",{style:{margin:"auto",fontSize:"30px",width:"300px",textAlign:"center"}},e)}));var F=function(){return o.a.createElement("div",{style:{textAlign:"center",fontSize:"50px"}},o.a.createElement("h1",null,"ERROR 404 NOT FOUND"))};function A(){var t=Object(i.a)(["\n\tposition: relative;\n"]);return A=function(){return t},t}var H=d.a.div(A());var M=Object(m.b)((function(t){return{usuarioAutenticado:t.usuarioAutenticado}}))((function(t){return o.a.createElement(H,{className:"App"},o.a.createElement(s.a,null,o.a.createElement(u.b,null,o.a.createElement(s.a,{exact:!0,path:"/login"},o.a.createElement(R,{styles:l})),o.a.createElement(s.a,{path:"/dashboard"},o.a.createElement(_,{usuarioAutenticado:t.usuarioAutenticado})),o.a.createElement(s.a,{path:!0},o.a.createElement(F,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(17),T=n(40),N=n(9),D={user:{account:"",username:"",password:""},usuarioAutenticado:!1,message:"",hideModal:!0},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"EDIT_FORM":return Object(N.a)(Object(N.a)({},t),{},{user:e.value});case"FETCH_USERS_REQUEST":return console.log("FETCH_USERS_REQUEST"),t;case"FETCH_USERS_SUCCESS":return console.log(e.type),Object(N.a)(Object(N.a)({},t),{},{message:e.payload,usuarioAutenticado:!0,hideModal:!1});case"FETCH_USERS_FAILURE":return alert(e.value),Object(N.a)(Object(N.a)({},t),{},{message:e.payload,usuarioAutenticado:!1,hideModal:!0});case"HIDE_MODAL":return Object(N.a)(Object(N.a)({},t),{},{hideModal:!0});default:return t}},z=Object(U.c)(B,Object(U.a)(T.a));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m.a,{store:z},o.a.createElement(M,null)),"}"),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0fe57e87.chunk.js.map