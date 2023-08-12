fetch('https://d5vsib4gk6.execute-api.us-east-1.amazonaws.com/view_count', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => response.json())
   .then(response => document.getElementById("views").innerHTML = "View Count: " + JSON.stringify(response))
