

function changeTheme(){
    if(document.body.style.backgroundColor =! "white")
    {
        console.log("theme changed to white")
        document.body.style.backgroundColor = "white"
    
        for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
            document.getElementsByClassName("text")[i].style.color = "black"
        }
    }
    /*else if(document.body.style.backgroundColor == "white")
    {
        document.body.style.backgroundColor = "--bs-gray-dark"
        for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
            document.getElementsByClassName("text")[i].style.color = "white"
        }
    }*/
    

}