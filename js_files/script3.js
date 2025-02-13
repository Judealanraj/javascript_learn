const url = "http://localhost:3000/api"; // Your Express API endpoint

// Example JSON data
const jsonData = {
    name: "Alan",
    email: "alan@example.com"
};

// Sending the request
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(jsonData) // Convert JSON object to a string
})
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Convert response to JSON
})
.then(data => {
    console.log("Response Received:", data);
})
.catch(error => {
    console.error("Error:", error);
});
