(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"05f6":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("2fe1")),i=o.__importStar(n("97e5")),s=o.__importStar(n("874e")),l=n("fe0b");let c=class extends a.default{constructor(){super(...arguments),this.key="",this.file=null,this.loading=!1,this.recognizing=!1,this.progress=0,this.status="",this.result=""}async recognize(){if(this.key.trim()&&this.file){this.loading=!0,this.progress=0,this.status=l.i18n.t("uploading");try{const e=await i.recognize("wit",this.key,this.file,t=>{this.progress=t,this.status=`${l.i18n.t("uploading")} (${t}%)`,100===this.progress&&(this.recognizing=!0,this.status=l.i18n.t("recognizing"))});this.result=e.data.text||l.i18n.t("noText")}catch(t){s.setSnackbar({message:t.message,active:!0,color:"error"})}finally{this.loading=!1,this.recognizing=!1}}}};c=o.__decorate([r.default],c),e.default=c},"0670":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("ce5b"));n("bf40"),a.default.use(r.default),e.default=new r.default({icons:{iconfont:"mdi"}})},"06cf":function(t,e,n){"use strict";n.r(e);var o=n("ddf5"),a=n("70ef");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"0ac6":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",[n("p",{staticClass:"text-center",domProps:{innerHTML:t._s(t.$t("premise"))}}),n("p",{staticClass:"text-center",domProps:{innerHTML:t._s(t.$t("recognition.headline"))}})])],1),n("v-row",[n("v-col",[n("v-tabs",{attrs:{centered:"",grow:""},model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}},[n("v-tab",[t._v("Wit")]),n("v-tab",[t._v("Google Speech")]),n("v-tab-item",{attrs:{value:0}},[n("Wit")],1),n("v-tab-item",{attrs:{value:1}},[n("GoogleSpeech")],1)],1)],1)],1)],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"0d40":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-4"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"text-center"},[n("div",{staticClass:"body-1",domProps:{innerHTML:t._s(t.$t("headline"))}})])],1),n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"text-center"},[n("v-btn",{attrs:{large:"",color:"primary",target:"_blank",href:"https://t.me/voicybot"}},[t._v(t._s(t.$t("add")))])],1)],1),n("Recognition"),n("div",{staticClass:"caption text-center",domProps:{innerHTML:t._s(t.$t("footer"))}}),n("div",{staticClass:"caption text-center",domProps:{innerHTML:t._s(t.$t("author"))}})],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"132b":function(t,e,n){"use strict";n.r(e);var o=n("75cd"),a=n("9b7a");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"20b4":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("2fe1")),i=o.__importStar(n("97e5")),s=o.__importStar(n("874e")),l=n("fe0b");let c=class extends a.default{constructor(){super(...arguments),this.key=null,this.file=null,this.loading=!1,this.recognizing=!1,this.progress=0,this.status="",this.result=""}async recognize(){if(this.key&&this.file){this.loading=!0,this.progress=0,this.status=l.i18n.t("uploading");try{const e=await i.recognize("google",this.key,this.file,t=>{this.progress=t,this.status=`${l.i18n.t("uploading")} (${t}%)`,100===this.progress&&(this.recognizing=!0,this.status=l.i18n.t("recognizing"))});this.result=e.data.text||l.i18n.t("noText")}catch(t){s.setSnackbar({message:t.message,active:!0,color:"error"})}finally{this.loading=!1,this.recognizing=!1}}}};c=o.__decorate([r.default],c),e.default=c},"22b2":function(t,e,n){"use strict";n.r(e);var o=n("c8b7"),a=n("6a01");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"3d48":function(t,e,n){"use strict";n.r(e);var o=n("7402"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"3dfd":function(t,e,n){"use strict";n.r(e);var o=n("54ac"),a=n("6f68");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"46cd":function(t,e,n){"use strict";n.r(e);var o=n("e5f4"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},4720:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("2fe1"));let i=class extends a.default{};i=o.__decorate([r.default],i),e.default=i},"54ac":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Navbar"),n("Snackbar"),n("v-content",[n("router-view")],1)],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"5b65":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("22b2")),r=o.__importDefault(n("d178"));e.default={components:{Navbar:r.default,Snackbar:a.default}}},6031:function(t,e,n){"use strict";n.r(e);var o=n("0ac6"),a=n("9603");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"6a01":function(t,e,n){"use strict";n.r(e);var o=n("cd00"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"6f68":function(t,e,n){"use strict";n.r(e);var o=n("5b65"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"70ef":function(t,e,n){"use strict";n.r(e);var o=n("20b4"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"72aa":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.messages={ru:{title:"Войси",notFound:"Страница не найдена",close:"Закрыть",headline:'Вы уже знаете, что за зверь — <a target="_blank" href="https://t.me/voicybot">@voicybot</a>. Если его добавить в групповой чат, он автоматически переводит все голосовые сообщения в текст. Вот и все.',add:"Добавить в Телеграм",premise:'Если вы ищите статистику проекта, то она добступна на <a target="_blank" href="https://borodutch.com">borodutch.com</a>',errors:{internal:"Внутренняя ошибка сервера"},recognition:{headline:'К сожалению, Телеграм разрешает ботам качать только файлы менее 20 мегабайт, что ограничивает пользу Войси. Поэтому я потратил пару часов и добавил на этот сайт встроенное распознование речи из файлов. Все абсолютно бесплатно, никакие данные не сохраняются у меня на сервере, а код опубликован в <a target="_blank" href="https://github.com/backmeupplz/voicy-landing">открытом доступе</a>. Пользуйтесь на здоровье.',wit:{headline:'<a target="_blank" href="https://wi.ai">Wit.ai</a> — это бесплатный движок распознавания речи. Обычно он поддерживает лишь аудио-записи длинной менее 10 секунд, но Войси автоматически разделяет ваш аудио-файл на отрезки длинной в 10 секунд и распознает их раздельно. Поэтому вы можете наблюдать странные артефакты в районе промежутков между 10-ти секундными интервалами. Пожалуйста, введите ключ от вашего Wit приложения ниже. Можете ознакомиться с <a target="_blank" href="https://medium.com/@nikitakolmogorov/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D1%8E%D1%87%D0%B0-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-wit-%D0%B4%D0%BB%D1%8F-voicybot-com-7c3791dcea26">инструкцией</a>, как получить ключ.',key:"Ключ Wit приложения"},keyHint:"Мы не храним ваши ключи",file:"Файл для распознавания",fileHint:"Мы не храним ваши файлы",gs:{headline:'<a target="_blank" href="https://cloud.google.com/speech-to-text/">Google Speech</a> — это более продвинутый движок распознавания речи. После того, как Войси получает ваш файл, он загружает его в  Google Cloud Storage, распознает при помощи Google Speech, а после удаляет файл с Google Cloud Storage. Пожалуйста, предоставьте ваши ключи от Google Cloud ниже. Можете ознакомиться с <a target="_blank" href="https://medium.com/@nikitakolmogorov/%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%B9-google-speech-%D0%B4%D0%BB%D1%8F-voicybot-com-8d05f2f5c425">инструкцией</a>, как получить ключи. Пожалуйста, учтите, что Google Speech не бесплатный, Google будет снимать с вас деньги, как указано в их <a target="_blank" href="https://cloud.google.com/speech-to-text/pricing">справке</a>.',key:"Ключи Google Cloud"},recognize:"Распознать"},uploading:"Загрузка фаила на сервер Войси",noText:"Похоже, Войси не смог распознать текст в этом файле.",recognizing:"Распознавание речи...",result:"Результат:",footer:'Проблемы с этим сайтом? Ищите помощь на <a target="_blank" href="https://t.me/borodutch_support">нашем канале поддержки</a>. Удачи!',author:'Сделано <a target="_blank" href="https://borodutch.com">@borodutch</a> с ❤️'},en:{title:"Voicy",notFound:"Page not found",close:"Close",headline:'You know what <a target="_blank" href="https://t.me/voicybot">@voicybot</a> is. When added to any group chat, it automatically converts all the audio messages to text. That\'s it.',add:"Add to Telegram",premise:'If you\'re looking for the project stats, it\'s available at <a target="_blank" href="https://borodutch.com">borodutch.com</a>',errors:{internal:"Internal server error"},recognition:{headline:'Unfortunately, Telegram doesn\'t allow bots to download files over 20 megabytes. Because of this limit, I\'ve spent a couple of hours an implemented voice recognition on this webpage. It\'s absolutely free, no data is stored on my servers, and code is completely <a target="_blank" href="https://github.com/backmeupplz/voicy-landing">open source</a>. Enjoy.',wit:{headline:'<a target="_blank" href="https://wi.ai">Wit.ai</a> is a free voice recognition engine. It usually only supports voice messages up to 10 seconds long, but Voicy automatically splits your recordings into 10 seconds intervals and recognizes them separately. Hence you can experience weird artifacts inbetween the 10 second intervals. Please, provide your Wit app key in the form below. Here\'s <a target="_blank" href="https://medium.com/@nikitakolmogorov/getting-wit-app-key-for-voicybot-com-7c150672070b?postPublishedType=initial">an instruction</a> on how to obtain one.',key:"Wit app key"},file:"File to recognize",fileHint:"We do not store your files",keyHint:"We do not store your keys",gs:{headline:'<a target="_blank" href="https://cloud.google.com/speech-to-text/">Google Speech</a> is a more advanced voice recognition engine. After Voicy obtains your file, it uploads the file to the Google Cloud Storage, then recognizes it with Google Speech, then deletes the file from the Google Cloud Storage. Please, provide your Google Cloud credentials below. Here\'s <a target="_blank" href="https://medium.com/@nikitakolmogorov/getting-google-speech-credentials-for-voicybot-com-e389e4a4059d">an instruction</a> on how to obtain them. Please, note, that Google Speech is not free, Google will charge you as outlined in their <a target="_blank" href="https://cloud.google.com/speech-to-text/pricing">reference</a>.',key:"Google Cloud credentials"},recognize:"Recognize"},uploading:"Uploading the file to the Voicy server",noText:"Looks like Voicy was not able to recognize speech in this file.",recognizing:"Speech recognition...",result:"Result:",footer:'Having issues with this website? Find help on <a target="_blank" href="https://t.me/borodutch_support">our support channel</a>. Cheers!',author:'Made by <a target="_blank" href="https://borodutch.com">@borodutch</a> with ❤️'}}},7402:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("2fe1")),i=o.__importDefault(n("6031"));let s=class extends a.default{};s=o.__decorate([r.default({components:{Recognition:i.default}})],s),e.default=s},"75cd":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("span",{domProps:{innerHTML:t._s(t.$t("recognition.wit.headline"))}}),n("v-text-field",{attrs:{"prepend-icon":"vpn_key",label:t.$t("recognition.wit.key"),"persistent-hint":"",hint:t.$t("recognition.keyHint"),loading:t.loading,disabled:t.loading},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}}),n("v-file-input",{attrs:{disabled:!t.key||t.loading,"show-size":"",label:t.$t("recognition.file"),"persistent-hint":"",hint:t.$t("recognition.fileHint"),loading:t.loading},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),n("v-card-actions",[t.loading?n("v-progress-linear",{staticClass:"mx-3",attrs:{value:t.progress,height:"25",stream:"",color:"blue lighten-3",indeterminate:t.recognizing}},[t._v(t._s(t.status))]):t._e(),n("v-spacer"),n("v-btn",{attrs:{disabled:!t.key||!t.file||t.loading,large:"",color:"primary",loading:t.loading},on:{click:t.recognize}},[t._v(t._s(t.$t("recognition.recognize")))])],1)],1),t.result?n("div",[n("v-divider"),n("blockquote",{staticClass:"blockquote"},[t._v(t._s(t.result))])],1):t._e()],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"874e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("2f62"));a.default.use(r.default);const i={state:{snackbar:{message:"",active:!1,color:"success"},language:void 0},mutations:{setSnackbar(t,e){t.snackbar=e},setLanguage(t,e){t.language=e}},getters:{snackbar:t=>t.snackbar,language:t=>t.language}};e.store=new r.default.Store(i);const s=e.store.getters;e.snackbar=()=>s.snackbar,e.language=()=>s.language,e.setSnackbar=t=>{e.store.commit("setSnackbar",t)},e.hideSnackbar=()=>{e.store.commit("setSnackbar",Object.assign({},e.store.state.snackbar,{active:!1}))},e.setLanguage=t=>{e.store.commit("setLanguage",t)}},9603:function(t,e,n){"use strict";n.r(e);var o=n("c901"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},9703:function(t,e,n){"use strict";n.r(e);var o=n("d623"),a=n("ed6f");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},"97e5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("bc3a")),r="https://recognition.voicybot.com";async function i(t,e,n,o){const i=new FormData;return i.append("key",e),i.append("file",n),a.default.post(`${r}/recognize/${t}`,i,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:t=>{o(Math.round(100*t.loaded/t.total))}})}e.recognize=i},"9b7a":function(t,e,n){"use strict";n.r(e);var o=n("05f6"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},b909:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("8c4f")),i=o.__importDefault(n("bb51")),s=o.__importDefault(n("9703"));a.default.use(r.default);const l=new r.default({mode:"history",routes:[{path:"/",name:"home",component:i.default},{path:"*",name:"notFound",component:s.default}]});e.default=l},bb51:function(t,e,n){"use strict";n.r(e);var o=n("0d40"),a=n("3d48");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},c8b7:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{app:"",timeout:4e3,top:"",color:t.color,flat:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("span",[t._v(t._s(t.text))]),n("v-btn",{attrs:{color:"white",text:""},on:{click:function(e){t.active=!1}}},[t._v(t._s(t.$t("close")))])],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},c901:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("2fe1")),i=o.__importDefault(n("132b")),s=o.__importDefault(n("06cf"));let l=class extends a.default{constructor(){super(...arguments),this.currentTab=0}};l=o.__decorate([r.default({components:{Wit:i.default,GoogleSpeech:s.default}})],l),e.default=l},cd00:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("2fe1")),i=n("fe0b"),s=o.__importStar(n("874e"));let l=class extends a.default{get active(){return s.snackbar().active}set active(t){s.hideSnackbar()}get color(){return s.snackbar().color}get text(){const t=s.snackbar().message;return"string"===typeof t?"Internal Server Error"===t?i.i18n.t("errors.internal"):i.i18n.t(s.snackbar().message.toString()):t[i.i18n.locale]}};l=o.__decorate([r.default],l),e.default=l},cd49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("3dfd")),i=o.__importDefault(n("b909")),s=n("874e"),l=n("fe0b"),c=o.__importDefault(n("0670"));a.default.config.productionTip=!0,new a.default({router:i.default,store:s.store,i18n:l.i18n,vuetify:c.default,render:t=>t(r.default)}).$mount("#app")},d178:function(t,e,n){"use strict";n.r(e);var o=n("e6fb"),a=n("46cd");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var i=n("2877"),s=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=s.exports},d623:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"v-container pa-4"},[n("v-layout",{staticClass:"text-xs-center",attrs:{column:"","justify-center":"","align-center":""}},[n("v-flex",{attrs:{xs12:"",md10:""}},[n("div",{staticClass:"headline pb-4"},[n("span",[t._v(t._s(t.$t("notFound")))])])])],1)],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},ddf5:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("span",{domProps:{innerHTML:t._s(t.$t("recognition.gs.headline"))}}),n("v-file-input",{attrs:{"prepend-icon":"vpn_key",label:t.$t("recognition.gs.key"),"persistent-hint":"",hint:t.$t("recognition.keyHint"),loading:t.loading,disabled:t.loading},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}}),n("v-file-input",{attrs:{disabled:!t.key||t.loading,"show-size":"",label:t.$t("recognition.file"),"persistent-hint":"",hint:t.$t("recognition.fileHint"),loading:t.loading},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),n("v-card-actions",[t.loading?n("v-progress-linear",{staticClass:"mx-3",attrs:{value:t.progress,height:"25",stream:"",color:"blue lighten-3",indeterminate:t.recognizing}},[t._v(t._s(t.status))]):t._e(),n("v-spacer"),n("v-btn",{attrs:{disabled:!t.key||!t.file||t.loading,large:"",color:"primary",loading:t.loading},on:{click:t.recognize}},[t._v(t._s(t.$t("recognition.recognize")))])],1)],1),t.result?n("div",[n("v-divider"),n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("div",{staticClass:"title"},[t._v(t._s(t.$t("result")))]),n("blockquote",{staticClass:"blockquote"},[t._v(t._s(t.result))])])],1)],1):t._e()],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},e5f4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("2fe1")),i=o.__importStar(n("874e")),s=n("fe0b");let l=class extends a.default{get locales(){return[{icon:"🇺🇸",code:"en"},{icon:"🇷🇺",code:"ru"}]}get currentLocale(){for(const t of this.locales)if(t.code===s.i18n.locale)return t}changeLanguage(t){s.i18n.locale=t,i.setLanguage(t),document.title=s.i18n.t("title")}};l=o.__decorate([r.default],l),e.default=l},e6fb:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{flat:"",app:""}},[n("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[n("span",[t._v(t._s(t.$t("title")))])]),n("v-spacer"),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("v-btn",t._g({attrs:{text:"",icon:"",color:"grey"}},o),[t._v(t._s(t.currentLocale.icon))])]}}])},[n("v-list",t._l(t.locales,function(e){return n("v-list-item",{key:e.code,on:{click:function(n){return t.changeLanguage(e.code)}}},[n("v-list-item-title",[t._v(t._s(e.icon))])],1)}),1)],1)],1)],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},ed6f:function(t,e,n){"use strict";n.r(e);var o=n("4720"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},fe0b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const o=n("9ab4"),a=o.__importDefault(n("2b0e")),r=o.__importDefault(n("a925")),i=n("72aa"),s=o.__importStar(n("874e"));function l(){if(s.language())return s.language();{const t=(navigator.languages&&navigator.languages.length?navigator.languages[0]:navigator.userLanguage||navigator.language||navigator.browserLanguage||"en").substr(0,2),e=["en","ru"];return e.indexOf(t)>-1?t:"en"}}a.default.use(r.default),e.i18n=new r.default({locale:l(),messages:i.messages})}});
//# sourceMappingURL=app.535e0bd3.js.map