function Person1(name, email){
    this.name = name;
    this.email = email;
}

var person = Person1('Maidul Isam', 'maidul@gmail.com');
console.log(name);
console.log(email);

function Person(name, email){
    this.name = name;
    this.email = email;
    this.all = function(){
        console.log(this.name);
    }
}

var person = new Person('Maidul Isam', 'maidul@gmail.com');
console.log('Name: '+person.name);
console.log('Email: '+person.email);
console.log(person);

var p1 = new Person('Saidul Islam', '1@gmail.com');
var p2 = new Person('Readul Islam', '2@gmail.com');
var p3 = new Person('Mahidul Islam', '3@gmail.com');
var p4 = new Person('Mridul Islam', '4@gmail.com');

var details = [p1, p2, p3,p4];

console.log(details);

details.forEach(function(Person){
   console.log(Person.name);
   console.log(Person.email);
   console.log(Person.name);
});

