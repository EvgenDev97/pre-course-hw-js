let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
//1. `JSON.parse(JSON.stringify(passportWithAddress))`: Этот метод используется для создания глубокой копии объекта.
//     - `JSON.stringify` преобразует объект в строку JSON.
//     - `JSON.parse` преобразует строку JSON обратно в объект.
//     - Этот метод создает независимую копию, где изменения в новой копии не повлияют на оригинальный объект.

let passportWithAddressCopy = JSON.parse(JSON.stringify(passportWithAddress));
passportWithAddressCopy.address.city = "Bobryisk"
console.log(passportWithAddress.address.city);
console.log(passportWithAddressCopy.address.city);