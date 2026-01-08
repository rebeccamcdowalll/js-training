// 5. Extension (Retry Logic):
// APIs glitch. Write a helper function fetchWithRetry(url).
// It should try to fetch the URL.
// If it fails, wait 2 seconds (using sleep from the guided lab), then try again.
// If it fails 3 times, throw an error.
// Include logs to show what is happening, e.g. “Failed to fetch. Retrying in 2s... (1/3)”

let isLoading = false

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

import axios from "axios"

async function fetchWithRetry(url: string): Promise<any> {
    const maxRetries = 3;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            isLoading = true;
            console.log("--- UI: Spinner visible---");
            const request = await axios.get(url);
            console.log("Successfully fetched data");
            return request.data;
        } catch (error) {
            if (attempt === maxRetries) {
                isLoading = false;
                console.log("--- UI: Spinner hidden ---");
                throw new Error(`Failed to fetch after ${maxRetries} attempts`);
            }
            console.log(`Failed to fetch. Retrying in 2s... (${attempt}/${maxRetries})`);
            await sleep(2000);
        }
    }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/broken-url")
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => {
        isLoading = false;
        console.log("--- UI: Spinner hidden ---");
    });