# MangaApp

This is the repository of my Manga App, which was made to practice:

- React
- React Router
- Tailwind CSS

This app uses the [MangaDex API](https://api.mangadex.org/swagger.html) to fetch the Mangas, it's covers, chapters and pages.
All credit for the translation goes to the grop that made It.

___

## How to set up

Since the MangaDex API doesn't allow fetching data from any other url other than MangaDex itself and LocalHost, the only way to try this App is hosting it yourself.

### What you will need:
  - Node
  - Git (Optional)
  - A terminal (be it Git, cmd, Powershell, or any other that you may prefer)

___

### Step 1: Cloning the repository

Firstly you'll have to download the repository, you can download it as a .zip with GitHub clicking in the green button labeled "Code" and then in the "Download ZIP" option.

If you wish you can also do it with git.

```
git clone https://github.com/sebadio/MangaApp.git
```


### Step 2: Opening the project

If you downloaded the ZIP you'll have to extract it, with what program you do it is up to you.
You then will have to enter the folder in wich it was extracted and open a terminal.

If you're doing the Git method you can just cd into the folder:

```
cd MangaApp
```


### Step 3: Installing the dependencies

In the terminal you have opened you'll have to write the following line: 

```
npm install
```

(Given you'll need Node for this step to work)


### Step 4: Starting the local server

Since the app was initiated with Vite opening it will be easy and fast, you'll just have to write this in your terminal:

```
npm run dev
```

Then the only thing left to do is open your preferred browser and input in the link input "http://localhost:3000/".
