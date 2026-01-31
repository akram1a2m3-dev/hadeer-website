const addForm = document.getElementById('addForm');
const dashboardItems = document.getElementById('dashboardItems');

function loadItems() {
    let items = JSON.parse(localStorage.getItem('showcaseItems') || '[]');
    dashboardItems.innerHTML = '';
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('itemCard');
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
            ${item.img ? `<img src="${item.img}" alt="${item.title}">` : ''}
        `;
        dashboardItems.appendChild(div);
    });
}

addForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const fileInput = document.getElementById('imgFile');

    if(fileInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function() {
            const imgData = reader.result;
            addItem(title, desc, imgData);
        }
        reader.readAsDataURL(fileInput.files[0]);
    } else {
        addItem(title, desc, null);
    }
});

function addItem(title, desc, img) {
    let items = JSON.parse(localStorage.getItem('showcaseItems') || '[]');
    items.push({ title, desc, img });
    localStorage.setItem('showcaseItems', JSON.stringify(items));
    addForm.reset();
    loadItems();
}

loadItems();