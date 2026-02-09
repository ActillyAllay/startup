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

**Include node_modules in the .gitignore file!**

[JavaScript Class Example](https://htmlpreview.github.io/?https://github.com/webprogramming260/webprogramming/blob/main/instruction/javascript/introduction/jsDemo.html)

**Insights + Troubleshooting**

--

### Common Commands

`console.log();`

>Inputs a function or code, takes the output and prints it to the console

`const name = require("package-name");`

>Allows access to package functions as name.func in the .js file

## To-Do

**CSS**

- The nav tabs have whitespace under the text that doesn't click. At some point, turn them into proper buttons/change the link box somehow.
- Fix the up and down queue buttons.
- Try changing the grid-template from a set thing at two media widths into a max-width column.
- Make the font smaller!!! Test on a phone (300-400px)!!!
- ^^Redo the header and footer to fit on phone