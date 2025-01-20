import{_ as a,c as n,a as t,o as e}from"./app-BYrpMszm.js";const p={};function l(o,s){return e(),n("div",null,s[0]||(s[0]=[t(`<h1 id="列表类" tabindex="-1"><a class="header-anchor" href="#列表类"><span>列表类</span></a></h1><p>该类别的特征：将一段md列表规范的文本，转化其他</p><p>其中 list_stream 和 c2list_stream 是一种列表和二列列表的存储格式</p><h2 id="list2listdata" tabindex="-1"><a class="header-anchor" href="#list2listdata"><span>list2listdata</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;list2listdata&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;列表到listdata&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">process_param</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
<span class="token literal-property property">process_return</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>list_strem<span class="token punctuation">,</span>
<span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">&quot;列表到listdata&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="title2listdata" tabindex="-1"><a class="header-anchor" href="#title2listdata"><span>title2listdata</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;title2listdata&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;标题到listdata&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">process_param</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
<span class="token literal-property property">process_return</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>list_strem<span class="token punctuation">,</span>
<span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">&quot;标题到listdata&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="listdata到列表" tabindex="-1"><a class="header-anchor" href="#listdata到列表"><span>listdata到列表</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;listdata2list&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;listdata到列表&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">process_param</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>list_strem<span class="token punctuation">,</span>
<span class="token literal-property property">process_return</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
<span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">&quot;listdata到列表&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="listdata2nodes" tabindex="-1"><a class="header-anchor" href="#listdata2nodes"><span>listdata2nodes</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;listdata2nodes&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;listdata到节点图&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">process_param</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>list_strem<span class="token punctuation">,</span>
<span class="token literal-property property">process_return</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>el<span class="token punctuation">,</span>
<span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">&quot;listdata到节点图&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="listdata2strict" tabindex="-1"><a class="header-anchor" href="#listdata2strict"><span>listdata2strict</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;listdata2strict&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;listdata严格化&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">process_param</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>list_strem<span class="token punctuation">,</span>
<span class="token literal-property property">process_return</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>list_strem<span class="token punctuation">,</span>
<span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">&quot;将列表数据转化为更规范的列表数据。统一缩进符(2空格 4空格 tab混用)、禁止跳等级(h1直接就到h3)&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="list2listnode" tabindex="-1"><a class="header-anchor" href="#list2listnode"><span>list2listnode</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;list2listnode&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;列表到listnode (beta)&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">process_param</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
<span class="token literal-property property">process_return</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>json<span class="token punctuation">,</span>
<span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">&quot;列表转listnode&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="list2json" tabindex="-1"><a class="header-anchor" href="#list2json"><span>list2json</span></a></h2><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;list2json&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;列表到json (beta)&quot;</span><span class="token punctuation">,</span>
<span class="token literal-property property">process_param</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
<span class="token literal-property property">process_return</span><span class="token operator">:</span> ABConvert_IOEnum<span class="token punctuation">.</span>json<span class="token punctuation">,</span>
<span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">&quot;列表到json&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const i=a(p,[["render",l],["__file","02. 列表类.html.vue"]]),c=JSON.parse('{"path":"/docs/api/02.%20%E5%88%97%E8%A1%A8%E7%B1%BB.html","title":"列表类","lang":"zh-CN","frontmatter":{"description":"列表类 该类别的特征：将一段md列表规范的文本，转化其他 其中 list_stream 和 c2list_stream 是一种列表和二列列表的存储格式 list2listdata title2listdata listdata到列表 listdata2nodes listdata2strict list2listnode list2json","head":[["meta",{"property":"og:url","content":"https://LincDocs.github.io/any-block/docs/api/02.%20%E5%88%97%E8%A1%A8%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"any-block"}],["meta",{"property":"og:title","content":"列表类"}],["meta",{"property":"og:description","content":"列表类 该类别的特征：将一段md列表规范的文本，转化其他 其中 list_stream 和 c2list_stream 是一种列表和二列列表的存储格式 list2listdata title2listdata listdata到列表 listdata2nodes listdata2strict list2listnode list2json"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"LincDocs"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"列表类\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LincDocs\\",\\"url\\":\\"https://github.com/LincDocs/any-block/\\"}]}"]]},"headers":[{"level":1,"title":"列表类","slug":"列表类","link":"#列表类","children":[{"level":2,"title":"list2listdata","slug":"list2listdata","link":"#list2listdata","children":[]},{"level":2,"title":"title2listdata","slug":"title2listdata","link":"#title2listdata","children":[]},{"level":2,"title":"listdata到列表","slug":"listdata到列表","link":"#listdata到列表","children":[]},{"level":2,"title":"listdata2nodes","slug":"listdata2nodes","link":"#listdata2nodes","children":[]},{"level":2,"title":"listdata2strict","slug":"listdata2strict","link":"#listdata2strict","children":[]},{"level":2,"title":"list2listnode","slug":"list2listnode","link":"#list2listnode","children":[]},{"level":2,"title":"list2json","slug":"list2json","link":"#list2json","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.71,"words":214},"filePathRelative":"docs/api/02. 列表类.md","excerpt":"\\n<p>该类别的特征：将一段md列表规范的文本，转化其他</p>\\n<p>其中 list_stream 和 c2list_stream 是一种列表和二列列表的存储格式</p>\\n<h2>list2listdata</h2>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token literal-property property\\">id</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"list2listdata\\"</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token literal-property property\\">name</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"列表到listdata\\"</span><span class=\\"token punctuation\\">,</span>\\n<span class=\\"token literal-property property\\">process_param</span><span class=\\"token operator\\">:</span> ABConvert_IOEnum<span class=\\"token punctuation\\">.</span>text<span class=\\"token punctuation\\">,</span>\\n<span class=\\"token literal-property property\\">process_return</span><span class=\\"token operator\\">:</span> ABConvert_IOEnum<span class=\\"token punctuation\\">.</span>list_strem<span class=\\"token punctuation\\">,</span>\\n<span class=\\"token literal-property property\\">detail</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">\\"列表到listdata\\"</span><span class=\\"token punctuation\\">,</span>\\n</code></pre></div>","autoDesc":true,"bioChainData":{"outlink":[],"backlink":[],"localMap":{"nodes":[{"id":"docs/api/02. 列表类.md","value":{"title":"02. 列表类","path":"docs/api/02. 列表类.md","outlink":[],"backlink":[]}}],"links":[]}}}');export{i as comp,c as data};
