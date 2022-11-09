export function firstLetterUpperCase(text) {
    return text[0].toUpperCase() + text.slice(1)
}

export function getUrlParam(searchText) {
    const queryParams = document.location.search;
    const urlParams = new URLSearchParams(queryParams);
    const result = urlParams.get(searchText);
    return result
}

export function renderAllComments(post) {
    const commentsWrapper = document.createElement('div');
    const commentList = document.createElement('div');


    // const sliderButtonNext = document.createElement('button');
    // sliderButtonNext.classList.add('carousel-control-next');
    // sliderButtonNext.setAttribute('data-bs-target', 'carouselExampleControls');
    // sliderButtonNext.setAttribute('data-bs-slide', 'next');
    // sliderButtonNext.innerHTML = `
    //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>`

    // const sliderButtonPrev = document.createElement('button');
    // sliderButtonPrev.classList.add('carousel-control-prev');
    // sliderButtonPrev.setAttribute('data-bs-target', 'carouselExampleControls');
    // sliderButtonPrev.setAttribute('data-bs-slide', 'prev');
    // sliderButtonPrev.innerHTML = `
    //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span class="visually-hidden">Prev</span>`

    post.comments.map(comment => {
        const commentItem = document.createElement('div');
        const commentTitle = document.createElement('h5');
        const commentAuthor = document.createElement('a');
        const commentContent = document.createElement('p');

        commentTitle.textContent = firstLetterUpperCase(comment.name);
        commentAuthor.textContent = comment.email;
        commentAuthor.href = `mailto:${comment.email}`;
        commentContent.textContent = firstLetterUpperCase(comment.body);

        commentItem.append(commentTitle, commentAuthor, commentContent);
        commentList.append(commentItem);
        commentsWrapper.prepend(commentList);
        // commentsWrapper.prepend(sliderButtonNext, sliderButtonPrev);

        commentList.classList.add('comments-list');
        commentItem.classList.add('card', 'm-3', 'p-3', 'comment-item');

        commentList.classList.add('carousel-inner', `slider-test-${post.id}`);
        commentItem.classList.add('carousel-item');

    })

    commentsWrapper.classList.add('commentsWrapper', 'carousel');
    commentsWrapper.id = `carouselExampleControls-${post.id}`;
    commentsWrapper.setAttribute('data-bs-ride', 'carousel');
    sliderTest(post)

    return commentsWrapper;
}

function sliderTest(post) {
    const multipleCardCarousel = document.querySelector(`#carouselExampleControls`);
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false
    })

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();

    var scrollPosition = 0;

    $('.carousel-control-next').on('click', () => {
        if (scrollPosition < (carouselWidth - (cardWidth * 1))) {
            console.log('next');
            console.log(`carouselExampleControls-${post.id}`);
            scrollPosition = scrollPosition + cardWidth;
            $(`.slider-test-${post.id}`).animate({ scrollLeft: scrollPosition }, 600)
        }
    });
    $('.carousel-control-prev').on('click', () => {
        if (scrollPosition > 0) {
            console.log('prev');
            console.log(`carouselExampleControls-${post.id}`);
            scrollPosition = scrollPosition - cardWidth;
            $(`.slider-test-${post.id}`).animate({ scrollLeft: scrollPosition }, 600)
        }
    });
}

export function createLinksList(paramsObj) {
    let { data, path, listClasses, itemsClasses } = paramsObj
    const list = document.createElement('ul');
    list.classList.add('list-element');

    if (listClasses) { listClasses.map(elementClass => list.classList.add(elementClass)) }

    data.map(item => {
        const itemElement = document.createElement('li');
        itemElement.classList.add('list-item');

        if (itemsClasses) { itemsClasses.map(itemClass => list.classList.add(itemClass)) }

        const linkElement = document.createElement('a');
        linkElement.href = `./${path}.html?${path}_id=${item.id}`;
        linkElement.textContent = firstLetterUpperCase(item.title);


        itemElement.append(linkElement);
        list.append(itemElement);
    })
    return list
}

export function renderSinglePost(post) {
    const postTitle = document.createElement('h2');
    const postAuthor = document.createElement('a');
    const postContentElement = document.createElement('p');

    postAuthor.textContent = post.user.name;
    postAuthor.href = `./user.html?user_id=${post.user.id}`;
    postTitle.textContent = firstLetterUpperCase(post.title);
    postContentElement.textContent = firstLetterUpperCase(post.body) + '.';

    const postContent = document.createElement('div')

    postContent.append(postTitle, postAuthor, postContentElement);

    return postContent
}

export function renderLinkElement(post) {
    const link = document.createElement('a');
    link.textContent = 'All author posts';
    link.href = `./posts.html?user_id=${post.user.id}`;
    return link
}

export async function fetchData(url) {
    const res = await fetch(url);
    const result = await res.json();
    return result
}

export function createElement(paramsObj) {
    let { tag, content, classes, href } = paramsObj
    const element = document.createElement(tag);
    element.textContent = content;
    if (classes) { element.className = classes };
    if (href) { element.href = href };

    return element
}