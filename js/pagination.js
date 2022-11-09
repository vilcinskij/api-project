import { createElement } from "./functions.js";

export default function renderPaginationLinks(page) {
    const total = 100;
    const limit = 11;
    const pages = Math.ceil(total / limit)
    const currentPage = Number(page)

    const paginationWrapper = createElement({ tag: 'div', classes: 'pagination-wrapper' });

    const firstPaginationElement = createSinglePaginationElement({
        currentPage,
        pages: 1,
        content: 'First page',
        classes: 'pagination-link first-pagination-links'
    })
    paginationWrapper.append(firstPaginationElement)


    for (let i = 1; i <= pages; i++) {
        const paginationElement = createSinglePaginationElement({
            currentPage,
            pages: i,
            content: i,
            classes: 'pagination-link first-pagination-links'
        })
        paginationWrapper.append(paginationElement);
    }

    const lastPaginationElement = createSinglePaginationElement({
        currentPage,
        pages,
        content: 'Last page',
        classes: 'pagination-link last-pagination-links'
    })
    paginationWrapper.append(lastPaginationElement)
    return paginationWrapper
}



function createSinglePaginationElement(paramsObj) {
    let { currentPage, pages, content, classes } = paramsObj
    let paginationElement;
    if (currentPage === pages) {
        paginationElement = createElement({
            tag: 'span',
            content: content,
            classes: 'pagination-link firs-pagination-links current-page',
        })
    } else {
        paginationElement = createElement({
            tag: 'a',
            content: content,
            classes: 'pagination-link last-pagination-links',
            href: `./posts.html?page=${pages}`
        })
    }
    return paginationElement
}