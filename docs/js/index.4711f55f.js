(function(t){function a(a){for(var s,r,l=a[0],n=a[1],c=a[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s]);v&&v(a);while(f.length)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,l=1;l<e.length;l++){var n=e[l];0!==i[n]&&(s=!1)}s&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},i={index:0},o=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var v=n;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"061d":function(t,a,e){t.exports=e.p+"img/image001.c844ec23.png"},"0c96":function(t,a,e){t.exports=e.p+"img/bg003.9f6520a0.png"},"0dc8":function(t,a,e){t.exports=e.p+"img/image006.ce26e238.jpeg"},"0ec5":function(t,a,e){"use strict";e("cadf")},"144a":function(t,a,e){t.exports=e.p+"img/image003.ed95e082.png"},"1f58":function(t,a,e){t.exports=e.p+"img/image001.7a485b73.png"},"26c9":function(t,a,e){t.exports=e.p+"img/image002.b7e1c327.png"},"356f":function(t,a,e){},"417d":function(t,a,e){"use strict";e("cc7f")},"462f":function(t,a,e){"use strict";e("940f")},"50f6":function(t,a,e){t.exports=e.p+"img/image001.eaced29c.jpeg"},5331:function(t,a,e){t.exports=e.p+"img/bg002.36aaeab0.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("home")],1)},o=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-app",[s("v-app-bar",{staticClass:"title",attrs:{color:"#208ea3",dark:"",app:""}},[s("v-toolbar-title",{attrs:{justify:"center"}},[t._v("fkubota's Bookshelf")]),s("v-img",{attrs:{src:e("593b"),"max-height":"50","max-width":"50",contain:""}}),s("v-spacer"),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",href:"https://fkubota.github.io/timeline/"}},"v-btn",i,!1),e),[s("v-icon",[t._v("mdi-clock-outline")])],1)]}}])},[s("span",[t._v("timeline")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",href:"https://twitter.com/fkubota_"}},"v-btn",i,!1),e),[s("v-icon",[t._v("mdi-twitter")])],1)]}}])},[s("span",[t._v("twitter")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",href:"https://github.com/fkubota"}},"v-btn",i,!1),e),[s("v-icon",[t._v("mdi-github")])],1)]}}])},[s("span",[t._v("GitHub")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",href:"https://www.kaggle.com/fkubota"}},"v-btn",i,!1),e),[s("font-awesome-icon",{attrs:{icon:["fab","kaggle"]}})],1)]}}])},[s("span",[t._v("Kaggle")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",href:"https://speakerdeck.com/fkubota"}},"v-btn",i,!1),e),[s("font-awesome-icon",{attrs:{icon:["fab","speaker-deck"]}})],1)]}}])},[s("span",[t._v("Speaker Deck")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:"",href:"https://github.com/fkubota/bookshelf"}},"v-btn",i,!1),e),[s("v-icon",[t._v("mdi-code-tags")])],1)]}}])},[s("span",[t._v("Source Code")])])],1),s("v-content",{staticClass:"mt-5"},[s("v-container",[s("v-row",{attrs:{justify:"center"}},[s("v-col",[s("item001")],1),s("v-col",[s("item002")],1),s("v-col",[s("item003")],1),s("v-col",[s("item004")],1),s("v-col",[s("item005")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1),s("v-col",[s("item099")],1)],1)],1)],1)],1)},l=[],n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{scrollable:"","max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-card",t._g(t._b({staticClass:"ma-2",attrs:{hover:"",width:"270"}},"v-card",i,!1),e),[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.hover;return s("div",{class:e?"img1":"img2"},[s("v-card-title",{staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-card-text",{staticClass:"card_text"},[t._v(" "+t._s(t.body)+" ")]),s("b-container",{staticClass:"d-flex justify-content-end"},t._l(t.chips,(function(a){return s("v-chip",{key:a.name,staticClass:"ma-1",attrs:{small:"",dark:"",color:"#208ea3b0"}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)}}],null,!0)})],1)]}},{key:"default",fn:function(a){return[s("v-card",[s("v-toolbar",{attrs:{elevation:"3px"}},[s("v-toolbar-title",{staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-spacer"),s("v-card-actions",[s("v-btn",{attrs:{icon:""},on:{click:function(t){a.value=!1}}},[s("v-icon",[t._v("mdi-close")])],1)],1)],1),s("v-divider"),s("v-card-text",[s("v-row",{staticClass:"pt-10"},[s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("1f58")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("dffc")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("fb66")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("ba67")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("b1c0")}})],1)],1),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どんなもの？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("先行研究と比べてどこがすごい？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("技術や手法のキモはどこ？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どうやって有効だと検証した？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("議論はある？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("次に読むべきものは？")]),t._v(" - "),s("a",{attrs:{href:"http://www.audentia-gestion.fr/MICROSOFT/lightgbm.pdf"}},[t._v("lightgbmの論文")]),s("br"),s("br")],1)],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}})],1)},c=[],v={methods:{show:function(){this.$viewerApi({images:this.images})}},data:function(){return{title:"XGBoost: A Scalable Tree Boosting System",body:"勾配ブースティング木",chips:[{name:"ML"},{name:"Table"},{name:"Tree"}]}}},d=v,f=(e("ba0e"),e("2877")),p=e("6544"),u=e.n(p),b=e("8336"),g=e("b0af"),_=e("99d9"),m=e("cc20"),h=e("62ad"),k=e("169a"),j=e("ce7e"),C=e("ce87"),x=e("132d"),V=e("0fd9"),y=e("2fa4"),S=e("71d9"),w=e("2a7f"),T=Object(f["a"])(d,n,c,!1,null,null,null),A=T.exports;u()(T,{VBtn:b["a"],VCard:g["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:m["a"],VCol:h["a"],VDialog:k["a"],VDivider:j["a"],VHover:C["a"],VIcon:x["a"],VRow:V["a"],VSpacer:y["a"],VToolbar:S["a"],VToolbarTitle:w["a"]});var D=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{scrollable:"","max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-card",t._g(t._b({staticClass:"ma-2",attrs:{hover:"",width:"270"}},"v-card",i,!1),e),[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.hover;return s("div",{class:e?"img1":"img2"},[s("div",{staticClass:"text-caption card_text mr-2",staticStyle:{"text-align":"right"}},[t._v(" "+t._s(t.date_)+" ")]),s("v-card-title",{staticClass:"pt-0 text-subtitle-1 font-weight-bold",staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-card-text",{staticClass:"card_text"},[t._v(" "+t._s(t.body)+" ")]),s("b-container",{staticClass:"d-flex justify-content-end"},t._l(t.chips,(function(a){return s("v-chip",{key:a.name,staticClass:"ma-1",attrs:{small:"",dark:"",color:"#208ea3b0"}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)}}],null,!0)})],1)]}},{key:"default",fn:function(a){return[s("v-card",[s("v-toolbar",{attrs:{elevation:"3px"}},[s("v-toolbar-title",{staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-spacer"),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({staticStyle:{color:"#208ea3"},attrs:{icon:"",href:t.link}},"v-btn",i,!1),e),[s("v-icon",[t._v("mdi-file")])],1)]}}],null,!0)},[s("span",[t._v("go to source")])]),s("v-card-actions",[s("v-btn",{attrs:{icon:""},on:{click:function(t){a.value=!1}}},[s("v-icon",[t._v("mdi-close")])],1)],1)],1),s("v-divider"),s("v-card-text",[s("v-row",{staticClass:"pt-10"},[s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("061d")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("26c9")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("144a")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("c504")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("f0f6")}})],1)],1),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どんなもの？")]),t._v(" - 融資を行う際にデフォルトリスクを予測したい。 "),s("br"),t._v(" - 国内の中小企業のデータを用いて、機械学習手法によりスコアリングモデルを構築する。 "),s("br"),t._v(" - 学習は企業が融資実行後にデフォルトしたかどうかを示すフラグを教師データとして学習を行った。 "),s("br"),t._v(" - 様々なモデルとそのスタッキングで検証。 "),s("br"),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("先行研究と比べてどこがすごい？")]),t._v(" - 消費者向けがほとんどの報告。今回は法人向けデータ。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("技術や手法のキモはどこ？")]),t._v(" - データが多い。 "),s("br"),t._v(" - スタッキングを使っている。 "),s("br"),s("br"),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どうやって有効だと検証した？")]),t._v(" - CAP曲線から得られるAR値で評価し、スタッキングがダントツでスコア良かった。 "),s("br"),t._v(" - 学習データが多いほど有利であるということも証明している。 "),s("br"),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("議論はある？")]),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("次に読むべきものは？")]),t._v(" - CAP曲線とAR値に関するもの。 "),s("br"),s("br")],1)],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}})],1)},O=[],L={methods:{show:function(){this.$viewerApi({images:this.images})}},data:function(){return{date_:"2021-06-23",title:"[日本語]機械学習による中小企業の信用スコアリングモデルの構築",body:"中小企業のデフォルトリスクについて。リコーの研究所の論文。",link:"https://sigfin.org/?plugin=attach&refer=019-04&openfile=SIG-FIN-019-04.pdf",chips:[{name:"Fintech"},{name:"Credit"},{name:"ML"},{name:"Deep"}]}}},R=L,B=(e("5ee8"),e("3a2f")),P=Object(f["a"])(R,D,O,!1,null,null,null),I=P.exports;u()(P,{VBtn:b["a"],VCard:g["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:m["a"],VCol:h["a"],VDialog:k["a"],VDivider:j["a"],VHover:C["a"],VIcon:x["a"],VRow:V["a"],VSpacer:y["a"],VToolbar:S["a"],VToolbarTitle:w["a"],VTooltip:B["a"]});var K=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{scrollable:"","max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-card",t._g(t._b({staticClass:"ma-2",attrs:{hover:"",width:"270"}},"v-card",i,!1),e),[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.hover;return s("div",{class:e?"img1":"img2"},[s("div",{staticClass:"text-caption card_text mr-2",staticStyle:{"text-align":"right"}},[t._v(" "+t._s(t.date_)+" ")]),s("v-card-title",{staticClass:"pt-0",staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-card-text",{staticClass:"card_text"},[t._v(" "+t._s(t.body)+" ")]),s("b-container",{staticClass:"d-flex justify-content-end"},t._l(t.chips,(function(a){return s("v-chip",{key:a.name,staticClass:"ma-1",attrs:{small:"",dark:"",color:"#208ea3b0"}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)}}],null,!0)})],1)]}},{key:"default",fn:function(a){return[s("v-card",[s("v-toolbar",{attrs:{elevation:"3px"}},[s("v-toolbar-title",{staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-spacer"),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({staticStyle:{color:"#208ea3"},attrs:{icon:"",href:t.link}},"v-btn",i,!1),e),[s("v-icon",[t._v("mdi-file")])],1)]}}],null,!0)},[s("span",[t._v("go to source")])]),s("v-card-actions",[s("v-btn",{attrs:{icon:""},on:{click:function(t){a.value=!1}}},[s("v-icon",[t._v("mdi-close")])],1)],1)],1),s("v-divider"),s("v-card-text",[s("v-row",{staticClass:"pt-10"},[s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("c081")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("af6a")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("7971")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("dd26")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("abb9")}})],1)],1),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("メモ")]),s("ul",[s("li",[s("strong",[t._v("万能近似定理")]),t._v(": 層が２つあるニューラルネットワークは、1層当たりのパラメータの数が十分多ければ、どんな連続な関数でも(無視できる誤差の範囲で)近似できる。")]),s("ul",[s("li",[t._v(" 3層以上はむしろ害悪である")]),s("li",[t._v(" ではなぜResNetなどの層の多いNNがいい精度を出しているのか？")]),s("li",[t._v(" そもそもなめらかでない関数を扱っている--\x3eなめらかでない関数もNNなら表現可能(活性化関数)")])]),s("li",[t._v(" これまでの常識では、パラメータを増やすとバイアスが小さくなる。しかし小さくしすぎると過剰適合してしまう。")]),s("ul",[s("li",[t._v(" これまでの常識: 過剰適合のしやすさ= sqrt(NNの自由度/訓練データの数)")]),s("li",[t._v(" NNは膨大な数のパラメータがあるがなぜ過剰適合を抑えつついい精度を出しているのか？")]),s("li",[t._v(" 本ではこれらに対して3つの重要な理論を紹介している。どれもメリデメはある。")]),s("ul",[s("li",[s("strong",[t._v("暗黙的正則化")]),t._v(": データ・アルゴリズムの構造実質的なモデルを制限する")]),s("li",[s("strong",[t._v("損失平坦性")]),t._v(": 損失関数の平坦さが複雑性誤差を抑制する")]),s("li",[s("strong",[t._v("二重降下")]),t._v(": 大モデル極限ではデータのスペクトルがタイトな上限を与える")])])]),s("li",[s("strong",[t._v("これまでデータ分析の常識では、バイアスとバリアンスはトレードオフにあった。しかし、新理論の確立により、パラメータと増やすことでバイアスとバリアンスを同時に減少させることが可能になるかもしれない。")])])]),s("br"),s("br")],1)],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}})],1)},E=[],M={methods:{show:function(){this.$viewerApi({images:this.images})}},data:function(){return{date_:"2021-06-24",title:"[本]深層学習の原理に迫る",body:"深層学習がなぜうまく行くのかについて書かれている本。万能近似定理のその先が書かれている。",link:"https://www.amazon.co.jp/dp/4000297031",chips:[{name:"Book"},{name:"ML"},{name:"Deep"}]}}},N=M,U=(e("417d"),Object(f["a"])(N,K,E,!1,null,null,null)),$=U.exports;u()(U,{VBtn:b["a"],VCard:g["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:m["a"],VCol:h["a"],VDialog:k["a"],VDivider:j["a"],VHover:C["a"],VIcon:x["a"],VRow:V["a"],VSpacer:y["a"],VToolbar:S["a"],VToolbarTitle:w["a"],VTooltip:B["a"]});var G=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{scrollable:"","max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-card",t._g(t._b({staticClass:"ma-2",attrs:{hover:"",width:"270"}},"v-card",i,!1),e),[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.hover;return s("div",{class:e?"img1":"img2"},[s("div",{staticClass:"text-caption card_text mr-2",staticStyle:{"text-align":"right"}},[t._v(" "+t._s(t.date_)+" ")]),s("v-card-title",{staticClass:"pt-0 text-subtitle-2 font-weight-bold",staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-card-text",{staticClass:"card_text"},[t._v(" "+t._s(t.body)+" ")]),s("b-container",{staticClass:"d-flex justify-content-end"},t._l(t.chips,(function(a){return s("v-chip",{key:a.name,staticClass:"ma-1",attrs:{small:"",dark:"",color:"#208ea3b0"}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)}}],null,!0)})],1)]}},{key:"default",fn:function(a){return[s("v-card",[s("v-toolbar",{attrs:{elevation:"3px"}},[s("v-toolbar-title",{staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-spacer"),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({staticStyle:{color:"#208ea3"},attrs:{icon:"",href:t.link}},"v-btn",i,!1),e),[s("v-icon",[t._v("mdi-file")])],1)]}}],null,!0)},[s("span",[t._v("go to source")])]),s("v-card-actions",[s("v-btn",{attrs:{icon:""},on:{click:function(t){a.value=!1}}},[s("v-icon",[t._v("mdi-close")])],1)],1)],1),s("v-divider"),s("v-card-text",[s("v-row",{staticClass:"pt-10"},[s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("d96a")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("eb58")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("97f8")}})],1)],1),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どんなもの？")]),t._v(" クレジットカードの不正データセット(Kaggle)を用いて、教師あり(6個)vs教師なし(4個)のモデルを10個試す。評価にはAUCを使う。インバランス(284,807:497)なのが特徴。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("先行研究と比べてどこがすごい？")]),t._v(" 教師ありvs教師なしで比較しているところ。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("技術や手法のキモはどこ？")]),t._v(" 特になし。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どうやって有効だと検証した？")]),t._v(" Kaggleのクレジットカードのデータセットで10個のモデルをAUCで評価。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("議論はある？")]),t._v(" 教師ありは、ハイパフォーマンスを出すが、データのラベル付にコストがかかりメンテナンスが大変。教師なしはそのあたりが有利。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("次に読むべきものは？")]),t._v(" - "),s("a",{attrs:{href:"https://d1wqtxts1xzle7.cloudfront.net/39570235/A_cost-sensitive_decision_tree_approach_20151031-2600-1vf1ph9.pdf?1446294650=&response-content-disposition=inline%3B+filename%3DA_cost_sensitive_decision_tree_approach.pdf&Expires=1624523062&Signature=PfGUzVWVGVKKD3jeKA6UUu-hodSv8zoQb6SCZI20rF7gBX3oqcamC-gDbhLD2Tlp~WyofFYqsvfJGAt1EO0wK~7uNjJPtw7DRT8QTLMEfJpFFlGrempS57OgIn87jESJplsTQqB1g5PmUbJY7dU-E7Kl54uXt8xN0AKAusU43qQmMauZn8pDB3BQ5nfsyP1v~bdrJ-cj2JQO--nUds-bGZCRnx5~xiG7K1ahcwF3IPN6yuKU6YAuKhXx2vVmAfBlXVK-cvGx334oL620lvyE4kKXrGgU3lTYIztY0~SbtYa-UYGff0YJvaLPoYLnC1LvbKjo6UAzSIQ8OxEDweJQXw__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA"}},[t._v("cost-sensitive learningについての論文")]),t._v("。 "),s("br"),t._v(" - 3つの問題(インバランス、ドリフト、検証待ち時間)について言及している"),s("a",{attrs:{href:"https://re.public.polimi.it/retrieve/handle/11311/1044896/260717/08038008.pdf"}},[t._v("論文")]),t._v("。"),s("br"),t._v(" - LSTM使った"),s("a",{attrs:{href:"https://isiarticles.com/bundles/Article/pre/pdf/97397.pdf"}},[t._v("論文")]),t._v("。"),s("br"),s("br"),s("br")],1)],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}})],1)},J=[],F={methods:{show:function(){this.$viewerApi({images:this.images})}},data:function(){return{date_:"2021-06-24",title:"A Comparison Study of Credit Card Fraud Detection: Supervised versus Unsupervised",body:"クレジットカードの不正利用検知について。教師ありvs教師なし がテーマ。",link:"https://arxiv.org/pdf/1904.10604.pdf",chips:[{name:"Credit"},{name:"ML"},{name:"Deep"},{name:"Unsupervised"}]}}},Y=F,H=(e("462f"),Object(f["a"])(Y,G,J,!1,null,null,null)),Q=H.exports;u()(H,{VBtn:b["a"],VCard:g["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:m["a"],VCol:h["a"],VDialog:k["a"],VDivider:j["a"],VHover:C["a"],VIcon:x["a"],VRow:V["a"],VSpacer:y["a"],VToolbar:S["a"],VToolbarTitle:w["a"],VTooltip:B["a"]});var X=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{scrollable:"","max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-card",t._g(t._b({staticClass:"ma-2",attrs:{hover:"",width:"270"}},"v-card",i,!1),e),[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.hover;return s("div",{class:e?"img1":"img2"},[s("div",{staticClass:"text-caption card_text mr-2",staticStyle:{"text-align":"right"}},[t._v(" "+t._s(t.date_)+" ")]),s("v-card-title",{staticClass:"pt-0 text-subtitle-1 font-weight-bold",staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-card-text",{staticClass:"card_text"},[t._v(" "+t._s(t.body)+" ")]),s("b-container",{staticClass:"d-flex justify-content-end"},t._l(t.chips,(function(a){return s("v-chip",{key:a.name,staticClass:"ma-1",attrs:{small:"",dark:"",color:"#208ea3b0"}},[t._v(" "+t._s(a.name)+" ")])})),1)],1)}}],null,!0)})],1)]}},{key:"default",fn:function(a){return[s("v-card",[s("v-toolbar",{attrs:{elevation:"3px"}},[s("v-toolbar-title",{staticStyle:{color:"#208ea3"}},[t._v(" "+t._s(t.title)+" ")]),s("v-spacer"),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-btn",t._g(t._b({staticStyle:{color:"#208ea3"},attrs:{icon:"",href:t.link}},"v-btn",i,!1),e),[s("v-icon",[t._v("mdi-file")])],1)]}}],null,!0)},[s("span",[t._v("go to source")])]),s("v-card-actions",[s("v-btn",{attrs:{icon:""},on:{click:function(t){a.value=!1}}},[s("v-icon",[t._v("mdi-close")])],1)],1)],1),s("v-divider"),s("v-card-text",[s("v-row",{staticClass:"pt-10"},[s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("50f6")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("6b90")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("bec8")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("6665")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("a967")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("0dc8")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("da56")}})],1)],1),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どんなもの？")]),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("先行研究と比べてどこがすごい？")]),t._v(" コストを考えている。"),s("br"),t._v(" 新しいmetricとして、SLR(Saved Loss Rate)を提案している(コストを考慮)。 "),s("br"),t._v(" SLR: 不正取引が行われたカードの利用可能な限度額の合計である潜在的な金銭的損失のうち、節約できた割合。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("技術や手法のキモはどこ？")]),t._v(" クレジットカードの不正タスクにCost-Sensitive Learningを使っていること(医療ではよく使われているがこの分野ではまだ少ない)。 "),s("br"),t._v(" SLRを使っていること。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どうやって有効だと検証した？")]),t._v(" NN, Tree系, SVM, などのモデルとCS(Cost-Sensitive)を使ったモデルを比較。 "),s("br"),t._v(" Datasetは非常にインバランス。 "),s("br"),t._v(" Metricsには、TPRとSLRを使用。"),s("br"),t._v(" TPR, SLR共にCSを使ったモデルが強い。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("議論はある？")]),t._v(" SLRは今後、この分野で使われていくだろうと書かれていたけど、どうなのか調べたい。 "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("次に読むべきものは？")]),t._v(" 機械学習で考えないといけないコストについてまとめられている"),s("a",{attrs:{href:"https://arxiv.org/pdf/cs/0212034.pdf"}},[t._v("論文")]),t._v("。 "),s("br"),s("br"),s("br")],1)],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}})],1)},q=[],z={methods:{show:function(){this.$viewerApi({images:this.images})}},data:function(){return{date_:"2021-06-25",title:"A cost-sensitive decision tree approach for fraud detection",body:"クレジットカードの不正検知にCost-Sensitive Learningを使った論文。",link:"https://silo.tips/download/this-article-appeared-in-a-journal-published-by-elsevier-the-attached-copy-is-fu-86",images_dir:"images005",chips:[{name:"Credit"},{name:"Cost-Sensitive"}]}}},Z=z,W=(e("d292"),Object(f["a"])(Z,X,q,!1,null,null,null)),tt=W.exports;u()(W,{VBtn:b["a"],VCard:g["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:m["a"],VCol:h["a"],VDialog:k["a"],VDivider:j["a"],VHover:C["a"],VIcon:x["a"],VRow:V["a"],VSpacer:y["a"],VToolbar:S["a"],VToolbarTitle:w["a"],VTooltip:B["a"]});var at=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("v-row",{attrs:{justify:"center"}},[s("v-dialog",{attrs:{scrollable:"","max-width":"800px"},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on,i=a.attrs;return[s("v-card",t._g(t._b({staticClass:"ma-2",attrs:{hover:"",width:"270"}},"v-card",i,!1),e),[s("v-hover",{scopedSlots:t._u([{key:"default",fn:function(a){var e=a.hover;return s("div",{class:e?"img1":"img2"},[s("v-card-title",{staticStyle:{color:"#208ea3"}},[t._v(" paper title ")]),s("v-card-text",{staticClass:"card_text"},[t._v(" hogehoge and hoge----gee----- and hogehoge no mi no nouryokusya ")]),s("b-container",{staticClass:"d-flex justify-content-end"},[s("v-chip",{staticClass:"ma-1",attrs:{small:"",dark:"",color:"#208ea3b0"}},[t._v("ML")]),s("v-chip",{staticClass:"ma-1",attrs:{small:"",dark:"",color:"#208ea3b0"}},[t._v("DL")]),s("v-chip",{staticClass:"ma-1",attrs:{small:"",dark:"",color:"#208ea3b0"}},[t._v("Image")])],1)],1)}}],null,!0)})],1)]}},{key:"default",fn:function(a){return[s("v-card",[s("v-toolbar",{attrs:{elevation:"3px"}},[s("v-card-title",{staticStyle:{color:"#208ea3"}},[t._v(" paper title ")]),s("v-spacer"),s("v-card-actions",[s("v-btn",{attrs:{icon:""},on:{click:function(t){a.value=!1}}},[s("v-icon",[t._v("mdi-close")])],1)],1)],1),s("v-divider"),s("v-card-text",[s("v-row",{staticClass:"pt-10"},[s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("a491")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("5331")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("0c96")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("0c96")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("0c96")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("0c96")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("5331")}})],1),s("v-col",{attrs:{cols:"3"}},[s("expandable-image",{staticClass:"image",attrs:{src:e("0c96")}})],1)],1),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どんなもの？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("先行研究と比べてどこがすごい？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("技術や手法のキモはどこ？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("どうやって有効だと検証した？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("議論はある？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),t._v(" "),s("br"),s("h3",{staticClass:"contents-title"},[t._v("次に読むべきものは？")]),t._v(" hogehoge and hoge lsdakjlsdakjf;klasjdl;kfjasdkljflasjdkfjk;asldjfl;kasdjflkasdjfjasdlkfjaslkdjf "),s("br"),s("br")],1)],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}})],1)},et=[],st={methods:{show:function(){this.$viewerApi({images:this.images})}}},it=st,ot=(e("0ec5"),Object(f["a"])(it,at,et,!1,null,null,null)),rt=ot.exports;u()(ot,{VBtn:b["a"],VCard:g["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:m["a"],VCol:h["a"],VDialog:k["a"],VDivider:j["a"],VHover:C["a"],VIcon:x["a"],VRow:V["a"],VSpacer:y["a"],VToolbar:S["a"]});var lt={name:"App",components:{item001:A,item002:I,item003:$,item004:Q,item005:tt,item099:rt}},nt=lt,ct=e("7496"),vt=e("40dc"),dt=e("a523"),ft=e("a75b"),pt=e("adda"),ut=Object(f["a"])(nt,r,l,!1,null,null,null),bt=ut.exports;u()(ut,{VApp:ct["a"],VAppBar:vt["a"],VBtn:b["a"],VCol:h["a"],VContainer:dt["a"],VContent:ft["a"],VIcon:x["a"],VImg:pt["a"],VRow:V["a"],VSpacer:y["a"],VToolbarTitle:w["a"],VTooltip:B["a"]});var gt={name:"App",components:{home:bt},data:function(){return{}}},_t=gt,mt=Object(f["a"])(_t,i,o,!1,null,null,null),ht=mt.exports;u()(mt,{VApp:ct["a"]});var kt=e("f309");s["a"].use(kt["a"]);var jt=new kt["a"]({}),Ct=e("210c"),xt=e.n(Ct),Vt=e("ecee"),yt=e("f2d1"),St=e("ad3d");s["a"].use(xt.a),Vt["c"].add(yt["b"],yt["a"]),s["a"].component("font-awesome-icon",St["a"]),s["a"].config.productionTip=!1,new s["a"]({vuetify:jt,render:function(t){return t(ht)}}).$mount("#app")},"593b":function(t,a,e){t.exports=e.p+"img/icon.98926a8d.png"},"5ee8":function(t,a,e){"use strict";e("cd1b")},6665:function(t,a,e){t.exports=e.p+"img/image004.c985898e.jpeg"},"6b90":function(t,a,e){t.exports=e.p+"img/image002.cfc71355.jpeg"},7971:function(t,a,e){t.exports=e.p+"img/image003.b8ef5ea7.jpg"},"8b34":function(t,a,e){},"940f":function(t,a,e){},"97f8":function(t,a,e){t.exports=e.p+"img/image003.23d077d4.png"},a491:function(t,a,e){t.exports=e.p+"img/bg001.a988ca7d.png"},a967:function(t,a,e){t.exports=e.p+"img/image005.17e65848.jpeg"},abb9:function(t,a,e){t.exports=e.p+"img/image005.63be830c.jpg"},af6a:function(t,a,e){t.exports=e.p+"img/image002.369b977a.jpg"},b1c0:function(t,a,e){t.exports=e.p+"img/image005.3fb537af.png"},ba0e:function(t,a,e){"use strict";e("356f")},ba67:function(t,a,e){t.exports=e.p+"img/image004.15a49185.png"},bec8:function(t,a,e){t.exports=e.p+"img/image003.b90b9ebb.jpeg"},c081:function(t,a,e){t.exports=e.p+"img/image001.dcdc64b6.jpg"},c504:function(t,a,e){t.exports=e.p+"img/image004.df4019ef.png"},cadf:function(t,a,e){},cc7f:function(t,a,e){},cd1b:function(t,a,e){},d292:function(t,a,e){"use strict";e("8b34")},d96a:function(t,a,e){t.exports=e.p+"img/image001.b1698a3f.png"},da56:function(t,a,e){t.exports=e.p+"img/image007.5a8074ac.jpeg"},dd26:function(t,a,e){t.exports=e.p+"img/image004.eb879e77.jpg"},dffc:function(t,a,e){t.exports=e.p+"img/image002.acd70630.png"},eb58:function(t,a,e){t.exports=e.p+"img/image002.7f07aaa3.png"},f0f6:function(t,a,e){t.exports=e.p+"img/image005.8dd49d3d.png"},fb66:function(t,a,e){t.exports=e.p+"img/image003.ace7d99f.png"}});
//# sourceMappingURL=index.4711f55f.js.map