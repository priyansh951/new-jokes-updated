// using promises

// fetch method returns promises
// 2 case honge data milega y fir nhi milega 
// fulfil and rejecct
// in 90% cases we consume the promises

// GET https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

const generateJokes =()=>{
    const setHeader ={
        headers : {
            Accept : "application/json"
        }
    }
    // taki ye usme se bs joke wala part uthaye wrna pura html de dega
    fetch('https://icanhazdadjoke.com', setHeader)
    .then((res)=>res.json())
    // ab jo data agar mila usse accecess bhi to krna hai uske liye niche wala then
    .then((data)=>{
        jokes.innerHTML = data.joke;
    })
    .catch((error)=>{
        console.log(error)
    })
}
// firing event when joke button is clicked 
jokeBtn.addEventListener('click',generateJokes);