import{N as _,y as p,r as k,b as x,e as o,a6 as n,x as f,c as h,k as m,g,o as d,p as S,a as y}from"../modules/vue-Dkcc_ArA.js";import{_ as N,a as v}from"../index-BuublKFa.js";import"../modules/shiki-Dj_qJoE5.js";const R={__name:"404",setup(t,{expose:l}){l();const{currentRoute:s}=_(),{total:e}=v(),i=p(()=>{const u=s.value.path.match(/\d+/);if(u){const c=+u[0];if(c>0&&c<=e.value)return c}return null}),a={currentRoute:s,total:e,guessedSlide:i,computed:p,get useRouter(){return _},get useNav(){return v}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},w=t=>(S("data-v-498aedf6"),t=t(),y(),t),b={class:"grid justify-center pt-15%"},B=w(()=>o("h1",{class:"text-9xl font-bold"}," 404 ",-1)),I={class:"text-2xl"},C={class:"op-70"},V={class:"mt-3 flex flex-col gap-2"};function j(t,l,s,e,i,a){const r=k("RouterLink");return d(),x("div",b,[o("div",null,[B,o("p",I,[n(" Page not found"),o("code",C,":"+f(e.currentRoute.path),1)]),o("div",V,[e.guessedSlide!==1?(d(),h(r,{key:0,to:"/",class:"page-link"},{default:m(()=>[n(" Go Home ")]),_:1})):g("v-if",!0),e.guessedSlide?(d(),h(r,{key:1,to:`/${e.guessedSlide}`,class:"page-link"},{default:m(()=>[n(" Go to Slide "+f(e.guessedSlide),1)]),_:1},8,["to"])):g("v-if",!0)])])])}const D=N(R,[["render",j],["__scopeId","data-v-498aedf6"],["__file","/home/runner/work/the-fastify-workshop/the-fastify-workshop/node_modules/@slidev/client/pages/404.vue"]]);export{D as default};
