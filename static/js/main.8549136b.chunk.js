(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{76:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(26),i=n.n(c),r=(n(76),n(125)),o=n(124),m=n(2);var h=function(){return Object(m.jsxs)(o.a,{className:"header",children:[Object(m.jsx)(r.a,{}),Object(m.jsx)(r.a,{children:"\ud83d\ude0f\ud83d\ude33\ud83d\udc81Tanners Totally Free Meme Maker \ud83d\udc40\ud83d\ude04\ud83d\ude07"})]})},l=n(6),j=n(37),b=n(38),u=n(34),d=n(61),x=n(60),p=function(e){return Math.floor(Math.random()*e)},O=n(120),g=n(121),f=function(e){Object(d.a)(n,e);var t=Object(x.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var n=t.data.memes;e.setState({allMemeImgs:n})}))}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(l.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={url:this.state.allMemeImgs[p(100)].url};this.setState({randomImg:t.url})}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"memeWrapper",children:[Object(m.jsxs)("form",{className:"meme-form",onSubmit:this.handleSubmit,children:[Object(m.jsx)(O.a,{type:"text",name:"topText",placeholder:"Top Text",value:this.state.topText,onChange:this.handleChange}),Object(m.jsx)(O.a,{type:"text",name:"bottomText",placeholder:"Bottom Text",value:this.state.bottomText,onChange:this.handleChange}),Object(m.jsx)(g.a,{variant:"contained",type:"submit",children:"NEW"})]}),Object(m.jsxs)("div",{className:"meme",children:[Object(m.jsx)("img",{src:this.state.randomImg,alt:""}),Object(m.jsx)("h2",{className:"top",children:this.state.topText}),Object(m.jsx)("h2",{className:"bottom",children:this.state.bottomText})]})]})}}]),n}(a.Component),v=n(123);function T(e){return Object(m.jsxs)(o.a,{children:[Object(m.jsx)(v.a,{}),Object(m.jsx)(v.a,{animation:"wave"}),Object(m.jsx)(v.a,{animation:!1}),Object(m.jsx)(h,{})]})}var y=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(T,{}),Object(m.jsx)(f,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))},S=n(119);i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(S.a,{injectFirst:!0,children:Object(m.jsx)(y,{})})}),document.getElementById("root")),C()}},[[83,1,2]]]);
//# sourceMappingURL=main.8549136b.chunk.js.map