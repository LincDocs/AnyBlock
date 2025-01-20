import{_ as r,c as d,b as l,e as s,w as n,d as t,a as p,r as a,o as c}from"./app-CKSJg_C5.js";const m="/AnyBlock/assets/list2table-DZAqVLnh.png",u="/AnyBlock/assets/list2mdtable-CGF7Bmvk.png",g="/AnyBlock/assets/list2tableT-Dh2yX5qo.png",b="/AnyBlock/assets/list2lt-D7c0To5P.gif",h="/AnyBlock/assets/list2tab-CUxf1UiG.gif",y="/AnyBlock/assets/list2mermaid-DSWAzLZn.png",k="/AnyBlock/assets/list2mindmap-C1FZKTiR.png",f="/AnyBlock/assets/titleSelector-DYAZ70i-.png",B="/AnyBlock/assets/addTitle-C29aWBaW.png",A="/AnyBlock/assets/scroll-B5QUirkN.gif",_="/AnyBlock/assets/overfold-CEkhR62Y.png",z="/AnyBlock/assets/flod-DRx3USy3.gif",v="/AnyBlock/assets/heimu-bQd485ob.gif",x="/AnyBlock/assets/userProcessor-BIkfKeeW.png",F="/AnyBlock/assets/support_zfb-CsEg7XN6.png",D="/AnyBlock/assets/support_wechat-DzKmLtnM.png",w={},L={href:"https://github.com/stonehank/html-to-md",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/mermaid-js/mermaid",target:"_blank",rel:"noopener noreferrer"};function E(S,o){const i=a("RouteLink"),e=a("ExternalLinkIcon");return c(),d("div",null,[l("p",null,[s(i,{to:"/v2%20old%20docs/docs/zh/docs/"},{default:n(()=>o[0]||(o[0]=[t("Other Language（其他语言）")])),_:1})]),o[6]||(o[6]=l("h1",{id:"obsidian-any-block",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#obsidian-any-block"},[l("span",null,"obsidian-any-block")])],-1)),o[7]||(o[7]=l("p",null,"A Obsidian Plugin. You can flexibility to create a 'Block' by some means.",-1)),o[8]||(o[8]=l("h2",{id:"usage",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#usage"},[l("span",null,"Usage")])],-1)),o[9]||(o[9]=l("p",null,[t("Function：Block conversion、list to table or other tree graph，See the "),l("code",null,"demo"),t(" sample folder for details")],-1)),l("p",null,[s(i,{to:"/v2%20old%20docs/docs/zh/docs/en/"},{default:n(()=>o[1]||(o[1]=[t("中文教程和示例库")])),_:1})]),o[10]||(o[10]=l("h2",{id:"if-bug",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#if-bug"},[l("span",null,"If bug")])],-1)),o[11]||(o[11]=l("p",null,[l("s",null,[t("try to close "),l("code",null,"strict line wrapping")])],-1)),o[12]||(o[12]=l("h2",{id:"suport-command",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#suport-command"},[l("span",null,"Suport command")])],-1)),l("p",null,[o[3]||(o[3]=t("Look the setup panel or ")),s(i,{to:"/v2%20old%20docs/docs/zh/docs/en/"},{default:n(()=>o[2]||(o[2]=[t("中文教程和示例库")])),_:1})]),o[13]||(o[13]=p('<p>说其中一些比较常用的处理器：</p><ul><li>列表转表格</li><li>列表转列表格</li><li>列表转流程图</li><li>列表转思维导图</li><li>列表转标签栏</li><li>列表转时间线</li><li>标题转列表从而转其他（can use title2list processor）</li></ul><p><img src="'+m+'" alt="" loading="lazy"></p><p><img src="'+u+'" alt="" loading="lazy"></p><p><img src="'+g+'" alt="" loading="lazy"></p><p><img src="'+b+'" alt="" loading="lazy"></p><p><img src="'+h+'" alt="" loading="lazy"></p><p><img src="'+y+'" alt="" loading="lazy"></p><p><img src="'+k+'" alt="" loading="lazy"></p><p><img src="'+f+'" alt="" loading="lazy"></p><p><img src="'+B+'" alt="" loading="lazy"></p><p><img src="'+A+'" alt="" loading="lazy"></p><p><img src="'+_+'" alt="" loading="lazy"></p><p><img src="'+z+'" alt="" loading="lazy"></p><p><img src="'+v+'" alt="" loading="lazy"></p><p><img src="'+x+'" alt="" loading="lazy"></p><h2 id="support" tabindex="-1"><a class="header-anchor" href="#support"><span>support</span></a></h2><p>开发不易，赞助入口（可备注：赞助项目名 + 你的github账号名）</p><p><img src="'+F+'" alt="" loading="lazy"><img src="'+D+'" alt="" loading="lazy"></p><p><img src="https://img.shields.io/badge/dynamic/json?logo=obsidian&amp;color=%23483699&amp;label=downloads&amp;query=%24[&quot;obsidian-any-block&quot;].downloads&amp;url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json" alt="Obsidian Downloads" loading="lazy"></p><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo"><span>Todo</span></a></h2><p><strong>(Don&#39;t repet it in issue)</strong></p><ul><li>reinforce <ul><li>选择器 <ul><li><strong>嵌套选择器</strong> 没有嵌套的程序是没有灵魂的 !!! （但问题在于，例如说第一层是tree，可能会破坏结构，有歧义。因为现在的tree格式是number-str的，那需要number-dom才行） （或者说：列表选择器不能嵌套列表选择器有歧义，需要嵌套引用选择器，在此基础上你解除引用选择器间接嵌套）</li></ul></li><li>处理器 <ul><li>QA处理器</li><li>优化2ultable，在这个模式中让内联换行变成同级换行而非下级换行的意思</li></ul></li><li>层级 <ul><li>负级列表开关</li><li>根据层级关系，推荐合理的处理器（如检测到树相关的就推荐树类处理器）</li></ul></li><li>样式 <ul><li>树表格的间隔着色样式获取可以优化 方案1：例如多行的格可以视情况使用渐变（单数不用，复数需要，但会不会有不统一的问题）？ 方案2：仿mindmap的着色，后面的列就不要隔行着色了</li></ul></li><li>转化 <ul><li>右键选择转化为：md原生(表格)/html格式/图片</li></ul></li></ul></li><li>fixing bug <ul><li>复选框列表的兼容、有序列表的兼容</li><li><strong>引用块内的列表/列表内的引用块 无法识别</strong></li><li><strong>表格转置与表头符号冲突、转置模式目前是纯css实现的 如果大家的行高不相同，会出现不匹配的情况。</strong> 后续会将css实现改进为转化table元素实现</li></ul></li></ul><p>Reference、import</p>',24)),l("ul",null,[l("li",null,[l("a",L,[o[4]||(o[4]=t("html-to-md")),s(e)])]),l("li",null,[l("a",C,[o[5]||(o[5]=t("mermaid")),s(e)])])])])}const T=r(w,[["render",E],["__file","index.html.vue"]]),N=JSON.parse(`{"path":"/v2%20old%20docs/docs/zh/","title":"obsidian-any-block","lang":"zh-CN","frontmatter":{"description":"obsidian-any-block A Obsidian Plugin. You can flexibility to create a 'Block' by some means. Usage Function：Block conversion、list to table or other tree graph，See the demo sampl...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/AnyBlock/v2%20old%20docs/docs/zh/"}],["meta",{"property":"og:site_name","content":"AnyBlock"}],["meta",{"property":"og:title","content":"obsidian-any-block"}],["meta",{"property":"og:description","content":"obsidian-any-block A Obsidian Plugin. You can flexibility to create a 'Block' by some means. Usage Function：Block conversion、list to table or other tree graph，See the demo sampl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22obsidian-any-block%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincDocs"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"obsidian-any-block\\",\\"image\\":[\\"https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22obsidian-any-block%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/AnyBlock/\\"}]}"]]},"headers":[{"level":1,"title":"obsidian-any-block","slug":"obsidian-any-block","link":"#obsidian-any-block","children":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"If bug","slug":"if-bug","link":"#if-bug","children":[]},{"level":2,"title":"Suport command","slug":"suport-command","link":"#suport-command","children":[]},{"level":2,"title":"support","slug":"support","link":"#support","children":[]},{"level":2,"title":"Todo","slug":"todo","link":"#todo","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":2,"words":600},"filePathRelative":"v2 old docs/docs/zh/README.md","excerpt":"<p><a href=\\"/AnyBlock/v2%20old%20docs/docs/zh/docs/\\" target=\\"_blank\\">Other Language（其他语言）</a></p>\\n<h1>obsidian-any-block</h1>\\n<p>A Obsidian Plugin. You can flexibility to create a 'Block' by some means.</p>\\n<h2>Usage</h2>\\n<p>Function：Block conversion、list to table or other tree graph，See the <code>demo</code> sample folder for details</p>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"v2 old docs/docs/zh/README.md","value":{"title":"docs/","path":"v2 old docs/docs/zh/README.md","outlink":[],"backlink":[]}}],"links":[]}}}`);export{T as comp,N as data};
