/*
Задание 1.

Написать, функцию, которая принимает в качестве
аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.*/

const company = {
    alias: 'Продисплей',
    companyType: 'Дистрибьютор',
    city: 'Санкт-Петербург',
    innOptional: '',
    comment: 'лояльный',
    shortReview: function () {
        console.log(this.alias, ' - ', this.companyType)
    }
};

const anotherCompany = Object.create(company)
anotherCompany.inn = '12345678'

const keyValuesListFunction = function(obj) {
    for (let key in anotherCompany) {
        if (anotherCompany.hasOwnProperty(key)) {
            console.log(key, anotherCompany[key])
        }
    }
}

keyValuesListFunction(anotherCompany)

