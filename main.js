// Scroll element in variable here
    const quoteElement = document.querySelector(".scroll-quote");

    // Quotes retrieved from API and displayed here
    async function fetchQuote(){
        console.log('fetching new quote...')
        try{
            // API parameter setup here
            const params = new URLSearchParams({
                tags: "technology,famous-quotes",
                maxLength: 120,
                limit: 1
            });

            // API response with quote here
            const response = await fetch(`https://api.quotable.io/random?tags=technology,famous-quotes&maxLength=120&_=${Date.now()}`);
            const data = await response.json();

            // Quote extracted from response here
            const quote = data;
            if (!quote || quote.content === 0) throw new Error("No quote found.");
            // const quote = quotes[Math.floor(Math.random() * quotes.length)];
            console.log("Selected Quote:", quote);

            
            

            // Apply scroll animation
            quoteElement.classList.add("scroll-out");
            void quoteElement.offsetWidth;
            
            setTimeout(() => {
                quoteElement.classList.remove("scroll-out");
                // DOM Element updated to show quote
                quoteElement.textContent = `"${quote.content}" - ${quote.author}`;
                

                quoteElement.classList.add("scroll-in");
            }, 1000);
        }catch(error){
            console.error("Error fetching quote:", error);
            quoteElement.textContent = "Great minds discuss ideas; average minds discuss events; small minds discuss people. - Eleanor Roosevelt";
        }
    }

    // Initial fetch here
    fetchQuote();

    // Refresh quote after 45 secs
    setInterval(fetchQuote, 45000);
