class Book{
    constructor(title, author, price){
        this.title = title;
        this.author = author;
        this.price = price;
    }    
}

function create(param){
    var td = document.createElement('td')
    td.innerText = param
    return td
}

function getbooks(){
    var tb = document.getElementById('books')
    // iterate the no of books we have
    books = [new Book('javascript','Ghosh',10), new Book('css','Ghosh',10), new Book('html','Ghosh',10)]

    books.forEach(book => {
        var row = document.createElement('tr')
        row.appendChild(create(book.title))
        row.appendChild(create(book.author))
        row.appendChild(create(book.price))
        
        tb.appendChild(row)
    });

}