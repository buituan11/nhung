(window.webpackJsonphpbd=window.webpackJsonphpbd||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),r=t.n(c),o=(t(13),t(1)),i=t(2),s=t(4),m=t(3),d=t(5),u=(t(14),t(15),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).move=function(e){var a=e+t.state.currdeg;t.setState({currdeg:a})},t.pushColor=function(e){if("undefined"!==typeof Storage){var a=JSON.parse(localStorage.getItem("color")),t=0;a.map((function(a){a===e&&(t=1)})),0===t&&a.push(e),localStorage.setItem("color",JSON.stringify(a))}else alert("Khong ho tro")},t.state={currdeg:0},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"menu-tab"},l.a.createElement("div",{className:"slider"},l.a.createElement("div",{className:"carousel",style:{transform:"rotateY("+this.state.currdeg+"deg)",transformStyle:"preserve-3d",transition:"transform 1s"}},l.a.createElement("div",{className:"item a"}),l.a.createElement("div",{className:"item b"}),l.a.createElement("div",{className:"item c"}),l.a.createElement("div",{className:"item d"}),l.a.createElement("div",{className:"item e"},l.a.createElement("button",{className:"button-color",style:{backgroundColor:"yellow"},onClick:function(){return e.pushColor("yellow")}})),l.a.createElement("div",{className:"item f"},l.a.createElement("button",{className:"button-color",style:{backgroundColor:"#F86B88"},onClick:function(){return e.pushColor("#F86B88")}})))),l.a.createElement("div",{className:"next",onClick:function(){return e.move(60)}}," ",l.a.createElement("i",{className:"fas fa-chevron-right"})," "),l.a.createElement("div",{className:"prev",onClick:function(){return e.move(-60)}}," ",l.a.createElement("i",{className:"fas fa-chevron-left"})," "))}}]),a}(n.Component)),f=(t(16),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).pushStuff=function(e){var a=JSON.parse(localStorage.getItem("stuff"));-1===a.indexOf(e)&&a.push(e),localStorage.setItem("stuff",JSON.stringify(a))},t.selectAns=function(e){e++,t.setState({ans:e})},t.renderProfile=function(e,a,n,c,r,o){return l.a.createElement("div",{className:"col-lg-6 col-12"},l.a.createElement("div",{className:"profile-item"},l.a.createElement("p",null,"C\xe2u 1: Ch\u1ecdn \u0111\xe1p \xe1n \u0111\xfang trong c\xe1c \u0111\xe1p \xe1n sau"),l.a.createElement("ul",null,l.a.createElement("p",null,"Ai y\xeau Th\xe1i H\xe0 n\xe0o?"),r.map((function(e,a){return l.a.createElement("li",{key:a,onClick:function(){return t.selectAns(a)}},e)}))),4===t.state.ans&&l.a.createElement("div",null,l.a.createElement("div",{class:"alert alert-success",role:"alert"},"\u0110\xfang r\xf9i, \u0111\xe2y l\xe0 ph\u1ea7n th\u01b0\u1edfng ",l.a.createElement("br",null)," L\u1edbp b\xe1nh \u0111\u1ea7u ti\xean. ",l.a.createElement("br",null)," \u1ea4n v\xe0 ki\u1ec3m tra ph\u1ea7n Cake xem :3"),l.a.createElement("div",{id:o,onClick:function(){return t.pushStuff(o)}})),4!==t.state.ans&&0!==t.state.ans&&l.a.createElement("div",{class:"alert alert-danger",role:"alert"},"\u0110\xe1p \xe1n sai r\xf9i nha :( :(")))},t.inputAns=function(e){"19992204"===e.target.value&&t.setState({disable:!0})},t.state={ans:0,disable:!1},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"profile-tab"},l.a.createElement("div",{className:"aa container-fluid"},l.a.createElement("div",{className:"row"},this.renderProfile("AA","Nam","18","AAA",["Tecers","BMH","B\u1ed1 m\u1eb9","C\xe1c ch\xfa c\xe1"],"stuff-a"),l.a.createElement("div",{className:"col-lg-6 col-12"},l.a.createElement("div",{className:"profile-item"},l.a.createElement("p",null,"C\xe2u 2: Nh\u1eadp m\xe3 OTP"),l.a.createElement("p",null,"Ti\u1ebfng qu\u1ea1 r\xe9o vong h\u1ed3n \u0111\xe3 ng\xe2n l\xean, Th\xe1i H\xe0 \u0111\xe3 s\u1eb5n s\xe0ng ch\u01b0a? Th\u1eed th\xe1ch c\u1ee7a b\u1ea1n l\xe0 nh\u1ea3y li\xean t\u1ee5c 30s b\xe0i Qu\u1ea1 r\xe9o vong h\u1ed3n, quay l\u1ea1i clip v\xe0 reply v\xe0o mail cho ch\xfang t\xf4i. Sau khi ki\u1ec3m duy\u1ec7t xong ch\xfang t\xf4i s\u1ebd g\u1eedi b\u1ea1n m\u1ed9t m\xe3 OPT, \u0111i\u1ec1n m\xe3 \u0111\xf3 v\xe0o \xf4 d\u01b0\u1edbi \u0111\xe2y b\u1ea1n s\u1ebd gi\u1ea3i \u0111\u01b0\u1ee3c c\xe2u h\u1ecfi:"),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"form-control",placeholder:"OTP code",onChange:function(a){return e.inputAns(a)},disabled:this.state.disable})),this.state.disable&&l.a.createElement("div",null,l.a.createElement("div",{class:"alert alert-success",role:"alert"},"\u0110\xfang r\xf9i, \u0111\xe2y l\xe0 ph\u1ea7n th\u01b0\u1edfng ",l.a.createElement("br",null)," L\u1edbp b\xe1nh th\u1ee9 2. ",l.a.createElement("br",null)," \u1ea4n v\xe0 ki\u1ec3m tra ph\u1ea7n Cake xem :3"),l.a.createElement("div",{id:"stuff-b",onClick:function(){return e.pushStuff("stuff-b")}}))))))))}}]),a}(n.Component)),h=(t(17),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).pushColor=function(e){if("undefined"!==typeof Storage){for(var a=t.state.color,n=0,l=0,c=a.length;l<c;l++)if(a[l]===e){n=1;break}0===n&&a.push(e),localStorage.setItem("color",JSON.stringify(a)),t.setState({color:a})}else alert("Khong ho tro localStorage")},t.pushStuff=function(e,a){if("undefined"!==typeof Storage){for(var n=t.state.stuff,l=0,c=0,r=n.length;c<r;c++)n[c]===e&&l++;l!==a&&n.push(e),localStorage.setItem("stuff",JSON.stringify(n)),t.setState({stuff:n})}else alert("Khong ho tro localStorage")},t.contactT=function(){alert("D\u1ec5 m\xe0 ch\u01a1i th\u1eed \u0111i :3")},t.renderHint=function(){return l.a.createElement("div",null,l.a.createElement("button",{className:"question","data-toggle":"modal","data-target":"#question"},"               ",l.a.createElement("i",{className:"fas fa-question"})),l.a.createElement("div",{className:"modal fade",id:"question",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},"Hint"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"hint"},l.a.createElement("p",null,"Mu\u1ed1n m\u1edf qu\u1ea3 th\xec ph\u1ea3i l\xe0m b\xe1nh. Mu\u1ed1n l\xe0m b\xe1nh th\xec ph\u1ea3i \u0111i ki\u1ebfm nguy\xean li\u1ec7u"),l.a.createElement("p",null,"T\xecm trong Cake, Question, Memories \u0111\u1ec3 l\u1ea5y m\xe0u, l\u1ea5y b\xe1nh, l\u1ea5y n\u1ebfn nha :3"),l.a.createElement("p",null,"V\xed d\u1ee5 nh\u01b0 n\xe0y"),l.a.createElement("div",{className:"example container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-12 col-12 row"},l.a.createElement("button",{className:"col-xl-2 col-2 button-color-eg",style:{backgroundColor:"#672907"},onClick:function(){return t.pushColor("#672907")}}),l.a.createElement("p",{className:"col-xl-10 col-10"},"\u0110\xe2y l\xe0 m\xe0u socola. B\u1ea5m v\xe0o th\xec n\xf3 s\u1ebd hi\u1ec7n m\xe0u \u1edf Color - B\u1ea5m th\u1eed \u0111i n\xe8 :3")),l.a.createElement("div",{className:"col-xl-12 col-12 row"},l.a.createElement("div",{className:"col-xl-3 col-3 stuff-eg"}),l.a.createElement("p",{className:"col-xl-9 col-9"},"\u0110\xe2y l\xe0 t\u1ea7ng b\xe1nh. B\u1ea5m v\xe0o th\xec n\xf3 s\u1ebd hi\u1ec7n b\xe1nh \u1edf Stuff")),l.a.createElement("p",{className:"col-xl-12 col-12"},"T\xecm nguy\xean li\u1ec7u... \u1edf kh\u1eafp n\u01a1iiii :>"))))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(){return t.contactT()}},"Cancel"),l.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal"},"Got it  ",l.a.createElement("i",{className:"fas fa-thumbs-up"})))))))},t.renderStuff=function(){var e=localStorage.getItem("candle");return l.a.createElement("div",{className:"stuff-cake"},t.state.stuff.map((function(a,n){return"candle"!==a?l.a.createElement("div",{key:n,id:a,onClick:function(){return t.addStuff(a)}}):l.a.createElement("div",{key:n,id:"stuff-candle",onClick:function(){return t.addStuff(a)}},l.a.createElement("img",{src:e,alt:""}),l.a.createElement("div",null))})))},t.renderCake=function(){var e=localStorage.getItem("candle");return l.a.createElement("div",{className:"place"},t.state.cake.map((function(a,n){return"object"===typeof a?l.a.createElement("div",{key:n,id:"top"},a.map((function(a,t){return l.a.createElement("div",{key:t,id:"candle"},l.a.createElement("img",{src:e,alt:""}),l.a.createElement("div",null))}))):"stuff-a"===a?l.a.createElement("div",{key:n,id:"a-1"},l.a.createElement("div",{id:"a-2",style:{backgroundColor:t.state.cake[n+1]}})):"stuff-b"===a?l.a.createElement("div",{key:n,id:"b-1"},l.a.createElement("div",{id:"b-2",style:{backgroundColor:t.state.cake[n+1]}})):void 0})))},t.addStuff=function(e){var a=t.state.cake,n=t.state.stuff;if(console.log(a.length),0===a.length)if("candle"===e){a.push([1]),console.log(typeof a[0]);var l=n.indexOf("candle");n.splice(l,1)}else a.push(e);else if(a.length<4)if("object"===typeof a[a.length-1])if("candle"===e){a[a.length-1].push(1);var c=n.indexOf("candle");n.splice(c,1)}else alert("C\u1eafm n\u1ebfn r\u1ed3i th\xec sao \u0111\u1ec3 b\xe1nh l\xean \u0111\u01b0\u1ee3c?? :D ??");else if("candle"===e){a.push([1]);var r=n.indexOf("candle");n.splice(r,1)}else 1===a.length||3===a.length?alert("Th\xeam l\u1edbp ph\u1ee7 b\xe1nh \u0111\xe3 :>"):a.push(e);else if(a.length>=4)if(console.log("aaaaa"),4===a.length)if("candle"===e){a.push([1]);var o=n.indexOf("candle");n.splice(o,1)}else alert("B\xe1nh cao qu\xe1 b\u1ecb \u0111\u1ed5");else if("object"===typeof a[a.length-1])if("candle"===e){a[a.length-1].push(1);var i=n.indexOf("candle");n.splice(i,1)}else alert("B\xe1nh cao qu\xe1 b\u1ecb \u0111\u1ed5");localStorage.setItem("stuff",JSON.stringify(n)),localStorage.setItem("cake",JSON.stringify(a)),t.setState({cake:a,stuff:n})},t.addColor=function(e){var a=t.state.cake;0===a.length?alert("Th\xeam t\u1ea7ng b\xe1nh \u0111\xe3 :>"):"object"===typeof a[a.length-1]?alert("C\u1eafm n\u1ebfn r\u1ed3i th\xec sao \u0111\u1ec3 b\xe1nh l\xean \u0111\u01b0\u1ee3c?? :D ??"):1===a.length||3===a.length?a.push(e):a[a.length-1]=e,localStorage.setItem("cake",JSON.stringify(a)),t.setState({cake:a})},t.remake=function(){var e=[];localStorage.setItem("cake",JSON.stringify(e)),t.setState({cake:e})},t.renderOpen=function(){return l.a.createElement("div",{className:"col-xl-6 col-6"},l.a.createElement("button",{type:"button",className:"btn btn-primary","data-toggle":"modal","data-target":"#accept"},"M\u1edf kh\xf3a ",l.a.createElement("i",{className:"fas fa-birthday-cake"})),l.a.createElement("div",{className:"modal fade",id:"deny",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"M\u1edf kh\xf3a"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"L\xe0m nh\u01b0 n\xe0y \u0111\u1ec3 m\u1edf kh\xf3a :>"),l.a.createElement("p",null,"L\xe0m xong \u1ea5n l\u1ea1i m\u1edf kh\xf3a l\xe0 \u0111\u01b0\u1ee3c"),l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1571046101/Hpbd/done.jpg",alt:""})),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),l.a.createElement("div",{className:"modal fade",id:"accept",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"M\u1edf kh\xf3a"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body",style:{textAlign:"justify"}},l.a.createElement("p",{style:{fontWeight:"bold",textAlign:"center"}},"Ch\xfac m\u1eebng sinh nh\u1eadt Th\xe1i H\xe0 :>"),l.a.createElement("img",{src:"https://res.cloudinary.com/buituan/image/upload/v1587337883/Hpbd/IMG_4665.jpg",alt:"",style:{height:"650px"}}),l.a.createElement("p",null,"Ch\xfac m\u1eebng Tr\u1ea7n Th\xe1i H\xe0i tu\u1ed5i m\u1edbi th\u1eadt l\xe0 th\xf4ng minh, \u0111\xe3 gi\u1ea3i xong r\u1ed3i n\xe8. Nh\u01b0ng v\xec H\xe0 v\u1ed1n \u0111\xe3 th\xf4ng minh r\u1ed3i n\xean th\u1eed th\xe1ch ch\u01b0a d\u1eebng l\u1ea1i \u1edf \u0111\xf3."),l.a.createElement("p",null,"Truy c\u1eadp ",l.a.createElement("a",{href:"https://zoom.us/j/95441759517?pwd=aGN5VjFBSEhvRzhKRWtyZ3hwVjVmZz09",target:"blank"},"link n\xe0y")," \u0111\u1ec3 ti\u1ebfp t\u1ee5c nh\xe9 ^^"),l.a.createElement("p",null,"Meeting ID: 954 4175 9517 ",l.a.createElement("br",null)," Password: 031915"),l.a.createElement("p",null,"Iu em,",l.a.createElement("br",null),"Nh\u1eefng ch\xfa c\xe1")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))},t.state={color:[],stuff:[],cake:[]},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("color")),a=JSON.parse(localStorage.getItem("stuff")),t=JSON.parse(localStorage.getItem("cake"));this.setState({color:e,stuff:a,cake:t})}},{key:"render",value:function(){var e=this,a=localStorage.getItem("candle");return l.a.createElement("div",{className:"cake"},l.a.createElement("div",{className:"cake-candle",onClick:function(){return e.pushStuff("candle",3)}},l.a.createElement("img",{src:a,alt:""}),l.a.createElement("div",null)),this.renderCake(),this.renderHint(),l.a.createElement("div",{className:"make container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"color col-xl-3"},l.a.createElement("p",null,"Color"),l.a.createElement("div",{className:"color-cake"},this.state.color.map((function(a,t){return l.a.createElement("div",{key:t,className:"color-item",style:{backgroundColor:a},onClick:function(){return e.addColor(a)}})})))),l.a.createElement("div",{className:"stuff col-xl-5"},l.a.createElement("p",null,"Stuff"),this.renderStuff()),l.a.createElement("div",{className:"col-xl-4 container-fluid btn-cake"},l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"btn btn-danger col-xl-6 col-6",onClick:function(){return e.remake()}},"Remake(L\xe0m l\u1ea1i) ",l.a.createElement("i",{className:"fas fa-undo"})),this.renderOpen())))))}}]),a}(n.Component)),g=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).activeMenu=function(e,a){for(var n=document.getElementsByClassName("menu"),l=0;l<n.length;l++)n[l].id="";e.target.id="active",t.setState({render:a})},t.renderMenu=function(){return 2===t.state.render?l.a.createElement(u,null):1===t.state.render?l.a.createElement(f,null):0===t.state.render?l.a.createElement(h,null):void 0},t.pushColor=function(e){if("undefined"!==typeof Storage){var a=JSON.parse(localStorage.getItem("color")),t=0;a.map((function(a){a===e&&(t=1)})),0===t&&a.push(e),localStorage.setItem("color",JSON.stringify(a))}else alert("Khong ho tro")},t.warning=function(){alert("D\u1ec5 hi\u1ec3u m\xe0 :3")},t.renderRemind=function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("button",{className:"remind","data-toggle":"modal","data-target":"#remindEnglish"},"                ",l.a.createElement("i",{className:"fas fa-exclamation"})),l.a.createElement("div",{className:"modal fade",id:"remindEnglish",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle"},"Hint"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,"Tr\u1ea3 l\u1eddi \u0111\xfang c\xe1c c\xe2u h\u1ecfi \u0111\u1ec3 c\xf3 th\u1ec3 nh\u1eadn ph\u1ea7n th\u01b0\u1edfng bonus nhaaa")),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(){return t.warning()}},"Yesn't"),l.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal"},"Yes"))))))},t.state={render:0},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){"undefined"!==typeof Storage?(localStorage.clear(),localStorage.setItem("color",JSON.stringify([])),localStorage.setItem("stuff",JSON.stringify([])),localStorage.setItem("cake",JSON.stringify([])),localStorage.setItem("candle","https://res.cloudinary.com/buituan/image/upload/v1570613855/Hpbd/fire.png")):alert("Khong ho tro")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("ul",null,l.a.createElement("li",{className:"menu",id:"active",onClick:function(a){return e.activeMenu(a,0)}},"Cake"),l.a.createElement("li",{className:"menu",id:"",onClick:function(a){return e.activeMenu(a,1)}},"Question"),l.a.createElement("li",{className:"menu",id:"",onClick:function(a){return e.activeMenu(a,2)}},"Memories"))),this.renderMenu(),1===this.state.render?this.renderRemind():null)}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.487d68d8.chunk.js.map