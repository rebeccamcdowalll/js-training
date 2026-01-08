const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

// Create two async functions:
// taskOne(): Log “One starting…”, await sleep(2000), log “One done”.
async function taskOne (){
    console.log("One starting...");
    await sleep (2000);
    console.log("One done");
}
// taskTwo(): Log “Two starting...”, await sleep(2000), log “Two done”.
async function taskTwo (){
    console.log("Two starting...");
    await sleep (2000);
    console.log("Two done");
}
// Create runSerial():
async function runSerial(){
    // Await taskOne().
    await taskOne();
    // Await taskTwo().
    await taskTwo();
}

// Goal: Observe that it takes 4 seconds total.
runSerial();


// Task 2: Fire and forget (non-blocking)
// Create runFast():
function runFast(){
    // Call taskOne() without the await keyword.
    taskOne();
    // Log “Finished!”.
    console.log("finished");
}
// Observe: “One starting…” and then “Finished!” appear instantly. “One done” appears 2 seconds later.
// Why? You started the task but didn't wait for it. The main thread moved on.


// Task 3: Parallel execution (the fast way)
// Create runParallel():
async function runParallel(){
    // Use Promise.all([ taskOne(), taskTwo() ]).
    await Promise.all([taskOne(),taskTwo()]);
}
runParallel();
// Observe: Both start together. Total time is 2 seconds, not 4.