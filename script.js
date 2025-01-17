// Array of quotes
const quotes = [
  {
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    content: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    content:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    content:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    content: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey",
  },
  {
    content:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa",
  },
  {
    content: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    content:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson",
  },
  {
    content:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    content:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");

// Function to get a random quote
function getQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  quoteElement.innerHTML = `"${selectedQuote.content}"`;
  authorElement.innerHTML = `— ${selectedQuote.author}`;
}

// Function to tweet the quote
function tweet() {
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quoteElement.innerHTML}" — ${authorElement.innerHTML}`
  )}`;
  window.open(tweetURL, "_blank");
}
