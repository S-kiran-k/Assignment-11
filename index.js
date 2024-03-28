const he = document.getElementById("head");
const but  = document.getElementById("btn");
const but2 = document.getElementById("btn-1");
const fetchData = () => {
    fetch("https://baconipsum.com/api/?type=all")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data); // This will log the fetched data to the console
            but.addEventListener('click',()=>{
                let rand = Math.floor(Math.random() * data.length);
                he.textContent = JSON.stringify(data[rand]);
            })
             // Set the text content of 'he' element
        })
        .catch((err) => {
            console.error('There was a problem with your fetch operation:', err);
        });
};

fetchData();
but2.addEventListener('click',()=>{
    he.textContent = "Hi!"
})