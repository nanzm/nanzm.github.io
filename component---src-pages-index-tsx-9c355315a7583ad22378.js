"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[691],{8308:function(e,t,l){l.r(t);var n=l(7294),a=l(5444),r=l(2075),o=l(4369),i=l(471),c=l(1501);t.default=function(e){var t=e.data,l=e.location,m=t.site.siteMetadata.title,s=t.allMarkdownRemark.edges;return n.createElement(o.Z,{location:l,title:m},n.createElement(i.Z,{title:"All posts"}),n.createElement(r.Z,null),s.map((function(e){var t=e.node,l=t.frontmatter,r=l.date,o=l.postname,i=l.title||t.fields.slug,m=function(e){var t=new Date(e),l=""+(t.getMonth()+1),n=""+t.getDate(),a=t.getFullYear();l.length<2&&(l="0"+l);n.length<2&&(n="0"+n);return[a,l,n].join("/")}(r)+"/"+o;return n.createElement("article",{key:t.fields.slug,itemScope:!0,itemType:"http://schema.org/Article"},n.createElement("header",null,n.createElement("h3",{style:{marginBottom:(0,c.qZ)(1/4)}},n.createElement(a.Link,{style:{boxShadow:"none"},to:m,itemProp:"url"},n.createElement("span",{itemProp:"headline"},i))),n.createElement("small",null,r)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt},itemProp:"description"})))})))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-9c355315a7583ad22378.js.map