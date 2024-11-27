# Container Box - Container Management Concept

<p align="center">
  <img src="https://github.com/user-attachments/assets/b331e005-82b2-4471-b349-28ce5d9b81a4"  alt="site logo by moekm"/>
</p>

<div align="center">

![javascript](https://img.shields.io/badge/-Javascript-black?style=for-the-badge&logoColor=323330&logo=javascript&color=F0DB4F)
![vite](https://img.shields.io/badge/-vite-black?style=for-the-badge&logoColor=grey&logo=vite&color=FBC02D)
![react](https://img.shields.io/badge/-react-black?style=for-the-badge&logoColor=323330&logo=react&color=61DBFB)
![react-router](https://img.shields.io/badge/-reactrouter-black?style=for-the-badge&logoColor=000000&logo=reactrouter&color=D0021B)

</div>

## 📋 Table of Contents:

- [About](#about)
- [Live Preview](#live-preview)
- [Run (Development)](#run-development)
- [Build (Production)](#build-production)
- [Licence](#licence)

## <a name="about">🤔 About:</a>

This project is a front-end-only dashboard built with React and React Router, exploring the concept of a browser-based container management solution. It allows users to create, edit, and manage containers running backend API instances, providing insights into their processes.

The dashboard shows analytics like network traffic, API calls, total call costs, failed attempts, and more. all presented in a clean, minimal UI.

**This isn't a production tool, just a fun experimental concept to test the idea and learn.**

## <a name="live-preview">👀 Live Preview</a>

_(not available yet)_

_but should be availabe on the first release : )_

![screenshot of container box](https://github.com/user-attachments/assets/f195b413-dc36-443a-b2d0-43d5d9f3a67d)

## <a name="run-development">🔨 Run (Development)</a>

To run the project in development mode _(assuming you've already cloned this repository locally)_, start the Vite development server using the following command:

```bash
$> npm run dev
```

Once the server is running, navigate to `http://localhost:5173` in your browser.
And that’s it, feel free to explore the code and modify it as you wish

## <a name="build-production">🚀 Build (Production)</a>

To build the project for production, run the following command:

```bash
$> npm run build
```

After Vite finishes compiling, you’ll find a new `./dist` directory in your project folder. This directory contains the generated static files. You can host these files using a simple `Nginx` server or a custom server, such as:

- `http-server`

```bash
$> npm install http-server
$> http-server -o ./dist/index.html
```

- `PHP`

```bash
$> cd ./dist
$> php -S 127.0.0.1:3000 # will look for index.html
```

## <a name="licence">©️ Licence </a>

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).
