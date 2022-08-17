import{_ as e,o as n,c as i,d as a}from"./app.0bc1d381.js";const s={},d=a(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h1><h3 id="cookie-path" tabindex="-1"><a class="header-anchor" href="#cookie-path" aria-hidden="true">#</a> cookie path</h3><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>server {
    listen   8080;
    serve_name localhost

    location /api/ {
      proxy_pass  https://demo.kingpointshow.com/cloudbeaver/api/;
      proxy_cookie_path  /cloudbeaver /;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[d];function r(l,o){return n(),i("div",null,c)}var v=e(s,[["render",r],["__file","index.html.vue"]]);export{v as default};
