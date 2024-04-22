import{C as w,s as N,b as I,a as O,t as _,v as p,w as j,j as n,W as L,h as m}from"./index.ddc19423.js";import{CustomInput as x}from"./custom-input.component.99cb940e.js";import{_ as D}from"./blog.styles.63ecf20d.js";import{_ as F}from"./checkout.styles.c5c33824.js";const k=w`
	padding-right: 20vw;
`,A=w`
	${k};
	text-transform: capitalize;
	font-family: nunitoLight;
	font-weight: 600;
	margin-bottom: 2rem;
`,U=N.div`
	${I};
	background-color: ${({theme:r})=>r.$lessBrightColor};
	height: max-content;
	min-height: 100vh;
	color: ${({theme:r})=>r.$darkAccentColor};
	${O};

	.contact-map-area {
		${D};
		cursor: zoom-in;
	}

	.contact-details-area {
		${I};
		height: max-content;
		padding: 5rem 2rem;

		.contact-heading {
			${A};
			font-size: 1.5rem;
		}

		.contact-text {
			${k};
			font-family: nunitoLight;
			line-height: 1rem;
			margin-bottom: 3rem;
		}

		.contact-sub-heading {
			${A};
			font-size: 1.2rem;
		}

		.contact-form {
			${F}
			${I};
			padding-right: 3rem;
			height: max-content;
			font-size: 0.8rem;

			input[type="submit"] {
				align-self: flex-start;
				width: max-content;
				padding: 0 2rem;
				border-radius: unset;
				background-color: ${({theme:r})=>r.$darkAccentColor};
				color: ${({theme:r})=>r.$lessBrightColor};
				cursor: pointer;
				outline: none;
				border: none;
			}

			textarea {
				width: 25rem;
				height: 5rem;
				outline: none;
				border: unset;
				padding: 0.5rem 1rem;
				color: ${({theme:r})=>r.$whiteBGInputTextColor};
				margin-bottom: 3rem;

				&::placeholder {
					text-transform: capitalize;
					font-family: nunitoLight;
					color: ${({theme:r})=>r.$singleProductMainTextColor};
				}
			}
		}
	}
`;var g={exports:{}},M=function r(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var i,s,l;if(Array.isArray(t)){if(i=t.length,i!=e.length)return!1;for(s=i;s--!==0;)if(!r(t[s],e[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(l=Object.keys(t),i=l.length,i!==Object.keys(e).length)return!1;for(s=i;s--!==0;)if(!Object.prototype.hasOwnProperty.call(e,l[s]))return!1;for(s=i;s--!==0;){var o=l[s];if(!r(t[o],e[o]))return!1}return!0}return t!==t&&e!==e};const E="__googleMapsScriptId";var h;(function(r){r[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE"})(h||(h={}));class c{constructor({apiKey:t,authReferrerPolicy:e,channel:i,client:s,id:l=E,language:o,libraries:y=[],mapIds:a,nonce:u,region:d,retries:S=3,url:f="https://maps.googleapis.com/maps/api/js",version:b}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=t,this.authReferrerPolicy=e,this.channel=i,this.client=s,this.id=l||E,this.language=o,this.libraries=y,this.mapIds=a,this.nonce=u,this.region=d,this.retries=S,this.url=f,this.version=b,c.instance){if(!M(this.options,c.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(c.instance.options)}`);return c.instance}c.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?h.FAILURE:this.done?h.SUCCESS:this.loading?h.LOADING:h.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let t=this.url;return t+=`?callback=${this.CALLBACK}`,this.apiKey&&(t+=`&key=${this.apiKey}`),this.channel&&(t+=`&channel=${this.channel}`),this.client&&(t+=`&client=${this.client}`),this.libraries.length>0&&(t+=`&libraries=${this.libraries.join(",")}`),this.language&&(t+=`&language=${this.language}`),this.region&&(t+=`&region=${this.region}`),this.version&&(t+=`&v=${this.version}`),this.mapIds&&(t+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(t+=`&auth_referrer_policy=${this.authReferrerPolicy}`),t}deleteScript(){const t=document.getElementById(this.id);t&&t.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((t,e)=>{this.loadCallback(i=>{i?e(i.error):t(window.google)})})}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){if(document.getElementById(this.id)){this.callback();return}const t=this.createUrl(),e=document.createElement("script");e.id=this.id,e.type="text/javascript",e.src=t,e.onerror=this.loadErrorCallback.bind(this),e.defer=!0,e.async=!0,this.nonce&&(e.nonce=this.nonce),document.head.appendChild(e)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){if(this.errors.push(t),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)}else this.onerrorEvent=t,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(t=>{t(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}const G=Object.freeze(Object.defineProperty({__proto__:null,DEFAULT_ID:E,Loader:c,get LoaderStatus(){return h}},Symbol.toStringTag,{value:"Module"})),P=_(G);(function(r,t){(function(e,i){i(t,P,p.exports)})(j,function(e,i,s){function l(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var o=l(s);e.Status=void 0,function(a){a.LOADING="LOADING",a.FAILURE="FAILURE",a.SUCCESS="SUCCESS"}(e.Status||(e.Status={}));const y=({children:a,render:u,callback:d,...S})=>{const[f,b]=s.useState(e.Status.LOADING);return s.useEffect(()=>{const $=new i.Loader(S),C=v=>{d&&d(v,$),b(v)};C(e.Status.LOADING),$.load().then(()=>C(e.Status.SUCCESS),()=>C(e.Status.FAILURE))},[]),f===e.Status.SUCCESS&&a?o.default.createElement(o.default.Fragment,null,a):u?u(f):o.default.createElement(o.default.Fragment,null)};e.Wrapper=y,Object.defineProperty(e,"__esModule",{value:!0})})})(g,g.exports);const R=(r=g.exports.Status)=>n("h1",{children:r}),W=()=>{const r=p.exports.useRef(null),[t,e]=p.exports.useState(null);return p.exports.useEffect(()=>{r.current&&!t&&e(new window.google.maps.Map(r.current,{}))},[r,t]),n(L,{children:m(U,{children:[t?n(g.exports.Wrapper,{render:R,children:n("section",{ref:r,className:"contact-map-area"})}):n("section",{className:"contact-map-area",style:{backgroundImage:" url(IMAGES/GoogleMapTA.webp)"}}),m("section",{className:"contact-details-area",children:[n("p",{className:"contact-heading",children:"contact us"}),n("p",{className:"contact-text",children:"As you might expect of a company that began as a high-end interiors contractor, we pay strict attention."}),n("p",{className:"contact-sub-heading",children:"Nigeria"}),n("p",{className:"contact-text",children:"195 E Parker Square Dr, Parker, CO 801 +234 982-XXX-0958"}),m("form",{className:"contact-form",children:[m("div",{className:"inline-input-div",children:[n(x,{type:"text",label:"name",id:"name",placeholder:"john doe",$variant:"S"}),n(x,{type:"email",label:"email",id:"email",placeholder:"example@example.com",$variant:"S"})]}),n("label",{htmlFor:"textarea",children:"Message"}),n("textarea",{name:"",id:"email",maxLength:"300",style:{resize:"none"},placeholder:"Type your notes here"}),n("input",{type:"submit",value:"SEND MESSAGE"})]})]})]})})};export{W as Contact,W as default};
