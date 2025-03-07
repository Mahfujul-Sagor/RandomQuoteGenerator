const quotes = [
  "'If life were predictable it would cease to be life and be without flavor.' - Eleanor Roosevelt",

  "'In the end, it's not the years in your life that count. It's the life in your years.' - Abraham Lincoln",

  "'Life is a succession of lessons which must be lived to be understood.' - Ralph Waldo Emerson",

  "'You will face many defeats in life, but never let yourself be defeated.' - Maya Angelou",

  "'Never let the fear of striking out keep you from playing the game.' - Babe Ruth",

  "'Life is never fair, and perhaps it is a good thing for most of us that it is not.' - Oscar Wilde",

  "'The only impossible journey is the one you never begin.' - Tony Robbins",

  "'In this life we cannot do great things. We can only do small things with great love.' - Mother Teresa",

  "'Only a life lived for others is a life worthwhile.' - Albert Einstein",

  "'The purpose of our lives is to be happy.' - Dalai Lama",

  "'You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.' - John Lennon",

  "'You only live once, but if you do it right, once is enough.' - Mae West",

  "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.' - Ralph Waldo Emerson",

  "'Don't worry when you are not recognized, but strive to be worthy of recognition.' - Abraham Lincoln",

  "'The greatest glory in living lies not in never falling, but in rising every time we fall.' - Nelson Mandela",

  "'Life is really simple, but we insist on making it complicated.' - Confucius",

  "'May you live all the days of your life.' - Jonathan Swift",

  "'Life itself is the most wonderful fairy tale.' - Hans Christian Andersen",

  "'Do not let making a living prevent you from making a life.' - John Wooden",

  "'Go confidently in the direction of your dreams! Live the life you've imagined.' - Henry David Thoreau"
]
const button = document.querySelector('#btn');
const quote = document.querySelector('#quote');


button.addEventListener('click', ()=> {
  generateQuote();
});

const generateQuote = ()=> {
  let randomIndx = Math.round(Math.random() * 20);
  quote.innerText = quotes[randomIndx];
};