webpackJsonp([3],{40:function(e,t,r){"use strict";function o(e){r(80)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(53),n=r(83),i=r(6),c=o,l=i(a.a,n.a,!1,c,"data-v-68d0d624",null);t.default=l.exports},53:function(e,t,r){"use strict";var o=r(7),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e};t.a={data:function(){return{}},computed:a({},Object(o.e)({colorList:function(e){return e.morecolor.colorList},colorarr:function(e){return e.morecolor.colorarr},tablist:function(e){return e.morecolor.tablist},year:function(e){return e.morecolor.year},isacived:function(e){return e.morecolor.isacived}})),methods:a({},Object(o.b)({getColor:"morecolor/getColor"}),Object(o.d)({changeTab:"morecolor/changeTab",changeacived:"morecolor/changeacived",changeLeft:"morecolor/changeLeft",changeRight:"morecolor/changeRight"}),{clicktab:function(e){"SPAN"===e.target.nodeName&&(this.changeTab(e.target.innerHTML),this.changeacived(Number(e.target.dataset.index)))},clickTo:function(e){"LI"===e.target.nodeName&&(console.log(e.target.dataset.id,e.target.dataset.name),this.changeLeft(e.target.dataset.name),window.sessionStorage.setItem("ColorID",e.target.dataset.id),this.$router.push("/img"))},clickall:function(e){this.changeLeft(e.target.innerHTML),window.sessionStorage.removeItem("CarID"),window.sessionStorage.removeItem("ColorID"),this.$router.push("/img")}}),mounted:function(){var e=window.sessionStorage.getItem("serialID");this.getColor(e)}}},80:function(e,t,r){var o=r(81);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);r(2)("30fc4175",o,!0,{})},81:function(e,t,r){t=e.exports=r(1)(!1),t.i(r(82),""),t.push([e.i,"",""])},82:function(e,t,r){t=e.exports=r(1)(!1),t.push([e.i,".color{position:absolute;top:0;z-index:101;background:#f4f4f4;height:100%;width:100%;-webkit-animation:c .2s ease forwards;animation:c .2s ease forwards}.color>p,.type>p{margin:.15rem 0;font-size:.34rem;color:#00afff;background:#fff;text-align:center;line-height:.8rem;height:.8rem}.color .c-type,.type .c-type{margin-top:.15rem;padding-left:.2rem;font-size:.3rem;line-height:.76rem;height:.76rem;background:#fff;white-space:nowrap;overflow-x:scroll;-webkit-overflow-scrolling:touch}.color .c-type span,.type .c-type span{padding-right:.42rem}.color .c-type span.active,.type .c-type span.active{color:#00afff}.color ul{margin-top:.15rem;padding:0 .2rem;overflow:hidden;background:#fff}.color ul li{float:left;width:3.45rem;font-size:.32rem;line-height:.68rem;border:1px solid #3aacff;box-sizing:border-box;margin:.2rem 0;border-radius:.05rem}.color ul li:nth-child(odd){margin-right:.2rem}.color ul li span{display:inline-block;width:.4rem;height:.4rem;margin-left:.2rem;vertical-align:-12%;background:#fe9210;box-sizing:border-box;border:1px solid #818181}@keyframes c{0%{-webkit-transform:translateY(100%);transform:translateY(100%)}to{-webkit-transform:translateY(0);transform:translateY(0)}}",""])},83:function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.colorList?r("div",{staticClass:"color"},[r("p",{attrs:{"data-hover":"hover"},on:{click:e.clickall}},[e._v("全部颜色")]),e._v(" "),r("div",[r("p",{staticClass:"c-type",on:{click:e.clicktab}},e._l(e.colorarr,function(t,o){return e.colorarr?r("span",{key:o,class:[o===e.isacived?"active":""],attrs:{"data-index":o}},[e._v(e._s(t))]):e._e()})),e._v(" "),r("ul",{on:{click:e.clickTo}},e._l(e.tablist,function(t,o){return r("li",{key:o,attrs:{"data-id":t.ColorId,"data-name":t.Name,"data-hover":"hover"}},[r("span",{style:{backgroundColor:t.Value}}),e._v("\n          "+e._s(t.Name)+"\n      ")])}))])]):e._e()},a=[],n={render:o,staticRenderFns:a};t.a=n}});
//# sourceMappingURL=3.build.js.map