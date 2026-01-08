// Task 4: The simple fetch
// Create a User interface (just id and name).

interface User {
    id:number;
    name:string;
}
import axios from "axios"
// Create fetchUser():
async function fetchUser(): Promise<void> {
    // Constraint: You must use try/catch to handle errors.
    try{
        // Use axios.get(“https://jsonplaceholder.typicode.com/users/1”).
        const request = await axios.get("https://jsonplaceholder.typicode.com/users/1");

        // Log the user's name.
        const user : User = {
            id:request.data.id,
            name:request.data.name,
        };
        console.log(user);

    }   catch(error){
        console.log(error);
    }
}
fetchUser();



// Task 6: The “pending” trap
// In fetchUser, remove the await keyword from the axios call.
// Log the result immediately.
// Observe: You see Promise { <pending> }. This is the pending promise, not the data