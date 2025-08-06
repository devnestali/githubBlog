# 📦 Github Blog 

GithubBlog is a high-performance application that uses the GitHub API to display public data from my account and repositories, organized by update date, showing information such as title, description, content, stars, author, and last update, as well as allowing the visualization of each repository’s README to better understand each project.

##### 🌟 [Access the website now!!](https://github-blog-olive-alpha.vercel.app/)

## 🤖 PROTOTYPE

![githubblog-proto](https://github.com/user-attachments/assets/3259625d-a81a-4e65-ab08-1e98160b333d)

## 📒 Features

- **TypeScript**: Provides static typing and modern JavaScript features for safer and scalable development.
- **Zod**: Schema validation for request inputs, ensuring data integrity in routes.
- **React-hook-form**: Library for managing forms in React using hooks.
- **@hookform/resolvers**: Integrates validation libraries(like Zod) with React hook form.
- **Styled-components**: Fast, themeable CSS-in-JS library for styling React components.
- **Axios**: Promise-based HTTP client for making requests in JavaScript and Node.js.
- **React-router-dom**: Routing library for React that enables dynamic navigation in web applications.
- **React-markdown**: React component that renders Markdown text as HTML.
- **Use-context-selector**: React hook that optimizes context usage by allowing components to subscribe only to specific context values.
- **Vite**: Fast frontend build tool and development server with instant hot module replacement.
- **ESLint**: Tool for identifying and fixing problems in JavaScript and TypeScript code.

## 📇 Main Features
- **Pages:** All the pages from the app is located here (`src/pages`).
- **Components:** Native components for the project are located here(`src/components`).
- **Libs:** Libs and tools are configured on this folder(`src/lib`)
- **Utils:** Functions that are used in to handle an amount of things are located here(`src/utils`)
- **@Types:** Modules declaration for typescript and nextjs API calls are made here(`src/@types`)
- **Context:** Context used between the pages are located on this folder(`src/context`)
- **Routes:** Routes and router config are placed here(`src/routes`)
- **Layout:** Default layout styles that are used between all the pages are on this folder(`src/layout`)

## 🛠️ Run the Project

- Before using this app, it's highly recommended to install the latest versions of [Node](https://nodejs.org/) and [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Make sure to follow all the installation and configuration steps provided by their official documentation.

# 🛠️ Configuration

  - To install the node modules package, run the code bellow:
  ```bash
    npm install
  ```

  - To run the project in your machine, run the code bellow:
  ```bash
    npm run dev
  ```

## 🗂️ Key Files & Directories
- Entrypoint: `src/main.tsx`
- App & Providers: `src/App.tsx`
- Pages: `src/pages/`
- Components: `src/components/`
- Context: `src/context/`
- Libs: `src/lib/`
- Routes: `src/routes/`

## 📂 Folder Structure

```
src/
  @types/
  assets/
  components/
    GithubLink/
    Header/
  context/
    RepoContext.tsx
  layout/
  libs/
    axios.ts
    MarkdownRenderer.tsx
  pages/
    Home/
    Post/
  routes/
    Router.tsx
  styles/
    defaultTheme.ts
    globalStyles.ts
  utils/
    dateFormatter.ts
  App.tsx
  main.tsx
```

## 🚀 License

**[@devnestali]('https://github.com/devnestali') - Software Engineering and FullStack Developer**



All rights reserved by **[devnestali]('https://github.com/devnestali')**
