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
var books //;= [new Book('javascript','Ghosh',10), new Book('css','Ghosh',10), new Book('html','Ghosh',10)]
function getbooks(){
    if (localStorage.getItem('books')===null)
    {
        console.log('yes')
        books = [new Book('javascript','Ghosh',10), new Book('css','Ghosh',10), new Book('html','Ghosh',10)]
    }
    else{
        books=JSON.parse(localStorage.getItem('books'))
    }

    books.forEach(book => {
        addbook(book)
    });


}
function addbook(book){
    var td=document.getElementById('books')
    let row=document.createElement('tr')
    row.appendChild(create(book.title))
    row.appendChild(create(book.author))
    row.appendChild(create(book.price))
    td.appendChild(row)

}
function add(title,author,price){
    console.log(title)
    books.push(new Book(title,author,price))
    localStorage.setItem('books',JSON.stringify(books))
    addbook(new Book(title,author,price))
    document.getElementById('closebtn').click(true)
}