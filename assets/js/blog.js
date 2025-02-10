const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
const section = document.querySelector('section')

function back() {
    document.location.replace('index.html');
};

const button = document.querySelector('#button')
button.addEventListener('click', back)

function loadBlogs() {

    section.innerHTML = '';

    blogs.forEach(blog => {
        const articleElement = document.createElement('article');

        articleElement.innerHTML = `
            <h3>${blog.title}</h3>
            <hr>
            <p class="sentence">${blog.content}</p>
            <p>Author: <span>${blog.username}</span></p>
        `;

        section.appendChild(articleElement);
    });
}

loadBlogs();