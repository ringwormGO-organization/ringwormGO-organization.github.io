function Theme()
{
    let new_theme = null;

    new_theme = randomTheme();
    console.log("New theme is: '" + new_theme + "'!");
    switch (new_theme)
    {
        case 'light':
            document.documentElement.style.setProperty('--bg-color', 'white')
            document.documentElement.style.setProperty('--fg-color', 'black')

            document.documentElement.style.setProperty('--bg-accordion-color', 'black');
            document.documentElement.style.setProperty('--fg-accordion-color', 'white');
            break;

        case 'dark':
            document.documentElement.style.setProperty('--bg-color', 'var(--bs-gray-dark)')
            document.documentElement.style.setProperty('--fg-color', 'white')

            document.documentElement.style.setProperty('--bg-accordion-color', 'white');
            document.documentElement.style.setProperty('--fg-accordion-color', 'black');
            break;

        case 'yellowlight':
            document.documentElement.style.setProperty('--bg-color', 'rgb(180, 178, 151)');
            document.documentElement.style.setProperty('--fg-color', 'white');

            document.documentElement.style.setProperty('--bg-accordion-color', 'white');
            document.documentElement.style.setProperty('--fg-accordion-color', 'black');
            break;

        case 'darkred':
            document.documentElement.style.setProperty('--bg-color', 'darkred');
            document.documentElement.style.setProperty('--fg-color', 'white');

            document.documentElement.style.setProperty('--bg-accordion-color', 'white');
            document.documentElement.style.setProperty('--fg-accordion-color', 'black');
            break;

        case 'darkblue':
            document.documentElement.style.setProperty('--bg-color', 'darkblue');
            document.documentElement.style.setProperty('--fg-color', 'white');

            document.documentElement.style.setProperty('--bg-accordion-color', 'white');
            document.documentElement.style.setProperty('--fg-accordion-color', 'black');
            break;

        default:
            break;
    }
}

function randomTheme()
{
    const themes = ['light', 'dark', 'yellowlight', 'darkred', 'darkblue'];
    return themes[Math.floor(Math.random() * themes.length)];
}
