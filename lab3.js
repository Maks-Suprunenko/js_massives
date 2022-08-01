var obj = {
    className: 'open menu'
};
addClass(obj, 'new');
addClass(obj, 'menu');
alert("task 1. " + obj.className);

var str = "-webkit-transition";
str = camelize(str);
alert("task 2. " + str);


var obj2 = {
    className: 'open menu open menu menu open'
};
removeClass(obj2, 'menu');
alert("task 3. " + obj2.className);

arr = [5, 3, 8, -1, 5, 2, 4];
filterRangeInPlace(arr, 1, 4);
alert("task 4. " + arr);


var arr2 = [1,2,3,4,5,6,7,8,9];
reverseSort( arr2 );
alert("task 5. " +arr2);

var arr3 = ["HTML", "JavaScript", "CSS"];
var arrSorted = arraySort( arr3 );
alert("task 6. несортований  " +arr3);
alert("task 6. сортований " +arrSorted);

var arr4 = [1, 2, 3, 4, 5];
randomSort(arr4);
alert("task 7. " +arr4);

var vasya = { name: "Вася", age: 23 };

var masha = { name: "Маша", age: 18 };

var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];
sortByAge(people);
alert("task 8. " + people[0].name + " " + people[1].name + " " + people[2].name);

var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
alert("task 9 in console")
console.log("task 9.1.");
printList(list);
console.log("task 9.2.");
printListRec(list);
console.log("task 9.3.");
printReverseListRec(list);
console.log("task 9.4.");
printReverseList(list);


var strings = ["C++", "C#", "C++", "C#",
    "C", "C++", "JavaScript", "C++", "JavaScript"
];
alert("task 10. " + unique(strings));