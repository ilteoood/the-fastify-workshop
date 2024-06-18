import{_ as B}from"./CodeBlockWrapper-CP4lYHed.js";import{I as A}from"./default-E-YSf1hK.js";import{_ as f,a_ as r}from"../index-BuublKFa.js";import{p,u as d,f as D}from"./context-CQgBwYKt.js";import{o as _,c as m,k as g,l as u,m as C,q as v,s as x,e as i,a6 as s}from"../modules/vue-Dkcc_ArA.js";import"../modules/unplugin-icons-DC6Hh26d.js";import"../modules/shiki-Dj_qJoE5.js";const F={__name:"48",setup(y,{expose:h}){h(),p(r);const{$slidev:k,$nav:t,$clicksContext:l,$clicks:e,$page:a,$renderContext:o,$frontmatter:c}=d(),n={$slidev:k,$nav:t,$clicksContext:l,$clicks:e,$page:a,$renderContext:o,$frontmatter:c,InjectedLayout:A,get frontmatter(){return r},get useSlideContext(){return d},get _provideFrontmatter(){return p},get _frontmatterToProps(){return D}};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}},j=i("h1",null,"Step 8: Solution",-1),S=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// index.js")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Fastify"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"fastify"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," buildServer"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"  const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," fastify"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," Fastify"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    logger"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"      transport"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"        target"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"pino-pretty"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  })")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  fastify"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"register"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"import"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"@fastify/jwt"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"),"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}},"    secret"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"supersecret"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  fastify"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"register"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"import"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"./routes/login.js"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"))")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  fastify"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"register"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"import"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"./routes/users.js"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"))")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  fastify"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"log"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"info"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"Fastify is starting up!"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  return"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," fastify")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"export"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," default"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," buildServer")])])],-1);function $(y,h,k,t,l,e){const a=B;return _(),m(t.InjectedLayout,v(x(t._frontmatterToProps(t.frontmatter,47))),{default:g(()=>[j,u(a,C({},{ranges:[]}),{default:g(()=>[S]),_:1},16)]),_:1},16)}const w=f(F,[["render",$],["__file","/@slidev/slides/48.md"]]);export{w as default};
