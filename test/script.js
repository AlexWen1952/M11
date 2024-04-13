// Function to fetch data from the API
function fetchData() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json()) // Parse JSON
        .then(data => {
            console.log(JSON.stringify(data));

            // Process the data            
            var item = data[0];
            document.getElementById('image-id').textContent = "Image ID: " + item['id'];
            document.getElementById('image-width').textContent = "Image Width: " + item['width'];
            document.getElementById('image-height').textContent = "Image Height: " + item['height'];

            var img = document.createElement('img');
            img.src = item['url'];
            document.getElementById('image-container').appendChild(img);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function refresh() {
    document.getElementById('image-container').innerHTML = '';
    fetchData();
}

// Call the fetchData function when the page loads
window.onload = fetchData;
