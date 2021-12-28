let myLibrary = []

const title = document.querySelector('#title')
const author = document.querySelector('#author')
const pages = document.querySelector('#pages')
const read = document.querySelector('#read')
const addBtn = document.querySelector('#addBtn')
const container = document.querySelector('#container')

addBtn.addEventListener('click', addBook)

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

myLibrary.push(new Book('The Lord Of The Rings', 'Tolkien', 300, false))
myLibrary.push(new Book('The Hobbit', 'Tolkien', 200, true))
showBooks()

function addBook() {
    if (title.value !== '') {
        let book = new Book(title.value, author.value, pages.value, read.checked)
        myLibrary.push(book)
        showBooks()
    }
}

function showBooks() {
    container.textContent = ''

    for (let i = 0; i < myLibrary.length; i++) {
        const bookBox = document.createElement('div')
        const title = document.createElement('div')
        const author = document.createElement('div')
        const pages = document.createElement('div')
        const read = document.createElement('div')

        bookBox.id = 'bookBox'
        title.id = 'contentTitle'
        author.id = 'content'
        pages.id = 'content'
        read.id = 'content'

        title.textContent = myLibrary[i].title
        author.textContent = myLibrary[i].author
        pages.textContent = myLibrary[i].pages
        read.textContent = `${myLibrary[i].read ? ` Read ` : ` Not read `}`

        const removeBtn = document.createElement('button')
        removeBtn.id = 'removeBtn'
        removeBtn.textContent = 'Remove'
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1)
            showBooks()
        })
        bookBox.appendChild(title)
        bookBox.appendChild(author)
        bookBox.appendChild(pages)
        bookBox.appendChild(read)
        bookBox.appendChild(removeBtn)
        container.appendChild(bookBox)
    }
}
