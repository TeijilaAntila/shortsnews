const url = 'https://inshortsapi.vercel.app/news?category=national';
fetch(url)
  .then(response => response.json())
  .then(data => {
    const articles = data.data;
    const newsList = document.querySelector('#newsList');

    articles.forEach(article => {
      const item = document.createElement('li');
      const image = article.image_url ? `<img src="${article.image_url}" alt="${article.title}" />` : '';
      item.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        ${image}
      `;
      newsList.appendChild(item);
    });
  })
  .catch(error => console.error(error));
