(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{175:function(e,t,l){},176:function(e,t,l){"use strict";function s(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}l.d(t,"a",function(){return s})},179:function(e,t,l){"use strict";var s=l(175);l.n(s).a},183:function(e,t,l){"use strict";var s=l(176),n={name:"bowen-button",components:{"g-icon":l(182).a},props:{icon:{type:String,required:!1,default:"",validator:function(e){return!0}},loading:{type:Boolean,required:!1,default:!1},iconPosition:{type:String,required:!1,default:"left",validator:function(e){return"left"===e||"right"===e}},type:{type:String,required:!1,default:"",validator:function(e){return["primary","success","warning","danger","info","text",""].indexOf(e)>=0}},round:{type:Boolean,required:!1,default:!1},plain:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,default:!1}},computed:{dynamicClass:function(){var e;return e={},Object(s.a)(e,"g-button-".concat(this.type),this.type),Object(s.a)(e,"is-round",this.round),Object(s.a)(e,"is-plain",this.plain),Object(s.a)(e,"is-disabled",this.disabled),Object(s.a)(e,"is-loading",this.loading),e},iconDynamicClass:function(){return this.$slots.default?"":{"only-icon":!0}}}},a=(l(179),l(1)),i=Object(a.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("button",{staticClass:"g-button",class:e.dynamicClass,on:{click:function(t){e.$emit("click")}}},[e.loading?l("g-icon",{staticClass:"loading icon",class:e.iconDynamicClass,attrs:{name:"loading","icon-position":e.iconPosition}}):e._e(),e._v(" "),e.icon&&!e.loading?l("g-icon",{staticClass:"icon",class:e.iconDynamicClass,attrs:{name:e.icon,"icon-position":e.iconPosition}}):e._e(),e._v(" "),l("div",{staticClass:"g-button-content"},[e._t("default")],2)],1)},[],!1,null,"65df31b1",null);i.options.__file="button.vue";t.a=i.exports},193:function(e,t,l){},231:function(e,t,l){"use strict";var s=l(193);l.n(s).a},264:function(e,t,l){"use strict";l.r(t);l(21);var s=l(9),n=l(183),a=l(216),i=l(217),c={components:{"g-button":n.a,"g-collapse":a.a,"g-collapse-item":i.a,"demo-content-block":s.default},props:{type:{type:String,default:"basic"}},data:function(){return{selected1:[],selected2:[],basicCode:'\n                <g-collapse :selected.sync="selected1" @update:selected="onChange1">\n                    <g-collapse-item title="一致性 Consistency" name="consistency">\n                        <div class="collapse-demo-text">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n                        <div class="collapse-demo-text">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n                    </g-collapse-item>\n                    <g-collapse-item title="反馈 Feedback" name="feedback">\n                        <div class="collapse-demo-text">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n                        <div class="collapse-demo-text">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n                    </g-collapse-item>\n                    <g-collapse-item title="效率 Efficiency" name="efficiency">\n                        <div class="collapse-demo-text">简化流程：设计简洁直观的操作流程；</div>\n                        <div class="collapse-demo-text">清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n                        <div class="collapse-demo-text">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n                    </g-collapse-item>\n                    <g-collapse-item title="可控 Controllability" name="controllability">\n                        <div class="collapse-demo-text">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n                        <div class="collapse-demo-text">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n                    </g-collapse-item>\n                </g-collapse>\n\n                <script>\n                    export default{\n                        data() {\n                            return {\n                                selected1: [],\n                            }\n                        },\n                        methods: {\n                            onChange1() {\n                                console.log(this.selected1);\n                            },\n                        }\n                    }\n                '.concat("<","/script>\n            ").replace(/^ {16}/gm,"").trim(),accordionCode:'\n                <g-collapse :selected.sync="selected2" @update:selected="onChange2" single>\n                    <g-collapse-item title="一致性 Consistency" name="consistency">\n                        <div class="collapse-demo-text">与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>\n                        <div class="collapse-demo-text">在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>\n                    </g-collapse-item>\n                    <g-collapse-item title="反馈 Feedback" name="feedback">\n                        <div class="collapse-demo-text">控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>\n                        <div class="collapse-demo-text">页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>\n                    </g-collapse-item>\n                    <g-collapse-item title="效率 Efficiency" name="efficiency">\n                        <div class="collapse-demo-text">简化流程：设计简洁直观的操作流程；</div>\n                        <div class="collapse-demo-text">清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>\n                        <div class="collapse-demo-text">帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>\n                    </g-collapse-item>\n                    <g-collapse-item title="可控 Controllability" name="controllability">\n                        <div class="collapse-demo-text">用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>\n                        <div class="collapse-demo-text">结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>\n                    </g-collapse-item>\n                </g-collapse>\n\n                <script>\n                    export default{\n                        data() {\n                            return {\n                                selected2: [],\n                            }\n                        },\n                        methods: {\n                            onChange2() {\n                                console.log(this.selected2);\n                            },\n                        }\n                    }\n                '.concat("<","/script>\n            ").replace(/^ {16}/gm,"").trim()}},methods:{onChange1:function(){console.log(this.selected1)},onChange2:function(){console.log(this.selected2)}}},o=(l(231),l(1)),d=Object(o.a)(c,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"collapse-demo"},["basic"===e.type?l("demo-content-block",[l("div",{staticClass:"row"},[l("g-collapse",{attrs:{selected:e.selected1},on:{"update:selected":[function(t){e.selected1=t},e.onChange1]}},[l("g-collapse-item",{attrs:{title:"一致性 Consistency",name:"consistency"}},[l("div",{staticClass:"collapse-demo-text"},[e._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]),e._v(" "),l("g-collapse-item",{attrs:{title:"反馈 Feedback",name:"feedback"}},[l("div",{staticClass:"collapse-demo-text"},[e._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]),e._v(" "),l("g-collapse-item",{attrs:{title:"效率 Efficiency",name:"efficiency"}},[l("div",{staticClass:"collapse-demo-text"},[e._v("简化流程：设计简洁直观的操作流程；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]),e._v(" "),l("g-collapse-item",{attrs:{title:"可控 Controllability",name:"controllability"}},[l("div",{staticClass:"collapse-demo-text"},[e._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])],1)],1),e._v(" "),l("template",{slot:"code"},[l("pre",[l("code",[e._v(e._s(e.basicCode))])])])],2):e._e(),e._v(" "),"accordion"===e.type?l("demo-content-block",[l("div",{staticClass:"row"},[l("g-collapse",{attrs:{selected:e.selected2,single:""},on:{"update:selected":[function(t){e.selected2=t},e.onChange2]}},[l("g-collapse-item",{attrs:{title:"一致性 Consistency",name:"consistency"}},[l("div",{staticClass:"collapse-demo-text"},[e._v("与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。")])]),e._v(" "),l("g-collapse-item",{attrs:{title:"反馈 Feedback",name:"feedback"}},[l("div",{staticClass:"collapse-demo-text"},[e._v("控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。")])]),e._v(" "),l("g-collapse-item",{attrs:{title:"效率 Efficiency",name:"efficiency"}},[l("div",{staticClass:"collapse-demo-text"},[e._v("简化流程：设计简洁直观的操作流程；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。")])]),e._v(" "),l("g-collapse-item",{attrs:{title:"可控 Controllability",name:"controllability"}},[l("div",{staticClass:"collapse-demo-text"},[e._v("用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；")]),e._v(" "),l("div",{staticClass:"collapse-demo-text"},[e._v("结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。")])])],1)],1),e._v(" "),l("template",{slot:"code"},[e._v("\n            通过 "),l("code",[e._v("single")]),e._v(" 属性来设置是否以手风琴模式显示。\n            "),l("pre",[l("code",[e._v(e._s(e.accordionCode))])])])],2):e._e()],1)},[],!1,null,"98cd0642",null);d.options.__file="collapse-demo.vue";t.default=d.exports}}]);