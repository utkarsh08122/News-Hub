const key = "5e537a27a37e40ae98a044c6348af543";
const api = "https://newsapi.org/v2/everything?q=";
window.addEventListener("load", () => {
  fetchNews("Indian");
});

async function fetchNews(query) {
  const res = await fetch(`${api}${query}&apikey=${key}`);
  const data = await res.json();
  bindData(data.articles);
}
function bindData(articles) {
  const card = document.getElementById("input");
  const newsTemplate = document.getElementById("template");

  card.innerHTML = "";
  articles.forEach((article) => {
    if (!article.urlToImage) return;
    const cardClone = newsTemplate.content.cloneNode(true);
    fillData(cardClone, article);
    card.appendChild(cardClone);
  });
}
function fillData(cardClone, article) {
  const image = cardClone.getElementById("cardImg");
  const main_hedind = cardClone.getElementById("h2");
  const data = cardClone.getElementById("h6");
  const p = cardClone.getElementById("p");

  image.src = article.urlToImage;
  main_hedind.innerHTML = article.title;
  p.innerHTML = article.description;



data.innerHTML = `${article.source.name}`

cardClone.firstElementChild.addEventListener("click", ()=>{
  window.open(article.url,"blank");
})
}


const li = document.getElementsByClassName('li');
for (let index = 0; index < li.length; index++) {
  li[index].addEventListener('click',(li)=>
  {
  
    fetchNews(li.target.innerHTML);

  })

}

const enterHtml = document.getElementById("inputText");
const button = document.getElementById("searc");
button.addEventListener("click", () => {
  fetchNews(enterHtml.value);
 
});


