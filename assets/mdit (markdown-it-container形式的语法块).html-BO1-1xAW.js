import{_ as c,c as b,a as s,b as t,e as r,d as o,w as n,r as d,o as p}from"./app-CAb40Mfp.js";const _={};function m(u,e){const l=d("Tabs");return p(),b("div",null,[e[12]||(e[12]=s('<h1 id="mdit-markdown-it-container形式的语法块" tabindex="-1">mdit (markdown-it-container形式的语法块)</h1><h2 id="八种选择器" tabindex="-1">八种选择器</h2><p>我把 markdown 中 “选择一段范围” 的方式分为8种，其中 AnyBlock 支持七种选择器。</p><p>这些选择器各有优缺点</p><p>详见:</p><ul><li>en: <a href="https://lincdocs.github.io/AnyBlock/docs/en/03.%20Selector.html" target="_blank" rel="noopener noreferrer">Selector</a></li><li>zh: <a href="https://lincdocs.github.io/AnyBlock/docs/zh/03.%20%E9%80%89%E6%8B%A9%E5%99%A8.html" target="_blank" rel="noopener noreferrer">选择器</a></li></ul><p>这里介绍传统的代码块选择器、以及 markdown-it-container 选择器</p><h2 id="代码块选择器" tabindex="-1">代码块选择器</h2><div class="ab-note drop-shadow"><div class="markdown-rendered ab-custom-text-blue"><div><p>It is blue color text</p></div></div></div>',9)),e[13]||(e[13]=t("div",{class:"ab-note drop-shadow"},[t("table",{class:"ab-table ab-branch-table",style:{"table-layout":"fixed",width:"100%"}},[t("tbody",null,[t("tr",null,[t("td",{rowspan:"2",col_index:"0",class:"markdown-rendered",style:{"max-width":"20%","min-width":"20%",width:"20%"}},[t("div",null,[t("p",null,[o("It is a "),t("strong",null,"multicross table")])])]),t("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[t("div",null,[t("p",null,"fork1")])])]),t("tr",null,[t("td",{rowspan:"1",col_index:"2",class:"markdown-rendered",style:{"max-width":"20%","min-width":"20%",width:"20%"}},[t("div",null,[t("p",null,"fokr2")])])])])])],-1)),e[14]||(e[14]=s('<h2 id="markdown-it-container" tabindex="-1">markdown-it-container</h2><p>注意：</p><ul><li>该选择器在 vuepress 中由 markdown-it-container 以及基于该插件的其他插件提供功能。</li><li>仅在 obsidian、该App在线版本中，才由 anyblock 插件提供功能</li></ul><p>:::col|width(25,50,25)</p><p>@col</p><p>text1</p><p>@col</p><p>text2</p><p>@col</p><p>text3</p><p>:::</p>',11)),r(l,{data:[{id:"title1"},{id:"title2"},{id:"title3"}]},{title0:n(({value:a,isActive:i})=>[...e[0]||(e[0]=[o("title1",-1)])]),title1:n(({value:a,isActive:i})=>[...e[1]||(e[1]=[o("title2",-1)])]),title2:n(({value:a,isActive:i})=>[...e[2]||(e[2]=[o("title3",-1)])]),tab0:n(({value:a,isActive:i})=>[...e[3]||(e[3]=[t("p",null,"text1",-1)])]),tab1:n(({value:a,isActive:i})=>[...e[4]||(e[4]=[t("p",null,"text2",-1)])]),tab2:n(({value:a,isActive:i})=>[...e[5]||(e[5]=[t("p",null,"text3",-1)])]),_:1}),e[15]||(e[15]=s('<p>:::card</p><p>@card card1</p><p>text1</p><p>@card card2</p><p>text2</p><p>:::</p><h2 id="markdown-it-container-嵌套" tabindex="-1">markdown-it-container 嵌套</h2><p>嵌套方式和代码块一样，通过 <code>:</code> 的数量不同进行嵌套 (一般是更多的 <code>:</code> 层去嵌套更少的)</p>',8)),r(l,{data:[{id:"title1"},{id:"title2"},{id:"title3"}]},{title0:n(({value:a,isActive:i})=>[...e[6]||(e[6]=[o("title1",-1)])]),title1:n(({value:a,isActive:i})=>[...e[7]||(e[7]=[o("title2",-1)])]),title2:n(({value:a,isActive:i})=>[...e[8]||(e[8]=[o("title3",-1)])]),tab0:n(({value:a,isActive:i})=>[...e[9]||(e[9]=[t("div",{class:"hint-container note"},[t("p",{class:"hint-container-title"},"注"),t("p",null,"It's a note."),t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,"It's warning!")])],-1),t("p",null,"::::card|addClass(ab-col2)",-1),t("p",null,"@card card1",-1),t("p",null,"text1",-1),t("div",{class:"hint-container note"},[t("p",{class:"hint-container-title"},"注"),t("p",null,"It's a note.")],-1),t("p",null,"@card card2",-1),t("p",null,"text2",-1),t("p",null,"::::",-1)])]),tab1:n(({value:a,isActive:i})=>[...e[10]||(e[10]=[t("p",null,"text2",-1)])]),tab2:n(({value:a,isActive:i})=>[...e[11]||(e[11]=[t("p",null,"text3",-1)])]),_:1}),e[16]||(e[16]=s('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>注意：在 obsidian 中 markdown-it-container 的嵌套原理，与在 app 或 markdown-it 版本中的不同。</p><p>因为 obsidian 中对于重新渲染方法，并没有提供一个比较好的接口去处理重渲染的内容，只能从html中去反推解析。</p><p>所以obsidian中的实现本质上需要通过 <code>mdit2code</code> 处理器，将markdown-it-container块转换为代码块，将 <code>@</code> 转换为标题，以此支持mdit的嵌套</p></div><p>tab的嵌套有点特殊，区分不开 <code>@tab</code> 符号，得改写为其他方式，如使用标题选择器：</p>',2)),e[17]||(e[17]=t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-tab-root"},[t("div",{class:"ab-tab-nav"},[t("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
            const i = 0
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"1"),t("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 1
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"2")]),t("div",{class:"ab-tab-content"},[t("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[t("div",null,[t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-tab-root"},[t("div",{class:"ab-tab-nav"},[t("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
            const i = 2
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"1.1"),t("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 3
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"1.2")]),t("div",{class:"ab-tab-content"},[t("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[t("div",null,[t("p",null,"1.1"),t("div",{class:"ab-note drop-shadow"},[t("div",{class:"ab-tab-root"},[t("div",{class:"ab-tab-nav"},[t("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
            const i = 4
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"1.1.1"),t("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
            const i = 5
            const tab_current = this
            const tab_nav = this.parentNode
            const tab_root = tab_nav.parentNode
            const tab_content = tab_root.querySelector(":scope>.ab-tab-content")
            const tab_nav_items = tab_nav.querySelectorAll(":scope>.ab-tab-nav-item")
            const tab_content_items = tab_content.querySelectorAll(":scope>.ab-tab-content-item")
            for (let j=0; j<tab_content_items.length; j++){
              tab_nav_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("is_activate", "false")
              tab_content_items[j].setAttribute("style", "display:none")
            }
            tab_current.setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("is_activate", "true")
            tab_content_items[i].setAttribute("style", "display:block")
          `},"1.1.2")]),t("div",{class:"ab-tab-content"},[t("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[t("div",null,[t("p",null,"1.1.1")])]),t("div",{class:"ab-tab-content-item",style:{display:"none"},is_activate:"false"})])])])])]),t("div",{class:"ab-tab-content-item",style:{display:"none"},is_activate:"false"})])])])])]),t("div",{class:"ab-tab-content-item",style:{display:"none"},is_activate:"false"})])])],-1))])}const A=c(_,[["render",m]]),y=JSON.parse('{"path":"/demo/mdit%20(markdown-it-container%E5%BD%A2%E5%BC%8F%E7%9A%84%E8%AF%AD%E6%B3%95%E5%9D%97).html","title":"mdit (markdown-it-container形式的语法块)","lang":"zh-CN","frontmatter":{"description":"mdit (markdown-it-container形式的语法块) 八种选择器 我把 markdown 中 “选择一段范围” 的方式分为8种，其中 AnyBlock 支持七种选择器。 这些选择器各有优缺点 详见: en: Selector zh: 选择器 这里介绍传统的代码块选择器、以及 markdown-it-container 选择器 代码块选择...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mdit (markdown-it-container形式的语法块)\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincDocs.github.io/AnyBlock/demo/mdit%20(markdown-it-container%E5%BD%A2%E5%BC%8F%E7%9A%84%E8%AF%AD%E6%B3%95%E5%9D%97).html"}],["meta",{"property":"og:site_name","content":"AnyBlock"}],["meta",{"property":"og:title","content":"mdit (markdown-it-container形式的语法块)"}],["meta",{"property":"og:description","content":"mdit (markdown-it-container形式的语法块) 八种选择器 我把 markdown 中 “选择一段范围” 的方式分为8种，其中 AnyBlock 支持七种选择器。 这些选择器各有优缺点 详见: en: Selector zh: 选择器 这里介绍传统的代码块选择器、以及 markdown-it-container 选择器 代码块选择..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]]},"git":{},"readingTime":{"minutes":1.43,"words":429},"filePathRelative":"demo/mdit (markdown-it-container形式的语法块).md","excerpt":"\\n<h2>八种选择器</h2>\\n<p>我把 markdown 中 “选择一段范围” 的方式分为8种，其中 AnyBlock 支持七种选择器。</p>\\n<p>这些选择器各有优缺点</p>\\n<p>详见:</p>\\n<ul>\\n<li>en: <a href=\\"https://lincdocs.github.io/AnyBlock/docs/en/03.%20Selector.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Selector</a></li>\\n<li>zh: <a href=\\"https://lincdocs.github.io/AnyBlock/docs/zh/03.%20%E9%80%89%E6%8B%A9%E5%99%A8.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">选择器</a></li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"demo/mdit (markdown-it-container形式的语法块).md","value":{"title":"mdit (markdown-it-container形式的语法块)","path":"demo/mdit (markdown-it-container形式的语法块).md","outlink":[],"backlink":[]}}],"links":[]}}}');export{A as comp,y as data};
