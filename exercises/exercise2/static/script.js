
const urlValidityList = ['.com', '.co.il', '.org', '.net', '.edu', '.gov.il'];
const form = document.getElementById('urlForm');

form.addEventListener("submit", function (event){
    event.preventDefault();
    const url = document.getElementById('url').value;
    sendSearch(url)
    });


//check the validity of the user input and send it to the check url function.
function sendSearch(url) {
    const validURL = urlValidityList.some(element => url.endsWith(element));
    console.log(url);
    console.log(validURL);
    if (validURL) {
        checkURL(url);
    } else {
        alert("The URL is invalid. Please enter a valid URL.")
        // Clear previous table content
        document.getElementById("url").value = "";

    }

}

//Send a http request to the server to check if the url is alive.
async function checkURL(url) {
    try {
        const response = await fetch(`/checkurl?url=${url}`);
        const data = await response.json();
        console.log(url);

        if (data[0].status_code === 'OK') {
            document.getElementById("result").innerHTML = `The URL "${url}" is alive.`;
        } else {
            document.getElementById("result").innerHTML = `The URL "${url}" is unreachable.`;
        }
    } catch (error) {
        console.error("Error fetching JSON data:", error);
        alert("Failed to retrieve JSON data.");
    }

}