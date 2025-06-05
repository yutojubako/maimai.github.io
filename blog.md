---
layout: page
title: Blog
permalink: /blog/
---

# Technical Blog

Welcome to my technical blog where I share insights, tutorials, and thoughts on machine learning, robotics, and software engineering.

---

## 📚 Latest Posts

{% for post in site.posts limit:5 %}
### [{{ post.title }}]({{ post.url | relative_url }})
*{{ post.date | date: "%B %d, %Y" }}*

{{ post.excerpt | strip_html | truncatewords: 30 }}

{% if post.tags.size > 0 %}
**Tags**: {% for tag in post.tags %}{% unless forloop.last %}{{ tag }}, {% else %}{{ tag }}{% endunless %}{% endfor %}
{% endif %}

[Read more →]({{ post.url | relative_url }})

---
{% endfor %}

## 🏷️ Posts by Category

### Machine Learning & AI
{% for post in site.posts %}
  {% if post.tags contains 'ml' %}
- [{{ post.title }}]({{ post.url | relative_url }}) - *{{ post.date | date: "%B %Y" }}*
  {% endif %}
{% endfor %}

### Robotics  
{% for post in site.posts %}
  {% if post.tags contains 'robotics' %}
- [{{ post.title }}]({{ post.url | relative_url }}) - *{{ post.date | date: "%B %Y" }}*
  {% endif %}
{% endfor %}

### Software Development
{% for post in site.posts %}
  {% if post.tags contains 'development' or post.tags contains 'programming' or post.tags contains '開発' %}
- [{{ post.title }}]({{ post.url | relative_url }}) - *{{ post.date | date: "%B %Y" }}*
  {% endif %}
{% endfor %}

### Tools & Productivity
{% for post in site.posts %}
  {% if post.tags contains 'tools' or post.tags contains 'productivity' or post.tags contains 'app' %}
- [{{ post.title }}]({{ post.url | relative_url }}) - *{{ post.date | date: "%B %Y" }}*
  {% endif %}
{% endfor %}

---

## 📖 All Posts

{% for post in site.posts %}
- **{{ post.date | date: "%Y-%m-%d" }}** - [{{ post.title }}]({{ post.url | relative_url }})
  {% if post.tags.size > 0 %}
  <small>Tags: {% for tag in post.tags %}{% unless forloop.last %}{{ tag }}, {% else %}{{ tag }}{% endunless %}{% endfor %}</small>
  {% endif %}
{% endfor %}

---

## 🔔 Stay Updated

- **RSS Feed**: [Subscribe]({{ site.url }}{{ site.baseurl }}/feed.xml) to get notified of new posts
- **GitHub**: Follow my projects on [GitHub](https://github.com/{{ site.github_username }})
- **Email**: Reach out at [{{ site.email }}](mailto:{{ site.email }}) for collaborations or questions

---

*I write about machine learning research, robotics projects, programming tutorials, and technology insights. Feel free to suggest topics or ask questions!*