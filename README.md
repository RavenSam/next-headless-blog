# SiSky
[SiSky](https://sisky.vercel.app/) is a headless blog build using the [NextJS](https://nextjs.org) and [TailwindCSS](https://tailwindcss.com) for the frontend and [Strapi CMS](https://strapi.io/) as a backend.

you can find the strapi repository that I used for this project [here](https://github.com/RavenSam/my-strapi-project) 

### [Website Demo](https://sisky.vercel.app/)

## Screenshots

#### Posts Page
![enter image description here](https://github.com/RavenSam/sisky/blob/main/public/secreenshots/showcase/post%20page.png?raw=true)



#### Sign up Page
![enter image description here](https://github.com/RavenSam/sisky/blob/main/public/secreenshots/showcase/Sign%20up%20page.png?raw=true)

#### Login Page
![enter image description here](https://github.com/RavenSam/sisky/blob/main/public/secreenshots/showcase/login%20page.png?raw=true)

#### Dashboard
![enter image description here](https://github.com/RavenSam/sisky/blob/main/public/secreenshots/showcase/dashboard%20page.png?raw=true)
#### Dashboard Sidenav
![enter image description here](https://github.com/RavenSam/sisky/blob/main/public/secreenshots/showcase/sidenav.png?raw=true)

## Installation

### Set up environment variables

create a `.env` file on your root directory
Your `.env` file should look like this:

```bash

NEXT_PUBLIC_API_URL=<your strapi cms url>


```



This project requires [node](http://nodejs.org) and [npm](https://npmjs.com) installed globally.

Clone the repository to a directory of your choosing.

Navigate into the project directory and install the necessary packages

```bash
npm install

# or

yarn install
```

To start the developement server

```bash
npm run dev

# or

yarn dev

```

