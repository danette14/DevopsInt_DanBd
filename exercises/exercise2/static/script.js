function sendSearch() {
    fetch(`/checkUrl`)
        .then(response => response.json())
        .then(data => {
            // Clear previous table content
           
            document.getElementById("result").innerHTML = "";

            document.getElementById("result").innerHTML = data

            })
            .catch(error => {
                console.error("Error fetching JSON data:", error);
                alert("Failed to retrieve JSON data.");
            });

        }
