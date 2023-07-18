var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(n){for(var t,r,i=1,u=arguments.length;i<u;i++){t=arguments[i];for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(n,t,i,r){function u(n){return n instanceof i?n:new i(function(t){t(n)})}return new(i||(i=Promise))(function(i,f){function o(n){try{e(r.next(n))}catch(t){f(t)}}function s(n){try{e(r["throw"](n))}catch(t){f(t)}}function e(n){n.done?i(n.value):u(n.value).then(o,s)}e((r=r.apply(n,t||[])).next())})},__generator=this&&this.__generator||function(n,t){function o(n){return function(t){return s([n,t])}}function s(o){if(e)throw new TypeError("Generator is already executing.");while(f&&(f=0,o[0]&&(r=0)),r)try{if(e=1,u&&(i=o[0]&2?u["return"]:o[0]?u["throw"]||((i=u["return"])&&i.call(u),0):u.next)&&!(i=i.call(u,o[1])).done)return i;(u=0,i)&&(o=[o[0]&2,i.value]);switch(o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++;u=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(o[0]===6&&r.label<i[1]){r.label=i[1];i=o;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(o);break}i[2]&&r.ops.pop();r.trys.pop();continue}o=t.call(n,r)}catch(s){o=[6,s];u=0}finally{e=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,u,i,f;return f={next:o(0),"throw":o(1),"return":o(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f},HttpRequestTypes,DataService;(function(n){n.GET="GET";n.POST="POST";n.PUT="PUT";n.DELETE="DELETE"})(HttpRequestTypes||(HttpRequestTypes={}));DataService=function(){function n(){this.defaultTimeout=1e4}return n.prototype.get=function(n){return new Promise(function(t,i){fetch(n).then(function(n){return n.json()}).then(function(n){return t(n)})["catch"](function(n){return i(n)})})},n.prototype.post=function(n,t,i){var u=this,r;return i===void 0&&(i=this.defaultTimeout),r=__assign(__assign({},this.getRequestPayload(HttpRequestTypes.POST)),{body:JSON.stringify(t)}),new Promise(function(t,f){return __awaiter(u,void 0,void 0,function(){var e,u;return __generator(this,function(o){switch(o.label){case 0:return(o.trys.push([0,4,,5]),!!window.navigator.onLine)?[3,1]:(f(OUTPUT.NETWORK_OFFLINE),[3,3]);case 1:return[4,this.fetchWithTimeout(n,r,i)];case 2:e=o.sent();t(e);o.label=3;case 3:return[3,5];case 4:return u=o.sent(),u.message===OUTPUT.TIMEOUT?f(OUTPUT.TIMEOUT):u.message===OUTPUT.NETWORK_OFFLINE?f(OUTPUT.NETWORK_OFFLINE):f(u),[3,5];case 5:return[2]}})})})},n.prototype.getRequestPayload=function(n){return{method:n,headers:{"Content-type":"application/json; charset=UTF-8"}}},n.prototype.fetchWithTimeout=function(n,t,i){return __awaiter(this,void 0,void 0,function(){var r,u,f,e;return __generator(this,function(o){switch(o.label){case 0:r=new AbortController;u=setTimeout(function(){return r.abort()},i);o.label=1;case 1:return o.trys.push([1,3,,4]),[4,fetch(n,__assign(__assign({},t),{signal:r.signal}))];case 2:return f=o.sent(),clearTimeout(u),[2,f];case 3:if(e=o.sent(),clearTimeout(u),e.name==="AbortError")throw new Error(OUTPUT.TIMEOUT);else throw new Error(OUTPUT.NETWORK_OFFLINE);return[3,4];case 4:return[2]}})})},n}()