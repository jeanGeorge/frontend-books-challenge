# 📚 Frontend Books Challenge
Welcome! This project is a virtual bookshelf, created with some recent frontend web development technologies. You can take a look at the current application [here](https://bookschallenge.vercel.app/). 

## 👨‍💻 Stack
Some technologies/tools used:
- [TypeScript](https://www.typescriptlang.org/): Just [JavaScript](https://www.javascript.com/) with types! How not to like scalability and safety?
- [Next.js](https://nextjs.org/): A [React.js](https://reactjs.org/) framework for developing single-page web applications. It's a personal choice, but with Next.js we have A LOT of benefits, such as Server Side Rendering, Static Site Generations, SEO improvements.
- [Context.API](https://reactjs.org/docs/context.html) to easy state management. State management here is quite simple (login and books), so it was easier to use the Context API. For more complex management I would probably use [Redux](https://redux.js.org/).
- [Styled-components](https://styled-components.com/) for styling. 
- [Axios](https://github.com/axios/axios) for HTTP requests
- [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) for code formatting/pattern.

For future work I intend to add:
- [Storybook](https://storybook.js.org/) to doc components.
- [Cypress](https://docs.cypress.io/) for testing

Feel free to contact me for criticism or suggestions! My contacts are on my [profile](https://github.com/jeanGeorge).

## 🔧 Project setup
This project was developed using [Node v14.17.0](https://nodejs.org/ca/blog/release/v14.17.0/), NPM 8.4.1 and yarn 1.22.17.

To set up first clone this repo:
```bash
git clone https://github.com/jeanGeorge/frontend-books-challenge.git
```

Enter the project folder:
```bash
cd frontend-books-challenge
```

Install the packages:
```bash
yarn
```

Run the development server:
```bash
yarn serve
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
