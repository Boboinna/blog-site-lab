# My Blog

A small React + Vite blog built to practice breaking a UI into a
component tree and passing data down via props.

## Component tree

```
App
├── Header        (prop: name)
├── About         (props: image, about)
└── ArticleList   (prop: posts)
    └── Article   (props: title, date, preview) — one per post
```

## Getting started

**Requirements:** Node.js 20+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
# open the URL http://localhost:5173

# 3. Run the Jest test suite
npm test

```

## Testing

Prop-based rendering is verified with **Jest** + **React Testing
Library** (`src/App.test.jsx`):

- `Header` renders the `name` prop inside an `<h1>`.
- `About` renders the `image` prop as the `<img>` `src` (with the
  required `alt="blog logo"`) and the `about` prop as text.
- `Article` renders `title`, `date` and `preview` from props.
- `ArticleList` renders one `<article>` per item in the `posts` array
  (and zero when the array is empty).
- `App` is smoke-tested end-to-end: header text, about text/logo and
  all sample articles show up together.

Run with:

```bash
npm test
```

## Screenshots

<img src="./src/assets/Screenshot 2026-07-28 232928.png" alt="screenshot" width="738">

## Project structure

```
├── src/
│   ├── App.jsx              # root component
│   ├── App.css              # layout/styling for App
│   ├── App.test.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── header.jsx
│       ├── about.jsx
│       ├── article-list.jsx
│       └── article.jsx
├── assets/
│   └── Screenshot 2026-07-28 232928.png
```