(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[68648],{622400:(e,t,n)=>{n.d(t,{e:()=>o,v:()=>s});var r=n(441143),i=n.n(r);class a{constructor(e,t){i()(e,"You must pass a requestContext to check an Experiment"),i()(t,"You must pass the name of the experiment to check"),this.requestContext=e,this.experimentName=t.toLowerCase()}_getGroup(e){return e?this.requestContext.experiments.v2ActivateExperiment(this.experimentName)||"":this.requestContext.experiments.v2GetGroup(this.experimentName)||""}}class o extends a{getGroup(e=!1){return this._getGroup(e)}}class s extends a{_isTreatment(e){return e.startsWith("enabled")||e.startsWith("employee")}enabled(){return this._isTreatment(this._getGroup(!0))}enabledWithNoActivation(){return this._isTreatment(this._getGroup(!1))}}},661966:(e,t,n)=>{n.d(t,{fm:()=>r,q6:()=>i,kM:()=>a,MZ:()=>I,vJ:()=>A,qp:()=>p,GY:()=>O,Vn:()=>S,Dl:()=>R,uV:()=>D,$N:()=>N});const r={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",RESOURCES:"RESOURCES"},i={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},a={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",DOCUMENTS:"DOCUMENTS"},o="Shopify",s="WordPress",u="WooCommerce",l="Weebly",c="Tealium",_="Magento",d="Squarespace",T="Ecwid",E="Bigcommerce",I={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce"},A={["Google Tag Manager"]:I.GOOGLE_TAG_MANAGER,[o]:I.SHOPIFY,[u]:I.WOO_COMMERCE,[s]:I.WORDPRESS,[d]:I.SQUARESPACE,[l]:I.WEEBLY,[c]:I.TEALIUM,[_]:I.MAGENTO,[T]:I.ECWID,[E]:I.BIG_COMMERCE},p={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_EVENTS:"PINTEREST_TAG_EVENTS",PINTEREST_TAG_HISTORY:"PINTEREST_TAG_HISTORY",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD"},O={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",PINTEREST_TAG_HISTORY:"PINTEREST_TAG_HISTORY",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},S={UNREAD:"UNREAD",READ:"READ",ACCEPTED:"ACCEPTED",REJECTED:"REJECTED",DISMISSED:"DISMISSED",INVALID:"INVALID",MUTED:"MUTED",SNOOZED:"SNOOZED",PMP_REPORTED:"PMP_REPORTED",EMAILED:"EMAILED",BULK_DOWNLOADED:"BULK_DOWNLOADED",FILTERED:"FILTERED",PUSHED:"PUSHED"},R={ATTRIBUTION_DESTINATION:"attributiondestination",ATTRIBUTION_EXPIRY:"attributionexpiry",ATTRIBUTION_REPORT_TO:"attributionreportto",ATTRIBUTION_SOURCE_EVENT_ID:"attributionsourceeventid"},D=2592e6,N={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"}},958795:(e,t,n)=>{n.d(t,{v:()=>d,h:()=>T});var r=n(484898),i=n(439887),a=n(844870),o=n(702925),s=n(622400),u=n(580849),l=n(549135),c=n(661966),_=n(215828);const d=({href:e,pinId:t,pin:n,location:a,auxData:d})=>{if(n&&n.is_promoted){const p=(0,i.Z)(n,a),O=(0,_.nS)({url:e,pinId:t,csrId:null,clientTrackingParams:p,auxData:d});if(r.Z.isSafari()){var T;const r=u.K.fromGlobalContext(),i=new s.e(r,"m10n_event_conversion_measurement");let a=null!==(T=r.userAgent)&&void 0!==T&&T.browserVersion?r.userAgent.browserVersion:"0.0";var E;if(a=parseFloat(a.split(".")[0]+"."+a.split(".")[1]),void 0!==n.campaign_id&&a>=14.1&&["enabled_safari"].includes(i.getGroup(!0)))return((e,t,n)=>{const r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(c.$N.ATTRIBUTION_SOURCE_ID,""+e%256),r.setAttribute(c.$N.ATTRIBUTE_DESTINATION,n),r.setAttribute(c.$N.ATTRIBUTE_ON,n),r.click()})(null!==(E=n.campaign_id)&&void 0!==E?E:0,O,e),(0,l.j)(101,{clientTrackingParams:p,objectId:t||"",pin_id:t||"",click_measurement_ppid:n.pin_promotion_id||"",click_measurement_campaign_id:n.campaign_id||"",is_pcm:!0,page_url:e}),!0}else if(r.Z.isChrome()){var I;const r=u.K.fromGlobalContext(),i=new s.e(r,"m10n_event_conversion_measurement_cr"),a=null!==(I=r.userAgent)&&void 0!==I&&I.browserVersion?parseInt(r.userAgent.browserVersion.split(".")[0],10):0;var A;if(void 0!==n.pin_promotion_id&&a>86&&["enabled"].includes(i.getGroup(!0)))return((e,t,n)=>{const r=document.createElement("a");r.setAttribute("href",t),r.setAttribute("target","_blank"),r.setAttribute("rel","noopener nofollow noreferrer"),r.style.cursor="pointer",r.style.display="block",r.setAttribute(c.Dl.ATTRIBUTION_SOURCE_EVENT_ID,""+e),r.setAttribute(c.Dl.ATTRIBUTION_DESTINATION,n),r.setAttribute(c.Dl.ATTRIBUTION_EXPIRY,""+c.uV),r.setAttribute(c.Dl.ATTRIBUTION_REPORT_TO,o.Z.settings.CANONICAL_MAIN_URL),r.click()})(null!==(A=n.pin_promotion_id)&&void 0!==A?A:-1,O,e),(0,l.j)(101,{clientTrackingParams:p,objectId:t||"",pin_id:t||"",click_measurement_ppid:n.pin_promotion_id||"",click_measurement_campaign_id:n.campaign_id||"",is_ecm:!0,page_url:e}),!0}}return!1},T=({href:e,pinId:t,pin:n,location:r,auxData:o})=>{if("undefined"!=typeof window&&window.Windows)(0,a.Z)({url:e,pinId:t,pin:n,location:r,auxData:o});else{if(d({href:e,pinId:t,pin:n,location:r,auxData:o}))return;(0,_.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:(0,i.Z)(n,r),auxData:o})}}},515528:(e,t,n)=>{n.d(t,{ZF:()=>r,Wv:()=>i,zI:()=>a,UP:()=>o});const r=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],i=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","STLProductsFeed","RelatedProductsFeed","ShoppingSquareGridRelatedProducts","UserProfilePinGrid"],a=[...i,"ShoppingSquareGridRelatedProductsBoth","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ShoppingSquareGridRelatedProductsMetadata","ProductPinsFeed","ShoppingSquareGridCrop","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid"],o=["BaseBoardPinGrid"]},844870:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(439887),i=n(831251),a=n(215828);function o({url:e,pinId:t,pin:n,location:o,auxData:s}){const u={check_only:!0,client_tracking_params:n?(0,r.Z)(n,o):void 0,pin_id:n?n.id:t,url:e,aux_data:JSON.stringify(s)};(0,i.Z)(u).callGet().then((i=>{if(i&&i.resource_response&&!i.resource_response.error){const{resource_response:e}=i,{redirect_status:t,url:n}=e.data;if(!["blocked","suspicious","porn"].includes(t)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){const e=new window.Windows.Foundation.Uri(n);window.Windows.System.Launcher.launchUriAsync(e)}return}}if(n){const i=(0,r.Z)(n,o);(0,a.Gj)({url:e,pinId:t,csrId:null,clientTrackingParams:i,auxData:s})}else(0,a.Gj)({url:e,pinId:t})}))}},805803:(e,t,n)=>{n.d(t,{l:()=>a,Y:()=>i});var r=n(584489);const i=e=>r.Z.instance.dispatch(function(e){return{type:"SPAMMY_CLICKTHROUGH_WARNING_SHOW",payload:e}}(e)),a=()=>r.Z.instance.dispatch({type:"SPAMMY_CLICKTHROUGH_WARNING_DISMISS"})},215828:(e,t,n)=>{n.d(t,{nS:()=>N,iw:()=>m,gV:()=>R,G3:()=>C,lI:()=>h,Gj:()=>P,Jd:()=>S,$3:()=>D});var r=n(85038),i=n(799881),a=n(439887),o=n(350100);const s=e=>"string"!=typeof e&&e?e.state:null;var u=n(238402),l=n(714762),c=n(195693),_=n(831251),d=n(844870),T=n(141618),E=n(805803),I=n(958795),A=n(784655),p=n(858875),O=n(515528);const S=()=>{window&&window.focus(),document.activeElement&&document.activeElement.blur()},R=({isOffsiteUrl:e,event:t})=>!e&&(t.metaKey||t.ctrlKey),D=({location:e,pin:t,surface:n})=>!(0,A.jL)(t)&&(({location:e,pinId:t,surface:n})=>{const r=Boolean(n),i=O.ZF.includes(n),a=e.pathname.includes(t);return r&&!i||a})({location:e,pinId:t.id,surface:n}),N=e=>{const t=Math.round(1e3*Math.random())+"",n=Math.round(1e3*Math.random())+"";r.t8((0,p.GS)(t),n);const i=`${t}-${n}`,{queryParams:a,url:o}=e;let s={token:i,url:o};if(!a){const{pinId:t,csrId:n,clientTrackingParams:r,auxData:i}=e;s={...s,pin:null!=t?t:void 0,csr:n&&!t?n:void 0,client_tracking_params:r,aux_data:i?JSON.stringify(i):void 0}}a&&(s={...s,...a});return`/offsite/?${(0,u.Z)(s)}`},P=e=>{(0,i.Z)(N(e),!0)},m=async({isMounted:e,pin:t,location:n,spamCheckCallback:r,href:i})=>{const o=await(0,_.Z)({check_only:!0,client_tracking_params:(0,a.Z)(t,n),pin_id:null==t?void 0:t.id,url:i}).callGet({showError:!1});if(!o.resource_response.error&&e){const e=o.resource_response.data||{},{message:t,redirect_status:n,url:i}=e;r({blocked:["blocked","suspicious","porn"].includes(n),message:t,redirectStatus:n,sanitized_url:i})}},C=({event:e,onHistoryChange:t,href:n,history:r,target:a})=>{const u=(0,o.Z)(n),_=s(n),d=(0,l.Z)(u);d===T.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===a?(0,i.Z)(u,"blank"===a):r&&d===T.Z.SAME_ORIGIN&&(r.push((0,c.Z)({url:u}),null!=_?_:{}),t&&t({event:e}))},h=({href:e,pinId:t,pin:n,location:r,auxData:i,spamCheck:o,queryParams:s})=>{"undefined"!=typeof window&&window.Windows?(0,d.Z)({url:e,pinId:t,pin:n,location:r,auxData:i}):n?(({spamCheck:e,auxData:t,location:n,pin:r,pinId:i,href:o})=>{if(null!=e&&e.blocked)(0,E.Y)(e);else{if((0,I.v)({href:o,pinId:i,pin:r,location:n,auxData:t}))return;P({url:o,pinId:i,csrId:null,clientTrackingParams:(0,a.Z)(r,n),auxData:t})}})({spamCheck:o,auxData:i,location:r,pin:n,pinId:t,href:e}):P({url:e,pinId:t,queryParams:s})}},831251:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(311866);function i(e){return r.ZP.create("ApiResource",{url:"/v3/offsite/",data:e})}},268648:(e,t,n)=>{n.d(t,{Z:()=>s,p:()=>u});var r=n(667294),i=n(539484),a=n(215828),o=n(855168);function s(e){const{externalData:t,href:n,onHistoryChange:s,target:u}=e,[l,c]=(0,r.useState)(null),[_,d]=(0,r.useState)(!1),T=(0,o.k6)(),E=(0,o.TH)(),I=(0,i.Z)({url:n});return(0,r.useEffect)((()=>(d(!0),()=>{d(!1)})),[]),(0,r.useEffect)((()=>{I&&null!=t&&t.pin&&null===l&&(0,a.$3)({location:E,pin:t.pin,surface:t.surface})&&(0,a.iw)({isMounted:_,pin:t.pin,location:E,spamCheckCallback:e=>c(e),href:n})}),[t,n,I,_,E,l]),({event:e})=>{var r;(0,a.gV)({isOffsiteUrl:I,event:e})||(e.preventDefault(),n&&(I||null!=t&&t.dangerouslyForceOffsiteUrl?(0,a.lI)({auxData:null==t?void 0:t.auxData,href:n,pinId:null==t||null===(r=t.pin)||void 0===r?void 0:r.id,pin:null==t?void 0:t.pin,queryParams:null==t?void 0:t.queryParams,location:E,spamCheck:l}):(0,a.G3)({event:e,href:n,history:T,onHistoryChange:s,target:"blank"===u?"blank":null})))}}const u=({children:e,...t})=>e({handleClick:s(t)})},350100:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},539484:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(508841);const i=({url:e})=>!(!e||!e.match(/^https{0,1}:\/\//)||(0,r.Z)(e))},195693:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(296882);const i=(e,t)=>0===e.lastIndexOf(t,0),a=({url:e})=>{const t=(0,r.Z)("/");return i(e,t)?e.substr(t.length-1):e}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/68648-3dc15220d6b135a0.mjs.map