(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){},13:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(14),r=n.n(c),i=(n(50),n(2)),s=n(3);n(53),n(8),n(56);function o(){var e=Object(a.useContext)(H),t=JSON.parse(localStorage.getItem(e)),n={};return t.length>0&&(n={backgroundImage:"url("+t+")"}),l.a.createElement("div",{id:"header-section",style:n},l.a.createElement("div",{id:"website-name"},"Movie Collector V2"))}n(58),n(60),n(26),n(13),n(64);function u(e){e("block"),document.getElementById("page").style.opacity=.3,document.getElementById("page").style.pointerEvents="none"}function m(e){var t=e.display,n=e.contents;return l.a.createElement("div",{className:"popup-window",style:{display:t[0]}},l.a.createElement("div",{className:"popup-top-bar"},l.a.createElement("div",{className:"material-icons",onClick:function(){return(0,t[1])("none"),document.getElementById("page").style.opacity=1,void(document.getElementById("page").style.pointerEvents="auto")}},"close")),n)}function d(){var e=Object(a.useContext)(V).addListWindow;return l.a.createElement("div",{className:"add-list-button material-icons button",onClick:function(){u(e[1])}},"add")}function v(){var e=Object(a.useContext)(V).editListWindow;return l.a.createElement("div",{className:"add-list-button material-icons button",onClick:function(){u(e[1])}},"edit")}n(66);function f(e){var t=e.name;return l.a.createElement("div",{className:"list-card button"},l.a.createElement("span",{className:"text"},t))}function E(e){for(var t=e.currentListSetter,n=e.lists,a=(e.setLists,Object(i.a)(n)),c=[],r=function(e){c.push(l.a.createElement("span",{key:e,onClick:function(){return n=a[e],void t(n);var n}},l.a.createElement(f,{name:a[e].name})))},s=0;s<a.length;s++)r(s);return l.a.createElement("div",{className:"list-selection-bar"},l.a.createElement(d,null),l.a.createElement(v,null),c)}n(27);var p=n(21);n(69);function b(e){var t=e.content,n=e.list,a=e.listSetter,c=e.listIndex;var r="url("+t.poster+")";return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"movie-delete-button material-icons",onClick:function(){return function(){var e=Object(i.a)(n.contents);e.splice(c,1);var t=Object(p.a)({},n);t.contents=Object(i.a)(e),a(t)}()}},"delete"),l.a.createElement("div",{className:"movie-details"},l.a.createElement("h3",null,t.title),l.a.createElement("p",null,l.a.createElement("b",null,"Release date: "),l.a.createElement("br",null),t.release),l.a.createElement("b",null,"Overview"),l.a.createElement("div",null,t.description)),l.a.createElement("div",{className:"movie-details-poster",style:{backgroundImage:r}}))}function g(e,t,n,a){var c;u(e),c=l.a.createElement(b,{content:t,list:n,listSetter:a,listIndex:n.contents.indexOf(t)}),P(c)}function h(e){var t=e.content,n=e.currentList,c=e.currentListSetter,r=Object(a.useContext)(V).movieDetailsWindow,i={backgroundImage:"url("+t.poster+")"};return l.a.createElement("div",{className:"movie-card",onClick:function(){return g(r[1],t,n,c)}},l.a.createElement("div",{className:"movie-poster",style:i}),l.a.createElement("div",{className:"movie-description"},l.a.createElement("h4",null,t.title),l.a.createElement("b",null,"Rating: ",t.rating)))}function O(e){var t=e.currentList,n=Object(a.useState)("none"),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useContext)(V).addMovieWindow;return Object(a.useEffect)(function(){i("block"),"\xa7--empty"===t.name&&i("none")},[t]),l.a.createElement("div",{className:"movie-card add-card material-icons",style:{display:r},onClick:function(){u(o[1])}},"add")}var y={name:"\xa7--empty",element:"",contents:[]};function j(e){var t=e.currentList,n=e.setCurrentList,c=e.lists,r=e.setLists,o=Object(a.useState)(),u=Object(s.a)(o,2),m=u[0],d=u[1];return Object(a.useEffect)(function(){d(function(e){return[]});for(var e=!1,a=0;a<c.length;a++)c[a].name===t.name&&(e=!0);if(e)for(var r=function(e){var a=l.a.createElement("span",{key:e},l.a.createElement(h,{content:t.contents[e],currentList:t,currentListSetter:n}));d(function(e){return[].concat(Object(i.a)(e),[a])})},s=0;s<t.contents.length;s++)r(s);else n(y)},[t,t.contents.length,c,c.length]),l.a.createElement(l.a.Fragment,null,l.a.createElement(E,{currentListSetter:n,lists:c,setLists:r}),l.a.createElement("div",{className:"main-section"},l.a.createElement("span",null,l.a.createElement(O,{currentList:t})),m))}n(71);function N(){return l.a.createElement("div",{className:"footer-section"},l.a.createElement("span",null,"Created by Daniel Wilsson"),l.a.createElement("span",null,"Movie data fetched from ",l.a.createElement("a",{href:"https://www.themoviedb.org/"},"TheMovieDB")))}n(73);function S(){var e=Object(a.useContext)(V).settingsWindow;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"settings-button material-icons button",onClick:function(){u(e[1])}},"settings"))}n(75);var w,k="https://cdn.discordapp.com/attachments/563630157123026945/990363668543856660/test.png",C=["#FFFEFF","#02233a"],L="MovieCollectorV2.ColourTheme";function I(e){w=e,document.documentElement.style.setProperty("--background-colour",C[w]),localStorage.setItem(L,JSON.stringify(w))}function x(){w=JSON.parse(localStorage.getItem(L)),document.documentElement.style.setProperty("--background-colour",C[w]);var e=Object(a.useContext)(H),t=Object(a.useRef)();return l.a.createElement("div",{className:"settings-menu"},l.a.createElement("h2",null,"Settings"),l.a.createElement("h3",null,"Header:"),l.a.createElement("span",{className:"material-icons search-bar"},"link"),l.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Image link",ref:t}),l.a.createElement("input",{type:"submit",onClick:function(){return function(e,t){var n=e.current.value;0===e.current.value.length&&(n=k),document.getElementById("header-section").style.backgroundImage="url("+n+")",localStorage.setItem(t,JSON.stringify(e.current.value)),e.current.value=null}(t,e)}}),l.a.createElement("h3",null,"Colour theme:"),l.a.createElement("div",{className:"light-mode colour-theme",onClick:function(){I(0)}}),l.a.createElement("div",{className:"dark-mode colour-theme",onClick:function(){I(1)}}))}n(77);var W=n(40),F=n.n(W),B=null,M="0px 0px 5px 4px white",J=[];function R(e){null!=B&&(document.getElementById(B).style.boxShadow=""),B=e,null!=e&&(document.getElementById(B).style.boxShadow=M)}var _=function(e){var t=e.currentList,n=e.listSetter,c=Object(a.useRef)(),r=Object(a.useState)([]),i=Object(s.a)(r,2),o=i[0],u=i[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,l.a.createElement("h3",null,'Add a new film to "',l.a.createElement("i",null,t.name),'"'),l.a.createElement("span",null,l.a.createElement("input",{className:"movie-search-bar",type:"text",ref:c}),l.a.createElement("span",{className:"material-icons movie-search-bar search-button",onClick:function(){return function(e,t){B=null;var n=e.current.value,a=[];F.a.get("https://api.themoviedb.org/3/search/movie?api_key=1792246f2d8a3a9dfa6868c1a215e91b&query="+n.replaceAll(" ","+")).then(function(e){var n,c=20;e.data.results.length<c&&(c=e.data.results.length),J=[];for(var r=function(t){if(null==e.data.results[t].poster_path)return"continue";var c;J[t]={poster:"https://image.tmdb.org/t/p/w500"+(c=e.data.results[t]).poster_path,title:c.title,rating:c.vote_average,description:c.overview,release:c.release_date},n="url(https://image.tmdb.org/t/p/w500"+e.data.results[t].poster_path+")",a.push(l.a.createElement("div",{key:t,id:t,className:"movie-search-result",onClick:function(){return R(t)},style:{backgroundImage:n}}))},i=0;i<c;i++)r(i);t(a)}).catch(function(e){alert(e)})}(c,u)}},"search")),l.a.createElement("div",{className:"add-to-list-button button",onClick:function(){return function(e,t){if(null!=B){var n=Object(p.a)({},e);n.contents.push(J[B]),t(n),R(null)}}(t,n)}},"Add to list"),l.a.createElement("div",{className:"movie-search-result-container"},o,l.a.createElement("div",{className:"emptyBar"}))))};n(101);function D(e){var t=e.lists,n=e.setLists,c=Object(a.useRef)();return l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Add a new list"),l.a.createElement("p",null,"Every list ",l.a.createElement("b",null,l.a.createElement("i",null,"must"))," have a unique name"),l.a.createElement("input",{type:"text",placeholder:"List name",ref:c}),l.a.createElement("input",{type:"submit",onClick:function(){return function(e){for(var a=e.current.value,l=0;l<t.length;l++)if(t[l].name===a)return;n(function(e){return[].concat(Object(i.a)(e),[{name:a,contents:[]}])}),e.current.value=null}(c)}}))}n(103);function A(e){var t=e.lists,n=e.setLists,c=Object(a.useState)(),r=Object(s.a)(c,2),o=r[0],u=r[1];return Object(a.useEffect)(function(){for(var e=[],a=function(a){e.push(l.a.createElement("div",{key:a,className:"list-delete-row"},l.a.createElement("span",{className:"material-icons list-delete-button",onClick:function(){return function(e){for(var a=Object(i.a)(t),l=0;l<a.length;l++)a[l].name===e&&(a.splice(l,1),n(a))}(t[a].name)}},"delete"),l.a.createElement("span",{className:"edit-list"},t[a].name)))},c=0;c<t.length;c++)a(c);u(e)},[t,t.length]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"Remove lists"),o)}n(105);var P,V=Object(a.createContext)(),q="MovieCollectorV2.HeaderImage",H=Object(a.createContext)(q),T="MovieCollectorV2.StoredLists",z=JSON.parse(localStorage.getItem(T)),G={name:"\xa7--empty",element:"",contents:[]};var K=function(){var e=Object(a.useState)(G),t=Object(s.a)(e,2),n=t[0],c=t[1];null==z&&(z=[]);var r=Object(a.useState)(Object(i.a)(z)),u=Object(s.a)(r,2),d=u[0],v=u[1],f=Object(a.useState)(""),E=Object(s.a)(f,2),p=E[0],b=E[1];P=b,Object(a.useEffect)(function(){if(0!==d.length){for(var e=-1,t=0;t<d.length;t++)d[t].name===n.name&&(e=t);var a=Object(i.a)(d);a[e]=n,v(a),localStorage.setItem(T,JSON.stringify(Object(i.a)(d)))}},[d.length,n.contents,n.contents.length]),Object(a.useEffect)(function(){localStorage.setItem(T,JSON.stringify(Object(i.a)(d)))},[d]);var g={settingsWindow:Object(a.useState)("none"),addListWindow:Object(a.useState)("none"),movieDetailsWindow:Object(a.useState)("none"),addMovieWindow:Object(a.useState)("none"),editListWindow:Object(a.useState)("none")};return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.Provider,{value:q},l.a.createElement(V.Provider,{value:g},l.a.createElement("span",{id:"page"},l.a.createElement(S,null),l.a.createElement(o,null),l.a.createElement(j,{currentList:n,setCurrentList:c,lists:d,setLists:v}),l.a.createElement(N,null)))),l.a.createElement(m,{display:g.settingsWindow,contents:l.a.createElement(x,null)}),l.a.createElement(m,{display:g.addListWindow,contents:l.a.createElement(D,{lists:d,setLists:v})}),l.a.createElement(m,{display:g.editListWindow,contents:l.a.createElement(A,{lists:d,setLists:v})}),l.a.createElement(m,{display:g.movieDetailsWindow,contents:p}),l.a.createElement(m,{display:g.addMovieWindow,contents:l.a.createElement(_,{currentList:n,listSetter:c})}))};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(K,null)))},43:function(e,t,n){e.exports=n(279)},50:function(e,t,n){},53:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){},8:function(e,t,n){}},[[43,2,1]]]);
//# sourceMappingURL=main.f1c78382.chunk.js.map