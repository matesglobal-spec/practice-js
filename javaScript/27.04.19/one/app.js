var obj = {};
var obj1 = new Object;
console.log(obj, obj1);

var book1 = {
    name: 'Vatia',
    author: 'Maidul Islam',
    date: '10.03.2019'
}
console.log(book1)

var book = {
    name: 'Vatia',
    author: 'Maidul Islam',
    date: '04.02.19',

    print: function (){
        console.log(this.name, this.author);
    }
}
book.print();
console.log(book)

console.log('Book Name: ' + book.name);
console.log('Author Name: ' + book['author']);

book.publishYear = 2019;
console.log(book.publishYear);

book['price'] = 2099;
console.log(book.price);

for (var value in book){
    console.log(value);
    console.log(value + ' = ' + book[value])
}