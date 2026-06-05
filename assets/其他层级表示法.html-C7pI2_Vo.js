import{_ as n,c as i,a,o as l}from"./app-BokyIA-D.js";const e={};function p(d,s){return l(),i("div",null,[...s[0]||(s[0]=[a(`<h1 id="其他层级表示法" tabindex="-1">其他层级表示法</h1><h2 id="写作背景" tabindex="-1">写作背景</h2><p>当时新增了 MarkdownIt 转列表数据功能 (v3.4.12)</p><p>mdit2list/mdit2data 与 title2list/title2data 的逻辑基本相同</p><p>这里要将Mdit标识 (@xxx)、正文、列表 的等级合为一块，所以存在偏移值：</p><ol><li>Mdit等级, = <code>@&lt;数字&gt;</code>-100,</li><li>正文等级, = 0, 取值[+1,+Infi]</li><li>列表等级, = <code>(.*)-</code>个数+1, 取值[0]</li></ol><h2 id="基础设计" tabindex="-1">基础设计</h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@1 AAA</span></span>
<span class="line"><span></span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@2 BBB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@2 B22</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ccc</span></span>
<span class="line"><span>ddd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@1 A22</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会被转化为</p><ul><li>AAA <ul><li>BBB</li><li>B22</li><li>ccc<br> ddd</li></ul></li><li>A22</li></ul><h2 id="规则补充-多行分割标题" tabindex="-1">规则补充 - 多行分割标题</h2><p>和 title2list 不同</p><ul><li>title 中的 title 项一定是单行内容</li><li>list 的所有 list 项都可以是多行内容</li><li>markdownIt 语法中的 <code>@</code> 项一般来说也只能是单行内容</li></ul><p>但这里希望扩展这种定义，mdit2list 过程中，也希望每个节点都能够是多行内容。<br> 为此我们需要定义一种语法来表示 <code>多行分隔标题</code></p><p>即 <code>@&lt;分割标识&gt; &lt;分割标题&gt;</code> 这里，使 &quot;分割标题&quot; 可以为多行。最后采用的设计如下:</p><h3 id="设计1-——-空分割标题表示法" tabindex="-1">设计1 —— 空分割标题表示法</h3><p>当分割标题为空时，则后续节点都属于该分割标题，直到下一个分割标题出现。</p><h3 id="设计2-——-强制正文属于标题" tabindex="-1">设计2 —— 强制正文属于标题</h3><p>这种设计类似于 仅标题表示的 title2list</p><p>(1) 非仅标题模式的 title2list</p><ul><li>特点<br> 标题和列表都能声明层级关系，最后的标题和列表等会混在一起。<br> 单个节点中不会存在列表元素。<br> 类似于 <code>markmap</code> 的层级设计。适合分级更细的场景。</li><li>例如<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-markdown"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"># 标题一</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 标题二</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 列表一</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 列表二</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>会变成<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-markdown"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 标题一</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 标题二</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 列表一</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 列表二</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>(2) 仅标题的 title2list</p><ul><li>特点<br> 只能通过标题来声明层级关系<br> 单个节点中可以存在列表元素。<br> 适合分级更粗的场景。</li><li>例如<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-markdown"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"># 标题一</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 标题二</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 列表一</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 列表二</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>会变成<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-markdown"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 标题一</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  -</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 标题二</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    -</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> \`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">- 列表一\\n- 列表二</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>(3) 最后</p><p>我需要一些新名字，用来区分这两种不同的转换方式。<br> 以及不同的指令名 (原 <code>title2list</code>) 来区分这两者。<br> 或者需要一些更准确地面对用户的描述，告知他们这两种不同的模式。</p><p>最后采用:</p><p>finelist</p><h3 id="设计3-——-缩进表示法" tabindex="-1">设计3 —— 缩进表示法</h3><p>类似于列表项中，列表项一个项可以是多行那样。</p><p>如果存在不使用 <code>&lt;br&gt;</code> 声明的多级标题，应该会长这样:</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-markdown"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">## 标题一</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   标题一的第二行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">正文</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">### 标题二</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   标题二的第二行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">^ 注意这里仅对齐示意，不建议缩进太多行。会被认为是缩进代码块。一般前面统一两空格就好</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">正文</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后mdit也同理</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-markdown"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:::mdit2list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@1 标题一</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   标题一的第二行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">正文</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">@1 标题二</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   标题二的第二行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">正文</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们这里使用后者的多行 mdit 分割标识的设计，多行标题的设计我感觉还是太前卫了，不采用。</p><h2 id="mdit2list-写法总结" tabindex="-1">mdit2list 写法总结</h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>:::mdit2list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@1</span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@2</span></span>
<span class="line"><span>bbb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@3</span></span>
<span class="line"><span>ccc</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@1</span></span>
<span class="line"><span>ddd</span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>等于</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- aaa</span></span>
<span class="line"><span>  - bbb</span></span>
<span class="line"><span>    - ccc</span></span>
<span class="line"><span>- ddd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>:::mdit2list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@1 aaa</span></span>
<span class="line"><span>bbb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>等于</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::mdit2list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bbb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>等于</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- aaa</span></span>
<span class="line"><span>  - bbb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>:::mdit2list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@1 aaa</span></span>
<span class="line"><span>  bbb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@2 ccc</span></span>
<span class="line"><span>  ddd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>等同</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::mdit2list</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span>bbb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ccc</span></span>
<span class="line"><span>ddd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>:::</span></span>
<span class="line"><span></span></span>
<span class="line"><span>等同</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- aaa</span></span>
<span class="line"><span>  bbb</span></span>
<span class="line"><span>  - ccc</span></span>
<span class="line"><span>    ddd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,40)])])}const t=n(e,[["render",p]]),r=JSON.parse('{"path":"/docs/dev%20docs/%E5%85%B6%E4%BB%96%E5%B1%82%E7%BA%A7%E8%A1%A8%E7%A4%BA%E6%B3%95.html","title":"其他层级表示法","lang":"zh-CN","frontmatter":{"create_time":"2026-06-04T00:00:00.000Z","modi_time":"2026-06-04T00:00:00.000Z","description":"其他层级表示法 写作背景 当时新增了 MarkdownIt 转列表数据功能 (v3.4.12) mdit2list/mdit2data 与 title2list/title2data 的逻辑基本相同 这里要将Mdit标识 (@xxx)、正文、列表 的等级合为一块，所以存在偏移值： Mdit等级, = @&lt;数字&gt;-100, 正文等级, = 0...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"其他层级表示法\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://LincDocs.github.io/AnyBlock/docs/dev%20docs/%E5%85%B6%E4%BB%96%E5%B1%82%E7%BA%A7%E8%A1%A8%E7%A4%BA%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"AnyBlock"}],["meta",{"property":"og:title","content":"其他层级表示法"}],["meta",{"property":"og:description","content":"其他层级表示法 写作背景 当时新增了 MarkdownIt 转列表数据功能 (v3.4.12) mdit2list/mdit2data 与 title2list/title2data 的逻辑基本相同 这里要将Mdit标识 (@xxx)、正文、列表 的等级合为一块，所以存在偏移值： Mdit等级, = @&lt;数字&gt;-100, 正文等级, = 0..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}]],"date":"2026-06-04T00:00:00.000Z"},"git":{},"readingTime":{"minutes":2.76,"words":829},"filePathRelative":"docs/dev docs/其他层级表示法.md","excerpt":"\\n<h2>写作背景</h2>\\n<p>当时新增了 MarkdownIt 转列表数据功能 (v3.4.12)</p>\\n<p>mdit2list/mdit2data 与 title2list/title2data 的逻辑基本相同</p>\\n<p>这里要将Mdit标识 (@xxx)、正文、列表 的等级合为一块，所以存在偏移值：</p>\\n<ol>\\n<li>Mdit等级,  = <code>@&lt;数字&gt;</code>-100,</li>\\n<li>正文等级,  = 0,              取值[+1,+Infi]</li>\\n<li>列表等级,  = <code>(.*)-</code>个数+1,  取值[0]</li>\\n</ol>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"docs/dev docs/其他层级表示法.md","value":{"title":"其他层级表示法","path":"docs/dev docs/其他层级表示法.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{t as comp,r as data};
