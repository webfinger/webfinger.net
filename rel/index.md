---
layout: default
title: "Link Relations"
---

## Link Relations ##

<ul>
  {% for rel in site.rels %}
    <li>
      <a href="{{ rel.url }}">{{ rel.title }}</a>
    </li>
  {% endfor %}
</ul>

See also: [existing rel values](http://microformats.org/wiki/existing-rel-values) on the Microformats Wiki.
