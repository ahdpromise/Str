function logError(error) {
    document.body.innerHTML += `<p style="color: red;">Error: ${error}</p>`;
}

async function fetchData() {
    try {
        console.log("Fetching data...");
        document.body.innerHTML += "<p>Fetching data...</p>"; // طباعة داخل الصفحة
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);
        document.body.innerHTML += `<p>Data loaded successfully!</p>`;
    } catch (error) {
        console.error("Error loading data:", error);
        logError(error);
    }
}

fetchData();