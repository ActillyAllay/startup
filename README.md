# Loop Deck

[My Notes](notes.md)

_A brief description of the application here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum._


> [!NOTE]
>  This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
>  If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Proper use of Markdown** - _1/5/26_ - I read the above Markdown documentation. I replaced the placeholder image with a new image to test committing new files and images in Markdown. 
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Whenever my friends and I sit down for a game of DnD, we love to play background music to match the mood. However, suddenly changing songs can be jarring, and switching between playlists as we move between scenes can be a pain. My startup Loop Deck will give the user control over the way their music loops and changes tracks, with simple hotkeys to streamline the process. Loop Deck can be used to play background music for any task, turning the music from a distraction to a seamless background element.

### Design

![Design image](LoopDeckDesignThumbnails.png)

The main page consists of a music player, where users can mess with settings directly, use hotkeys to control the music settings, and add playlists to the queue. The login page allows users to log in to their accounts. Once logged in, users can access the playlists page, where they can input music and create playlists.

```mermaid
sequenceDiagram
    actor User
    participant Music Player
    participant Login Page
    participant Playlists
    User->>Music Player:
    Music Player->>Login Page: Log in
    Music Player->>Playlists: Go to saved playlists
    Login Page->>Music Player: After logging in
    Playlists->>Music Player: Listen to playlists
    Playlists->>Playlists: Input music
```

### Key features

- Access music inputted by user
- Play music directly using a media player
- Immediately loop or unloop the music
- Control the fade of music transitions
- Access settings quickly using hotkeys
- Create and save playlists with authorized user login 

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Provide structure to three views: music player, playlists, and login page.
- **CSS** - Add decorative color scheme. Create animated buttons for intuitive controls.
- **React** - Control the music player. Let the user switch between the three views. Respond to user interaction with the music player and playlist settings.
- **Service** - Allow user authentication. Store and retrieve user playlists and settings. Third party call for grabbing music and for changing background colors.
- **DB/Login** - Storage of user playlists and login information.
- **WebSocket** - Display music progress/changes in realtime with duration bar and queue.

## 🚀 AWS deliverable

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://yourdomainnamehere.click).

## 🚀 HTML deliverable

- [x] **HTML pages** - Three pages for the main music player, accessing playlists, and logging in.
- [x] **Proper HTML element usage** - Pages use header, main, and footer elements, as well as nav and div elements to separate different sections.
- [x] **Links** - All three pages link to each other. Logging in redirects to the music player page.
- [x] **Text** - Descriptions, labels, and placeholders are all written out in text.
- [x] **3rd party API placeholder** - The add song button will call for 3rd party access to music sites. (If this is not possible, a 3rd party API will be called to change CSS colors instead.)
- [x] **Images** - An SVG image is used for the website favicon. A placeholder image shows the album cover for a playlist.
- [x] **Login placeholder** - The login page includes user input boxes and buttons to submit the form.
- [x] **DB data placeholder** - The playlist order, album covers, etc. will be stored in the database for each user.
- [x] **WebSocket placeholder** - The music player and queue will react in real time to user input. (If this does not qualify as WebSocket use, then another page can be added to view other users' playlists and playlists will be shared in real time.)

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Header, footer, and main content body** - I did not complete this part of the deliverable.
- [ ] **Navigation elements** - I did not complete this part of the deliverable.
- [ ] **Responsive to window resizing** - I did not complete this part of the deliverable.
- [ ] **Application elements** - I did not complete this part of the deliverable.
- [ ] **Application text content** - I did not complete this part of the deliverable.
- [ ] **Application images** - I did not complete this part of the deliverable.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
