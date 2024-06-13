/*
 * IMPORTANT:
 * API keys included in this script are for demonstration purposes only.
 * In a production environment, always secure API keys and sensitive data.
 * P.S. No hacking please — let’s keep this friendly :D!
 */
const apiUrl = "https://api.nasa.gov/planetary/apod?api_key=ahY4sf8mzgwWOCKb1jsRlZZ7Hctkxbe9CHkKoSiU"
const getApod = () => {

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            if (data.hdurl) {

                document.getElementById("apodPicture").src = data.hdurl;

            } else {
                document.getElementById("apodPicture").src = data.url;

            }

            document.getElementById("apodTitle").innerText = data.title;
            document.getElementById("apodExplanation").innerText = data.explanation;

            if (data.copyright) {

                document.getElementById("apodCopyright").innerHTML = `&copy;${data.copyright}`;

            } else {
                document.getElementById("apodCopyright").style.display = "none";
            }
        })

        .catch(error => {
            console.error("Error", error)
        });
};

document.addEventListener('DOMContentLoaded', getApod)