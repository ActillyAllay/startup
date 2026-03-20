# Cassie Rust - CS 260 Notes

[LoopDeck Website](https://startup.dndmusicplayer.click)

[GitHub Page for LoopDeck](https://github.com/ActillyAllay/startup)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- [Markdown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [NPM Packages](npmjs.com)

- [MDN Page for <audio>](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio)



## Git

**Notes**

Git is a system used for tracking and saving version histories of a file directory. It can also pull and push from a repository hosted on the cloud at GitHub.

Get into the habit of _Pull -> Code and Test -> Commit -> Push_

**Troubleshooting**

I was initally struggling to push over to GitHub on my first RespositoryTest, as my computer terminal wouldn't accept a password or the copy-pasted personal access token. I installed the GitHub Command Line Tool or cli, and that has fixed the problem as of now.

Sometimes after typing `git log` or `git diff`, the terminal prompt line will turn from a directory into ":". Currently I believe this happens when the full response is hidden. I tried backspace at first but that caused the terminal to freak out. Instead, using "Enter" to keep revealing the response seems to work, and "q" to exit out and turn the command prompt line back to normal. 

### Common Commands

```
git init
git status
git log

git add <filename>
git commit
git commit -am <comment>
git checkout <SHA>
gif diff HEAD HEAD~1

git branch <name>
git merge <name>

git clone <url>
git pull
git fetch
git push
```

## AWS

**Notes**

My AWS server is automatically connected to my technology stack thanks to the class preset. It has a t2.micro instance type and is using an elastic IP.

>!**Note to Self:** Keep track of payment charges! After the semester ends, go cancel whatever you want cancelled.

The Simon subdomain is now connected to my clone of the Simon repository. It has a deployment script that deletes the old deployment and replaces it with the updated files, getting the static files from a Git repository to the server directory. Run the deployment script by putting a dot in front of it in the command prompt.

`./deployFiles.sh -k <server pass key location> -h <domain name> -s <subdomain>`

>Deploys files (script is in the simon-html repository)

IP: 35.168.139.76

Domain name: dndmusicplayer.click

`ssh -i <directory to .pem> ubuntu@35.168.139.76`

>Used to access the console window and directory for my server

**Troubleshooting**

Currently the `dig`, `traceroute` and `whois` commands do not work in Powershell or gitbash for me. Currently unresolved; my guess is they're a plugin that needs to be installed.

## Caddy

Caddy allows the website to be HTTPS instead of HTTP using Let's Encrypt. It can also work as a reverse proxy.

## HTML

**Notes**

Make sure to start all documents with `<!DOCTYPE html>` to define the doc. This is separate from the `<html>` tag, which comes right after and is a structure to designate the whole page.

Multiple different input elements can be used. `<form>` keeps all the inputs in one submission. Keep an eye on the range, progress, and file attributes--those could come in handy for the startup.

Media elements are external page references from URLs or internal media created from the code. Controls and loop are auto-built into HTML--can these be controlled by JS as well, or just the user? This will be very important for my startup. Audio, canvas, and svg need closing tags, while image and video are self-contained.

`img; audio; video; svg; canvas`

My CodePen account is linked to my GitHub account now. CodePen allows new pens or forking of existing pens, so there's lots of other users' pens to explore for ideas.

[My CodePen Account](https://codepen.io/ActillyAllay)

**Insights + Troubleshooting**

Why connect labels to specific inputs? What makes it different from a nonconnected label or a header nested next to the input?

The CodePen examples close self-containing tags like `<tag attrs />`. From previous experience I don't think the closing slash is necessary, but it's good to know for consistent style and keeping track of nested structures.

`nav` can go inside `header`. `menu` is a semantic version of `ul` for nav buttons.

According to MDN, the content inside the `audio` tags is a backup in case the browser doesn't load the element.

## CSS

**Notes**

Animations are done with the `animation-name` property and the `@keyframes` ruleset.

Responsive design is when the application reacts to different viewport sizes. Using `block` and `inline` is helpful for arrangement. The property `float` has a value of left or right and lets other elements wrap around it.

`<meta name=”viewport” content=”width=device-width, initial-scale=1” />`

>Stops the browser from auto-scaling and messing with coded responsive design

**Insights + Troubleshooting**

The natural margin of the body is 8px. Any elements outside that margin will force a horizaontal scrollbar to show up. You can overlap into that box by putting a negative margin on a box. 

## JavaScript

JS is an interpreter coding language, so it has runtime errors and try/except testing similar to Python. Node and NPM allow local executing JS outside of a browser and installing packages.

***Include node_modules in the .gitignore file!***

[JavaScript Class Example](https://htmlpreview.github.io/?https://github.com/webprogramming260/webprogramming/blob/main/instruction/javascript/introduction/jsDemo.html)

Some of the tools in a toolchain include a linter, minifier and prettier, which keep code standardized and efficient; a transpiler, which compiles code into different formats; a polyfill that generates backwards-compatible code for older browsers; a bundler for delivering code to the browser; a tester, at multiple levels, for correctness; and a deployer to package and deliver code to the production environment.

### Vite

Vite sets up the toolchain with the command line. When in the Vite directory, use `npm run dev` to host the code locally for testing and `npm run build` to package the code into the *dist* directory which is ready for deployment. The deployReact script for this class automatically runs the build script and deploys the resulting directory.

### React

React uses JSX files. JSX is used in development, then Vite transforms them into HTML and JS files for production deployment. The main page should still be index.jsx. 

One of the benefits of React is the ability to use components, which reduces repeat code and lets the code better represent what the user interface looks like. Component elements like `<Func />` load a component function; the function returns the JSX code that will go in the location of the element.

Components can have attributes passed in as arguments. They can also have states changed and updated, like button toggles. Whenever a state or property changes, the `render` function will automatically rerender the page. Components can be part of a return of other components, leading to nested rendering of a page.

```
npm init -y
npm install vite@latest -D
npm install react react-dom
```
A web framework router allows for single-page applications. This class uses react-router-dom. 

### JS

Use `let` to create a variable and `const` to construct an object.

Local storage can hold string, numbers, and booleans. Switch to and from JSON formatting with `JSON.stringify` and `JSON.parse` to store other data types as JSON strings.

Objects have properties with values, which can be assigned and used in a dictionary-like array. Functions and classes are good for component-izing new objects.

### Common Commands

`console.log();`

>Inputs a function or code, takes the output and prints it to the console

`const name = require("package-name");`

>Allows access to package functions as name.func in the .js file

`() => 5 - 3;`

>Using arrows to make an unnamed function with no input and an output of 2

**Insights + Troubleshooting**

`class` is a keyword in JS, so it can't be used as an element attribute in JSX. Instead, use `className`.

Why do a function within a function for onClick? Is it because of rerendering delays? -> It seems to be because either it sends onClick data automatically as an input, or it constantly runs the function outside of clicking. The nested function overwrites the weird onClick arguments into proper arguments and makes sure it only happens when the button is clicked.

`auth === true ? false : true` acts as a single line version of if/then/else

It looks like the "main area" (the area inside the export function Component(){}) gets run at rendering (when anything happens in it). This means if something inside it sets off the useEffect, it will run before and after the useEffect.

## Web Service

You send a HTTP request on a certain port server, and have whatever is listening on that port send a response. Caddy is a gateway that redirects requests to other ports (80 or HTTP or 443 or HTTPS port) and process requests to return static files directly.

Endpoints/APIs: Methods or tasks that can retrieve external data
Serverless Functionality: One endpoint controls only one task, can go through gateways scaled to demand

### HTTP Requests

HTTP requests include GET, POST (create new resource), PUT (update resource using its unique ID), DELETE, and OPTIONS (get metadata). Normally HTTP requests and responses can’t access previous requests. Cookies track requests and provide that information as a header to future requests, allowing memory for preferences or authentication.

```
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

HTTP responses follow a similar format. They include status codes that allow the request client to interpret what the response means:
- 1xx - Informational.
- 2xx - Success.
- 201 - Created: The request was successful and a new resource was created.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 308 - Temporary redirect: The resource is temporarily located at a different location. The temporary location is specified in the response location header.
- 4xx - Client errors. The request is invalid.
- 401 - Unauthorized: The request did not provide a valid authentication token.
- 404 - Not found: An unknown resource was requested.
- 429 - Too many requests: Client made too many requests in too short of a time period.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.
- 503 - Service unavailable: The server is temporarily down. The client should try again with an exponential back off.

### Server Backend

Run the backend with node index.js in the console. To check what Node’s response will be, use the command `curl <URL>`.

Test run the browser by running `node index.js` in the command line.

### Common Commands

`curl <URL>`

>Takes the port URL, eg. localhost:8080/endpoint, and returns what Node's response would be for a real request

`function middlware(req, res, next) {...; next();}`

>Code for a middlware function; make sure to run next() at the end to pass it on to the next middleware

**Insights + Troubleshooting**

Here's an example of moving a local module to a global scale, by attaching it to a window and/or putting it in an event listener. Or, if you use a bundler for modules, they should be brought up into the global HTML scope automatically.

```
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```

## To-Do

**CSS**

- The nav tabs have whitespace under the text that doesn't click. At some point, turn them into proper buttons/change the link box somehow.
- Fix the up and down queue buttons.
- Try changing the grid-template from a set thing at two media widths into a max-width column.
- Make the font smaller!!! Test on a phone (300-400px)!!!
- ^^Redo the header and footer to fit on phone

**JavaScript**

- Make the Log In button automatically redirect user to the music page
- Make the login form only take certain parameters (no empty slots)