const quoteElement = document.querySelector(".scroll-quote");

async function fetchQuote() {
    console.log('fetching new quote...');
    try {
        const params = new URLSearchParams({
            tags: "technology,famous-quotes",
            maxLength: 120,
            limit: 1
        });
        
        // Fix: Added backticks around the API URL string
        const response = await fetch(`https://api.quotable.io/random?tags=technology,famous-quotes&maxLength=120&_=${Date.now()}`);
        const data = await response.json();
        
        // The API returns an array if you use /quotes/random, or an object if you use /random
        const quote = Array.isArray(data) ? data[0] : data; 

        if (!quote || !quote.content) throw new Error("No quote found.");
        console.log("Selected Quote:", quote);

        quoteElement.classList.add("scroll-out");
        
        setTimeout(() => {
            quoteElement.classList.remove("scroll-out");
            // Appends the quote to the vertical text element
            quoteElement.textContent = `"${quote.content}" - ${quote.author}`;
            quoteElement.classList.add("scroll-in");
        }, 1000);

    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteElement.textContent = `"Great minds discuss ideas; average minds discuss events; small minds discuss people." - Eleanor Roosevelt`;
    }
}

fetchQuote();
setInterval(fetchQuote, 45000);
