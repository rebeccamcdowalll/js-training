// 5. Extension (Retry Logic):
// APIs glitch. Write a helper function fetchWithRetry(url).
// It should try to fetch the URL.
// If it fails, wait 2 seconds (using sleep from the guided lab), then try again.
// If it fails 3 times, throw an error.
// Include logs to show what is happening, e.g. “Failed to fetch. Retrying in 2s... (1/3)”

import axios from "axios";
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// APIs glitch. Write a helper function fetchWithRetry(url).
async function fetchWithRetry() {
  const fakeUrl = "https://fakeurl";
  for (let i = 0; i < 3; i++) {
    try {
      await makeRequest(fakeUrl);
    } catch (error) {
      console.log(`Failed to fetch. Retrying in 2s... (${i + 1}/3)`);
      await sleep(2000);
    }
  }
  // Include logs to show what is happening, e.g. "Failed to fetch. Retrying in 2s... (1/3)"
}

async function makeRequest(url: string) {
  try {
    await axios.get(url);
  } catch (error) {
    console.log("Failed");
    throw error;
  }
}

fetchWithRetry();