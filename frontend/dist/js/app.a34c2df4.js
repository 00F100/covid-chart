(function(e){function t(t){for(var n,i,r=t[0],c=t[1],l=t[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},s={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"060c":function(e,t,a){},"1a36":function(e,t,a){},3950:function(e,t,a){},4678:function(e,t,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}s.keys=function(){return Object.keys(n)},s.resolve=o,e.exports=s,s.id="4678"},"48f1":function(e,t,a){"use strict";var n=a("060c"),s=a.n(n);s.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid",attrs:{id:"app"}},[a("vue-headful",{attrs:{title:e.t("COVID-19 PANDEMIC"),description:e.t("View and compare covid-19 cases and deaths in the world in an easy and practical way"),keywords:"covid 19 covid-19 coronavirus last updates últimas noticias ultimas cases deaths day casos mortes dia casos muertes diurnas",lang:e.lang,url:"covidlast.com"}}),a("loading",{attrs:{active:e.activeLoading,"can-cancel":!0,"is-full-page":!0,opacity:.7,"z-index":9,loader:"bars"},on:{"update:active":function(t){e.activeLoading=t}}}),e.showModalLang?a("modal-language",{attrs:{lang:e.lang,modal:e.showModalLang,update:e.update,onSelect:this.fixCountriesName},on:{close:function(t){e.showModalLang=!1},"update:lang":function(t){e.lang=t},"update:modal":function(t){e.showModalLang=t},"update:update":function(t){e.update=t}}}):e._e(),a("header",[a("h1",{staticClass:"title-page-text"},[e._v(e._s(e.t("COVID-19 PANDEMIC")))]),a("div",{staticClass:"d-sm-block d-md-none"},[a("button",{staticClass:"btn btn-light choose-lang-mobile",on:{click:function(t){e.showModalLang=!0}}},[a("b-icon-arrow-up-down"),a("span")],1)])]),e.showModalLang?e._e():a("section",[a("div",{staticClass:"row"},[e.meta?a("div",{staticClass:"col"},[a("ChartsFilter",{attrs:{countriesList:e.countriesList,options:e.countriesList,countriesSelected:e.countriesSelected,date:e.meta.date,forceUpdate:!e.showModalLang,lang:e.lang,modal:e.showModalLang},on:{"update:countriesSelected":function(t){e.countriesSelected=t},"update:countries-selected":function(t){e.countriesSelected=t},"update:modal":function(t){e.showModalLang=t}}})],1):e._e()]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12 col-md-6"},[a("ChartCasesPopulation",{attrs:{countriesSelected:e.casesSeries,forceUpdate:!e.showModalLang}})],1),a("hr"),a("div",{staticClass:"col-12 col-sm-12 col-md-6"},[a("ChartCasesPopulationPercentage",{attrs:{countriesSelected:e.casesSeries,forceUpdate:!e.showModalLang}})],1),a("hr"),a("div",{staticClass:"col-12 col-sm-12 col-md-6"},[a("ChartDeathsPopulation",{attrs:{countriesSelected:e.casesSeries,forceUpdate:!e.showModalLang}})],1),a("hr"),a("div",{staticClass:"col-12 col-sm-12 col-md-6"},[a("ChartDeathsPopulationPercentage",{attrs:{countriesSelected:e.casesSeries,forceUpdate:!e.showModalLang}})],1)])]),a("footer",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 col-sm-6 left"},[a("p",[e._v(e._s(e.t("This is a open source project")))]),a("p",[e._v(e._s(e.t("Data source"))+": "),a("a",{attrs:{href:"https://www.worldometers.info/coronavirus/?from=covidlast.com",target:"_blank"}},[e._v("worldometers.info/coronavirus")])]),a("p",[e._v(e._s(e.t("Source code"))+": "),a("a",{attrs:{href:"https://github.com/00F100/covid-chart",target:"_blank"}},[e._v("github.com/00F100/covid-chart")])])]),a("div",{staticClass:"col-6 col-sm-6 right"},[a("p",[e._v("covidlast.com"),a("br"),e._v(e._s(e.t("Version"))+" "+e._s(e.version)),a("br"),e._v(e._s(e.currentYear))])])])])],1)},o=[],i=(a("99af"),a("7db0"),a("d81d"),a("9062")),r=a.n(i),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"select-to-compare-text"},[a("label",[e._v(e._s(e.t("Select the countries to compare")))])])]),a("div",{staticClass:"col-md-10"},[a("multiselect",{attrs:{"allow-empty":!1,options:e.countriesList,label:"countryName","track-by":"countryId",multiple:!0,searchable:!0,placeholder:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[a("div",{directives:[{name:"show",rawName:"v-show",value:t.values.length>0,expression:"props.values.length > 0"}],staticClass:"multiselect__tags-wrap"},[e._l(t.values,(function(n,s){return[e._t("tag",[a("span",{key:s,staticClass:"multiselect__tag"},[a("span",{staticClass:"multiselect__tag_custom",style:"background-color:"+e.torgb(n.countryColor,"0.25")+"; color: #FFF",domProps:{textContent:e._s(n.countryName)}}),a("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keypress:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),t.remove(n))},mousedown:function(e){return e.preventDefault(),t.remove(n)}}})])],{option:n,search:t.search,remove:t.remove})]}))],2)]}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),a("div",{staticClass:"col-md-2 d-none d-md-block"},[a("button",{staticClass:"btn btn-light choose-lang",on:{click:e.openModal}},[a("b-icon-arrow-up-down"),a("span",[e._v(e._s(e.t(e.lang)))])],1)]),a("div",{staticClass:"col-md-12"},[a("small",{staticClass:"last-update-text"},[e._v(e._s(e.t("Last update"))+", "+e._s(e.currentDate))])])])},l=[],u=(a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("466d"),a("5319"),a("8e5f")),d=a.n(u),p=a("c1df"),h=a.n(p),f=a("ab14"),m=a.n(f),g={name:"ChartsFilter",props:{countriesList:Array,countriesSelected:Array,forceUpdate:Boolean,date:Number,lang:String,modal:Boolean},created:function(){this.selected=this.countriesSelected,this.lastUpdated=h()(1e3*this.date).utc().format(this.$translate.text("MM/DD/YYYY HH:mm:ss Z")),this.currentDate=this.getDateClient(1e3*this.date),this.currentDateTimezoneLabel=this.getLabelTimezone()},methods:{torgb:function(e,t){return m()(e,t)},getLabelTimezone:function(){var e=this.getTimezone().match(/(\(.*\))/g);return e[0].replace(/\(|\)/g,"")},getDateClient:function(e){var t=this.getTimezone().match(/([+|-][0-9]{4})/g);return h()(e).utcOffset(t[0]).format(this.$translate.text("MM/DD/YYYY HH:mm:ss Z"))},getTimezone:function(){return(new Date).toString().match(/([A-Z]+[\\+-][0-9]+.*)/)[1]},openModal:function(){this.$emit("update:modal",!0)}},watch:{countriesSelected:function(){this.selected=this.countriesSelected},selected:function(){if(this.selected.length!==this.countriesSelected.length){var e=[];this.selected.map((function(t){e.push(t)})),this.$emit("update:countriesSelected",e)}},forceUpdate:function(){var e=this;if(this.forceUpdate){var t=[];this.selected.length>0&&this.selected.map((function(a){t.push(e.countriesList.find((function(e){return e.id===a.id})))})),this.selected=t}}},data:function(){return{selected:[],lastUpdated:null,currentDate:null,currentDateTimezoneLabel:null}},components:{Multiselect:d.a},locales:{en:{"Select the countries to compare":"Select the countries to compare","Last update":"Last update","MM/DD/YYYY HH:mm:ss Z":"MM/DD/YYYY HH:mm:ss Z",en:"English"},pt:{"Select the countries to compare":"Selecione os países para comparar","Last update":"Última atualização","MM/DD/YYYY HH:mm:ss Z":"DD/MM/YYYY HH:mm:ss Z",pt:"Português"},es:{"Select the countries to compare":"Seleccione los países para comparar","Last update":"Última actualización","MM/DD/YYYY HH:mm:ss Z":"DD/MM/YYYY HH:mm:ss Z",es:"Español"},ru:{"Select the countries to compare":"Выберите страны для сравнения","Last update":"Последнее обновление","MM/DD/YYYY HH:mm:ss Z":"DD/MM/YYYY HH:mm:ss Z",ru:"Pусский"}}},b=g,C=(a("60bc"),a("b3df"),a("2877")),v=Object(C["a"])(b,c,l,!1,null,null,null),j=v.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{attrs:{id:"chart-population"}})])])}],S={name:"ChartCasesPopulation",props:{countriesSelected:Object,forceUpdate:Boolean},mounted:function(){this.update()},watch:{"countriesSelected.populationCases":function(){this.update()},forceUpdate:function(){this.forceUpdate&&this.update()}},methods:{update:function(){this.$chart.generate("chart-population",this.countriesSelected.populationCases,this.$translate.text("Total cases by day"),this.$translate.text("Number of cases"))}},locales:{en:{"Total cases by day":"Total cases by day","Number of cases":"Number of cases"},pt:{"Total cases by day":"Total de casos por dia","Number of cases":"Número de casos"},es:{"Total cases by day":"Total de casos por día","Number of cases":"Numero de casos"},ru:{"Total cases by day":"Всего случаев за день","Number of cases":"Количество дел"}}},D=S,_=Object(C["a"])(D,y,P,!1,null,null,null),w=_.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{attrs:{id:"chart-deaths-population"}})])])}],M={name:"ChartDeathsPopulation",props:{countriesSelected:Object,forceUpdate:Boolean},mounted:function(){this.update()},watch:{"countriesSelected.populationDeaths":function(){this.update()},forceUpdate:function(){this.forceUpdate&&this.update()}},methods:{update:function(){this.$chart.generate("chart-deaths-population",this.countriesSelected.populationDeaths,this.$translate.text("Total deaths by day"),this.$translate.text("Number of deaths"))}},locales:{en:{"Total deaths by day":"Total deaths by day","Number of deaths":"Number of deaths"},pt:{"Total deaths by day":"Total de mortes por dia","Number of deaths":"Número de mortes"},es:{"Total deaths by day":"Total de muertes por día","Number of deaths":"Número de muertes"},ru:{"Total deaths by day":"Всего смертей за день","Number of deaths":"Количество смертей"}}},Y=M,E=Object(C["a"])(Y,I,A,!1,null,null,null),k=E.exports,L=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{attrs:{id:"chart-deaths-population-percentage"}})])])}],T={name:"ChartDeathsPopulationPercentage",props:{countriesSelected:Object,forceUpdate:Boolean},mounted:function(){this.update()},watch:{"countriesSelected.populationPercentageDeaths":function(){this.update()},forceUpdate:function(){this.forceUpdate&&this.update()}},methods:{update:function(){this.$chart.generate("chart-deaths-population-percentage",this.countriesSelected.populationPercentageDeaths,this.$translate.text("Total deaths by percentage population"),this.$translate.text("Percentage of population"))}},locales:{en:{"Total deaths by percentage population":"Total deaths by percentage population","Percentage of population":"Percentage of population"},pt:{"Total deaths by percentage population":"Total de mortes por porcentagem da população","Percentage of population":"Porcentagem da população"},es:{"Total deaths by percentage population":"Total de muertes por porcentaje de población","Percentage of deaths":"Porcentaje de poblacion"},ru:{"Total deaths by percentage population":"Общее количество смертей в процентах населения","Percentage of deaths":"Процент смертей"}}},x=T,U=Object(C["a"])(x,L,N,!1,null,null,null),O=U.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{attrs:{id:"chart-population-percentage"}})])])}],B={name:"ChartCasesPopulationPercentage",props:{countriesSelected:Object,forceUpdate:Boolean},mounted:function(){this.update()},watch:{"countriesSelected.populationPercentageCases":function(){this.update()},forceUpdate:function(){this.forceUpdate&&this.update()}},methods:{update:function(){this.$chart.generate("chart-population-percentage",this.countriesSelected.populationPercentageCases,this.$translate.text("Total cases by percentage population"),this.$translate.text("Percentage of population"))}},locales:{en:{"Total cases by percentage population":"Total cases by percentage population","Percentage of population":"Percentage of population"},pt:{"Total cases by percentage population":"Total de casos por porcentagem da população","Percentage of population":"Percentagem da população"},es:{"Total cases by percentage population":"Total de casos por porcentaje de población","Percentage of population":"Porcentaje de poblacion"},ru:{"Total cases by percentage population":"Всего случаев по процентам населения","Percentage of population":"Процент населения"}}},H=B,V=Object(C["a"])(H,$,z,!1,null,null,null),R=V.exports,F=(a("e40d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"modal"}},[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container"},[a("div",[e._t("header",[a("h5",[e._v(e._s(e.t("COVID-19 PANDEMIC")))]),a("small",[e._v(e._s(e.t("Select your language")))])]),e._t("body",[a("button",{staticClass:"btn btn-light language",attrs:{type:"button"},on:{click:function(t){return e.change("en")}}},[e._v("English")]),a("button",{staticClass:"btn btn-light language",attrs:{type:"button"},on:{click:function(t){return e.change("es")}}},[e._v("Español")]),a("button",{staticClass:"btn btn-light language",attrs:{type:"button"},on:{click:function(t){return e.change("pt")}}},[e._v("Português")]),a("button",{staticClass:"btn btn-light language",attrs:{type:"button"},on:{click:function(t){return e.change("ru")}}},[e._v("Pусский")])])],2)])])])])}),K=[],J={name:"ModalLanguage",props:{lang:String,modal:Boolean,update:Boolean,onSelect:Function},methods:{change:function(e){this.$emit("update:lang",e),this.$emit("update:modal",null),this.$emit("update:update",!0)}},locales:{en:{"COVID-19 PANDEMIC":"COVID-19 PANDEMIC","Select your language":"Select your language"},pt:{"COVID-19 PANDEMIC":"COVID-19 PANDEMIA","Select your language":"Selecione seu idioma"},es:{"COVID-19 PANDEMIC":"COVID-19 PANDEMIA","Select your language":"Elige tu idioma"},ru:{"COVID-19 PANDEMIC":"COVID-19 ПАНДЕМИЯ","Select your language":"Выберите свой язык"}}},Z=J,G=(a("48f1"),Object(C["a"])(Z,F,K,!1,null,null,null)),q=G.exports,Q=a("87d7"),W=a.n(Q),X={name:"App",created:function(){this.language()},computed:{activeLoading:function(){return this.isLoading>0}},watch:{countriesCases:function(){this.populateChartData()},countriesSelected:function(){var e=this;this.timeoutLoadCasesApi&&clearTimeout(this.timeoutLoadCasesApi),this.timeoutLoadCasesApi=setTimeout((function(){e.loadCases(),e.$ga.event("selectedCountries","change","countries",e.countriesSelected)}),100)},lang:function(){this.$translate.setLang(this.lang),this.$cookie.set("lang",this.lang),this.$ga.event("language","change","lang",this.lang),this.fixCountriesName(),this.populateChartData()}},methods:{populateChartData:function(){var e=this;this.casesSeries={populationCases:[],populationPercentageCases:[],populationDeaths:[],populationPercentageDeaths:[]},this.countriesCases.map((function(t){var a=[],n=[],s=[],o=[];t.data.map((function(t,i){var r="".concat(h()(1e3*t[0]).utc().format(e.$translate.text("MM/DD/YYYY")),"<br>").concat(e.$translate.text("day"),": ").concat(i);a.push([r,t[1][0]]),n.push([r,t[2][0]]),s.push([r,t[1][1]]),o.push([r,t[2][1]])}));var i=e.originalCountriesList.find((function(e){return e.countryId===t.countryId})),r=e.countriesSelected.find((function(e){return e.countryId===t.countryId}));e.casesSeries.populationCases.push({color:r.countryColor,name:e.$translate.text(i.countryName),data:a}),e.casesSeries.populationPercentageCases.push({color:r.countryColor,name:e.$translate.text(i.countryName),data:n}),e.casesSeries.populationDeaths.push({color:r.countryColor,name:e.$translate.text(i.countryName),data:s}),e.casesSeries.populationPercentageDeaths.push({color:r.countryColor,name:e.$translate.text(i.countryName),data:o})}))},loadCountries:function(){var e=this;this.isLoading++,this.$api.getCountries((function(t){t.data.data&&(e.originalCountriesList=t.data.data,e.meta=t.data.meta,e.fixCountriesName(),e.loadCases(),e.isLoading--)}),(function(t){console.log(t),e.isLoading--})),this.isLoading++,this.$api.getCountriesTop5((function(t){t.data.data&&(e.countriesSelected=t.data.data,e.fixCountriesName(),e.isLoading--)}),(function(t){console.log(t),e.isLoading--}))},loadCases:function(){var e=this;if(this.countriesSelected.length>0){this.isLoading++;var t=[];this.countriesSelected.map((function(e){e.countryColor=W()().hexString(),t.push(e.countryId)})),this.$api.getCases(t,(function(t){e.countriesCases=t.data.data,e.isLoading--}),(function(t){console.log(t),e.isLoading--}))}},fixCountriesName:function(){var e=this;this.isLoading++,this.countriesList=[],this.countriesList=JSON.parse(JSON.stringify(this.originalCountriesList)),this.countriesList.map((function(t){t.countryName=e.$translate.text(t.countryName)})),this.countriesList.sort((function(e,t){return e.countryName<t.countryName?-1:e.countryName>t.countryName?1:0})),this.countriesSelected.map((function(t){var a=e.countriesList.find((function(e){return e.countryId===t.countryId}));a&&(t.countryName=a.countryName)})),this.isLoading--},language:function(){this.isLoading++,this.haveCookie=!0,this.lang=this.$cookie.get("lang"),this.lang||(this.haveCookie=!1,this.lang="en",this.$cookie.set("lang",this.lang)),this.haveCookie||(this.showModalLang=!0),this.$translate.setLang(this.lang),this.loadCountries(),this.isLoading--}},data:function(){return{version:"1.1.0",originalCountriesList:[],countriesList:[],currentYear:h()().format("YYYY"),meta:null,isLoading:0,showModalLang:!1,lang:null,timeoutLoadCasesApi:null,countriesCases:[],casesSeries:{populationCases:[],populationPercentageCases:[],populationDeaths:[],populationPercentageDeaths:[]},update:!1,countriesSelected:[]}},components:{Loading:r.a,ChartsFilter:j,ChartCasesPopulation:w,ChartCasesPopulationPercentage:R,ChartDeathsPopulation:k,ChartDeathsPopulationPercentage:O,ModalLanguage:q},locales:{en:{"COVID-19 PANDEMIC":"COVID-19 PANDEMIC",day:"day","MM/DD/YYYY":"MM/DD/YYYY","This is a open source project":"This is a open source project","Data source":"Data source","Source code":"Source code",Version:"Version",Belgium:"Belgium",Brazil:"Brazil",Canada:"Canada",China:"China",France:"France",Germany:"Germany",Iran:"Iran",Italy:"Italy",Netherlands:"Netherlands",Portugal:"Portugal",Russia:"Russia",Spain:"Spain",Switzerland:"Switzerland","United Kingdom":"United Kingdom","United States":"United States",Peru:"Peru",India:"India",Chile:"Chile",Mexico:"Mexico","Saudi Arabia":"Saudi Arabia",Turkey:"Turkey",Pakistan:"Pakistan",Bangladesh:"Bangladesh",Qatar:"Qatar",Belarus:"Belarus",Ecuador:"Ecuador",Sweden:"Sweden",Singapore:"Singapore","United Arab Emirates":"United Arab Emirates","South Africa":"South Africa",Colombia:"Colombia",Kuwait:"Kuwait",Indonesia:"Indonesia",Ireland:"Ireland",Poland:"Poland",Ukraine:"Ukraine",Egypt:"Egypt",Romania:"Romania",Philippines:"Philippines",Israel:"Israel","Dominican Republic":"Dominican Republic",Japan:"Japan",Austria:"Austria",Argentina:"Argentina",Afghanistan:"Afghanistan",Panama:"Panama",Bolivia:"Bolivia",Honduras:"Honduras",Haiti:"Haiti"},pt:{"COVID-19 PANDEMIC":"COVID-19 PANDEMIA",day:"dia","MM/DD/YYYY":"DD/MM/YYYY","This is a open source project":"Este é um projeto de código aberto","Data source":"Fonte de dados","Source code":"Código fonte",Version:"Versão",Belgium:"Bélgica",Brazil:"Brasil",Canada:"Canadá",China:"China",France:"França",Germany:"Alemanha",Iran:"Irã",Italy:"Itália",Netherlands:"Holanda",Portugal:"Portugal",Russia:"Rússia",Spain:"Espanha",Switzerland:"Suíça","United Kingdom":"Reino Unido","United States":"Estados Unidos",Peru:"Peru",India:"India",Chile:"Chile",Mexico:"México","Saudi Arabia":"Arábia Saudita",Turkey:"Turquia",Pakistan:"Paquistão",Bangladesh:"Bangladesh",Qatar:"Catar",Belarus:"Bielorrússia",Ecuador:"Equador",Sweden:"Suécia",Singapore:"Cingapura","United Arab Emirates":"Emirados Árabes Unidos","South Africa":"África do Sul",Colombia:"Colômbia",Kuwait:"Kuwait",Indonesia:"Indonésia",Ireland:"Irlanda",Poland:"Polônia",Ukraine:"Ucrânia",Egypt:"Egito",Romania:"Romênia",Philippines:"Filipinas",Israel:"Israel","Dominican Republic":"República Dominicana",Japan:"Japão",Austria:"Áustria",Argentina:"Argentina",Afghanistan:"Afeganistão",Panama:"Panamá",Bolivia:"Bolívia",Honduras:"Honduras",Haiti:"Haiti"},es:{"COVID-19 PANDEMIC":"COVID-19 PANDEMIA",day:"día","MM/DD/YYYY":"DD/MM/YYYY","This is a open source project":"Este es un proyecto de código abierto","Data source":"Fuente de datos","Source code":"Código fuente",Version:"Versión",Belgium:"Bélgica",Brazil:"Brasil",Canada:"Canadá",China:"China",France:"Francia",Germany:"Alemania",Iran:"Irán",Italy:"Italia",Netherlands:"Holanda",Portugal:"Portugal",Russia:"Rusia",Spain:"España",Switzerland:"Suiza","United Kingdom":"Reino Unido","United States":"Estados Unidos",Peru:"Perú",India:"India",Chile:"Chile",Mexico:"Mexico","Saudi Arabia":"Arabia Saudita",Turkey:"Turkey",Pakistan:"Pakistán",Bangladesh:"Bangladesh",Qatar:"Katar",Belarus:"Bielorrusia",Ecuador:"Ecuador",Sweden:"Suecia",Singapore:"Singapur","United Arab Emirates":"Emiratos Árabes Unidos","South Africa":"Sudáfrica",Colombia:"Colombia",Kuwait:"Kuwait",Indonesia:"Indonesia",Ireland:"Irlanda",Poland:"Polonia",Ukraine:"Ucrania",Egypt:"Egipto",Romania:"Rumania",Philippines:"Filipinas",Israel:"Israel","Dominican Republic":"República Dominicana",Japan:"Japón",Austria:"Austria",Argentina:"Argentina",Afghanistan:"Afganistán",Panama:"Panamá",Bolivia:"Bolivia",Honduras:"Honduras",Haiti:"Haití"},ru:{"COVID-19 PANDEMIC":"COVID-19 ПАНДЕМИЯ",day:"день","MM/DD/YYYY":"DD/MM/YYYY","This is a open source project":"Это проект с открытым исходным кодом","Data source":"Источник данных","Source code":"Исходный код",Version:"Версия",Belgium:"Бельгия",Brazil:"Бразилия",Canada:"Канада",China:"Китай",France:"Франция",Germany:"Германия",Iran:"Иран",Italy:"Италия",Netherlands:"Нидерланды",Portugal:"Португалия",Russia:"Россия",Spain:"Испания",Switzerland:"Швейцария","United Kingdom":"объединенное Королевство","United States":"Соединенные Штаты",Peru:"Перу",India:"Индия",Chile:"Чили",Mexico:"Мексика","Saudi Arabia":"Саудовская Аравия",Turkey:"индейка",Pakistan:"Пакистан",Bangladesh:"Бангладеш",Qatar:"Катар",Belarus:"Беларусь",Ecuador:"Эквадор",Sweden:"Швеция",Singapore:"Сингапур","United Arab Emirates":"Объединенные Арабские Эмираты","South Africa":"Южная Африка",Colombia:"Колумбия",Kuwait:"Кувейт",Indonesia:"Индонезия",Ireland:"Ирландия",Poland:"Польша",Ukraine:"Украина",Egypt:"Египет",Romania:"Румыния",Philippines:"Филиппины",Israel:"Израиль","Dominican Republic":"Доминиканская Республика",Japan:"Япония",Austria:"Австрия",Argentina:"Аргентина",Afghanistan:"Афганистан",Panama:"Панама",Bolivia:"Боливия",Honduras:"Honduras",Haiti:"Гаити"}}},ee=X,te=(a("034f"),Object(C["a"])(ee,s,o,!1,null,null,null)),ae=te.exports,ne=a("ed18"),se=a("5f5b"),oe=a("b1e0"),ie=(a("f9e3"),a("2dd8"),a("1a36"),a("b079")),re=a.n(ie),ce=(a("4238"),{vue:null,install:function(e){e.use(re.a),ce.vue=e,e.prototype.$popup={clear:function(){ce.clear()},success:function(e){ce.show(e,"success")},error:function(e){ce.show(e,"error")},info:function(e){ce.show(e,"info")},warning:function(e){ce.show(e,"warning")}}},show:function(e,t){ce.vue.$toast.open({message:e,position:"top-right",duration:4500,type:t})},clear:function(){ce.vue.$toast.clear()}}),le=ce,ue=a("ea7f"),de=a.n(ue),pe={install:function(e){e.prototype.$chart={generate:function(e,t,a,n){de.a.chart(e,{series:t,title:{text:a},yAxis:{title:{text:n}},credits:{text:"covidlast.com",href:"http://covidlast.com"}})}}}},he=pe,fe=a("bc3a"),me=a.n(fe),ge={install:function(e){var t={execute:function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=Object({NODE_ENV:"production",VUE_APP_API_HOST:"api.covidlast.com",VUE_APP_API_PORT:"",VUE_APP_API_SCHEMA:"https",VUE_APP_FRONTEND_GOOGLE_ANALYTICS_TAG:"UA-166792858-1",BASE_URL:"/"}),o=s.VUE_APP_API_SCHEMA,i=s.VUE_APP_API_HOST,r=s.VUE_APP_API_PORT,c="".concat(o,"://").concat(i);r&&(c+=":".concat(r)),c+="/".concat(e),me.a.get(c,{params:n.query||null}).then((function(e){t(e)})).catch((function(e){a(e)}))}};e.prototype.$api={getCountries:function(e,a){t.execute("countries",e,a)},getCountriesTop5:function(e,a){t.execute("countries/top5",e,a)},getCases:function(e,a,n){t.execute("cases",a,n,{query:{country:e}})}}}},be=ge,Ce=a("00e7"),ve=a.n(Ce),je=a("a04f"),ye=a.n(je),Pe=a("0284"),Se=a.n(Pe),De=a("ec02"),_e=a.n(De);Object(ne["config"])({debug:!1}),n["default"].config.productionTip=!1,n["default"].use(Se.a,{id:"UA-166792858-1"}),n["default"].use(ve.a),n["default"].use(ye.a),n["default"].use(se["a"]),n["default"].use(oe["a"]),n["default"].use(le),n["default"].use(he),n["default"].use(be),n["default"].component("vue-headful",_e.a),new n["default"]({render:function(e){return e(ae)}}).$mount("#app")},"85ec":function(e,t,a){},b3df:function(e,t,a){"use strict";var n=a("3950"),s=a.n(n);s.a}});
//# sourceMappingURL=app.a34c2df4.js.map