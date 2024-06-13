/*
 * IMPORTANT:
 * API keys included in this script are for demonstration purposes only.
 * In a production environment, always secure API keys and sensitive data.
 * P.S. No hacking please — let’s keep this friendly :D!
 */
const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=ahY4sf8mzgwWOCKb1jsRlZZ7Hctkxbe9CHkKoSiU"
const getApod = () => {

    fetch(apiUrl)
    .then (response => response.json())
    .then (data => {

        document.getElementById("apodPicture").src = data.hdurl;
        document.getElementById("apodTitle").innerText = data.title;
        document.getElementById("apodExplanation").innerText = data.explanation;
        document.getElementById("apodCopyright").innerHTML = `&copy;${data.copyright}`;
        

    })

    .catch (error => {
        console.error("Error", error)
    });


};

document.addEventListener('DOMContentLoaded', getApod)