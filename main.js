const list = document.getElementsByTagName('a');
const articlePosts = document.getElementsByClassName('posts');
// console.log(articlePosts.length)
console.log(articlePosts)
const section = document.querySelector('section')
const imageInSection = section.querySelector('img')
imageInSection.style.gridColumn = '1/3'
// console.log(imageInSection)

const takeAllPostOff = () => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].textContent.includes('All Posts')) {
            list[i].remove();
        }
    }
}

takeAllPostOff();

const obtainSections = () => {
    const travelArticle = section.querySelector('article')
        travelArticle.style.display = 'grid';
        section.style.display = 'grid';
        section.style.gridTemplateColumns = '1fr 1fr 1fr';
        section.style.gap = '34px';

    const innerSpan = travelArticle.querySelector('aside').querySelector('p').querySelector('span')
        innerSpan.remove();

    const innerText = travelArticle.querySelector('p');
        innerText.style.fontSize = '22px';

    const articleTitle = travelArticle.querySelector('h2');
        articleTitle.style.fontSize = '40px'
}

obtainSections();

const postArticles = () => {
    const articles = [];

    for (let i = 0; i < articlePosts.length; i++) {
        const posts = articlePosts[i];
        const articleElements = posts.querySelectorAll('article');
        articles.push(...articleElements);

        console.log(articles)
    }

    articles.forEach(article => {
        const h3Elements = article.querySelectorAll('h3');
        h3Elements.forEach(h3 => {
            h3.remove();
        });
    });

    articles[0].style.gridColumn = '2/3'
    articles[1].style.gridColumn = '1/2'
    articles[1].style.gridRow = '1/2'

};

postArticles();