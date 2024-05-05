const products = [
    { id: 0, title: 'Mathematics Textbook' },
    { id: 1, title: 'Biology Workbook' },
    { id: 2, title: 'Chemistry Textbook' },
    { id: 3, title: 'Physics Lab Manual' },
    { id: 4, title: 'History Study Guide' },
    { id: 5, title: 'English Literature Reader' },
    { id: 6, title: 'Geography Textbook' },
    { id: 7, title: 'Computer Science Workbook' },
    { id: 8, title: 'Political Science Textbook' },
    { id: 9, title: 'Economics Workbook' },
    { id: 10, title: 'Spanish Language Guide' },
    { id: 11, title: 'French Workbook' },
    { id: 12, title: 'Art History Guide' },
    { id: 13, title: 'Music Theory Textbook' },
    { id: 14, title: 'Psychology Workbook' },
    { id: 15, title: 'Sociology Textbook' },
    { id: 16, title: 'Philosophy Guide' },
    { id: 17, title: 'Business Studies Workbook' },
    { id: 18, title: 'Literary Analysis Guide' },
    { id: 19, title: 'Anthropology Textbook' },
];

const displayItems = (items) => {
    const root = document.getElementById('root');
    root.innerHTML = items.map((item) => `<a href="#">${item.title}</a>`).join('');
    root.classList.add('show');
};

document.getElementByClassName('search').addEventListener('input', (e) => {
    const searchData = e.target.value.toLowerCase();
    if (searchData.trim() === '') {
        document.getElementById('root').classList.remove('show');
    } else {
        const filteredData = products.filter((item) => item.title.toLowerCase().includes(searchData));
        displayItems(filteredData);
    }
});