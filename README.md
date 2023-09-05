Full Project Setup (Vite):

Steps:

1.  Vite
2.  [Tailwind](https://docs.google.com/document/d/1i-WR9UXd98Sa9qnZxd-IDYMnPlNAHmydK0AL9k8mNTQ/edit#bookmark=id.iox9ajg697z1)
3.  [DaisyUI](https://docs.google.com/document/d/1i-WR9UXd98Sa9qnZxd-IDYMnPlNAHmydK0AL9k8mNTQ/edit#bookmark=id.8a5wb78bf3qf)
4.  [Router](https://docs.google.com/document/d/1i-WR9UXd98Sa9qnZxd-IDYMnPlNAHmydK0AL9k8mNTQ/edit#bookmark=id.w0duf2shjq24)
5.  [Firebase](https://docs.google.com/document/d/1i-WR9UXd98Sa9qnZxd-IDYMnPlNAHmydK0AL9k8mNTQ/edit#bookmark=id.y1b5wllgxqe)

[Setting Up Server](https://docs.google.com/document/d/1i-WR9UXd98Sa9qnZxd-IDYMnPlNAHmydK0AL9k8mNTQ/edit#bookmark=id.da4f8u36pzg0)

6.  [Environment Variables](https://docs.google.com/document/d/15c91pO6V0_ITeV-Y5P46SKSRS7hU3wIVmpD0z0Vg2oc/edit?usp=sharing)
7.  [React Icons](https://docs.google.com/document/d/1i-WR9UXd98Sa9qnZxd-IDYMnPlNAHmydK0AL9k8mNTQ/edit#bookmark=id.3hb7wu8yy3ac)
8.  [Vercel Hosting](https://docs.google.com/document/d/1i-WR9UXd98Sa9qnZxd-IDYMnPlNAHmydK0AL9k8mNTQ/edit#bookmark=id.b5vjwsk9pmn)

## Vite Setup:

Ref: [Vite Official](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)

npm create vite@latest

Steps:

    npm create vite@latest

    Write project-name

    Javascript + SWC

    cd project-name

    npm i

    npm run dev

## React Router Setup:

    npm install react-router-dom

## JWT Authentication for WP REST API

[Plugin Link](https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)

Steps:

1.  To enable this option you’ll need to edit your .htaccess file adding the follow:  
    RewriteEngine on

    RewriteCond %{HTTP:Authorization} ^ (._)
    RewriteRule ^(._) - [E=HTTP_AUTHORIZATION:%1]

2.  Add this line in wp-config.php file

    define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');

![](https://lh3.googleusercontent.com/i3NpRGdWvA1qfeqFrPMx5js6Sg3Ocvtb8vlfQYXwDIwOQL64egFlXCFJiDKFn8Li2X7XTSttu4gm1iKmO29MI0mrg2eAy9gRHD69gx4X3AhpHMrIYqVoRkW_cjC5bPz1S6QIt7R4jyGpo1GcIkX3FHY)

Key Generator: You can use a string from here: [https://api.wordpress.org/secret-key/1.1/salt/](https://api.wordpress.org/secret-key/1.1/salt/)

3.  **Configurate CORs Support:**

To enable the CORs Support edit your wp-config.php file

    define('JWT_AUTH_CORS_ENABLE', true);

![](https://lh4.googleusercontent.com/F1ePqQf-p77GIKHn9C4g6-xSZFRMtMc2EomOnmyLGYrkc4WCs2og2CO8zsI8NiY_NdEjDJgdFokLrlbuvWhc-netA4jYQUL5rHAdiVtd58Cca3Orald04uT3gPgp58mJhzMhTpxlnKtFgfzvtrVvE3k)

Access jwt routes/ endpoints:

[https://vitewp.com/wp-json/jwt-auth/v1](https://vitewp.com/wp-json/jwt-auth/v1)

## Tailwind for Vite:

Ref: [https://tailwindcss.com/docs/guides/vite#react](https://tailwindcss.com/docs/guides/vite#react)

    npm install -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p

**Note:**

Make sure that these two files are created:

    Created Tailwind CSS config file: tailwind.config.js

    Created PostCSS config file: postcss.config.js

Add this in tailwind.config.js

    /** @type  {import('tailwindcss').Config} */
    export  default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {},
    },
    plugins: [],
    }

Add these lines in index.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

**For Tailwind typography:**

Ref: [https://tailwindcss.com/docs/typography-plugin](https://tailwindcss.com/docs/typography-plugin)

    npm install -D @tailwindcss/typography

Add this in tailwind.config.js

    import  twTypography  from  "./node_modules/@tailwindcss/typography";

Add dependency for typography:

![](https://lh6.googleusercontent.com/PsZEPI0suNt8G-ATfeSMrxCOp9ultyl4p0mqohs5dTqpRJ8FRYl0z9_YUAd-NWAGAn3QF1ZSKqxf9eMptjO7OYuId6gUPU3XseHEbgGpi_vKyVyMwDnJi39-LmjI9evG-UHlGAG0_nQsZu90pUNcNtA)

## [Daisyui for Vite:]

(https://docs.google.com/document/d/1T_CbwAOwBtlsJwz-HIfJ5zsYIFKwZbSQGxlMmejNgEA/edit?usp=sharing)

Ref: [https://daisyui.com/docs/install/](https://daisyui.com/docs/install/)

    npm i -D daisyui@latest

Steps:

1.  Add this lines in tailwind.config.js

> `import daisyUI from "./node_modules/daisyui";`

2.  Add it as dependency:

![](https://lh4.googleusercontent.com/aNmf2coF7_SEjG7oO5E8zZnNixRjpojr05rCx_J3uezCiu5oHn8bAVsAC1Y5N8oeyxYphkmQvbkRPZ48LrJ010EXmnejRkUWC-600VGb71D4F1n8gRr04OySe55k0L2oMrVIuSBMTNil0yWFlWqffzU)

## React Hooks for Vite:

Ref: [https://react-hook-form.com/get-started](https://react-hook-form.com/get-started)

    npm install react-hook-form

## Axios for Vite:

Ref: [https://axios-http.com/docs/intro](https://axios-http.com/docs/intro)

    npm install axios

## Vite-plugin-require for Vite:

Ref: [https://www.npmjs.com/package/vite-plugin-require](https://www.npmjs.com/package/vite-plugin-require)

Install and use to achieve painless support require

    npm i vite-plugin-require

Import and add it as dependency:

    import  vitePluginRequire  from  "vite-plugin-require";
    export default defineConfig({
    plugins: [react(),  vitePluginRequire.default()],
    })
