/* Variables */
var background_color = document.getElementById("back");
var color = document;

/* Functions */
document.onreadystatechange = () =>
{
    console.log("Ready");
    main();
}

function main()
{
    console.log("Entered main function");
}

function theme()
{
    if (background_color.style.backgroundColor != "black")
        var isDarkTheme = false;
    else
        var isDarkTheme = true;

    if (isDarkTheme == false)
    {
        background_color.style.backgroundColor = "black";
        return isDarkTheme = true;
    }

    if (isDarkTheme == true)
    {
        background_color.style.backgroundColor = "grey";
        return isDarkTheme = false;
    }
}