(function(t){function n(n){for(var a,s,o=n[0],c=n[1],u=n[2],f=0,p=[];f<o.length;f++)s=o[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(n);while(p.length)p.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],a=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(a=!1)}a&&(i.splice(n--,1),t=s(s.s=e[0]))}return t}var a={},r={app:0},i=[];function s(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)s.d(e,a,function(n){return t[n]}.bind(null,a));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/vue-cnode/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("85ec"),r=e.n(a);r.a},"160a":function(t,n,e){"use strict";var a=e("5f15"),r=e.n(a);r.a},"1cdd":function(t,n,e){"use strict";var a=e("9bcd"),r=e.n(a);r.a},"56d7":function(t,n,e){"use strict";e.r(n);e("4de4"),e("0d03"),e("e25e"),e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Header"),e("div",{staticClass:"main"},[e("router-view",{attrs:{name:"main"}}),e("router-view",{attrs:{name:"slidebar"}})],1)],1)},i=[],s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"header"},[a("router-link",{attrs:{to:{name:"root"}}},[a("img",{attrs:{src:e("d686"),alt:""}})]),t._m(0)],1)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("首页")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("新手入门")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("API")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("关于")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("注册")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("登录")])])])}],c={name:"Header"},u=c,l=(e("d3e9"),e("2877")),f=Object(l["a"])(u,s,o,!1,null,"2415eca6",null),p=f.exports,d=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"PostList"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:e("cf1c"),alt:"loading"}})]):a("div",{staticClass:"posts"},[a("ul",[t._m(0),t._l(t.posts,(function(n){return a("li",{key:n.id},[a("img",{attrs:{src:n.author.avatar_url,alt:""}}),a("span",{staticClass:"allcount"},[a("span",{staticClass:"reply_count"},[t._v(t._s(n.reply_count))]),t._v(" /"+t._s(n.visit_count)+" ")]),a("span",{class:[{put_good:1==n.good,put_top:1==n.top,"topiclist-tab":1!=n.good&&1!=n.top}]},[a("span",[t._v(t._s(t._f("tabFormatter")(n)))])]),a("router-link",{attrs:{to:{name:"post_content",params:{id:n.id,name:n.author.loginname}}}},[a("span",[t._v(t._s(n.title))])]),a("span",{staticClass:"last_reply"},[t._v(t._s(t._f("formatDate")(n.last_reply_at)))])],1)})),a("li",[a("Pagination",{on:{handleList:t.renderList}})],1)],2)])])},_=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("li",[e("div",{staticClass:"toobar"},[e("span",[t._v("全部")]),e("span",[t._v("精华")]),e("span",[t._v("分享")]),e("span",[t._v("问答")]),e("span",[t._v("招聘")])])])}],v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination"},[e("button",{on:{click:function(n){return t.changeBtn(t.currentPage-1)}}},[t._v("上一页")]),t._l(t.pagebtns,(function(n,a){return e("button",{key:n+a,class:[{currentPage:n==t.currentPage},"pagebtn"],on:{click:function(e){return t.changeBtn(n)}}},[t._v(" "+t._s(n)+" ")])})),e("button",{on:{click:function(n){return t.changeBtn(t.currentPage+1)}}},[t._v("下一页")])],2)},m=[],g=(e("99af"),e("a630"),e("3ca3"),e("284c")),h={name:"Pagination",data:function(){return{currentPage:1}},methods:{getpagebtns:function(t,n,e){var a=[],r=2*e+1+2+2,i=r-2,s=e+4,o=t-e-3;return a=t<=r?Array.from({length:t},(function(t,n){return n+1})):n<s?[].concat(Object(g["a"])(Array.from({length:i},(function(t,n){return n+1}))),["...",t]):n>o?[1,"..."].concat(Object(g["a"])(Array.from({length:i},(function(n,e){return t-i+e+1})))):[1,"..."].concat(Object(g["a"])(Array.from({length:2*e+1},(function(t,a){return n-e+a}))),["...",t]),console.log(a),a},changeBtn:function(t){t<1||"number"==typeof t&&(this.currentPage=t,this.$emit("handleList",t))}},computed:{pagebtns:function(){var t=this.currentPage+10,n=2;return this.getpagebtns(t,this.currentPage,n)}}},b=h,y=(e("d6f7"),Object(l["a"])(b,v,m,!1,null,"63df6411",null)),C=y.exports,j={name:"PostList",data:function(){return{isLoading:!1,posts:[],postpage:1}},components:{Pagination:C},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topics",{params:{page:this.postpage,limit:20}}).then((function(n){t.isLoading=!1,t.posts=n.data.data})).catch((function(t){console.log(t)}))},renderList:function(t){this.postpage=t,this.getData()}},beforeMount:function(){this.isLoading=!0,this.getData()}},L=j,P=(e("160a"),Object(l["a"])(L,d,_,!1,null,"b44ab5fe",null)),O=P.exports,$={name:"app",components:{Header:p,PostList:O}},k=$,w=(e("034f"),Object(l["a"])(k,r,i,!1,null,null,null)),D=w.exports,x=e("8c4f"),I=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"article"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:e("cf1c"),alt:"loading"}})]):a("div",[a("div",{staticClass:"topic_header"},[a("div",{staticClass:"topic_title"},[t._v(t._s(t.post.title))]),a("ul",[a("li",[t._v("•发布于："+t._s(t._f("formatDate")(t.post.create_at)))]),a("li",[t._v(" • 作者： "+t._s(t.post.author.loginname)+" ")]),a("li",[t._v("• "+t._s(t.post.visit_count)+"次浏览")]),a("li",[t._v("•来自"+t._s(t._f("tabFormatter")(t.post)))])]),a("div",{staticClass:"topic_content",domProps:{innerHTML:t._s(t.post.content)}}),a("div",{attrs:{id:"reply"}},[a("div",{staticClass:"topbar"},[t._v("回复")]),t._l(t.post.replies,(function(n,e){return a("div",{staticClass:"replySec"},[a("div",{staticClass:"replyUp"},[a("router-link",{attrs:{to:{name:"user_info",params:{name:n.author.loginname}}}},[a("img",{attrs:{src:n.author.avatar_url,alt:""}})]),a("router-link",{attrs:{to:{name:"user_info",params:{name:n.author.loginname}}}},[a("span",[t._v(t._s(n.author.loginname))])]),a("span",[t._v(t._s(e+1)+"楼")]),n.ups.length>0?a("span",[t._v("☝ "+t._s(n.ups.length))]):a("span")],1),a("p",{domProps:{innerHTML:t._s(n.content)}})])}))],2)])])])},M=[],A={name:"Article",data:function(){return{isLoading:!1,post:{}}},methods:{getArticleData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/topic/".concat(this.$route.params.id)).then((function(n){1==n.data.success&&(t.isLoading=!1,t.post=n.data.data)})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getArticleData()},watch:{$route:function(t,n){this.getArticleData()}}},E=A,S=(e("7703"),Object(l["a"])(E,I,M,!1,null,null,null)),T=S.exports,B=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"UserInfo"},[t.isLoading?a("div",{staticClass:"loading"},[a("img",{attrs:{src:e("cf1c")}})]):a("div",{staticClass:"userInfomation"},[a("section",[a("img",{attrs:{src:t.userinfo.avatar_url}}),a("span",[t._v(t._s(t.userinfo.loginname))]),a("div",[t._v(t._s(t.userinfo.score)+"积分")]),a("div",[t._v("注册时间："+t._s(t._f("formatDate")(t.userinfo.create_at)))])]),a("div",{staticClass:"replies"},[a("p",[t._v("回复的主题")]),a("ul",t._l(t.userinfo.recent_replies,(function(n){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:n.id}}}},[t._v(" "+t._s(n.title)+" ")])],1)})),0)]),a("div",{staticClass:"topics"},[a("p",[t._v("创建的主题")]),a("ul",t._l(t.userinfo.recent_topics,(function(n){return a("li",[a("router-link",{attrs:{to:{name:"post_content",params:{id:n.id}}}},[t._v(" "+t._s(n.title)+" ")])],1)})),0)])])])},H=[],F=(e("b0c0"),{name:"UserInfo",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then((function(n){t.isLoading=!1,t.userinfo=n.data.data})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getData()}}),U=F,J=(e("da2a"),Object(l["a"])(U,B,H,!1,null,"7eccfa5b",null)),q=J.exports,z=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"autherinfo"},[e("div",{staticClass:"authersummay"},[e("div",{staticClass:"topbar"},[t._v("作者")]),e("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[e("img",{attrs:{src:t.userinfo.avatar_url,alt:""}}),e("span",{staticClass:"loginname"},[t._v(t._s(t.userinfo.loginname))])]),e("div",[t._v(t._s(t.userinfo.score)+"积分")])],1),e("div",{staticClass:"recent_topics"},[e("div",{staticClass:"topbar"},[t._v("作者最近主题")]),e("ul",t._l(t.topcilimitby5,(function(n){return e("li",[e("router-link",{attrs:{to:{name:"post_content",params:{id:n.id,name:n.author.loginname}}}},[t._v(" "+t._s(n.title)+" ")])],1)})),0)]),e("div",{staticClass:"recent_replies"},[e("div",{staticClass:"topbar"},[t._v("作者最近回复")]),e("ul",t._l(t.replylimitby5,(function(n){return e("li",[e("router-link",{attrs:{to:{name:"post_content",params:{id:n.id,name:n.author.loginname}}}},[t._v(" "+t._s(n.title)+" ")])],1)})),0)])])},G=[],K=(e("fb6a"),{name:"SlideBar",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get("https://cnodejs.org/api/v1/user/".concat(this.$route.params.name)).then((function(n){t.isLoading=!1,t.userinfo=n.data.data})).catch((function(t){console.log(t)}))}},computed:{topcilimitby5:function(){if(this.userinfo.recent_topics)return this.userinfo.recent_topics.slice(0,5)},replylimitby5:function(){if(this.userinfo.recent_replies)return this.userinfo.recent_replies.slice(0,5)}},beforeMount:function(){this.isLoading=!0,this.getData()}}),N=K,Q=(e("1cdd"),Object(l["a"])(N,z,G,!1,null,"1558e6f1",null)),R=Q.exports;a["a"].use(x["a"]);var V=new x["a"]({routes:[{name:"root",path:"/",components:{main:O}},{name:"post_content",path:"/topic/:id&author=:name",components:{main:T,slidebar:R}},{name:"user_info",path:"/userinfo/:name",components:{main:q}}]}),W=e("bc3a"),X=e.n(W);a["a"].prototype.$http=X.a,a["a"].config.productionTip=!1,new a["a"]({router:V,render:function(t){return t(D)}}).$mount("#app"),a["a"].filter("formatDate",(function(t){if(!t)return"";var n=new Date(t),e=(new Date).getTime()-n.getTime();return e<0?"":e/1e3<30?"刚刚":e/1e3<60?parseInt(e/1e3)+"秒前":e/6e4<60?parseInt(e/6e4)+"分钟前":e/36e5<24?parseInt(e/36e5)+"小时前":e/864e5<31?parseInt(e/864e5)+"天前":e/2592e6<12?parseInt(e/2592e6)+"月前":parseInt(e/31536e6)+"年前"})),a["a"].filter("tabFormatter",(function(t){return 1==t.good?"精华":1==t.top?"置顶":"ask"==t.tab?"问答":"share"==t.tab?"分享":"招聘"}))},"5f15":function(t,n,e){},7703:function(t,n,e){"use strict";var a=e("e6ad"),r=e.n(a);r.a},"7efa":function(t,n,e){},"85ec":function(t,n,e){},"9bcd":function(t,n,e){},ae7e:function(t,n,e){},cf1c:function(t,n,e){t.exports=e.p+"img/loading.078fcd09.gif"},d3e9:function(t,n,e){"use strict";var a=e("7efa"),r=e.n(a);r.a},d686:function(t,n,e){t.exports=e.p+"img/cnodejs_light.86f6a7c2.svg"},d6f7:function(t,n,e){"use strict";var a=e("fdec"),r=e.n(a);r.a},da2a:function(t,n,e){"use strict";var a=e("ae7e"),r=e.n(a);r.a},e6ad:function(t,n,e){},fdec:function(t,n,e){}});
//# sourceMappingURL=app.4959c465.js.map