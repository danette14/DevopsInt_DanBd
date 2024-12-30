$(document).ready(function(){
   
    $("#button").click(function sendSearch() {
       
        url = document.getElementById('url').value;
        fetch(`/checkurl?url=${url}`)
            .then(response => response.json())
            .then(data => {
                // Clear previous table content
               
                document.getElementById("result").innerHTML = "";
                console.log(data);
    
                document.getElementById("result").innerHTML =JSON.stringify(data)
    
                })
                .catch(error => {
                    console.error("Error fetching JSON data:", error);
                    alert("Failed to retrieve JSON data.");
                });
    
            });
  });

