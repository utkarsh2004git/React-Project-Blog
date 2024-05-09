# React-Project-Blog

|<span style="color:white;background:black;padding:0.3rem"> <em> Hello,I am Utkarsh Shahare.</em> </span> |
|           ---: |
### This project is about project-blog
### There are 3 roles in this project {'Admin','User','Guest'}
### Admin have authority to create Post, edit post , delete User , edit User {But can not delete or update others Admin data and Posts}
### User : Can register and login have can save details in backend {have authority to view posts from home page}
### Guest : no data saved in backend , treated as visitor {have authority to view posts from home page}


# Steps to setup  project

## Create frontend and backend folders


1. **frontend folder**

```bash
npm create vite@latest [your project name]
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. **tailwind.config.js**
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. **src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
npm install -D react-router-dom
```


4. **In backend ( cd backend) :**

```bash
npm init
npm i dotenv express mongoose mongoose-unique-validator jsonwebtoken multer uuid express-validator bcryptjs
npm i -D nodemon
npm i sweetalert2
npm install react-bootstrap bootstrap
```

# Steps to run project after clone :
1. **setup .env file using .env.example**

2. **cd frontend**
  ```bash
  npm i -y
  npm run dev
  ```
3. **cd backend**
  ```bash
  npm i -y
  npm run seed
  npm start
  ```

# After Seeding

### Default Login Credentials:


| Email | Password  |
|    :----:   |          ---: |
| utkarsh@123       |123  |
 | myutkarsh@123       | 456    |


 | **Thank You !**  |
|         ---: |