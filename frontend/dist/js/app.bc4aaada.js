(function(t){function e(e){for(var s,c,i=e[0],r=e[1],l=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,i=1;i<a.length;i++){var r=a[i];0!==n[r]&&(s=!1)}s&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},n={app:0},o=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"1a36":function(t,e,a){},3950:function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":t.fullPage,opacity:.7,"z-index":9,loader:"bars"},on:{"update:active":function(e){t.isLoading=e}}}),a("header",[a("h1",{staticClass:"title-page-text"},[t._v(t._s(t.t("COVID-19 PANDEMIC")))])]),a("section",[a("div",{staticClass:"row"},[t.meta?a("div",{staticClass:"col"},[a("ChartsFilter",{attrs:{countriesList:t.countriesList,options:t.countriesList,countriesSelected:t.countriesSelected,date:t.meta.date},on:{"update:countriesSelected":function(e){t.countriesSelected=e},"update:countries-selected":function(e){t.countriesSelected=e}}})],1):t._e()]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6"},[a("ChartCasesPopulation",{attrs:{countriesSelected:t.countriesDataChart}})],1),a("div",{staticClass:"col-12 col-sm-12 col-md-6"},[a("ChartCasesPopulationPercentage",{attrs:{countriesSelected:t.countriesDataChart}})],1),a("div",{staticClass:"col-12 col-sm-12 col-md-6"},[a("ChartDeathsPopulation",{attrs:{countriesSelected:t.countriesDataChart}})],1),a("div",{staticClass:"col-12 col-sm-12 col-md-6"},[a("ChartDeathsPopulationPercentage",{attrs:{countriesSelected:t.countriesDataChart}})],1)])])],1)},o=[],c=(a("99af"),a("7db0"),a("d81d"),a("b0c0"),a("b680"),a("9062")),i=a.n(c),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"select-to-compare-text"},[a("label",[t._v(t._s(t.t("Select the countries to compare")))])]),a("multiselect",{attrs:{options:t.countriesList,label:"name","track-by":"id",multiple:!0,searchable:!0,placeholder:""},scopedSlots:t._u([{key:"selection",fn:function(e){return[a("div",{directives:[{name:"show",rawName:"v-show",value:e.values.length>0,expression:"props.values.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(e.values,(function(s,n){return[t._t("tag",[a("span",{key:n,staticClass:"multiselect__tag"},[a("span",{staticClass:"multiselect__tag_custom",style:"background-color:"+t.torgb(s.color,"0.25")+"; color: "+s.font,domProps:{textContent:t._s(s.name)}}),a("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),e.remove(s))},mousedown:function(t){return t.preventDefault(),e.remove(s)}}})])],{option:s,search:e.search,remove:e.remove})]}))],2)]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),a("div",{staticClass:"col-md-12"},[a("small",{staticClass:"last-update-text"},[t._v(t._s(t.tWithParams("Last update: %lastUpdated%",{lastUpdated:"asadasd"})))])])])},l=[],u=(a("a9e3"),a("8e5f")),d=a.n(u),p=a("c1df"),f=a.n(p),h=a("ab14"),m=a.n(h),b={name:"ChartsFilter",props:{countriesList:Array,countriesSelected:Array,date:Number},mounted:function(){this.selected=this.countriesSelected,this.lastUpdated=f()(1e3*this.date).utc().format("MM/DD/YYYY HH:mm:ss z")},methods:{torgb:function(t,e){return m()(t,e)}},watch:{selected:function(){var t=[];this.selected.map((function(e){t.push({id:e.id,name:e.name})})),this.$emit("update:countriesSelected",t)}},data:function(){return{selected:[],lastUpdated:null}},components:{Multiselect:d.a},locales:{en:{"Select the countries to compare":"Select the countries to compare","Last update: %lastUpdated%":"Last update: %lastUpdated%"},pt:{"Select the countries to compare":"Selecione os países para comparar","Last update: %lastUpdated%":"Última atualização: %lastUpdated%"},es:{"Select the countries to compare":"Seleccione los países para comparar","Last update: %lastUpdated%":"Última actualización: %lastUpdated%"}}},j=b,v=(a("60bc"),a("b3df"),a("2877")),C=Object(v["a"])(j,r,l,!1,null,null,null),g=C.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{attrs:{id:"chart-population"}})])])}],_=a("ea7f"),D=a.n(_),S={name:"ChartCasesPopulation",props:{countriesSelected:Object},mounted:function(){this.update()},watch:{"countriesSelected.populationCases":function(){this.update()}},methods:{update:function(){D.a.chart("chart-population",{title:{text:this.$translate.text("Total cases by day")},yAxis:{title:{text:this.$translate.text("Number of cases")}},series:this.countriesSelected.populationCases})}},locales:{en:{"Total cases by day":"Total cases by day","Number of cases":"Number of cases"},pt:{"Total cases by day":"Total de casos por dia","Number of cases":"Número de casos"},es:{"Total cases by day":"Total de casos por día","Number of cases":"Numero de casos"}}},w=S,x=Object(v["a"])(w,P,y,!1,null,null,null),k=x.exports,A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{attrs:{id:"chart-deaths-population"}})])])}],z={name:"ChartDeathsPopulation",props:{countriesSelected:Object},mounted:function(){this.update()},watch:{"countriesSelected.populationDeaths":function(){this.update()}},methods:{update:function(){D.a.chart("chart-deaths-population",{title:{text:"Deaths Unique Count"},yAxis:{title:{text:"Number of deaths"}},series:this.countriesSelected.populationDeaths})}}},E=z,I=Object(v["a"])(E,A,O,!1,null,null,null),N=I.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{attrs:{id:"chart-deaths-population-percentage"}})])])}],M={name:"ChartDeathsPopulationPercentage",props:{countriesSelected:Object},mounted:function(){this.update()},watch:{"countriesSelected.populationPercentageDeaths":function(){this.update()}},methods:{update:function(){D.a.chart("chart-deaths-population-percentage",{title:{text:"Deaths by Population Percentage"},yAxis:{title:{text:"Percentage of deaths"}},series:this.countriesSelected.populationPercentageDeaths})}}},U=M,T=Object(v["a"])(U,$,L,!1,null,null,null),B=T.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{attrs:{id:"chart-population-percentage"}})])])}],Y={name:"ChartCasesPopulationPercentage",props:{countriesSelected:Object},mounted:function(){this.update()},watch:{"countriesSelected.populationPercentageCases":function(){this.update()}},methods:{update:function(){D.a.chart("chart-population-percentage",{title:{text:"Cases by Population Percentage"},yAxis:{title:{text:"Percentage of cases"}},series:this.countriesSelected.populationPercentageCases})}}},H=Y,R=Object(v["a"])(H,V,F,!1,null,null,null),q=R.exports,J=(a("e40d"),a("bc3a")),W=a.n(J),G=Object({NODE_ENV:"production",VUE_APP_API_HOST:"covidlast.com",VUE_APP_API_PORT:"3000",VUE_APP_API_SCHEMA:"http",BASE_URL:"/"}),K=G.VUE_APP_API_SCHEMA,Q=G.VUE_APP_API_HOST,X=G.VUE_APP_API_PORT,Z={name:"App",watch:{countriesSelected:function(){this.updateCases()}},created:function(){var t="pt";this.$translate.setLang(t)},methods:{updateCases:function(){this.mountData("populationCases"),this.mountData("populationDeaths"),this.mountData("populationActive"),this.mountData("populationPercentageCases"),this.mountData("populationPercentageDeaths"),this.mountData("populationPercentageActive")},mountData:function(t){var e=this,a=[];this.countriesData.map((function(s){e.countriesSelected.map((function(n){if(s.countryId===n.id){var o=e.getSerie(a,n.name,s.countryColor);s.data.map((function(a,n){o.data.push(["".concat(f()(1e3*a.timestamp).utc().format("MM/DD/YYYY"),"<br>day ").concat(n+1),e.getData(t,a,s.countryPopulation)])}))}}))})),this.updateData(t,a)},getSerie:function(t,e,a){return t.find((function(t){return t.name==e}))||t.push({name:e,color:a,data:[]}),t.find((function(t){return t.name==e}))},getData:function(t,e,a){return"populationCases"===t?e.cases:"populationDeaths"===t?e.deaths:"populationActive"===t?e.active:"populationPercentageCases"===t?+(100*e.cases/a).toFixed(5):"populationPercentageDeaths"===t?+(100*e.deaths/a).toFixed(5):"populationPercentageActive"===t?+(100*e.active/a).toFixed(5):void 0},updateData:function(t,e){"populationCases"===t&&(this.countriesDataChart.populationCases=e),"populationDeaths"===t&&(this.countriesDataChart.populationDeaths=e),"populationActive"===t&&(this.countriesDataChart.populationActive=e),"populationPercentageCases"===t&&(this.countriesDataChart.populationPercentageCases=e),"populationPercentageDeaths"===t&&(this.countriesDataChart.populationPercentageDeaths=e),"populationPercentageActive"===t&&(this.countriesDataChart.populationPercentageActive=e)}},beforeMount:function(){var t=this;W.a.get("".concat(K,"://").concat(Q,":").concat(X,"/cases")).then((function(e){e.data.data&&e.data.data?(e.data.data.map((function(e){t.countriesData.push(e),t.countriesList.push({id:e.countryId,name:t.$translate.text(e.countryName),color:e.countryColor,font:"#FFF"})})),t.isLoading=!1,t.updateCases(),t.meta=e.data.meta):t.$popup.error("Response has empty")})).catch((function(e){t.$popup.error(e.message)}))},data:function(){return{meta:null,isLoading:!0,fullPage:!0,countriesSelected:[{id:1,name:this.$translate.text("Brazil"),color:"#090",font:"#FFF"}],countriesList:[],countriesData:[],countriesDataChart:{populationCases:[],populationDeaths:[],populationActive:[],populationPercentageCases:[],populationPercentageDeaths:[],populationPercentageActive:[]}}},components:{Loading:i.a,ChartsFilter:g,ChartCasesPopulation:k,ChartCasesPopulationPercentage:q,ChartDeathsPopulation:N,ChartDeathsPopulationPercentage:B},locales:{en:{"COVID-19 PANDEMIC":"COVID-19 PANDEMIC",Belgium:"Belgium",Brazil:"Brazil",Canada:"Canada",China:"China"},pt:{"COVID-19 PANDEMIC":"COVID-19 PANDEMIA",Belgium:"Bélgica",Brazil:"Brasil",Canada:"Canadá",China:"China"},es:{"COVID-19 PANDEMIC":"COVID-19 PANDEMIA",Belgium:"Bélgica",Brazil:"Brasil",Canada:"Canadá",China:"China"}}},tt=Z,et=(a("034f"),Object(v["a"])(tt,n,o,!1,null,null,null)),at=et.exports,st=a("ed18"),nt=a("5f5b"),ot=a("b1e0"),ct=(a("f9e3"),a("2dd8"),a("1a36"),a("b079")),it=a.n(ct),rt=(a("4238"),{vue:null,install:function(t){t.use(it.a),rt.vue=t,t.prototype.$popup={clear:function(){rt.clear()},success:function(t){rt.show(t,"success")},error:function(t){rt.show(t,"error")},info:function(t){rt.show(t,"info")},warning:function(t){rt.show(t,"warning")}}},show:function(t,e){rt.vue.$toast.open({message:t,position:"top-right",duration:4500,type:e})},clear:function(){rt.vue.$toast.clear()}}),lt=rt,ut=a("00e7"),dt=a.n(ut),pt=a("a04f"),ft=a.n(pt);Object(st["config"])({debug:!1}),s["default"].config.productionTip=!1,s["default"].use(dt.a),s["default"].use(ft.a),s["default"].use(nt["a"]),s["default"].use(ot["a"]),s["default"].use(lt),new s["default"]({render:function(t){return t(at)}}).$mount("#app")},"85ec":function(t,e,a){},b3df:function(t,e,a){"use strict";var s=a("3950"),n=a.n(s);n.a}});
//# sourceMappingURL=app.bc4aaada.js.map