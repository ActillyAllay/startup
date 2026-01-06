# Cassie Rust - CS 260 Notes

[My startup - Placeholder name here](https://github.com/ActillyAllay/startup)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)
- [Markdown syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)


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

## Miscellaneous

From the existing notes that were in this template:

```
```html
[code]
```
```
>Lets the code look like the specified type in Markdown.
