const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'Book3',
        author: 'Name3'
    },
    {
        title: 'Book4',
        author: 'Name4'
    }
]


const getTitles = (libros) => {
    return libros.map((book) => book.title)
}

console.log(getTitles(books))