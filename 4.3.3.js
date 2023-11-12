/*
Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.*/

const createObject = function() {
    return new Object()
}

a = createObject()
console.log(typeof(a))