$(document).ready(function(){
   function getQuote(){
       
       var quotes = ["test1", "test2"];
       var authors = ["test1", "test2"];
       
       var randomNum = Math.floor((Math.random()*quotes.length));
       var randomQuote = quotes[randomNum];
       var randomAuthor = author[randomNum]; 
       
       $(".quote").text(randomQuote);
       $(".author").text(randomAuthor);
       
       $(".btn").on("click", function(){
          getQuote();  
       });
   } 
});