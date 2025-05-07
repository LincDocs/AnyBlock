import{_ as v,c as m,b as i,e as d,a as l,w as n,d as t,f as s,r as o,o as f}from"./app-vq-veu9V.js";const h={};function _(w,e){const c=o("Tabs"),u=o("Mermaid"),b=o("MarkMap"),p=o("RouteLink");return f(),m("div",null,[e[16]||(e[16]=i('<h1 id="readme" tabindex="-1"><a class="header-anchor" href="#readme"><span>README</span></a></h1><h2 id="general-通用" tabindex="-1"><a class="header-anchor" href="#general-通用"><span>General (通用)</span></a></h2><h3 id="more-links-相关链接" tabindex="-1"><a class="header-anchor" href="#more-links-相关链接"><span>More Links (相关链接)</span></a></h3><p>Related links：(tutorial、use skill、contribution、secondary development)</p><ul><li><a href="https://linczero.github.io/MdNote_Public/%E4%BA%A7%E5%93%81%E6%96%87%E6%A1%A3/AnyBlock/" target="_blank" rel="noopener noreferrer">Online Wiki - github.io</a></li><li><a href="https://linczero-github-io.pages.dev/MdNote_Public/%E4%BA%A7%E5%93%81%E6%96%87%E6%A1%A3/AnyBlock/" target="_blank" rel="noopener noreferrer">Online Wiki - cloudflare</a></li></ul><p>Chinese problem (文档的语言问题、网站访问问题)</p><ul><li>语言问题：文档是多语言的（zh/en），不用担心</li><li>访问失败/被墙：本文的默认网站链接指向 github.io，如果国内有不能访问的朋友，将网站链接部分的 <em>linczero.github.io</em> 替换成 <em>linczero-github-io.pages.dev</em> 就可以了</li></ul><h2 id="effects-warrior-效果展示" tabindex="-1"><a class="header-anchor" href="#effects-warrior-效果展示"><span>Effects warrior (效果展示)</span></a></h2><p>（推荐使用暗黑模式进行查看）</p><p>下面在展示中，会使用标签页将几个版本进行对照。以便来回查看以体会用法和语法：</p>',10)),d(c,{id:"48",data:[{id:"中文"},{id:"English"}]},{title0:n(({value:r,isActive:a})=>e[0]||(e[0]=[t("中文")])),title1:n(({value:r,isActive:a})=>e[1]||(e[1]=[t("English")])),tab0:n(({value:r,isActive:a})=>e[2]||(e[2]=[l("p",null,[t("与一般的插件仅展示 "),l("code",null,"源码"),t(" + "),l("code",null,"效果"),t(" 不同，这里还多了一个 "),l("code",null,"无插件效果"),t("。"),l("br"),t(" 旨在告诉你该插件不会过于影响你的写作习惯，并且哪怕你不再使用该插件，原来的内容依然不会变得“丑陋”，即 “低插件依赖”")],-1),l("ul",null,[l("li",null,[t("插件效果 "),l("ul",null,[l("li",null,"效果：是使用插件后真实渲染出来的结果而不是图片截图"),l("li",null,"展示了: 插件的真实效果")])]),l("li",null,[t("无插件效果 "),l("ul",null,[l("li",null,"效果：你关闭了插件后的渲染结果"),l("li",null,"展示了: 该插件语法几乎无入侵性，在无插件环境下，md文档依然优雅可读，而非变成代码框")])]),l("li",null,[t("md源码 "),l("ul",null,[l("li",null,"效果：用记事本打开/在Ob的源码模式中看到的结果"),l("li",null,"展示了: 方便你看这种效果是怎么写出来的，表现了插件语法的优雅高效")])])],-1)])),tab1:n(({value:r,isActive:a})=>e[3]||(e[3]=[l("p",null,[t("Unlike the general plug-in that only shows the "),l("code",null,"source code"),t(" + "),l("code",null,"effect"),t(", there is also a "),l("code",null,"no plug-in effect"),t("."),l("br"),t(' The goal is to tell you that the plugin will not affect your writing habits too much, and that even if you no longer use the plugin, the original content will not become "ugly", that is, "low plugin dependency".')],-1),l("ul",null,[l("li",null,[t("Plugin effect "),l("ul",null,[l("li",null,"Effect: It is the result of the actual rendering after using the plugin, not the screenshot"),l("li",null,"It will show: Plugin real effect")])]),l("li",null,[t("No plugin effect "),l("ul",null,[l("li",null,"Effect: Render the result after you close the plugin"),l("li",null,"It will show: The plugin syntax is almost non-intrusive, and in a plugin-free environment, md documents remain elegantly readable rather than becoming code boxes")])]),l("li",null,[t("Md source code "),l("ul",null,[l("li",null,"Effect: Open with Notepad/See the result in Ob's source mode"),l("li",null,"It will show: Convenient for you to see how this effect is written, showing the elegant and efficient plugin syntax")])])],-1)])),_:1}),e[17]||(e[17]=i('<h3 id="list2table-列表转多叉表格" tabindex="-1"><a class="header-anchor" href="#list2table-列表转多叉表格"><span>list2table (列表转多叉表格)</span></a></h3><p>This table, I call a <code>multiWay table</code>/<code>multiCross table</code>/<code>Cross table</code> (这种表格我命名为 <code>多叉表格</code>/<code>跨行表格</code>)</p><p>It is characterized by <code>multi-tree</code> structure, The table allows cross rows. (特点是结构就像 <code>多叉树</code> 一样，表格允许换行)</p><blockquote><h4 id="allows-cells-to-cross-rows-and-inline-styles、-grammar-candy-允许单元格跨行、内嵌样式、-语法糖" tabindex="-1"><a class="header-anchor" href="#allows-cells-to-cross-rows-and-inline-styles、-grammar-candy-允许单元格跨行、内嵌样式、-语法糖"><span>Allows cells to cross rows and inline styles、&#39;|&#39; grammar candy (允许单元格跨行、内嵌样式、&quot;|&quot;语法糖)</span></a></h4></blockquote><p>md-demo Describe common angiosperms and gymnosperms (描述一下常见被子植物与裸子植物)</p><p>::::mditABDemo</p>',6)),e[18]||(e[18]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table"},[l("tbody",null,[l("tr",null,[l("td",{rowspan:"6",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Gymnosperm"),l("br"),t(" 裸子植物")])])]),l("td",{rowspan:"4",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Cypress"),l("br"),t(" 松树")])])]),l("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Chinese pine"),l("br"),t(" 油松")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Buddhist pine"),l("br"),t(" 罗汉松")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("masson pine"),l("br"),t(" 马尾松")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Pinus koraiensis"),l("br"),t(" 红松")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Ginkgo"),l("br"),t(" 柏树")])])]),l("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("("),l("strong",null,"This"),t(" is "),l("s",null,"just"),t(),l("mark",null,"a"),t(),l("code",null,"style"),t(),l("em",null,"test"),t(")"),l("br"),t(" ("),l("strong",null,"这"),t(),l("s",null,"仅仅"),t(" 是 "),l("mark",null,"一个"),t(),l("code",null,"样式"),t(),l("em",null,"测试"),t(")")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Angiosperms"),l("br"),t(" 银杏")])])])]),l("tr",null,[l("td",{rowspan:"3",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Angiosperm"),l("br"),t(" 被子植物")])])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Sunflower"),l("br"),t(" 向日葵")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Lotus"),l("br"),t(" 荷花")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Chrysanthemum"),l("br"),t(" 菊花")])])]),l("td",{rowspan:"1",col_index:"3",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Chamomile"),l("br"),t(" 甘菊")])])])])])])],-1)),e[19]||(e[19]=i('<p>::::</p><blockquote><h4 id="allow-rotation-table-允许旋转-转置表格-旧" tabindex="-1"><a class="header-anchor" href="#allow-rotation-table-允许旋转-转置表格-旧"><span>Allow rotation table (允许旋转/转置表格，旧）</span></a></h4></blockquote><p><mark>(<strong>Old，Deprecated. Please use the new <code>transposition</code> or <code>transpose</code> processor</strong>)</mark></p><p><mark>(<strong>旧，弃用。请用新版的 <code>transposition</code> 或 <code>transpose</code> 处理器</strong>)</mark></p><p>(该旧版本是纯css实现，间距不理想，且如果复杂的会有bug (如多叉时)，新版修复了这个问题)</p><p>This is a comparison table between Chinese and English (这是一个中英对照表)</p><p>::::mditABDemo</p>',7)),e[20]||(e[20]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table",modet:"true"},[l("tbody",null,[l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Cypress")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"松树")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Ginkgo")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"柏树")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Angiosperms")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"银杏")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Sunflower")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"向日葵")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Lotus")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"荷花")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Chrysanthemum")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"菊花")])])])])])],-1)),e[21]||(e[21]=i('<p>::::</p><blockquote><h4 id="allow-transposed-table-允许转置表格-新版" tabindex="-1"><a class="header-anchor" href="#allow-transposed-table-允许转置表格-新版"><span>Allow Transposed table (允许转置表格，新版）</span></a></h4></blockquote><p>It&#39;s the same case, but use <code>transposition</code> or <code>transpose</code> processor.</p><p>::::mditABDemo</p><div class="ab-note drop-shadow"><table class="ab-table ab-branch-table ab-transposition"><tbody><tr><td><div><p>Ginkgo</p></div></td><td><div><p>Angiosperms</p></div></td><td><div><p>Sunflower</p></div></td><td><div><p>Lotus</p></div></td><td><div><p>Chrysanthemum</p></div></td></tr><tr><td><div><p>柏树</p></div></td><td><div><p>银杏</p></div></td><td><div><p>向日葵</p></div></td><td><div><p>荷花</p></div></td><td><div><p>菊花</p></div></td></tr></tbody></table></div><p>::::</p><p>It also support multi-cross tables.</p><p>::::mditABDemo</p>',8)),e[22]||(e[22]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table ab-transposition"},[l("tbody",null,[l("tr",null,[l("td",{rowspan:"1",colspan:"3",rowindex:"0",colindex:"0"},[l("div",null,[l("p",null,"1")])]),l("td",{rowspan:"1",colspan:"2",rowindex:"0",colindex:"3"},[l("div",null,[l("p",null,"4")])])]),l("tr",null,[l("td",{rowspan:"1",colspan:"1",rowindex:"1",colindex:"0"},[l("div",null,[l("p",null,"2")])]),l("td",{rowspan:"1",colspan:"2",rowindex:"1",colindex:"1"},[l("div",null,[l("p",null,"3")])]),l("td",{rowspan:"1",colspan:"1",rowindex:"1",colindex:"3"},[l("div",null,[l("p",null,"5")])]),l("td",{rowspan:"1",colspan:"1",rowindex:"1",colindex:"4"},[l("div",null,[l("p",null,"6")])])]),l("tr",null,[l("td",{rowspan:"1",colspan:"1",rowindex:"2",colindex:"0"},[l("div",null,[l("p",null,"_")])]),l("td",{rowspan:"1",colspan:"1",rowindex:"2",colindex:"1"},[l("div",null,[l("p",null,"3.1")])]),l("td",{rowspan:"1",colspan:"1",rowindex:"2",colindex:"2"},[l("div",null,[l("p",null,"3.2")])])])])])],-1)),e[23]||(e[23]=l("p",null,"::::",-1)),e[24]||(e[24]=l("blockquote",null,[l("h4",{id:"allows-other-blocks-to-be-embedded、allows-tabel-header-允许内嵌其他块、允许表头",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#allows-other-blocks-to-be-embedded、allows-tabel-header-允许内嵌其他块、允许表头"},[l("span",null,"Allows other blocks to be embedded、Allows tabel header (允许内嵌其他块、允许表头)")])])],-1)),e[25]||(e[25]=l("p",null,"Describe print statements for various common programming languages (描述一下各种常见编程语言的打印语句)",-1)),e[26]||(e[26]=l("p",null,"::::mditABDemo",-1)),e[27]||(e[27]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table"},[l("thead",null,[l("tr",null,[l("th",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Language"),l("br"),t("语言")])])]),l("th",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Print statement"),l("br"),t("打印语句")])])]),l("th",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("characteristic"),l("br"),t("特点")])])])])]),l("tbody",null,[l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Java")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[l("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"System"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),l("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E5C07B"}},"out"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},".")]),t(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"println"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},"("),l("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"Hello World"'),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E06C75"}},")"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")])])]),l("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[l("div",{class:"line-number"}),l("div",{class:"line-number"})])])])]),l("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("This sentence is a little long"),l("br"),t("这语句有点长")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"C")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("div",{class:"language-c line-numbers-mode","data-highlighter":"shiki","data-ext":"c","data-title":"c",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[l("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"printf"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),l("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"Hello World"'),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")])])]),l("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[l("div",{class:"line-number"})])])])]),l("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("The raw C output"),l("br"),t("原始的C输出")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"C++")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("div",{class:"language-cpp line-numbers-mode","data-highlighter":"shiki","data-ext":"cpp","data-title":"cpp",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[l("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"std::cout"),l("span",{style:{"--shiki-light":"#A626A4","--shiki-dark":"#C678DD"}},"<<"),l("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"Hello Wrold"'),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),t(`
`),l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#A0A1A7","--shiki-light-font-style":"italic","--shiki-dark":"#7F848E","--shiki-dark-font-style":"italic"}},"// <<std::end;")])])]),l("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[l("div",{class:"line-number"}),l("div",{class:"line-number"})])])])]),l("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Stream output, but this thing has a high performance overhead"),l("br"),l("br"),t(" 流输出，但是这东西开销大")]),l("blockquote",null,[l("ul",null,[l("li",null,[t("newline："),l("code",null,"<<std::end;")]),l("li",null,[t("换行: "),l("code",null,"<<std::end;")])])])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"Python")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("div",{class:"language-python line-numbers-mode","data-highlighter":"shiki","data-ext":"python","data-title":"python",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[l("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#0184BC","--shiki-dark":"#56B6C2"}},"print"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),l("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"Hello World"'),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")")])])]),l("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[l("div",{class:"line-number"})])])])]),l("td",{rowspan:"1",col_index:"6",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Note that Python2 and Python3 have different print statements"),l("br"),t("需要注意一下Python2和Python3的打印语句不同")]),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"python2"),l("th",null,"python3")])]),l("tbody",null,[l("tr",null,[l("td",null,[l("code",null,'print ""')]),l("td",null,[l("code",null,'print("")')])])])])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"JavaScript")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("div",{class:"language-js line-numbers-mode","data-highlighter":"shiki","data-ext":"js","data-title":"js",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[l("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"console"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),l("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"log"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),l("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"Hello World"'),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},");")])])]),l("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[l("div",{class:"line-number"})])])])]),l("td",{rowspan:"1",col_index:"6",class:"markdown-rendered"},[l("div",null,[l("p",null,[t("Console printing"),l("br"),t("控制台打印")])])])])])])],-1)),e[28]||(e[28]=l("p",null,"::::",-1)),e[29]||(e[29]=l("blockquote",null,[l("h4",{id:"it-makes-it-look-like-a-list-instead-of-a-table-可以让他看起来像列表而不是表格",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#it-makes-it-look-like-a-list-instead-of-a-table-可以让他看起来像列表而不是表格"},[l("span",null,"It makes it look like a list instead of a table (可以让他看起来像列表而不是表格)")])])],-1)),e[30]||(e[30]=l("p",null,"::::mditABDemo",-1)),e[31]||(e[31]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table ab-table-fc ab-table-likelist"},[l("tbody",null,[l("tr",null,[l("td",{rowspan:"2",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"A1")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"B1")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"B2")])])]),l("tr",null,[l("td",{rowspan:"4",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"A2")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"B1")])])]),l("tr",null,[l("td",{rowspan:"2",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"B2")])]),l("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,"C1")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"4",class:"markdown-rendered"},[l("div",null,[l("p",null,"C2")])]),l("td",{rowspan:"1",col_index:"6",class:"markdown-rendered"},[l("div",null,[l("p",null,"D1")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"B3")])])]),l("tr",null,[l("td",{rowspan:"2",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"A3")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"B1")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"B2")])])])])])],-1)),e[32]||(e[32]=l("p",null,[l("em",null,[t("注意：这里的头部可以用 "),l("code",null,"%%"),t(" 注释不显示，也可以用别名机制使其简短，这里只是为了展示可以串联多个ab转换器进行修改。"),l("br"),t(" 正常来说没有这么长的")])],-1)),e[33]||(e[33]=l("p",null,"::::",-1)),e[34]||(e[34]=l("p",null,"or",-1)),e[35]||(e[35]=l("p",null,"::::mditABDemo",-1)),e[36]||(e[36]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table ab-table-fc ab-table-likelist"},[l("tbody",null,[l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"A1")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("ul",null,[l("li",null,"B1"),l("li",null,"B2")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"A2")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("ul",null,[l("li",null,"B1"),l("li",null,[t("B2 "),l("ul",null,[l("li",null,"C1"),l("li",null,[t("C2 "),l("ul",null,[l("li",null,"D1")])])])]),l("li",null,"B3")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"A3")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("ul",null,[l("li",null,"B1"),l("li",null,"B2")])])])])])])],-1)),e[37]||(e[37]=i('<p>::::</p><h3 id="list2listtable-列表转列表格" tabindex="-1"><a class="header-anchor" href="#list2listtable-列表转列表格"><span>list2listTable (列表转列表格)</span></a></h3><p>This table, I call a <code>ListTable</code>/<code>TreeTable</code>/<code>TreeGrid</code> (这种表格我命名为 <code>列表格</code>/<code>树形表格</code>)</p><p>The characteristic is that it basically conforms to multi-tree, but each tree node allows annotations. (特点是基本符合多叉树，但每个树节点允许存在注释)</p><p>When used to represent a file directory, it is also called a <code>CatalogTable</code> (当用于表示文件目录时，也叫 <code>目录表</code>)</p><blockquote><h4 id="allow-folding-允许折叠" tabindex="-1"><a class="header-anchor" href="#allow-folding-允许折叠"><span>Allow Folding (允许折叠)</span></a></h4></blockquote><p>md-demo This is the hierarchy of a certain company (这是某个公司的层次结构)</p><p>You can click on the row with the arrow and fold it (你可以点击有箭头的行，进行折叠)</p><p>（DEV TODO：fix bug：多行时，折叠功能似乎存在问题）</p><p>::::mditABDemo</p>',10)),e[38]||(e[38]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-list-table"},[l("thead",null,[l("tr",null,[l("th",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[t("Company name"),l("br"),t("公司名")])])])]),l("th",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[t("Superior section"),l("br"),t("上级部门")])])])]),l("th",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[t("Principal"),l("br"),t("负责人")])])])]),l("th",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[t("Phone"),l("br"),t("电话")])])])])])]),l("tbody",null,[l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"==ABC head office=="},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 0
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[l("mark",null,"ABC head office")])])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div")])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div")])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div")])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"**Shanghai branch**"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 1
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[l("strong",null,"Shanghai branch")])])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[l("mark",null,"ABC head office")])])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"ZhangSan")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"13&xxxxxxxx")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"true",type:"Marketing section"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 2
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"Marketing section")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[l("strong",null,"Shanghai branch")])])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"LiSi")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"_")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"Marketing Division 1"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 3
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"Marketing Division 1")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div")])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div")])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div")])])]),l("tr",{class:"ab-foldable-tr",tr_level:"3",is_fold:"false",able_fold:"false",type:"Marketing Division 2"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 4
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"Marketing Division 2")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div")])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div")])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div")])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Sales section"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 5
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"Sales section")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[l("strong",null,"Shanghai branch")])])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"WangWu")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"15&xxxxxxxx")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"*Beijing branch*"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 6
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[l("em",null,"Beijing branch")])])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[l("mark",null,"ABC head office")])])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"ChenLiu")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"16&xxxxxxxx")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Technical division"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 7
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"Technical division")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[l("em",null,"Beijing branch")])])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"OuYang")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"17&xxxxxxxx")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"Finance"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 8
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"Finance")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[l("em",null,"Beijing branch")])])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"HuangPu")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("table",null,[l("thead",null,[l("tr",{onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 9
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("th",null,"self"),l("th",null,"father"),l("th",null,"mother")])]),l("tbody",null,[l("tr",null,[l("td",{onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 10
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},"201xxxxx"),l("td",null,"202xxxxx"),l("td",null,"203xxxxx")])])])])])])])]),l("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1)),e[39]||(e[39]=l("p",null,"::::",-1)),e[40]||(e[40]=l("blockquote",null,[l("h4",{id:"it-makes-it-look-like-a-list-instead-of-a-table-可以让他看起来像列表而不是表格-1",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#it-makes-it-look-like-a-list-instead-of-a-table-可以让他看起来像列表而不是表格-1"},[l("span",null,"It makes it look like a list instead of a table (可以让他看起来像列表而不是表格)")])])],-1)),e[41]||(e[41]=l("p",null,'This is also called "optimizing list" (这也叫优化列表)',-1)),e[42]||(e[42]=l("p",null,'The essence is "listtable" based on the addition of a mock list style (本质是 "列表格" 的基础上增加仿列表样式)',-1)),e[43]||(e[43]=l("p",null,"::::mditABDemo",-1)),e[44]||(e[44]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-list-table ab-listtable-likelist"},[l("tbody",null,[l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 0
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"vue-demo/")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 1
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"build/")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"项目构建(webpack)相关代码")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 2
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"config/")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"配置目录，包括端口号等。我们初学可以使用默认的")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 3
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"node_modules/")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"npm 加载的项目依赖模块")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 4
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"src/")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"这里是我们要开发的目录")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 5
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"assets/")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"放置一些图片，如logo等")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"components"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 6
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"components")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"目录里面放了一个组件文件，可以不用")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"vue"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 7
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"App.vue")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"js"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 8
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"main.js")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"项目的核心文件。")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 9
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"static/")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"静态资源目录，如图片、字体等")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 10
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"test/")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"初始测试目录，可删除")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"eslintignore"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 11
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,".eslintignore")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"gitignore"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 12
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,".gitignore")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"git配置")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"html"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 13
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,".index.html")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"首页入口文件，你可以添加一些 meta 信息或统计代码啥的")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"json"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 14
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"package.json")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"项目配置文件")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"md"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 15
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"READED.md")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[t("项目的说明文档，markdown 格式"),l("br"),t("手动换行测试"),l("br"),t("自动换行测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试k")])])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:`
`},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 16
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"...")])])])])]),l("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1)),e[45]||(e[45]=l("p",null,"::::",-1)),e[46]||(e[46]=l("blockquote",null,[l("h4",{id:"allow-presentation-a-file-directory-允许表示为文件目录",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#allow-presentation-a-file-directory-允许表示为文件目录"},[l("span",null,"Allow presentation a file directory (允许表示为文件目录)")])])],-1)),e[47]||(e[47]=l("p",null,'The essence is "listtable" based on the addition of imitation directory style (本质是"列表格"的基础上增加仿目录样式)',-1)),e[48]||(e[48]=l("p",null,"::::mditABDemo",-1)),e[49]||(e[49]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-list-table ab-table-folder"},[l("tbody",null,[l("tr",{class:"ab-foldable-tr",tr_level:"0",is_fold:"false",able_fold:"true",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 0
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"vue-demo")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 1
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"build")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"项目构建(webpack)相关代码")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 2
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"config")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"配置目录，包括端口号等。我们初学可以使用默认的")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 3
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"node_modules")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"npm 加载的项目依赖模块")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"true",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 4
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"src")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"这里是我们要开发的目录")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 5
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"assets")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"放置一些图片，如logo等")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"components"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 6
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"components")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"目录里面放了一个组件文件，可以不用")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"vue"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 7
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"App.vue")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"项目入口文件，我们也可以直接将组件写这里，而不使用 components 目录")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"2",is_fold:"false",able_fold:"false",type:"js"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 8
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"main.js")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"项目的核心文件。")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 9
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"static")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"静态资源目录，如图片、字体等")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"folder"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 10
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H288c-10.1 0-19.6-4.7-25.6-12.8L243.2 57.6C231.1 41.5 212.1 32 192 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"test")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"初始测试目录，可删除")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"eslintignore"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 11
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,".eslintignore")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"gitignore"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 12
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,".gitignore")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"git配置")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"html"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 13
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,".index.html")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"首页入口文件，你可以添加一些 meta 信息或统计代码啥的")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"json"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 14
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"package.json")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"项目配置文件")])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:"md"},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 15
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"READED.md")])])]),l("td",{rowspan:"1"},[l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,[t("项目的说明文档，markdown 格式"),l("br"),t("手动换行测试"),l("br"),t("自动换行测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试k")])])])])]),l("tr",{class:"ab-foldable-tr",tr_level:"1",is_fold:"false",able_fold:"false",type:`
`},[l("td",{rowspan:"1",onclick:`
          const tr = (this.tagName == "TD") ? this.parentNode : this
          const l_tr = tr.parentNode.querySelectorAll("tr")
          const i = 16
          const tr_level = Number(tr.getAttribute("tr_level"))
          if (isNaN(tr_level)) return
          const tr_isfold = tr.getAttribute("is_fold")
          if (!tr_isfold) return
          let flag_do_fold = false  // 防止折叠最小层
          for (let j=i+1; j<l_tr.length; j++){
            const tr2 = l_tr[j]
            const tr_level2 = Number(tr2.getAttribute("tr_level"))
            if (isNaN(tr_level2)) break
            if (tr_level2<=tr_level) break
            (tr_isfold == "true") ? tr2.style.display = "" : tr2.style.display = "none"
            flag_do_fold = true
          }
          if (flag_do_fold) tr.setAttribute("is_fold", tr_isfold=="true"?"false":"true")
          `},[l("div",{class:"ab-list-table-svg"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512"},[s("!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc."),l("path",{d:"M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z"})])]),l("div",{class:"ab-list-table-witharrow markdown-rendered"},[l("div",null,[l("p",null,"...")])])])])]),l("button",{class:"ab-table-fold",is_fold:"false"},"全部折叠/展开")])],-1)),e[50]||(e[50]=i(`<p>::::</p><p>Ascii Tree</p><p>::::mditABDemo</p><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vue-demo/</span></span>
<span class="line"><span>├─ build/</span></span>
<span class="line"><span>├─ config/</span></span>
<span class="line"><span>├─ src/</span></span>
<span class="line"><span>|  ├─ assets/</span></span>
<span class="line"><span>|  |  └─ a/</span></span>
<span class="line"><span>|  |     └─ b</span></span>
<span class="line"><span>|  └─ components</span></span>
<span class="line"><span>├─ .babelrc</span></span>
<span class="line"><span>├─ .editorconfig</span></span>
<span class="line"><span>└─ ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></div></div><p>::::</p><p>WBS (Work Breakdown Structure, 工作分解结构)</p><p>::::mditABDemo</p><div class="ab-note drop-shadow"><img src="http://www.plantuml.com/plantuml/img/9Oun3iCm30DtlqApWIOVo92-f70ifN0HIqOajz-leqn7SY2vggNJVfk62DzE3wGgSuWHjbuET9M5z_9soOBqgeBz8FL0ptmnBf1KoJnqvnmjDnV8BW1lq8LHN9imiQdRPslJkE2wfiBJHtt2aXLV0IErEOIL6CVZFm00"></div><p>::::</p><h3 id="list2ut-列表转数据表格" tabindex="-1"><a class="header-anchor" href="#list2ut-列表转数据表格"><span>list2ut (列表转数据表格)</span></a></h3><p>This table, I call a <code>DataTable</code> (这种表格我命名为 <code>数据表格</code>)</p><p>The feature is that cells are not allowed to cross rows or columns (特点是单元格不允许跨行或跨列)</p><blockquote><h4 id="allow-filter-sorting-and-other-operations-but-developing-允许筛选排序等操作-但该功能开发中" tabindex="-1"><a class="header-anchor" href="#allow-filter-sorting-and-other-operations-but-developing-允许筛选排序等操作-但该功能开发中"><span>Allow filter sorting and other operations, but developing (允许筛选排序等操作，但该功能开发中)</span></a></h4></blockquote><p>描述一下你对下面各种水果的看法</p><p>::::mditABDemo</p>`,15)),e[51]||(e[51]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table"},[l("thead",null,[l("tr",null,[l("th",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"水果")])]),l("th",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"颜色")])]),l("th",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"英文")])])])]),l("tbody",null,[l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"苹果")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"红色")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"apple")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"香蕉")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"黄色")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"banana")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"橘子")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"橙色")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"orange")])])])])])],-1)),e[52]||(e[52]=l("p",null,"::::",-1)),e[53]||(e[53]=l("blockquote",null,[l("h4",{id:"another-way-to-write-it-另一种写法",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#another-way-to-write-it-另一种写法"},[l("span",null,"Another way to write it (另一种写法)")])])],-1)),e[54]||(e[54]=l("p",null,[t("或者（"),l("em",null,"该功能未完善，等待后续开发"),t("）")],-1)),e[55]||(e[55]=l("p",null,"demo 另一种写法",-1)),e[56]||(e[56]=l("p",null,"::::mditABDemo",-1)),e[57]||(e[57]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table"},[l("tbody",null,[l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"苹果")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"颜色: 红色")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"英文: apple")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"香蕉")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"颜色: 黄色")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"英文: banana")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"橘子")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"颜色: 橙色")])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"英文: orange")])])])])])],-1)),e[58]||(e[58]=l("p",null,"::::",-1)),e[59]||(e[59]=l("blockquote",null,[l("h4",{id:"lists-above-level-2-are-considered-part-of-the-content-二级以上的列表视为内容的一部分",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#lists-above-level-2-are-considered-part-of-the-content-二级以上的列表视为内容的一部分"},[l("span",null,"Lists above level 2 are considered part of the content (二级以上的列表视为内容的一部分)")])])],-1)),e[60]||(e[60]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table"},[l("tbody",null,[l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"该模式下只能用二层列表01")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"多了无效1"),l("ul",null,[l("li",null,"多了无效11"),l("li",null,"多了无效12")])])]),l("td",{rowspan:"1",col_index:"2",class:"markdown-rendered"},[l("div",null,[l("p",null,"多了无效2"),l("ul",null,[l("li",null,"多了视为内容21"),l("li",null,[l("blockquote",null,[l("p",null,"kll (这里有bug，没缩进)")])]),l("li",null,"多了视为内容22")])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"该模式下只能用二层列表02")])])])])])],-1)),e[61]||(e[61]=i('<h3 id="list2tctable-列表转两列表格" tabindex="-1"><a class="header-anchor" href="#list2tctable-列表转两列表格"><span>List2tctable (列表转两列表格)</span></a></h3><p>This table, I call a <code>Two-column table</code> (这种表格我命名为 <code>两列表格</code>)</p><p>The feature is that the table does not allow cross-row and cross-column, and only two columns (特点是表格不允许跨行和跨列，且只有两列)</p><h4 id="timeline-时间线" tabindex="-1"><a class="header-anchor" href="#timeline-时间线"><span>timeline (时间线)</span></a></h4><p>Can be used as a timeline, but developing (可以当时间线使用, 但开发中)</p><p>@todo 这里样式可以再优化一下，目前看起来是和2ut的效果一样的</p><p>@attension 这里在渲染模式可能与table-extended插件冲突</p><p>::::mditABDemo</p>',8)),e[62]||(e[62]=l("div",{class:"ab-note drop-shadow"},[l("table",{class:"ab-table ab-branch-table ab-table-timeline ab-table-fc"},[l("tbody",null,[l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"1840-06")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"英军发动鸦片战争")])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"1842-08")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"清政府与英国签订《南京条约》:"),l("ol",null,[l("li",null,"中国割让香港岛给英国;"),l("li",null,"赔款洋银2100万元;"),l("li",null,"开放广州、厦门、福州、宁波、上海五处为通商口岸;")]),l("div",{class:"callout","data-callout":"note"},[l("div",{class:"callout-title"},[l("div",{class:"callout-title-icon"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-pencil"},[l("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}),l("path",{d:"m15 5 4 4"})])]),l("div",{class:"callout-title-inner"},"Note")]),l("div",{class:"callout-content"},[l("p",null,"《南京条约》影响"),l("ol",null,[l("li",null,"中国近代史上第一个不平等条约，给中国人民带来深重的灾难，开创了列强以条约形式侵略和奴役中国的恶例;"),l("li",null,"中国的国家主权和领土完整遭到破坏，逐步沦为半殖民地半封建社会;"),l("li",null,"中国社会的主要矛盾由地主阶级与农民阶级的矛盾，演变为帝国主义和中华民族的矛盾（主要矛盾)、封建主义和人民大众的矛盾;"),l("li",null,"反侵略反封建成为中国人民肩负的两大历史任务;"),l("li",null,"中国逐渐开始了反帝反封建的资产阶级民主革命。")])])])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"1841-05")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"三元里人民的抗英斗争，是中国近代史上中国人民第一次大规模的反侵略武装斗争。"),l("blockquote",null,[l("p",null,[l("img",{src:"https://tse1-mm.cn.bing.net/th/id/R-C.4bbce1406f4442c1360edde26baa894d?rik=iHeUeby0jS5lnw&riu=http%3A%2F%2Fp8.qhmsg.com%2Fdr%2F270_500_%2Ft01dbb76ff833d0a159.jpg&ehk=yggnC0t62%2B6DEVjvBgs%2FXJuuexBucd66FTc5gL0Gw%2FA%3D&risl=&pid=ImgRaw&r=0",alt:" ",loading:"lazy"})])])])])]),l("tr",null,[l("td",{rowspan:"1",col_index:"0",class:"markdown-rendered"},[l("div",null,[l("p",null,"1851-01")])]),l("td",{rowspan:"1",col_index:"1",class:"markdown-rendered"},[l("div",null,[l("p",null,"洪秀全金田村发动起义，建号太平天国。1853年3月，占领南京,定为首都,改名天京，正式宜告太平天国农民政权的建立。颁布《天朝天亩制度》、天平军北伐")])])])])])],-1)),e[63]||(e[63]=l("p",null,"::::",-1)),e[64]||(e[64]=l("h4",{id:"tabs-标签页",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#tabs-标签页"},[l("span",null,"Tabs (标签页)")])],-1)),e[65]||(e[65]=l("p",null,"Can be used as a TAB page, but developing",-1)),e[66]||(e[66]=l("p",null,"可以点击标签栏切换",-1)),e[67]||(e[67]=l("p",null,"How to install python on each platform (python在各平台上的安装方法)：",-1)),e[68]||(e[68]=l("p",null,"::::mditABDemo",-1)),e[69]||(e[69]=l("div",{class:"ab-note drop-shadow"},[l("div",{class:"ab-tab-root"},[l("div",{class:"ab-tab-nav"},[l("button",{class:"ab-tab-nav-item",is_activate:"true",onclick:`
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
          `},"linux"),l("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
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
          `},"windows"),l("button",{class:"ab-tab-nav-item",is_activate:"false",onclick:`
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
          `},"macOS")]),l("div",{class:"ab-tab-content"},[l("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"block"},is_activate:"true"},[l("div",null,[l("ul",null,[l("li",null,[t("可以通过执行以下命令在终端中使用 apt 包安装程序："),l("div",{class:"language-shell line-numbers-mode","data-highlighter":"shiki","data-ext":"shell","data-title":"shell",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[l("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"apt-get"),l("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),l("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," python3.6")])])]),l("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[l("div",{class:"line-number"})])])])])])]),l("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[l("div",null,[l("ul",null,[l("li",null,[t("转到官方 Python 站点，并导航到最新版本。在撰写本文时，即 "),l("code",null,"3.10.6"),t("。")]),l("li",null,"下载适用于您平台的二进制文件。执行二进制。"),l("li",null,[t("除了将 Python 添加到 "),l("code",null,"PATH"),t(" 之外，您不需要选择任何选项，因为默认安装程序具有您需要的一切。只需单击“安装”即可。")])])])]),l("div",{class:"ab-tab-content-item markdown-rendered",style:{display:"none"},is_activate:"false"},[l("div",null,[l("ul",null,[l("li",null,[t("转到官方 Python 站点，并导航到最新版本。在撰写本文时，即 "),l("code",null,"3.10.6"),t("。")]),l("li",null,"下载适用于您平台的二进制文件。执行二进制。"),l("li",null,"在 Mac 上，这将默认在 dmg 安装程序中完成。")])])])])])],-1)),e[70]||(e[70]=i('<p>::::</p><h4 id="card-卡片" tabindex="-1"><a class="header-anchor" href="#card-卡片"><span>Card (卡片)</span></a></h4><p>::::mditABDemo</p><div class="ab-note drop-shadow"><div class="ab-items ab-card ab-lay-vfall ab-col3"><div class="ab-items-item"><div class="ab-items-title markdown-rendered"><div><p>card1</p></div></div><div class="ab-items-content markdown-rendered"><div><p>card1_item<br><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">1+1=2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span></p></div></div></div><div class="ab-items-item"><div class="ab-items-title markdown-rendered"><div><p>card2</p></div></div><div class="ab-items-content markdown-rendered"><div><p>card2_item</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></div></div></div><div class="ab-items-item"><div class="ab-items-title markdown-rendered"><div><p>card3</p></div></div><div class="ab-items-content markdown-rendered"><div><p>card3_item<br><strong>Bold</strong> <em>italics</em> <mark>highlight</mark> <s>delete</s></p><ul><li>list1</li><li>list2</li><li>list3</li></ul></div></div></div></div></div><p>::::</p><h3 id="list2pic-转图像" tabindex="-1"><a class="header-anchor" href="#list2pic-转图像"><span>list2pic 转图像</span></a></h3><h4 id="to-flow-转mermaid流程图" tabindex="-1"><a class="header-anchor" href="#to-flow-转mermaid流程图"><span>to flow (转mermaid流程图)</span></a></h4><p>（补充：其本质是转化为 <code>graph TB</code> <a href="https://mermaid.js.org/syntax/flowchart.html" target="_blank" rel="noopener noreferrer">语法</a>.所以除了常规操作，你还可以进行一些其他操作：<br><strong>例如指定别名、进行树结构以外的连接</strong>）</p><p>demo：描述一下树设计的脑图</p><p>::::mditABDemo</p>',10)),d(u,{id:"mermaid-485",code:"eJxLL0osyFDwCeLierZg4vPdk5/Na1HQ1bVTeDp/17M5a57NWf9i/VqwgCMXhpCThpOTJqaws4azsyZUD6qhzxqWv9iyAqtNL/ZPeL5uOprUk109T/s7gWIQhR1tz6asN+TCJmrEBQDk9GR4"}),e[71]||(e[71]=i('<p>::::</p><h4 id="to-pumlmindmap-转plantuml思维导图" tabindex="-1"><a class="header-anchor" href="#to-pumlmindmap-转plantuml思维导图"><span>to pumlMindmap (转plantuml思维导图)</span></a></h4><p>推荐轻量级使用 (不内嵌md)</p><p>::::mditABDemo</p><div class="ab-note drop-shadow"><img src="http://www.plantuml.com/plantuml/img/9OvB3iCm24JtFeNNbffS8Jr9vHeQKGMm0kxvwv3LV90UivdNqva4kFPKyc_W0v1rJQNazw03mZML3-rXHG5Vh30Ej2ZiR9UMNCtGexl2hHCIjwRSLL3S8ZvxN-Qhy5n9bgy5ogjJqBAZ-PhIXdFPlUuF"></div><p>::::</p><h4 id="to-nodes-转节点树图-anyblock版思维导图" tabindex="-1"><a class="header-anchor" href="#to-nodes-转节点树图-anyblock版思维导图"><span>to nodes (转节点树图，AnyBlock版思维导图)</span></a></h4><p>在obsidian环境中，如果这部分显示不正确，可以鼠标悬浮在上面并点击右上角的刷新按钮</p><p>::::mditABDemo</p>',9)),e[72]||(e[72]=l("div",{class:"ab-note drop-shadow"},[l("div",{class:"ab-nodes"},[l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Links")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://markmap.js.org/",target:"_blank",rel:"noopener noreferrer"},"Website")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://github.com/gera2ld/markmap",target:"_blank",rel:"noopener noreferrer"},"GitHub")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])]),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Related Projects")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[t("test 1-1-3"),l("br"),t(" test inline wrap")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://github.com/gera2ld/coc-markmap",target:"_blank",rel:"noopener noreferrer"},"coc-markmap"),t(" for Neovim")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode",target:"_blank",rel:"noopener noreferrer"},"markmap-vscode"),t(" for VSCode")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://github.com/emacs-eaf/eaf-markmap",target:"_blank",rel:"noopener noreferrer"},"eaf-markmap"),t(" for Emacs")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])])])]),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Features")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Lists")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("strong",null,"strong"),t(),l("s",null,"del"),t(),l("em",null,"italic"),t(),l("mark",null,"highlight")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("code",null,"inline code")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"[x] checkbox")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[t("Katex: "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"x"),l("mo",null,"="),l("mfrac",null,[l("mrow",null,[l("mo",null,"−"),l("mi",null,"b"),l("mo",null,"±"),l("msqrt",null,[l("mrow",null,[l("msup",null,[l("mi",null,"b"),l("mn",null,"2")]),l("mo",null,"−"),l("mn",null,"4"),l("mi",null,"a"),l("mi",null,"c")])])]),l("mrow",null,[l("mn",null,"2"),l("mi",null,"a")])])]),l("annotation",{encoding:"application/x-tex"},"x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.4306em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1.3845em","vertical-align":"-0.345em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},[l("span",{class:"mopen nulldelimiter"}),l("span",{class:"mfrac"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.0395em"}},[l("span",{style:{top:"-2.655em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"2"),l("span",{class:"mord mathnormal mtight"},"a")])])]),l("span",{style:{top:"-3.23em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),l("span",{style:{top:"-3.394em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"−"),l("span",{class:"mord mathnormal mtight"},"b"),l("span",{class:"mbin mtight"},"±"),l("span",{class:"mord sqrt mtight"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.9221em"}},[l("span",{class:"svg-align",style:{top:"-3em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord mtight",style:{"padding-left":"0.833em"}},[l("span",{class:"mord mtight"},[l("span",{class:"mord mathnormal mtight"},"b"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.7463em"}},[l("span",{style:{top:"-2.786em","margin-right":"0.0714em"}},[l("span",{class:"pstrut",style:{height:"2.5em"}}),l("span",{class:"sizing reset-size3 size1 mtight"},[l("span",{class:"mord mtight"},"2")])])])])])])]),l("span",{class:"mbin mtight"},"−"),l("span",{class:"mord mtight"},"4"),l("span",{class:"mord mathnormal mtight"},"a"),l("span",{class:"mord mathnormal mtight"},"c")])]),l("span",{style:{top:"-2.8821em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"hide-tail mtight",style:{"min-width":"0.853em",height:"1.08em"}},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[l("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.1179em"}},[l("span")])])])])])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.345em"}},[l("span")])])])]),l("span",{class:"mclose nulldelimiter"})])])])])])])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Katex_mutilLine:"),l("p",{class:"katex-block"},[l("span",{class:"katex-display"},[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[l("semantics",null,[l("mrow",null,[l("mi",null,"x"),l("mo",null,"="),l("mfrac",null,[l("mrow",null,[l("mo",null,"−"),l("mi",null,"b"),l("mo",null,"±"),l("msqrt",null,[l("mrow",null,[l("msup",null,[l("mi",null,"b"),l("mn",null,"2")]),l("mo",null,"−"),l("mn",null,"4"),l("mi",null,"a"),l("mi",null,"c")])])]),l("mrow",null,[l("mn",null,"2"),l("mi",null,"a")])])]),l("annotation",{encoding:"application/x-tex"},"x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a} ")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.4306em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"2.2764em","vertical-align":"-0.686em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},[l("span",{class:"mopen nulldelimiter"}),l("span",{class:"mfrac"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.5904em"}},[l("span",{style:{top:"-2.314em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"2"),l("span",{class:"mord mathnormal"},"a")])]),l("span",{style:{top:"-3.23em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),l("span",{style:{top:"-3.677em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"−"),l("span",{class:"mord mathnormal"},"b"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"±"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mord sqrt"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.9134em"}},[l("span",{class:"svg-align",style:{top:"-3em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord",style:{"padding-left":"0.833em"}},[l("span",{class:"mord"},[l("span",{class:"mord mathnormal"},"b"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.7401em"}},[l("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[l("span",{class:"pstrut",style:{height:"2.7em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},"2")])])])])])])]),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mord"},"4"),l("span",{class:"mord mathnormal"},"a"),l("span",{class:"mord mathnormal"},"c")])]),l("span",{style:{top:"-2.8734em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[l("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.1266em"}},[l("span")])])])])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.686em"}},[l("span")])])])]),l("span",{class:"mclose nulldelimiter"})])])])])])])])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md"},"More Katex Examples")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("div",{class:"callout","data-callout":"note"},[l("div",{class:"callout-title"},[l("div",{class:"callout-title-icon"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-pencil"},[l("path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"}),l("path",{d:"m15 5 4 4"})])]),l("div",{class:"callout-title-inner"},"Note")]),l("div",{class:"callout-content"},[l("p",null,[t("Now we can wrap very very very very long text based on "),l("code",null,"maxWidth"),t(" option")])])])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Blocks")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("div",{class:"language-javascript line-numbers-mode","data-highlighter":"shiki","data-ext":"javascript","data-title":"javascript",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[l("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"console"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),l("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"log"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),l("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"hello, JavaScript"'),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")")])])]),l("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[l("div",{class:"line-number"})])])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Products"),l("th",null,"Price")])]),l("tbody",null,[l("tr",null,[l("td",null,"Apple"),l("td",null,"4")]),l("tr",null,[l("td",null,"Banana"),l("td",null,"2")])])])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("img",{src:"https://markmap.js.org/favicon.png",alt:"",loading:"lazy"})])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])])])])],-1)),e[73]||(e[73]=l("p",null,"::::",-1)),e[74]||(e[74]=l("p",null,"min 样式，更紧凑、样式上也更像 markmap",-1)),e[75]||(e[75]=l("ul",null,[l("li",null,"差异问题：由于非svg而是div，根据平台的不同可能会有微小差异引起的问题。普通版的有差异问题不大，但min样式的细小差异可能影响较大"),l("li",null,"差异因素：例如像box-sizing的默认策略，例如高度除以2向哪取整数"),l("li",null,"差异修复：关于小数的问题：之前试过手动指定取整范围，但也无法保证。可能可以用“小圆点”来使视觉差异减少。另一个方法是用高度差计算，而不应该用 height/2或calc(50%) 这一类来计算，后期有空再改"),l("li",null,"差异适配：当前主要面对obsidian和vuepress-theme-hope做适配，对ob的适配也是最好的")],-1)),e[76]||(e[76]=l("p",null,"::::mditABDemo",-1)),e[77]||(e[77]=l("div",{class:"ab-note drop-shadow"},[l("div",{class:"ab-nodes min"},[l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Links")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://markmap.js.org/",target:"_blank",rel:"noopener noreferrer"},"Website")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Test")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Test2")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])])])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://github.com/gera2ld/markmap",target:"_blank",rel:"noopener noreferrer"},"GitHub")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])]),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Related Projects")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[t("test 1-1-3"),l("br"),t(" test inline wrap")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://github.com/gera2ld/coc-markmap",target:"_blank",rel:"noopener noreferrer"},"coc-markmap"),t(" for Neovim")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://marketplace.visualstudio.com/items?itemName=gera2ld.markmap-vscode",target:"_blank",rel:"noopener noreferrer"},"markmap-vscode"),t(" for VSCode")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"https://github.com/emacs-eaf/eaf-markmap",target:"_blank",rel:"noopener noreferrer"},"eaf-markmap"),t(" for Emacs")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])])])]),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Features")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Lists")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Inline")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("strong",null,"strong"),t(),l("s",null,"del"),t(),l("em",null,"italic"),t(),l("mark",null,"highlight")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("code",null,"inline code")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"[x] checkbox")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])]),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"katex")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[t("Katex: "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"x"),l("mo",null,"="),l("mfrac",null,[l("mrow",null,[l("mo",null,"−"),l("mi",null,"b"),l("mo",null,"±"),l("msqrt",null,[l("mrow",null,[l("msup",null,[l("mi",null,"b"),l("mn",null,"2")]),l("mo",null,"−"),l("mn",null,"4"),l("mi",null,"a"),l("mi",null,"c")])])]),l("mrow",null,[l("mn",null,"2"),l("mi",null,"a")])])]),l("annotation",{encoding:"application/x-tex"},"x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.4306em"}}),l("span",{class:"mord mathnormal"},"x"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"1.3845em","vertical-align":"-0.345em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},[l("span",{class:"mopen nulldelimiter"}),l("span",{class:"mfrac"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.0395em"}},[l("span",{style:{top:"-2.655em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"2"),l("span",{class:"mord mathnormal mtight"},"a")])])]),l("span",{style:{top:"-3.23em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),l("span",{style:{top:"-3.394em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"sizing reset-size6 size3 mtight"},[l("span",{class:"mord mtight"},[l("span",{class:"mord mtight"},"−"),l("span",{class:"mord mathnormal mtight"},"b"),l("span",{class:"mbin mtight"},"±"),l("span",{class:"mord sqrt mtight"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.9221em"}},[l("span",{class:"svg-align",style:{top:"-3em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord mtight",style:{"padding-left":"0.833em"}},[l("span",{class:"mord mtight"},[l("span",{class:"mord mathnormal mtight"},"b"),l("span",{class:"msupsub"},[l("span",{class:"vlist-t"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.7463em"}},[l("span",{style:{top:"-2.786em","margin-right":"0.0714em"}},[l("span",{class:"pstrut",style:{height:"2.5em"}}),l("span",{class:"sizing reset-size3 size1 mtight"},[l("span",{class:"mord mtight"},"2")])])])])])])]),l("span",{class:"mbin mtight"},"−"),l("span",{class:"mord mtight"},"4"),l("span",{class:"mord mathnormal mtight"},"a"),l("span",{class:"mord mathnormal mtight"},"c")])]),l("span",{style:{top:"-2.8821em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"hide-tail mtight",style:{"min-width":"0.853em",height:"1.08em"}},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[l("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.1179em"}},[l("span")])])])])])])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.345em"}},[l("span")])])])]),l("span",{class:"mclose nulldelimiter"})])])])])])])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("a",{href:"#?d=gist:af76a4c245b302206b16aec503dbe07b:katex.md"},"More Katex Examples")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])]),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"loogTest")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"loogTest")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[t("Now we can wrap very very very very long text based on "),l("code",null,"maxWidth"),t(" option")])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])])])])])]),l("div",{class:"ab-nodes-node",has_children:"true"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,"Blocks")])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"}),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("div",{class:"language-javascript line-numbers-mode","data-highlighter":"shiki","data-ext":"javascript","data-title":"javascript",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[l("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#E5C07B"}},"console"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"."),l("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"log"),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"("),l("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"hello, JavaScript"'),l("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},")")])])]),l("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[l("div",{class:"line-number"})])])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Products"),l("th",null,"Price")])]),l("tbody",null,[l("tr",null,[l("td",null,"Apple"),l("td",null,"4")]),l("tr",null,[l("td",null,"Banana"),l("td",null,"2")])])])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])]),l("div",{class:"ab-nodes-node",has_children:"false"},[l("div",{class:"ab-nodes-content markdown-rendered"},[l("div",null,[l("p",null,[l("img",{src:"https://markmap.js.org/favicon.png",alt:"",loading:"lazy"})])])]),l("div",{class:"ab-nodes-children"},[l("div",{class:"ab-nodes-bracket"}),l("div",{class:"ab-nodes-bracket2"})])])])])])])])])],-1)),e[78]||(e[78]=l("p",null,"::::",-1)),e[79]||(e[79]=l("h4",{id:"to-markmap-转markmap思维导图",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#to-markmap-转markmap思维导图"},[l("span",null,"to markmap (转markmap思维导图)")])],-1)),e[80]||(e[80]=l("p",null,"推荐需要内嵌md时，或需要拖拽折叠等操作时使用",-1)),e[81]||(e[81]=l("p",null,"::::mditABDemo",-1)),d(b,{id:"markmap-556",content:"eJx9U21v0zAQ/t5fcRv70FY4LVnXSRVhYmiAYFSISexDW5SLc03cOnGInTRoXX87zsvEmLTJinW+e+65504XBtci3eoeAIPFLQVaGFr1Y2MyPRuNEsy3CWbORjsqj0aDFvZJmM9F8A8VCRMXgcNVMoooR1eGD4mDHoMfJNFQCN9ztSFuulJccdaBXiR6hBvAWuUwJ1WKpCXpAqzUXIVPZJPJJHJySqELlNoUoVANs20w0Rf1PceEvK6Q8z9XW+vnzQdrt7UI1y8KpgS5ZhY1eoRsaa7qkJ3ER0JT5NRO4FroZha1PRxqk6s0Gg7hcAhJHg4wFAal4EPwvFhEsbSf8bwO74tUipSgVup3vkW1Ah4T3waq6lxf7dyrGZxU4MEdC2CZJbDUv3NzF/xy2QT5PSxVSTm4eH8Cb5dHjEEnfGaFyxAYe/dA/03l1DLCVYVJJkmv+q8uQi+yjcxwfT7FCXcnZ8Hp2HXH0+DNFImfjU/DgMbnwWxbZzpJWK9QzTdXO9jZDjCFXY4ZWBl/nl7SjgRsmoEAtd0glYKfYHUrQhP7oDIjVNrM8lIq3u1wQ+/7/gZL1DwXmWk8XKVaSXKkivrHMUmpXsMXC7lpIMetKpvWcOztqoaFXVVrCE77Jrhn9rTW+8x2v590r0tM7dm79ZPB0eLZv2eNpbA6nCyNBr2/u1Yf7g=="}),e[82]||(e[82]=l("p",null,"::::",-1)),e[83]||(e[83]=l("h4",{id:"to-mermaid-mindmap-转mermaid思维导图",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#to-mermaid-mindmap-转mermaid思维导图"},[l("span",null,"to mermaid mindmap (转mermaid思维导图)")])],-1)),e[84]||(e[84]=l("p",null,[t("（由于ob的mermaid版本较低，没有mindmap，所以这里插件内置了一个新的mermaid）"),l("br"),t(" （当然缺点是：插件大小从200KB变为了9MB多，等到ob更新mermaid版本我会将插件内置的那份给去除掉的）")],-1)),e[85]||(e[85]=l("p",null,"很多符号限制，而且样式我觉得一般。这是旧版anyblock中所使用到的思维导图，最新版本个人不再推荐使用",-1)),e[86]||(e[86]=l("p",null,"这里我就直接使用mermaid官方给的例子了:",-1)),e[87]||(e[87]=l("p",null,"::::mditABDemo",-1)),d(u,{id:"mermaid-575",code:"eJxNkMFOwzAMhu97Ch+7A+I+IaSNK2gTjAfwUjexaO3gJJPK05OmEyyn+P/82788sfQTxo2p5q67VdvtBuBo7FlS/QG8qngInLLa3ITdjp1KNyAM+HBR/VocACeNZUTjhJlVmgRwMM6cAsQVQkyzCzqqnwFLDmpwVpnhUH5wsbxTIjQXmvsoQMNALvOVhFJ6utjjM0oPA2EuRmu82rUvWae61YGziv63f6Zb0/JeGrsSZHJB+LvcsY9smMnXCXFEERb/h/bmy0SSod4mruCsOq7eEwksiSJGsqa8kU3Ifcv6CwNJbzM="}),e[88]||(e[88]=i('<p>::::</p><h3 id="other-其他" tabindex="-1"><a class="header-anchor" href="#other-其他"><span>Other (其他)</span></a></h3><blockquote><h4 id="加列表根" tabindex="-1"><a class="header-anchor" href="#加列表根"><span>加列表根</span></a></h4></blockquote><p>如果列表有root，我们可以写列表时将root省略掉，在头部信息中加上。<br> 在转流程图和思维导图时该技巧很好用</p><p>例如：</p><p>::::mditABDemo</p><div class="ab-note drop-shadow"><div class="markdown-rendered"><div><ul><li>树结构 <ul><li>基本术语 <ul><li>A</li><li>B</li><li>C</li></ul></li><li>性质</li><li>基本运算</li><li>二叉树</li></ul></li></ul></div></div></div><p>::::</p><blockquote><h4 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>json</span></a></h4></blockquote><div class="ab-note drop-shadow"><img src="http://www.plantuml.com/plantuml/img/SoWkIImgoIhEp-FYgkPIK51ALB9IC3JG0J6JW4oG68Xf218sr87oZ40y8o2dbgkMYyiXDIy5R080"></div><h3 id="more-更多" tabindex="-1"><a class="header-anchor" href="#more-更多"><span>More (更多)</span></a></h3>',11)),d(c,{id:"609",data:[{id:"中文"},{id:"English"}]},{title0:n(({value:r,isActive:a})=>e[4]||(e[4]=[t("中文")])),title1:n(({value:r,isActive:a})=>e[5]||(e[5]=[t("English")])),tab0:n(({value:r,isActive:a})=>e[6]||(e[6]=[l("ul",null,[l("li",null,"有几十个不同的处理器，这里没有给出，可以自探索："),l("li",null,"V2的旧文档包含更多处理器的介绍： https://linczero.github.io/MdNote_Public/ProductDoc/AnyBlock/v2%20old%20docs/"),l("li",null,[t("可以在Ob中安装 "),l("code",null,"Any Block"),t(" 并打开该插件的设置面板，以查看所有支持的处理器"),l("br"),t(" （除了没有新版本增加的新处理器和mdit说明外，旧版文档的说明其实会更全）")]),l("li",null,[t("在Obsidian中安装以后，也可以通过 "),l("code",null,"[info]"),t(" 处理器，以查看所有支持的处理器")])],-1)])),tab1:n(({value:r,isActive:a})=>e[7]||(e[7]=[l("ul",null,[l("li",null,"There are dozens of different processors, not given here, that can be self-explored:"),l("li",null,"Older documentation for V2 contains more information about the processor: https://linczero.github.io/MdNote_Public/ProductDoc/AnyBlock/v2%20old%20docs/"),l("li",null,[t("You can install 'Any Block' in Ob and open the plug-in's Settings panel to see all supported processors"),l("br"),t(" (Except for the new processor and mdit instructions that are not added in the new version, the instructions in the old version are actually more complete)")]),l("li",null,"After installation in Obsidian, you can also view all supported processors through the '[info]' processor")],-1)])),_:1}),e[89]||(e[89]=l("h2",{id:"selector-选择器",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#selector-选择器"},[l("span",null,"Selector (选择器)")])],-1)),d(c,{id:"662",data:[{id:"中文"},{id:"English"}]},{title0:n(({value:r,isActive:a})=>e[8]||(e[8]=[t("中文")])),title1:n(({value:r,isActive:a})=>e[9]||(e[9]=[t("English")])),tab0:n(({value:r,isActive:a})=>[e[12]||(e[12]=l("p",null,[l("strong",null,"这部分内容非常重要！推荐看完！")],-1)),l("p",null,[e[11]||(e[11]=t("链接: ")),d(p,{to:"/docs/zh/03.%20%E9%80%89%E6%8B%A9%E5%99%A8.html"},{default:n(()=>e[10]||(e[10]=[t("Selector")])),_:1})])]),tab1:n(({value:r,isActive:a})=>[e[15]||(e[15]=l("p",null,[l("strong",null,"This part is very important! Recommended to finish!")],-1)),l("p",null,[e[14]||(e[14]=t("url: ")),d(p,{to:"/docs/en/03.%20Selector.html"},{default:n(()=>e[13]||(e[13]=[t("Selector")])),_:1})])]),_:1})])}const k=v(h,[["render",_]]),y=JSON.parse('{"path":"/README.show.html","title":"README","lang":"zh-CN","frontmatter":{"description":"README General (通用) More Links (相关链接) Related links：(tutorial、use skill、contribution、secondary development) Online Wiki - github.io Online Wiki - cloudflare Chinese problem (文档的...","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/AnyBlock/README.show.html"}],["meta",{"property":"og:site_name","content":"AnyBlock"}],["meta",{"property":"og:title","content":"README"}],["meta",{"property":"og:description","content":"README General (通用) More Links (相关链接) Related links：(tutorial、use skill、contribution、secondary development) Online Wiki - github.io Online Wiki - cloudflare Chinese problem (文档的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://tse1-mm.cn.bing.net/th/id/R-C.4bbce1406f4442c1360edde26baa894d?rik=iHeUeby0jS5lnw&riu=http%3a%2f%2fp8.qhmsg.com%2fdr%2f270_500_%2ft01dbb76ff833d0a159.jpg&ehk=yggnC0t62%2b6DEVjvBgs%2fXJuuexBucd66FTc5gL0Gw%2fA%3d&risl=&pid=ImgRaw&r=0"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"README\\",\\"image\\":[\\"https://tse1-mm.cn.bing.net/th/id/R-C.4bbce1406f4442c1360edde26baa894d?rik=iHeUeby0jS5lnw&riu=http%3a%2f%2fp8.qhmsg.com%2fdr%2f270_500_%2ft01dbb76ff833d0a159.jpg&ehk=yggnC0t62%2b6DEVjvBgs%2fXJuuexBucd66FTc5gL0Gw%2fA%3d&risl=&pid=ImgRaw&r=0\\",\\"https://markmap.js.org/favicon.png\\",\\"https://markmap.js.org/favicon.png\\",\\"https://markmap.js.org/favicon.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/AnyBlock/\\"}]}"]]},"git":{},"readingTime":{"minutes":14.74,"words":4421},"filePathRelative":"README.show.md","excerpt":"\\n<h2>General (通用)</h2>\\n<h3>More Links (相关链接)</h3>\\n<p>Related links：(tutorial、use skill、contribution、secondary development)</p>\\n<ul>\\n<li><a href=\\"https://linczero.github.io/MdNote_Public/%E4%BA%A7%E5%93%81%E6%96%87%E6%A1%A3/AnyBlock/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Online Wiki - github.io</a></li>\\n<li><a href=\\"https://linczero-github-io.pages.dev/MdNote_Public/%E4%BA%A7%E5%93%81%E6%96%87%E6%A1%A3/AnyBlock/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Online Wiki - cloudflare</a></li>\\n</ul>","autoDesc":true,"bioChainData":{"outlink":[{"title":"03. 选择器","link":"docs/zh/03. 选择器.html"},{"title":"03. Selector","link":"docs/en/03. Selector.html"}],"backlink":[{"title":"02. Processor","link":"docs/en/02. Processor.html"},{"title":"02. 处理器","link":"docs/zh/02. 处理器.html"}],"localMap":{"nodes":[{"id":"README.show.md","value":{"title":"README.show","path":"README.show.md","outlink":["docs/zh/03. 选择器.md","docs/en/03. Selector.md"],"backlink":["docs/en/02. Processor.md","docs/zh/02. 处理器.md"]}},{"id":"docs/zh/03. 选择器.md","value":{"title":"03. 选择器","path":"docs/zh/03. 选择器.md","outlink":[],"backlink":[]}},{"id":"docs/en/03. Selector.md","value":{"title":"03. Selector","path":"docs/en/03. Selector.md","outlink":[],"backlink":[]}},{"id":"docs/en/02. Processor.md","value":{"title":"02. Processor","path":"docs/en/02. Processor.md","outlink":[],"backlink":[]}},{"id":"docs/zh/02. 处理器.md","value":{"title":"02. 处理器","path":"docs/zh/02. 处理器.md","outlink":[],"backlink":[]}}],"links":[{"source":"README.show.md","target":"docs/zh/03. 选择器.md"},{"source":"README.show.md","target":"docs/en/03. Selector.md"},{"source":"docs/en/02. Processor.md","target":"README.show.md"},{"source":"docs/zh/02. 处理器.md","target":"README.show.md"}]}}}');export{k as comp,y as data};
