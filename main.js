// Scroll quote element
const quoteElement = document.querySelector(".scroll-quote");

// Fetch and display a rotating quote
async function fetchQuote() {
  console.log('fetching new quote...');
  try {
    const response = await fetch(
      `https://api.quotable.io/random?tags=technology,famous-quotes&maxLength=120&_=${Date.now()}`
    );
    const data = await response.json();
    const quote = data;
    if (!quote || !quote.content) throw new Error("No quote found.");

    // Scroll out animation
    quoteElement.classList.remove("scroll-in");
    quoteElement.classList.add("scroll-out");

    setTimeout(() => {
      quoteElement.classList.remove("scroll-out");
      quoteElement.textContent = `"${quote.content}" — ${quote.author}`;
      quoteElement.classList.add("scroll-in");
    }, 600);

  } catch (error) {
    console.error("Error fetching quote:", error);
    quoteElement.textContent = '"Great minds discuss ideas; average minds discuss events; small minds discuss people." — Eleanor Roosevelt';
    quoteElement.classList.add("scroll-in");
  }
}

// Initial fetch
fetchQuote();
// Refresh every 45 seconds
setInterval(fetchQuote, 45000);
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
