console.log("Start");


const quoteMe = (quote,name,call) => {
setTimeout(() => {
    console.log("Now you get it");
    call({Quotation: quote});

},2000);
}

const movieMe = (quo,movies,callback) => {
    setTimeout(() => {
        console.log("Now you get it");
        callback({Movies: movies});
    },2000);
} 

var movies = ["StarDust","firefly","Tum mile","The Dark Knight"];

const start = quoteMe("Life is Beautiful", "Swathi", s => {
    console.log(s);
    movieMe(s.Quotation,movies, p => {
    console.log(p);
    });
});
 

console.log("finish");
