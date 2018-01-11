function Person(name, age){
    this.name = name;
    this.age = age;
    that = this;
};

var people = [];
var n = new Person("Naira", 22);
var e = new Person("Eduard", 21);
var l = new Person("Lusine", 23);
var m = new Person("Mihran", 27);

people.push(n,e,l,m);

function aging(arr) {
    arr.forEach(function(element) {
        element.age+=1;
    });
    setTimeout(function() {
        aging(arr);
    }, 1000);
};
aging(people);

function isAdult(arr){
    var result = arr.filter(function(element) {
        return element.age<40;
    });
return result;

};

(function stop() {
    if(isAdult(people).length===0)
        return;
        isAdult(people);
    console.log(isAdult(people))
    setTimeout(function() {
        stop();
    }, 1000);
    
})();


randNames = [ "Ginny", "Bill", "Charlie", "Ron", "George", "Fred"]; 

// (function pushing() {
//     if(people.length===10)//this is just a condition to check if the code works
//         return;
//     var p = new Person(randNames[Math.floor(Math.random() * 6)], Math.floor(Math.random() * 50)+1);
//     people.push(p);
//     setTimeout(function() {
//         pushing();
//     }, 2000);
// })();

