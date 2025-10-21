let quote = [
    { 'quote':"Do not take life too seriously. You will not get out alive.",
        'auther':"--Elbert Hubbard"
    },
    { 'quote':"The best revenge is massive success.",
        'auther':"--Frank Sinatra"
    },
    { 'quote':"You miss 100% of the shots you don't take.",
        'auther':"--Wayne Gretzy"
    },
    { 'quote':"It's not what happens to you, but how you react to it that matters.",
        'auther':"--Epictetus"
    },
    { 'quote':"IResentment is like drinking poison and waiting for your enemies to die.",
        'auther':"--Nelson Mandela"
    },
]

function getQuote(){
    var num = Math.floor(Math.random()*quote.length)

    document.getElementById("quote").innerHTML=quote[num].quote;
    document.getElementById("auther").innerHTML=quote[num].auther;
}