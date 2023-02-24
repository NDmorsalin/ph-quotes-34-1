const loadQuota = () => {
  const url = "https://api.kanye.rest/";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayQuota(data));
};

loadQuota();

const displayQuota = (data)=>{
    const quotes = document.getElementById('quotes');
    quotes.innerText = data.quote
    console.log(data);
}