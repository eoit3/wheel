webpackJsonp([5],{35:function(i,t,e){"use strict";function r(i){e(68)}Object.defineProperty(t,"__esModule",{value:!0});var o=e(50),s=e(71),a=e(6),n=r,l=a(o.a,s.a,!1,n,"data-v-091efabf",null);t.default=l.exports},50:function(i,t,e){"use strict";var r=e(10),o=(e.n(r),e(9)),s=(e.n(o),e(7)),a=Object.assign||function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i};t.a={data:function(){return{id:"",ind:1,ishide:!1}},computed:a({},Object(s.e)({left:function(i){return i.morecolor.left},right:function(i){return i.morecolor.right},colorlist:function(i){return i.color.colorlist},imglist:function(i){return i.color.imglist},page:function(i){return i.color.page},isshow:function(i){return i.color.isshow}}),{swiper:function(){return this.$refs.mySwiper.swiper},swiperOption:function(){var i=this;return{on:{slideChangeTransitionEnd:function(){var t=this.activeIndex+1;if(t>=i.imglist.length-3){this.getpage();var e={};e.serialID=window.sessionStorage.getItem("serialID"),e.id=id,this.id=id,e.page=this.page,e.size=30,this.ishide=!0,this.getImgList(e)}i.ind=t}}}}}),methods:a({},Object(s.b)({getColorList:"color/getColorList",getImgList:"color/getImgList"}),Object(s.d)({getpage:"color/getpage",ISshow:"color/ISshow",setind:"color/setind"}),{clickshow:function(i){this.swiper.slideTo(i,1e3,!1),this.ind=i,this.ISshow(!0)},clickImg:function(i){"DIV"===i.target.nodeName&&this.ISshow(!1)},clickLi:function(i,t){if("LI"===window.event.target.nodeName||"IMG"===window.event.target.nodeName){var e={};e.serialID=window.sessionStorage.getItem("serialID"),e.id=i,this.id=i,e.page=this.page,e.size=30,this.getImgList(e);var r=++t;this.ind=r,this.swiper.slideTo(t,1e3,!1),this.ISshow(!0)}},clicktab:function(i){this.getpage();var t={};t.serialID=window.sessionStorage.getItem("serialID"),t.id=i,this.id=i,t.page=this.page,t.size=30,this.ishide=!0,this.getImgList(t)},clickTo:function(i){"P"===i.target.nodeName&&"0"===i.target.dataset.id&&this.$router.push({path:"/color"}),"SPAN"===i.target.nodeName&&"0"===i.target.parentNode.dataset.id&&this.$router.push({path:"/color"}),"P"===i.target.nodeName&&"1"===i.target.dataset.id&&this.$router.push({path:"/type",query:{id:i.target.dataset.id}}),"SPAN"===i.target.nodeName&&"1"===i.target.parentNode.dataset.id&&this.$router.push({path:"/type",query:{id:i.target.parentNode.dataset.id}}),"EM"===i.target.nodeName&&"1"===i.target.parentNode.parentNode.dataset.id&&this.$router.push({path:"/type",query:{id:i.target.parentNode.parentNode.dataset.id}})},scrollto:function(i){if(this.$refs.drop.getBoundingClientRect().top<800){this.getpage();var t={};t.serialID=window.sessionStorage.getItem("serialID"),t.id=this.id,t.page=this.page,t.size=30,this.getImgList(t)}}}),mounted:function(){var i=window.sessionStorage.getItem("serialID"),t=window.sessionStorage.getItem("CarID"),e=window.sessionStorage.getItem("ColorID");this.getColorList({serialid:i,carid:t,colorid:e})},destroyed:function(){}}},68:function(i,t,e){var r=e(69);"string"==typeof r&&(r=[[i.i,r,""]]),r.locals&&(i.exports=r.locals);e(2)("551f3d6f",r,!0,{})},69:function(i,t,e){t=i.exports=e(1)(!1),t.i(e(70),""),t.push([i.i,"",""])},70:function(i,t,e){t=i.exports=e(1)(!1),t.push([i.i,'.car-img{height:100%;background:#f4f4f4}.car-img div.tit{position:fixed;background:#fff;top:0;width:100%;height:.8rem;-webkit-box-align:center;align-items:center;box-sizing:border-box;z-index:99}.flex-row{display:-webkit-box;display:flex;-webkit-box-direction:normal;-webkit-box-orient:horizontal;flex-direction:row}.car-img div.tit p{position:relative;-webkit-box-flex:1;flex:1;text-align:center;box-sizing:border-box;color:#454545;display:inline-block;line-height:.13rem}.car-img div.tit p:nth-child(2){border-left:1px solid #ececec}.car-img div.tit p span{max-width:2.6rem;display:inline-block;vertical-align:middle;line-height:1.25;font-size:.28rem}.car-img div.tit p:after{position:absolute;right:.8rem;content:"";top:.05rem;display:inline-block;padding-top:.16rem;padding-right:.16rem;border-top:2px solid #ccc;border-right:2px solid #ccc;-webkit-transform:rotate(135deg);transform:rotate(135deg);margin-left:.2rem;vertical-align:5%}.car-img div.tit p span em{text-overflow:ellipsis;-webkit-line-clamp:2;display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical}.img-default{overflow:hidden;position:absolute;background:#fff;top:.98rem;bottom:0;overflow-y:scroll;-webkit-overflow-scrolling:touch;border-bottom:.4rem solid #f4f4f4}.img-default li{position:relative;float:left;margin-right:.06rem;margin-bottom:.06rem;width:2.46rem;height:2.46rem;padding:0}.img-default li img{width:100%;height:100%;background-size:cover}.img-default li div{position:absolute;top:0;width:100%;height:100%;text-align:center;background:rgba(56,90,130,.5)}.img-default li div p{color:#fff;display:block}.img-default li div p:first-child{font-size:.28rem;margin-top:.8rem}.img-default li div p:nth-child(2){font-size:.26rem}.img-default li:nth-child(3n+3){margin-right:0}.img-default li:nth-child(6n+4),.img-default li:nth-child(6n+5),.img-default li:nth-child(6n+6){margin-bottom:.16rem}.img-list{background:#f4f4f4;top:0;text-align:center;position:fixed;overflow-y:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;z-index:99}.img-list li{float:left;margin-right:.06rem;margin-bottom:.06rem;width:2.46rem;height:2.46rem;padding:0}.img-list li img{width:100%;height:100%;background-size:cover}.img-list li:nth-child(3n+3){margin-right:0}.img-list .drop{float:left;width:100%;text-align:center;margin:.1rem 0}.img-list .drop img{width:.32rem}.img-list .drop span{font-size:.26rem;margin-left:.15rem;color:#666;vertical-align:10%}.swiper-container{position:fixed;top:0;left:0;z-index:100;background:#000}.swiper-container,.swiper-slide,.swiper-wrapper{width:100%;height:100%}.swiper-slide{display:flex;align-items:center}.img{display:block;width:100%}.bot_num{bottom:.3rem;font-size:.2rem;left:50%;margin-left:-.2rem}.bot_num,.btn{position:fixed;color:#fff;z-index:100}.btn{font-size:.24rem;padding:.08rem .15rem;bottom:.2rem;background-color:#3aacff;border:none;font-size:.2rem;right:3%}',""])},71:function(i,t,e){"use strict";var r=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"car-img"},[e("div",{staticClass:"flex-row tit",on:{click:i.clickTo}},[e("p",{attrs:{"data-hover":"hover","data-id":0}},[e("span",[i._v(" "+i._s(null===i.left?"颜色":i.left))])]),i._v(" "),e("p",{attrs:{"data-hover":"hover","data-id":1}},[e("span",[e("em",[i._v(i._s(null===i.right?"车款":i.right))])])])]),i._v(" "),e("ul",{staticClass:"img-default"},i._l(i.colorlist,function(t,r){return i.colorlist?e("div",{key:r},i._l(t.List,function(o,s){return e("li",{key:s,attrs:{index:r,"data-id":t.Id+"_"+s+"_"+t.Count},on:{click:function(e){i.clickLi(t.Id,s)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o.Url.replace("{0}",o.LowSize),expression:"v.Url.replace('{0}',v.LowSize)"}]}),0===s?e("div",{on:{click:function(e){i.clicktab(t.Id)}}},[e("p",[i._v(i._s(t.Name))]),i._v(" "),e("p",[i._v(i._s(t.Count)+"张>")])]):i._e()])})):i._e()})),i._v(" "),null!==i.imglist?e("ul",{directives:[{name:"show",rawName:"v-show",value:i.ishide,expression:"ishide"}],ref:"scroll",staticClass:"img-list",on:{scroll:i.scrollto}},[i._l(i.imglist,function(t,r){return e("li",{key:r,on:{click:function(t){i.clickshow(r)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.Url.replace("{0}",t.LowSize),expression:"v.Url.replace('{0}',v.LowSize)"}]})])}),i._v(" "),e("div",{ref:"drop",staticClass:"drop",attrs:{id:"drop"}})],2):i._e(),i._v(" "),e("swiper",{directives:[{name:"show",rawName:"v-show",value:i.isshow,expression:"isshow"}],ref:"mySwiper",attrs:{options:i.swiperOption},on:{click:i.clickImg}},[i._l(i.imglist,function(i,t){return e("swiper-slide",{key:t},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.Url.replace("{0}",i.LowSize),expression:"v.Url.replace('{0}',v.LowSize)"}],staticClass:"img"})])}),i._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),i._v(" "),e("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],2),i._v(" "),i.imglist?e("div",{directives:[{name:"show",rawName:"v-show",value:i.isshow,expression:"isshow"}],staticClass:"bot_num"},[i._v(i._s(i.ind)+"/"+i._s(i.imglist.length))]):i._e(),i._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:i.isshow,expression:"isshow"}],staticClass:"btn"},[i._v("询最低价")])],1)},o=[],s={render:r,staticRenderFns:o};t.a=s}});
//# sourceMappingURL=5.build.js.map