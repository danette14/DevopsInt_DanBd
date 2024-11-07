function sendSearch() {

    url = document.getElementById('url').value;
    fetch(`/checkurl?url=${url}`)
        .then(response => response.json())
        .then(data => {
            // Clear previous table content

            document.getElementById("result").innerHTML = "";
            console.log(data);

            if (data[0].status_code === 'OK'){
                 document.getElementById("result").innerHTML = "URL is alive"
            }else{
                document.getElementById("result").innerHTML = "URL is unreachable"
            }


        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
            alert("Failed to retrieve JSON data.");
        });
}


