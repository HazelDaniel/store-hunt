import{g as L,$ as P,S as G,a as k,b as E}from"./shop-product.component.472f56c7.js";import{s as R,i as q,b as F,c as T,e as _,a as U,o as X,h as j,j as u}from"./index.ddc19423.js";function H(a,I,r,g){const m=L();return a.params.createElements&&Object.keys(g).forEach(p=>{if(!r[p]&&r.auto===!0){let d=a.$el.children(`.${g[p]}`)[0];d||(d=m.createElement("div"),d.className=g[p],a.$el.append(d)),r[p]=d,I[p]=d}}),r}function W({swiper:a,extendParams:I,on:r,emit:g}){I({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function m(l){let n;return l&&(n=P(l),a.params.uniqueNavElements&&typeof l=="string"&&n.length>1&&a.$el.find(l).length===1&&(n=a.$el.find(l))),n}function p(l,n){const e=a.params.navigation;l&&l.length>0&&(l[n?"addClass":"removeClass"](e.disabledClass),l[0]&&l[0].tagName==="BUTTON"&&(l[0].disabled=n),a.params.watchOverflow&&a.enabled&&l[a.isLocked?"addClass":"removeClass"](e.lockClass))}function d(){if(a.params.loop)return;const{$nextEl:l,$prevEl:n}=a.navigation;p(n,a.isBeginning&&!a.params.rewind),p(l,a.isEnd&&!a.params.rewind)}function A(l){l.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),g("navigationPrev"))}function C(l){l.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),g("navigationNext"))}function f(){const l=a.params.navigation;if(a.params.navigation=H(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(l.nextEl||l.prevEl))return;const n=m(l.nextEl),e=m(l.prevEl);n&&n.length>0&&n.on("click",C),e&&e.length>0&&e.on("click",A),Object.assign(a.navigation,{$nextEl:n,nextEl:n&&n[0],$prevEl:e,prevEl:e&&e[0]}),a.enabled||(n&&n.addClass(l.lockClass),e&&e.addClass(l.lockClass))}function $(){const{$nextEl:l,$prevEl:n}=a.navigation;l&&l.length&&(l.off("click",C),l.removeClass(a.params.navigation.disabledClass)),n&&n.length&&(n.off("click",A),n.removeClass(a.params.navigation.disabledClass))}r("init",()=>{a.params.navigation.enabled===!1?O():(f(),d())}),r("toEdge fromEdge lock unlock",()=>{d()}),r("destroy",()=>{$()}),r("enable disable",()=>{const{$nextEl:l,$prevEl:n}=a.navigation;l&&l[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass),n&&n[a.enabled?"removeClass":"addClass"](a.params.navigation.lockClass)}),r("click",(l,n)=>{const{$nextEl:e,$prevEl:t}=a.navigation,o=n.target;if(a.params.navigation.hideOnClick&&!P(o).is(t)&&!P(o).is(e)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===o||a.pagination.el.contains(o)))return;let i;e?i=e.hasClass(a.params.navigation.hiddenClass):t&&(i=t.hasClass(a.params.navigation.hiddenClass)),g(i===!0?"navigationShow":"navigationHide"),e&&e.toggleClass(a.params.navigation.hiddenClass),t&&t.toggleClass(a.params.navigation.hiddenClass)}});const N=()=>{a.$el.removeClass(a.params.navigation.navigationDisabledClass),f(),d()},O=()=>{a.$el.addClass(a.params.navigation.navigationDisabledClass),$()};Object.assign(a.navigation,{enable:N,disable:O,update:d,init:f,destroy:$})}function D(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Y({swiper:a,extendParams:I,on:r,emit:g}){const m="swiper-pagination";I({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${m}-bullet`,bulletActiveClass:`${m}-bullet-active`,modifierClass:`${m}-`,currentClass:`${m}-current`,totalClass:`${m}-total`,hiddenClass:`${m}-hidden`,progressbarFillClass:`${m}-progressbar-fill`,progressbarOppositeClass:`${m}-progressbar-opposite`,clickableClass:`${m}-clickable`,lockClass:`${m}-lock`,horizontalClass:`${m}-horizontal`,verticalClass:`${m}-vertical`,paginationDisabledClass:`${m}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let p,d=0;function A(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function C(e,t){const{bulletActiveClass:o}=a.params.pagination;e[t]().addClass(`${o}-${t}`)[t]().addClass(`${o}-${t}-${t}`)}function f(){const e=a.rtl,t=a.params.pagination;if(A())return;const o=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,i=a.pagination.$el;let s;const h=a.params.loop?Math.ceil((o-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(s=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),s>o-1-a.loopedSlides*2&&(s-=o-a.loopedSlides*2),s>h-1&&(s-=h),s<0&&a.params.paginationType!=="bullets"&&(s=h+s)):typeof a.snapIndex<"u"?s=a.snapIndex:s=a.activeIndex||0,t.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const c=a.pagination.bullets;let b,y,z;if(t.dynamicBullets&&(p=c.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(a.isHorizontal()?"width":"height",`${p*(t.dynamicMainBullets+4)}px`),t.dynamicMainBullets>1&&a.previousIndex!==void 0&&(d+=s-(a.previousIndex-a.loopedSlides||0),d>t.dynamicMainBullets-1?d=t.dynamicMainBullets-1:d<0&&(d=0)),b=Math.max(s-d,0),y=b+(Math.min(c.length,t.dynamicMainBullets)-1),z=(y+b)/2),c.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(S=>`${t.bulletActiveClass}${S}`).join(" ")),i.length>1)c.each(S=>{const x=P(S),v=x.index();v===s&&x.addClass(t.bulletActiveClass),t.dynamicBullets&&(v>=b&&v<=y&&x.addClass(`${t.bulletActiveClass}-main`),v===b&&C(x,"prev"),v===y&&C(x,"next"))});else{const S=c.eq(s),x=S.index();if(S.addClass(t.bulletActiveClass),t.dynamicBullets){const v=c.eq(b),V=c.eq(y);for(let M=b;M<=y;M+=1)c.eq(M).addClass(`${t.bulletActiveClass}-main`);if(a.params.loop)if(x>=c.length){for(let M=t.dynamicMainBullets;M>=0;M-=1)c.eq(c.length-M).addClass(`${t.bulletActiveClass}-main`);c.eq(c.length-t.dynamicMainBullets-1).addClass(`${t.bulletActiveClass}-prev`)}else C(v,"prev"),C(V,"next");else C(v,"prev"),C(V,"next")}}if(t.dynamicBullets){const S=Math.min(c.length,t.dynamicMainBullets+4),x=(p*S-p)/2-z*p,v=e?"right":"left";c.css(a.isHorizontal()?v:"top",`${x}px`)}}if(t.type==="fraction"&&(i.find(D(t.currentClass)).text(t.formatFractionCurrent(s+1)),i.find(D(t.totalClass)).text(t.formatFractionTotal(h))),t.type==="progressbar"){let c;t.progressbarOpposite?c=a.isHorizontal()?"vertical":"horizontal":c=a.isHorizontal()?"horizontal":"vertical";const b=(s+1)/h;let y=1,z=1;c==="horizontal"?y=b:z=b,i.find(D(t.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${y}) scaleY(${z})`).transition(a.params.speed)}t.type==="custom"&&t.renderCustom?(i.html(t.renderCustom(a,s+1,h)),g("paginationRender",i[0])):g("paginationUpdate",i[0]),a.params.watchOverflow&&a.enabled&&i[a.isLocked?"addClass":"removeClass"](t.lockClass)}function $(){const e=a.params.pagination;if(A())return;const t=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,o=a.pagination.$el;let i="";if(e.type==="bullets"){let s=a.params.loop?Math.ceil((t-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&s>t&&(s=t);for(let h=0;h<s;h+=1)e.renderBullet?i+=e.renderBullet.call(a,h,e.bulletClass):i+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;o.html(i),a.pagination.bullets=o.find(D(e.bulletClass))}e.type==="fraction"&&(e.renderFraction?i=e.renderFraction.call(a,e.currentClass,e.totalClass):i=`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,o.html(i)),e.type==="progressbar"&&(e.renderProgressbar?i=e.renderProgressbar.call(a,e.progressbarFillClass):i=`<span class="${e.progressbarFillClass}"></span>`,o.html(i)),e.type!=="custom"&&g("paginationRender",a.pagination.$el[0])}function N(){a.params.pagination=H(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const e=a.params.pagination;if(!e.el)return;let t=P(e.el);t.length!==0&&(a.params.uniqueNavElements&&typeof e.el=="string"&&t.length>1&&(t=a.$el.find(e.el),t.length>1&&(t=t.filter(o=>P(o).parents(".swiper")[0]===a.el))),e.type==="bullets"&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),t.addClass(a.isHorizontal()?e.horizontalClass:e.verticalClass),e.type==="bullets"&&e.dynamicBullets&&(t.addClass(`${e.modifierClass}${e.type}-dynamic`),d=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),e.type==="progressbar"&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click",D(e.bulletClass),function(i){i.preventDefault();let s=P(this).index()*a.params.slidesPerGroup;a.params.loop&&(s+=a.loopedSlides),a.slideTo(s)}),Object.assign(a.pagination,{$el:t,el:t[0]}),a.enabled||t.addClass(e.lockClass))}function O(){const e=a.params.pagination;if(A())return;const t=a.pagination.$el;t.removeClass(e.hiddenClass),t.removeClass(e.modifierClass+e.type),t.removeClass(a.isHorizontal()?e.horizontalClass:e.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&t.off("click",D(e.bulletClass))}r("init",()=>{a.params.pagination.enabled===!1?n():(N(),$(),f())}),r("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex>"u")&&f()}),r("snapIndexChange",()=>{a.params.loop||f()}),r("slidesLengthChange",()=>{a.params.loop&&($(),f())}),r("snapGridLengthChange",()=>{a.params.loop||($(),f())}),r("destroy",()=>{O()}),r("enable disable",()=>{const{$el:e}=a.pagination;e&&e[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),r("lock unlock",()=>{f()}),r("click",(e,t)=>{const o=t.target,{$el:i}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&i&&i.length>0&&!P(o).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&o===a.navigation.nextEl||a.navigation.prevEl&&o===a.navigation.prevEl))return;const s=i.hasClass(a.params.pagination.hiddenClass);g(s===!0?"paginationShow":"paginationHide"),i.toggleClass(a.params.pagination.hiddenClass)}});const l=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),N(),$(),f()},n=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),O()};Object.assign(a.pagination,{enable:l,disable:n,render:$,update:f,init:N,destroy:O})}const J=R.section`
  ${q};
  ${F};
  height: 30rem;
  background-color: ${({theme:a})=>a.$brightColor};
  color: ${({theme:a})=>a.$darkAccentColor};
  padding: 3rem;
  position: relative;
  padding-bottom: 5rem;

  .related-products-title {
    &,
    * {
      font-family: nunito;
      font-size: 1.8rem;
    }

    ${F};
    ${T};
    height: max-content;
    margin-bottom: 2rem;

    span {
      margin-left: 0.5rem;
      background-color: ${({theme:a})=>a.$darkAccentColor};
      color: ${({theme:a})=>a.$lessBrightColor};
      padding: 0 1rem;
      transform: translateX(-0.5rem);
      cursor: pointer;
      border-top-left-radius: 2rem;
    }
  }

  .related-products-wrapper {
    ${_};
    justify-content: flex-start !important;
    position: relative;
    padding-bottom: 3rem;

    .swiper-wrapper {
      justify-content: flex-start;
      margin-left: 0;
      width: fit-content;
      overflow: visible;
    }

    .swiper-pagination {
      z-index: 3 !important;
      opacity: 1;
      position: absolute !important;
      /* width: 100vw; */
      bottom: 10%;
      @media screen and (min-width: 540px) and (max-width: 639px){
        bottom: 20%;
      }
      ${T};
      

      & > * {
        background-color: red !important;

      }
      .swiper-pagination-bullet {
        /* background-color: ${({theme:a})=>a.$accentColor}!important; */
        background-color: #D1C3B9 !important;
        border: 1pt solid ${({theme:a})=>a.$darkAccentColor};
        &-active{
          /* background-color: ${({theme:a})=>a.$lessBrightColor} !important;  */
          background-color: #08090A;
          /* display: none; */
        }
      }
    }
    .shop-product-swiper-div {
      ${F};
      ${U};
      align-items: center;
      justify-content: center;
      align-self: flex-start;

      .shop-product-div {
        /* min-width: 15rem; */
        width: 12rem;
        height: 15rem;
        position: relative;
        @media screen and (min-width: 768px) {
          width: 100% !important;
        }
        overflow: hidden;

        /* margin: 2.5rem 2vw; */
        /* &:first-of-type {
					margin-left: 0;
				} */
      }
    }
  }
  .RPW-carousel-control {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${({theme:a})=>a.$lessBrightColor};
    box-shadow: 0.3rem 0.3rem 1.5rem
      ${({theme:a})=>a.$lightestShadowColor};
    position: absolute;
    top: 15rem;
    z-index: 3;
    transition: transform 0.2s ease-in;
    cursor: pointer;
    svg {
      ${X};
      transform: scale(0.6);
      path {
        fill: ${({theme:a})=>a.$darkAccentColor};
      }
    }
    &.left {
      left: 1.5rem;
      @media screen and (min-width: 641px) {
        left: 3rem;
      }
      &:hover {
        transform: scale(0.8);
      }
    }
    &.right {
      right: 1.5rem;
      @media screen and (min-width: 641px) {
        right: 3rem;
      }
      transform: scaleX(-1);
      &:hover {
        transform: scale(-0.8, 0.8);
      }
    }
  }
`,B={name:"CURDUROY 5L",price:320,quantity:3,ratings:4,isDiscounted:!0,isFeatured:!1,dateAdded:"",discountedPrice:250,category:"Men",title:`Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
					with placket.`,tags:["Wears","Brown"],sizes:["XXL","S","L"],PId:"89548573",image:{url:"IMAGES/shop-details/product-big.png",variants:[{url:"IMAGES/shop-details/thumb-1.png"},{url:"IMAGES/shop-details/thumb-2.png"},{url:"IMAGES/shop-details/thumb-3.png"}]},colors:{list:[{id:"d6dbde",isActive:!1},{id:"b49d7e",isActive:!1},{id:"000000",isActive:!1}],isVisual:!0,isColorList:!0,className:"product-color-list"},description:`The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known or incorporative approach.
						Furthermore, one should not forget that components of efforts of the formal review of opportunities has proved to be reliable in the scope of the general features and
						possibilities of the outline design stage. Up to a certain time, the capability of the arguments and claims can partly be used for the matters of peculiar interest. It may
						reveal how the participant evaluation sample remotely complete failure of the supposed theory what is conventionally known as valuable information. Let's consider, that any
						essential component can partly be used for the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.`};const K=()=>j(J,{children:[j("p",{className:"related-products-title",children:["Related ",u("span",{children:"Products"})]}),j(G,{slidesPerView:2,spaceBetween:20,dir:"rtl",pagination:{clickable:!0},breakpoints:{200:{slidesPerView:1,spaceBetween:20},390:{slidesPerView:1,spaceBetween:20},640:{slidesPerView:2,spaceBetween:20},768:{slidesPerView:3},1024:{slidesPerView:4}},modules:[Y,W],className:"mySwiper related-products-wrapper",children:[u(k,{className:"shop-product-swiper-div",children:u(E,{product:B,$isVariant:!0})}),u(k,{className:"shop-product-swiper-div",children:u(E,{product:B,$isVariant:!0})}),u(k,{className:"shop-product-swiper-div",children:u(E,{product:B,$isVariant:!0})}),u(k,{className:"shop-product-swiper-div",children:u(E,{product:B,$isVariant:!0})}),u(k,{className:"shop-product-swiper-div",children:u(E,{product:B,$isVariant:!0})}),u(k,{className:"shop-product-swiper-div",children:u(E,{product:B,$isVariant:!0})}),u(k,{className:"shop-product-swiper-div",children:u(E,{product:B,$isVariant:!0})}),u(k,{className:"shop-product-swiper-div",children:u(E,{product:B,$isVariant:!0})}),u(k,{className:"shop-product-swiper-div",children:u(E,{product:B,$isVariant:!0})})]})]}),w=Object.freeze(Object.defineProperty({__proto__:null,RelatedProducts:K},Symbol.toStringTag,{value:"Module"}));export{B as P,K as R,w as r};
