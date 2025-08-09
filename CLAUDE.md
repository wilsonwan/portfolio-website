# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Hugo-based portfolio website for Wilson Wan (wilsonwan.dev) using the "hello-friend-ng" theme. The site showcases professional experience, projects, blog posts, and contact information.

## Architecture

- **Static Site Generator**: Hugo (v0.78.0)
- **Theme**: hello-friend-ng (git submodule in `themes/hello-friend-ng/`)
- **Deployment**: Netlify (configured via `netlify.toml`)
- **Content Structure**:
  - `content/` - Markdown files for pages (about, posts, projects, resume, contact)
  - `layouts/` - Custom HTML templates overriding theme defaults
  - `static/` - Static assets (CSS, JS, images)
  - `config.toml` - Hugo configuration and site parameters

## Development Commands

### Build and Serve
```bash
# Serve locally with live reload
hugo server

# Build for production (outputs to public/)
hugo --gc --minify

# Build with future-dated content (for deploy previews)
hugo --gc --minify --buildFuture

# Build with git info enabled
hugo --gc --minify --enableGitInfo
```

### Content Management
```bash
# Create new blog post
hugo new posts/post-title.md

# Create new page
hugo new page-name.md
```

## Key Configuration

- **Base URL**: https://wilsonwan.dev/
- **Default Theme**: Dark mode
- **Deployment**: Netlify builds using `hugo --gc --minify` command
- **Hugo Version**: 0.78.0 (locked in netlify.toml)
- **Git Info**: Disabled (`enableGitInfo = false`)

## Content Guidelines

- Blog posts go in `content/posts/`
- Page content uses markdown with Hugo front matter
- Custom layouts in `layouts/` directory override theme defaults
- Static assets in `static/` are served from site root
- Custom CSS in `static/css/custom.css`
- Custom JS in `static/js/custom.js`

## Theme Customization

The hello-friend-ng theme is included as a submodule. Local customizations:
- Custom layouts in `layouts/partials/` (experience.html, technologies.html, etc.)
- Custom shortcodes in `layouts/shortcodes/`
- Theme overrides without modifying the submodule

## Social Links

Configured social media links in config.toml:
- GitHub: wilsonwan
- LinkedIn: wilsonwandev  
- Twitter: WilsonWan_
- YouTube channel
- Stack Overflow
- Email: mail@wilsonwan.dev