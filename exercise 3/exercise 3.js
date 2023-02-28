/*
3. Создать класс данных “Товар” данные
С полями
Название
Цена
Количество
Описание
Наполнить массив объектами такого класса.
    Написать метод, который получает строку вида
"name-contains-fd&price-=2&quantity->5&description-ends-abc"
“name-starts-fd&quantity=5”
На выходе возвращает массив, только с подходящими объектами
возможны (contains, starts, ends для строковых и <, =, >, <=, >= для числовых*/
const Product = require('./product.js')
let product = [];
product.push(new Product("kiwi", 10, 1, "green"));
product.push(new Product("banana", 5, 1, "yellow"));
product.push(new Product("apple", 3, 1, "green"));
product.push(new Product("peach", 10, 1, "yellow"));
product.push(new Product("strawberry", 7, 10, "red"));

let line1 = "name-contains-ea&price-<=12&quantity->=1&description-ends-ow";
let line2 = "name-contains-le&quantity->=1&price-<=5&description-ends-een";

console.log(search(line1, product));
console.log(search(line2, product));

function search(line, data) {
    let fields = {
        name: undefined,
        nameInfo: undefined,
        price: undefined,
        symbolPrice: undefined,
        quantity: undefined,
        symbolQuantity: undefined,
        description: undefined,
        descriptionInfo: undefined
    };

    let arr = line.split('&');
    for (let item of arr) {
        if (item.includes("name")) {
            let ds = item.split('-');
            fields.nameInfo = ds[1];
            fields.name = ds[2];
        } else if (item.includes("price")) {
            let ds = item.split('-');
            if (ds[1].includes("<=") || ds[1].includes(">=")) {
                fields.symbolPrice = ds[1].slice(0, 2);
                fields.price = ds[1].slice(2);
            } else {
                fields.symbolPrice = ds[1].slice(0, 1);
                fields.price = ds[1].slice(1);
            }
        } else if (item.includes("quantity")) {
            let ds = item.split('-');
            if (ds[1].includes("<=") || ds[1].includes(">=")) {
                fields.symbolQuantity = ds[1].slice(0, 2);
                fields.quantity = ds[1].slice(2);
            } else {
                fields.symbolQuantity = ds[1].slice(0, 1);
                fields.quantity = ds[1].slice(1);
            }
        } else if (item.includes("description")) {
            let ds = item.split('-');
            fields.descriptionInfo = ds[1];
            fields.description = ds[2];
        }
    }
    //console.log(fields)
    let result = Array.from(data);
// name
    if (fields.nameInfo !== undefined) {
        for (let i = 0; i < result.length; i++) {
            if (fields.nameInfo.includes("contains")) {
                if (result[i].name.includes(fields.name)) continue;
            }
            if (fields.nameInfo.includes("starts")) {
                if (result[i].name.startsWith(fields.name)) continue;
            }
            if (fields.nameInfo.includes("ends")) {
                if (result[i].name.endsWith(fields.name)) continue;
            }
            result.splice(i, 1);
            i = i - 1;
        }
    }
//price
    if (fields.price !== undefined) {
        for (let i = 0; i < result.length; i++) {
            if (fields.symbolPrice.includes("=")) {
                if (result[i].price === +fields.price) continue;
            }
            if (fields.symbolPrice.includes(">=")) {
                if (result[i].price >= +fields.price) continue;
            }
            if (fields.symbolPrice.includes("<=")) {
                if (result[i].price <= +fields.price) continue;
            }
            if (fields.symbolPrice.includes("<")) {
                if (result[i].price < +fields.price) continue;
            }
            if (fields.symbolPrice.includes(">")) {
                if (result[i].price > +fields.price) continue;
            }
            result.splice(i, 1);
            i = i - 1;
        }
    }
//quantity
    if (fields.quantity !== undefined) {
        for (let i = 0; i < result.length; i++) {
            if (fields.symbolQuantity.includes("=")) {
                if (result[i].quantity === +fields.quantity) continue;
            }
            if (fields.symbolQuantity.includes(">=")) {
                if (result[i].quantity >= +fields.quantity) continue;
            }
            if (fields.symbolQuantity.includes("<=")) {
                if (result[i].quantity <= +fields.quantity) continue;
            }
            if (fields.symbolQuantity.includes("<")) {
                if (result[i].quantity < +fields.quantity) continue;
            }
            if (fields.symbolQuantity.includes(">")) {
                if (result[i].quantity > +fields.quantity) continue;
            }
            result.splice(i, 1);
            i = i - 1;
        }
    }
// description
    if (fields.description !== undefined) {
        for (let i = 0; i < result.length; i++) {
            if (fields.descriptionInfo.includes("contains")) {
                if (result[i].description.includes(fields.description)) continue;
            }
            if (fields.descriptionInfo.includes("starts")) {
                if (result[i].description.startsWith(fields.description)) continue;
            }
            if (fields.descriptionInfo.includes("ends")) {
                if (result[i].description.endsWith(fields.description)) continue;
            }
            result.splice(i, 1);
            i = i - 1;
        }
    }
    return result;
}