function quotegenerator() {
    const apiUrl = 'https://dummyjson.com/quotes/random'; 
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            display(data);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

function display(data) {
    const random1 = document.getElementById('quote');
    random1.textContent = `"${data.id} - ${data.quote}" - ${data.author}`;
}

quotegenerator();


