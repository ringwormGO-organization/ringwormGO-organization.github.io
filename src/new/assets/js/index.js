var current_theme = 'dark';

function Theme()
{
    let new_theme = null;

    new_theme = randomTheme();

    if (new_theme == current_theme)
    {
        Theme();
    }

    console.log("New theme is: '" + new_theme + "'!");
    switch (new_theme)
    {
        case 'light':
            document.documentElement.style.setProperty('--bg-color', 'white')
            document.documentElement.style.setProperty('--fg-color', 'black')

            document.documentElement.style.setProperty('--bg-accordion-color', 'black');
            document.documentElement.style.setProperty('--fg-accordion-color', 'white');

            document.documentElement.style.setProperty('--fg-accordion-not-collapsed-color', 'yellowgreen');
            document.documentElement.style.setProperty('--border-accordion', 'black solid 1px');
            break;

        case 'dark':
            document.documentElement.style.setProperty('--bg-color', 'var(--bs-gray-dark)')
            document.documentElement.style.setProperty('--fg-color', 'white')

            document.documentElement.style.setProperty('--bg-accordion-color', 'white');
            document.documentElement.style.setProperty('--fg-accordion-color', 'black');

            document.documentElement.style.setProperty('--fg-accordion-not-collapsed-color', '#ff9800');
            document.documentElement.style.setProperty('--border-accordion', 'none');
            break;

        case 'yellowlight':
            document.documentElement.style.setProperty('--bg-color', 'rgb(180, 178, 151)');
            document.documentElement.style.setProperty('--fg-color', 'white');

            document.documentElement.style.setProperty('--bg-accordion-color', 'white');
            document.documentElement.style.setProperty('--fg-accordion-color', 'black');

            document.documentElement.style.setProperty('--fg-accordion-not-collapsed-color', 'yellowgreen');
            document.documentElement.style.setProperty('--border-accordion', 'fuchsia solid 1px');

            document.documentElement.style.setProperty('--fg-accordion-not-collapsed-color', '#ff9800');
            document.documentElement.style.setProperty('--border-accordion', 'none');
            break;

        case 'darkred':
            document.documentElement.style.setProperty('--bg-color', 'darkred');
            document.documentElement.style.setProperty('--fg-color', 'white');

            document.documentElement.style.setProperty('--bg-accordion-color', 'white');
            document.documentElement.style.setProperty('--fg-accordion-color', 'black');

            document.documentElement.style.setProperty('--fg-accordion-not-collapsed-color', '#ff9800');
            document.documentElement.style.setProperty('--border-accordion', 'none');
            break;

        case 'darkblue':
            document.documentElement.style.setProperty('--bg-color', 'darkblue');
            document.documentElement.style.setProperty('--fg-color', 'white');

            document.documentElement.style.setProperty('--bg-accordion-color', 'white');
            document.documentElement.style.setProperty('--fg-accordion-color', 'black');

            document.documentElement.style.setProperty('--fg-accordion-not-collapsed-color', '#ff9800');
            document.documentElement.style.setProperty('--border-accordion', 'none');
            break;

        case 'darkgreen':
            document.documentElement.style.setProperty('--bg-color', 'darkgreen');
            document.documentElement.style.setProperty('--fg-color', 'white');

            document.documentElement.style.setProperty('--bg-accordion-color', 'white');
            document.documentElement.style.setProperty('--fg-accordion-color', 'black');

            document.documentElement.style.setProperty('--fg-accordion-not-collapsed-color', '#ff9800');
            document.documentElement.style.setProperty('--border-accordion', 'none');
            break;

        default:
            break;
    }
    
    current_theme = new_theme;
}

function randomTheme()
{
    const themes = ['light', 'dark', 'yellowlight', 'darkred', 'darkblue', 'darkgreen'];
    return themes[Math.floor(Math.random() * themes.length)];
}
