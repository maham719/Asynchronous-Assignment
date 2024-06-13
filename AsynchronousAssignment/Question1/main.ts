// Question # 1



// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

async function fetchGreeting(message:string) {
    setTimeout (()=>(console.log(message)),2000);
}
fetchGreeting("Hello World");
