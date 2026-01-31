const itemsContainer = document.getElementById('itemsContainer');
let items = JSON.parse(localStorage.getItem('showcaseItems') || '[]');

items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('itemCard');
    div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        ${item.img ? `<img src="${item.img}" alt="${item.title}">` : ''}
    `;
    itemsContainer.appendChild(div);
});