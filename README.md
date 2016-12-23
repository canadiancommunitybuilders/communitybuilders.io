# Community Builders Website

System overview:

- Engine: [Jekyll](https://jekyllrb.com/)
- Hosting: [Github Pages](https://pages.github.com/)
- SSL & CDN: [CloudFlare](https://www.cloudflare.com/)

To run locally, simply install Jekyll, then run:

```bash
$ jekyll serve
```

## Content Management

A local Administration interface is provided.

> after installing Jekyll, visit: `http://localhost:4000/admin` on your local machine to access the interface.

#### Directors

The Directors is simply a [Jekyll Collection](https://jekyllrb.com/docs/collections/).

Each director is represented by two files:

- Markdown Document: `_directors/firstname-lastname.md`
- Image: `assets/images/directors/firstname-lastname.jpg`

> **Note**: The file names **must** be of the format `firstname-lastname`

The Image wil be used as the director's avatar.

The Markdown Document contains **required** [Front Matter](https://jekyllrb.com/docs/frontmatter/) variables, followed by Markdown content to be used as the bio.

```yml
---
name: First Name
slack: _i_can_haz_username_
twitter: _i_wz_on_twtr_b4_it_wz_kewl
---

All Your Base Are Belong to Us
```

- To **add** a new director, simply create the corresponding files.
- To **remove** a director, simply delete the corresponding files.
