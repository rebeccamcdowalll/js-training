// 1. Interfaces:
// Define User, Post, and Todo interfaces based on the JSONPlaceholder API structure.
interface User {
    id:number;
    name:string;
}
interface Post {
    userId:number;
    id:number;
    title:string;
    body:string;
}
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
// 2. State management (the spinner):
// Create a variable let isLoading = false.

let isLoading = false

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

import axios from "axios"
// Create fetchUser():
async function fetchUser(): Promise<User> {
    try{
        const request = await axios.get("https://jsonplaceholder.typicode.com/users/1");
        // Set it to true immediately when the page starts loading, and log “--- UI: Spinner visible---”.
        let isLoading = true
        console.log("--- UI: Spinner visible---")

         const user : User = {
            id:request.data.id,
            name:request.data.name,
        };
        console.log(user);
        return user;

    }   catch(error){
        console.log(error);
        throw error;
        // Set it to false when everything is finished (using finally), so the spinner disappears even if errors occur. Log “--- UI: Spinner hidden ---”
    }   finally {let isLoading = false
        console.log("--- UI: Spinner hidden ---")
    }
}

fetchUser();

async function fetchPosts(): Promise<Number> {
  try {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const userPosts: Post[] = request.data.filter((item) => item.userId === 1);
    // console.log(userPosts);
    //   count length of array
    const postCount = userPosts.length;
    console.log(postCount);
    return postCount;
  } catch (error) {
    console.log("error");
    throw error;
  }
//   count length of array
}
fetchPosts();

async function fetchTodos(): Promise<Number> {
  try {
    const request = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const userTodos: Post[] = request.data.filter((item) => item.userId === 1);
    // console.log(userTodos);
    //   count length of array
    const postTodos = userTodos.length;
    console.log(postTodos);
    return postTodos;
  } catch (error) {
    console.log("error");
    throw error;
  }
//   count length of array
}
fetchTodos();


async function callingFunctions(): Promise<void> {
  const [postCount, todosCount] = await Promise.all([
    fetchPosts(),
    fetchTodos(),
  ]);
  const user = await fetchUser();
  const name = user.name;
  // Log a summary: “User [Name] has [X] posts and [Y] todos.”
  console.log(
    `User [${name}] has [${postCount}] posts and [${todosCount}] todos`
  );
}
callingFunctions();