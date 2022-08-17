import{_ as e,o as a,c as i,a as n,e as t,d as l,b as c,r}from"./app.0bc1d381.js";const o={},d=l(`<h1 id="\u4E00\u4E9B\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E9B\u64CD\u4F5C" aria-hidden="true">#</a> \u4E00\u4E9B\u64CD\u4F5C</h1><h2 id="\u5C06\u672C\u5730\u4ED3\u5E93\u4E0A\u4F20\u81F3git" tabindex="-1"><a class="header-anchor" href="#\u5C06\u672C\u5730\u4ED3\u5E93\u4E0A\u4F20\u81F3git" aria-hidden="true">#</a> \u5C06\u672C\u5730\u4ED3\u5E93\u4E0A\u4F20\u81F3git</h2><div class="language-BASH ext-BASH line-numbers-mode"><pre class="language-BASH"><code># \u672C\u5730\u4ED3\u5E93\u521D\u59CB\u5316
git init

# \u6DFB\u52A0\u5168\u90E8\u4FEE\u6539\u6587\u4EF6\u81F3\u6682\u5B58\u533A
git add .

# \u63D0\u4EA4\u66F4\u6539\u5E76\u5907\u6CE8\u76F8\u5173\u63D0\u4EA4\u4FE1\u606F
git commit -m &#39;\u9879\u76EE\u521D\u59CB\u5316&#39;

# \u8FDE\u63A5\u5230\u8FDC\u7A0B\u4ED3\u5E93
git remote add &lt;shortname&gt; &lt;url&gt;

# \u63D0\u4EA4
git push -u &lt;shortname&gt; master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u7A7A\u5206\u652F" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u7A7A\u5206\u652F</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> switch --orphan <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>
<span class="token function">git</span> commit --allow-empty -m <span class="token string">&quot;Initial commit on orphan branch&quot;</span>
<span class="token function">git</span> push -u origin <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>

<span class="token comment"># \u65E9\u4E9B\u65F6\u5019\u7684\u64CD\u4F5C</span>
<span class="token function">git</span> checkout --orphan empty-branch
<span class="token function">git</span> <span class="token function">rm</span> -rf <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit --allow-empty -m <span class="token string">&quot;Initial commit on orphan branch&quot;</span>
<span class="token function">git</span> push -u origin <span class="token operator">&lt;</span>new branch<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B-\u4FEE\u6539\u672C\u5730git\u7528\u6237\u540D\u548C\u90AE\u7BB1" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-\u4FEE\u6539\u672C\u5730git\u7528\u6237\u540D\u548C\u90AE\u7BB1" aria-hidden="true">#</a> \u67E5\u770B/\u4FEE\u6539\u672C\u5730git\u7528\u6237\u540D\u548C\u90AE\u7BB1</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B\u7528\u6237\u540D</span>
<span class="token function">git</span> config user.name
<span class="token comment"># \u4FEE\u6539\u7528\u6237\u540D</span>
<span class="token function">git</span> config user.name <span class="token string">&#39;xxx&#39;</span>

<span class="token comment"># \u67E5\u770B\u90AE\u7BB1</span>
<span class="token function">git</span> config user.name
<span class="token comment"># \u4FEE\u6539\u90AE\u7BB1</span>
<span class="token function">git</span> config user.email <span class="token string">&#39;xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2>`,8),m={href:"https://gitee.com/help/articles/4284",target:"_blank",rel:"noopener noreferrer"},u=c("GitHub\u4ED3\u5E93\u5FEB\u901F\u5BFC\u5165Gitee\u53CA\u540C\u6B65\u66F4\u65B0");function p(v,h){const s=r("ExternalLinkIcon");return a(),i("div",null,[d,n("ul",null,[n("li",null,[n("a",m,[u,t(s)])])])])}var g=e(o,[["render",p],["__file","common-actions.html.vue"]]);export{g as default};
