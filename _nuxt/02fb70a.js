(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{313:function(t,e,o){"use strict";o.d(e,"a",(function(){return n}));var n=new(o(0).default)},325:function(t,e,o){var content=o(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("3c8aea1c",content,!0,{sourceMap:!1})},355:function(t,e,o){"use strict";o(325)},356:function(t,e,o){var n=o(71)((function(i){return i[1]}));n.push([t.i,'.modal.is-active[data-v-e730b2e8]{align-items:center;background:rgba(0,0,0,.5);display:flex;justify-content:center;position:fixed;z-index:1000}.modal-background[data-v-e730b2e8],.modal.is-active[data-v-e730b2e8]{height:100%;left:0;top:0;width:100%}.modal-background[data-v-e730b2e8]{position:absolute}.modal-content[data-v-e730b2e8]{background-color:#fff;background:#202020;border-radius:10px;max-width:600px;padding:20px;position:relative;width:80%}.copy-button[data-v-e730b2e8],.subtitle[data-v-e730b2e8],.title[data-v-e730b2e8]{color:#fff;font-family:"Roboto",sans-serif;font-weight:500}.copy-button[data-v-e730b2e8]{background:#556b2f;border-radius:15px}.dismiss-button[data-v-e730b2e8]{background:#a9a9a9;border-radius:15px;color:#000}.dismiss-button[data-v-e730b2e8],.input[data-v-e730b2e8]{font-family:"Roboto",sans-serif;font-weight:500}.input[data-v-e730b2e8]{border:1px solid #ddd;border-radius:5px;padding:10px;width:95%}',""]),n.locals={},t.exports=n},374:function(t,e,o){"use strict";o.r(e);var n=o(9),r=(o(51),o(313)),d={data:function(){return{isVisible:!1,shareLink:"Loading..."}},methods:{openModal:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isVisible=!0,"Loading..."!==t.shareLink){e.next=7;break}return o=t.$store.state.grid,e.next=5,t.$axios.$post("/set_shared_grid",{grid:o});case 5:n=e.sent,t.shareLink="https://infinitebaseballgrid.com/?id=".concat(n.id);case 7:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.isVisible=!1},copyLink:function(){navigator.clipboard.writeText(this.shareLink).then((function(){alert("Link copied to clipboard!")})).catch((function(t){console.error("Could not copy text: ",t)}))}},created:function(){var t=this;r.a.$on("show-share-popup",(function(){console.log("showing share popup"),t.openModal()}))}},c=(o(355),o(50)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return t.isVisible?e("div",{staticClass:"modal is-active"},[e("div",{staticClass:"modal-background"}),t._v(" "),e("div",{staticClass:"modal-content"},[e("div",{staticClass:"box"},[e("h2",{staticClass:"title is-4"},[t._v("Share Grid")]),t._v(" "),e("p",{staticClass:"subtitle is-6"},[t._v("Use this unique link to share this grid with your friends:")]),t._v(" "),e("div",{staticClass:"field is-grouped"},[e("p",{staticClass:"control is-expanded"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.shareLink,expression:"shareLink"}],staticClass:"input",attrs:{type:"text",readonly:""},domProps:{value:t.shareLink},on:{input:function(e){e.target.composing||(t.shareLink=e.target.value)}}})]),t._v(" "),e("p",{staticClass:"control"},[e("button",{staticClass:"copy-button",on:{click:t.copyLink}},[t._v("Copy Link")])])]),t._v(" "),e("button",{staticClass:"dismiss-button",on:{click:t.closeModal}},[t._v("Dismiss")])])])]):t._e()}),[],!1,null,"e730b2e8",null);e.default=component.exports}}]);