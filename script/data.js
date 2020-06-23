class Book{
    constructor(title,author,price){
        this.title=title
        this.author=author
        this.price=price
    }

}
book1=new Book('javascript','Ghosh',10)
book2=new Book('css','Ghosh',10)
book3=new Book('html','Ghosh',10)


function create(param){
    var td=document.createElement('td')
    td.innerText=param
    return td
}

function getbooks(){
    var tb=document.getElementById('books')
    // iterate the no of books we have
    var row=document.createElement('tr')
    tb.appendChild(row)
    row.appendChild(create('asdjakdj'))


}