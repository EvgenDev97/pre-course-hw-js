let passport = {
    name: "Petr",
    surname: "Petrov",
};
//spread - создание глубокой копии объекта
// что мы создаем новый объект `passportCopy`, который будет содержать все свойства из `passport`,
// но при этом это будет отдельный объект.
let passportCopy = {...passport}
passportCopy.name = "Ivan"
console.log(passport.name)
console.log(passportCopy.name);
