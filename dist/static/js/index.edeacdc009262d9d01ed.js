webpackJsonp([2],{"035s":function(t,e){},"97Sy":function(t,e){},Kzps:function(t,e){},NydE:function(t,e,a){"use strict";var n=a("DNVT"),i=(a("v2ns"),{props:{lists:{type:Array,required:!0},name:String},created:function(){},mounted:function(){this.init()},methods:{init:function(){new n.a(".swiper-container",{pagination:{el:".swiper-pagination"},autoplay:!0,loop:!0})}}}),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-container"},[e("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t){return e("div",{key:t.id,staticClass:"swp-page swiper-slide"},[e("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[e("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])}),0),this._v(" "),e("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var r=a("VU/8")(i,s,!1,function(t){a("Kzps")},null,null);e.a=r.exports},TFhR:function(t,e,a){"use strict";var n={hotList:"index/hotlists",bannerList:"index/banner",topList:"category/topList",subList:"category/subList",rank:"category/rank",searchList:"search/list",goodsDetails:"goods/details",cartAdd:"cart/add",cartList:"cart/cartList",cartIncrease:"cart/increase",cartReduce:"cart/reduce",cartRemove:"cart/remove",cartMoreRemove:"cart/moreRemove",addressGetList:"address/getList",addressAdd:"address/add",addressUpdate:"address/update",addressRemove:"address/remove",addressSetDefault:"address/setDefault"};for(var i in n)n.hasOwnProperty(i)&&(n[i]="https://easy-mock.com/mock/5bd7072a541c73692857acb7/youzan/"+n[i]);e.a=n},"U/rD":function(t,e,a){"use strict";var n=a("mw3O"),i=a.n(n),s=[{id:"footer-01",name:"有赞",icon:"icon-home",href:"/youzan"},{id:"footer-02",name:"分类",icon:"icon-category",href:"category.html"},{id:"footer-03",name:"购物车",icon:"icon-cart",href:"cart.html"},{id:"footer-04",name:"我",icon:"icon-user",href:"member.html"}],r={data:function(){return{navConfig:s,activeIndex:parseInt(i.a.parse(location.search.slice(1)).index)||0}},methods:{changeNav:function(t,e){location.href=t.href+"?index="+e}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-nav"},[a("ul",t._l(t.navConfig,function(e,n){return a("li",{key:e.id,class:{active:n===t.activeIndex},on:{click:function(a){return t.changeNav(e,n)}}},[a("a",[a("i",{class:e.icon}),t._v(" "),a("div",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]};var c={components:{Foot:a("VU/8")(r,o,!1,function(t){a("Zuyv")},null,null).exports},filters:{currency:function(t){return(Math.round(100*t)/100).toFixed(2)}}};e.a=c},U67u:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("//Fk"),i=a.n(n),s=a("97Sy"),r=(a.n(s),a("bCKv")),o=a.n(r),c=a("035s"),d=(a.n(c),a("eChN")),u=(a.n(d),a("TFhR")),l=a("mtWM"),f=a.n(l),p=a("7+uW"),h=a("NydE"),g=a("U/rD");p.default.use(o.a),p.default.config.productionTip=!1,new p.default({el:"#app",data:{lists:null,pageNum:1,pageSize:6,loading:!1,allLoaded:!1,bannerLists:null,pageLoading:!0},created:function(){var t=this;i.a.all([this.getLists(),this.getBannerLists()]).then(function(e){t.pageLoading=!1})},methods:{getLists:function(){var t=this;if(!this.allLoaded)return this.loading=!0,f.a.get(u.a.hotList,{pageNum:this.pageNum,pageSize:this.pageSize}).then(function(e){var a=e.data.lists;t.allLoaded=a.length<t.pageSize,1===t.pageNum?t.lists=a:t.lists=t.lists.concat(a),t.pageNum++,t.loading=!1})},getBannerLists:function(){var t=this;return f.a.get(u.a.bannerList).then(function(e){t.bannerLists=e.data.lists})}},components:{Swiper:h.a},mixins:[g.a]})},Zuyv:function(t,e){},eChN:function(t,e){},v2ns:function(t,e){}},["U67u"]);
//# sourceMappingURL=index.edeacdc009262d9d01ed.js.map