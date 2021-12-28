class Library {
    constructor() {
        this.library = []
    }

    add(newBook) {
        this.library.push(newBook)
    }

    remove(title) {
        this.library = this.library.filter((book) => book.title !== title)
    }

    isInLibrary(newBook) {
        return this.library.some((book) => book.title == newBook.title)
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

    getTitle() {
        return this.title
    }

    getAuthor() {
        return this.author
    }

    getPages() {
        return this.pages
    }
}

const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', addBook)

function addBook() {
    const newBook = createBook()

    if (newBook.getTitle() === '') {
        alert('Please, write the title.')

    } else if (myLibrary.isInLibrary(newBook)) {
        alert(`${newBook.getTitle()} already in library.`)

    } else {
        myLibrary.add(newBook)
        showBooks()
    }
}

function removeBook(book) {
    myLibrary.remove(book.getTitle())
    showBooks()
}

function createBook() {
    const title = document.querySelector('#title')
    const author = document.querySelector('#author')
    const pages = document.querySelector('#pages')
    const read = document.querySelector('#read')

    return new Book(title.value, author.value, pages.value, read.checked)
}

function showBooks() {
    const container = document.querySelector('#container')
    container.textContent = ''

    // for (let i = 0; i < myLibrary.library.length; i++) {
    //     const bookBox = document.createElement('div')
    //     const title = document.createElement('div')
    //     const author = document.createElement('div')
    //     const pages = document.createElement('div')
    //     const read = document.createElement('div')

    //     bookBox.id = 'bookBox'
    //     title.id = 'contentTitle'
    //     author.id = 'content'
    //     pages.id = 'content'
    //     read.id = 'content'

    //     title.textContent = myLibrary.library[i].getTitle()
    //     author.textContent = myLibrary.library[i].getAuthor()
    //     pages.textContent = myLibrary.library[i].getPages()
    //     read.textContent = `${myLibrary.library[i].read ? ` Read ` : ` Not read `}`

    //     const removeBtn = document.createElement('button')
    //     removeBtn.id = 'removeBtn'
    //     removeBtn.textContent = 'Remove'
    //     removeBtn.addEventListener('click', () => {
    //         myLibrary.remove(myLibrary.library[i])
    //         showBooks()
    //     })
    //     bookBox.appendChild(title)
    //     bookBox.appendChild(author)
    //     bookBox.appendChild(pages)
    //     bookBox.appendChild(read)
    //     bookBox.appendChild(removeBtn)
    //     container.appendChild(bookBox)
    // }

    for (let book of myLibrary.library) {
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

        title.textContent =  book.getTitle()
        author.textContent = book.getAuthor()
        pages.textContent = book.getPages()
        read.textContent = `${book.read ? ` Read ` : ` Not read `}`

        const removeBtn = document.createElement('button')
        removeBtn.id = 'removeBtn'
        removeBtn.textContent = 'Remove'
        removeBtn.addEventListener('click', () => removeBook(book))

        bookBox.appendChild(title)
        bookBox.appendChild(author)
        bookBox.appendChild(pages)
        bookBox.appendChild(read)
        bookBox.appendChild(removeBtn)
        container.appendChild(bookBox)
    }
}

let myLibrary = new Library()
myLibrary.add(new Book('The Lord Of The Rings', 'Tolkien', 300, false))
myLibrary.add(new Book('The Hobbit', 'Tolkien', 200, true))
showBooks()


