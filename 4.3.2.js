/*
Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

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

const keyChecker = function (propertyToCheck, obj) {
    let result = false
    for (let key in obj) {
        if (key === propertyToCheck) {
            result = true
        }
    }
    console.log(result)
    return result
}

keyChecker('innOptional', company)
