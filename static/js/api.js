// api.js

// Function to make a GET request to the backend API
async function getDreamAnalysis(dream) {
    const response = await fetch(`https://api.example.com/analyze_dream?dream=${encodeURIComponent(dream)}`);
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
}

// Function to submit a dream for analysis
async function submitDream(dream) {
    const response = await fetch('https://api.example.com/submit_dream', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ dream }),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return await response.json();
}