(this.webpackJsonpreact_client=this.webpackJsonpreact_client||[]).push([[0],{19:function(t,e,a){t.exports=a(45)},24:function(t,e,a){},25:function(t,e,a){t.exports=a.p+"media/logo.5d5d9eef.svg"},26:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(12),r=a.n(s),l=(a(24),a(13)),o=a(14),c=a(17),u=a(15),p=a(2),d=a(18),h=(a(25),a(26),a(16)),m=a.n(h),g=(a(44),function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(c.a)(this,Object(u.a)(e).call(this))).state={},t.state={inputArtist:"",inputSong:"",words:[]},t.handleClick=t.handleClick.bind(Object(p.a)(t)),t.updateInputArtist=t.updateInputArtist.bind(Object(p.a)(t)),t.updateInputSong=t.updateInputSong.bind(Object(p.a)(t)),t}return Object(d.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(){var t=this;m.a.get("http://0.0.0.0:5000/getquery?artist="+this.state.inputArtist+"&song_title="+this.state.inputSong).then((function(e){return t.setState({words:e.data.analysed_lyrics})})),console.log(i.a.version),console.log("success!",this.state.words)}},{key:"updateInputArtist",value:function(t){this.setState({inputArtist:t.target.value})}},{key:"updateInputSong",value:function(t){this.setState({inputSong:t.target.value})}},{key:"render",value:function(){var t=this.state.words;return i.a.createElement("div",{className:"button_container"},i.a.createElement("p",null,"My Token = ",window.token),i.a.createElement("div",{className:"input-group mb-3"},i.a.createElement("input",{type:"text",className:"form-control",placeholder:"artist name here","aria-label":"artist name here","aria-describedby":"inputGroup-sizing-lg",value:this.state.inputArtist,onChange:this.updateInputArtist}),i.a.createElement("input",{type:"text",className:"form-control",placeholder:"song title here","aria-label":"song title here","aria-describedby":"inputGroup-sizing-lg",value:this.state.inputSong,onChange:this.updateInputSong}),i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("button",{className:"btn btn-primary btn-m",onClick:this.handleClick},"call results!"))),i.a.createElement("h2",null,"Artist: ",i.a.createElement("span",{class:"badge badge-dark"},this.state.inputArtist)),i.a.createElement("h2",null,"Song: ",i.a.createElement("span",{class:"badge badge-dark"},this.state.inputSong)),i.a.createElement("div",{className:"wrapper"},Object.keys(t).map((function(e){return i.a.createElement("div",{className:"results",key:e},i.a.createElement("span",null,e),i.a.createElement("span",null," : "),i.a.createElement("span",null,t[e]))}))))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.1dc6f32b.chunk.js.map