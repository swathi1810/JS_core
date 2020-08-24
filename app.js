console.log("Start");


quoteMe = (quote,name,callback) => {
setTimeout(() => {
    console.log("Now you get it");
    callback({Quotation: quote});

},5000);
}

movieMe = (movies,callback) => {
    setTimeout(() => {
        console.log("Now you get it");
        callback({Movies: movies});
    },5000);
} 

const start = quoteMe("Life is Beautiful", "Swathi", start => {
    console.log(start);
});
 

console.log("finish");
