<h2>Introduction</h2>
Following <a href='https://github.com/NathanKr/purge-css-vanilla-playground'>purge-css-vanilla-playground</a> it is clear what is PurgeCSS and how to use it on vanilla js project. But how to do this in next.js ??

<h2>next.js customizing plugin issue</h2>
according to the <a href='https://nextjs.org/docs/pages/building-your-application/configuring/post-css'>documentration</a> next.js use postCSS to create css file in next.js project. So if you want to <a href='Out of the box, with no configuration, Next.js compiles CSS with the following transformations:'>add postCSS plugin</a> you need to configure from scratch all these setting in postcss.config.json \ postcss.config.js


<h2>CSS size</h2>
bootstrap.min.css is 228KB while bootstrap-with-purgecss.css is 14KB thus X20 better !!!

<h2>next.js caveate</h2>
<p>using postcss.config.js the style for alert component is working locally but not on vercel (tag 0.2). so i will not use</p>
<p>using postcss.config.js with next.js is problematic because next.js itself use it internally . so if you want to add you need to add to it all next.js stuff which is not robust</p>
A better way is simple to use purge.config.js and not postcss.config.js - done in tag 0.3 

<h2>open issues</h2>
using prebuild did not worked on production (thats why i used prebuild1)