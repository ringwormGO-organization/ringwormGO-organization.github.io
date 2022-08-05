# How to start contributing
Just drop a Pull Request :)

# Pull Request style
1. Use LF. Set up your Git settings with this: `git config --global core.autocrlf false` and check if it is OK by `git config --global core.autocrlf`. It need to return `false` or nothing.
2. Use spaces, size: `4`!

## Repo structure
### ringwormGO-new
```
index.html - main website file
FAQ.html - FAQ page
projects.html - Projects page
favicon.ico - icon
assets/
├─ css/
│  ├─ styles.scss - main file for styles
│  ├─ Navbar-Right-Links-icons.css - style for navbar
│  ├─ accordion.scss - style for FAQ.html
├─ js/
│  ├─ bs-init.js - some stuff, don't touch it!
│  ├─ index.js - main js file, there is theme changer code
├─ img/ - images
├─ fonts/ - fonts
├─ bootstrap/
│  ├─ css/ - css bootstrap code, don't touch it!
│  ├─ js/ - js bootstrap code, don't touch it!
```

*When changing `.scss` files, be sure you save and compile file you changed and also compile `styles.scss`*

### ringwormGO-website
```
index.html - main website file
FAQ.html - FAQ page
style.css - main file for styles
main.js - main js file, there is theme changer code
pages/
├─ style2.css - style for ringOS.html and Termi.html
├─ ringOS.html - ringOS page
├─ Termi.html - Termi page
```

*Sorry for not being arranged alphabetically*
