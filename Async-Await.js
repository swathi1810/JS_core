console.log("Start");


const quoteMe = (quote) => {
return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Now you get it");
        resolve({Quotation: quote});
    
    },2000);
});
}

const movieMe = (quo,movies) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Now you get it");
            resolve({Movies: movies});
        },2000);
    });
} 

var movies = ["StarDust","firefly","Tum mile","The Dark Knight"];


const displayDetails = async () => {
    const quote = await quoteMe("life is beautiful");
    const movieName = await movieMe(quote,movies);
    console.log(movieName);
}

displayDetails();

console.log("Finish");