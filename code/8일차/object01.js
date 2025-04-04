const person2 = {
    name: ["Hong", "Gildong"],
    age: 20,
};

console.log(person2.name[0]);
console.log(person2["age"]);

const person = {
    name:{
        firstName: "Gildong",
        lastName: "Hong"
    },
    likes:["apple", "samsung"],
    printHello:function(){
        return "hello";
    }
};

console.log("------------name------------")
console.log(person.name);
console.log(person.name.firstName);
console.log(person["name"]);
console.log(person["name"]["firstName"]);

console.log("-----------likes-----------")
console.log(person["likes"]);
console.log(person["likes"][0]);
console.log(person["likes"][1]);

console.log("--------------------------")
console.log(person.printHello());
console.log(person["printHello"]);
console.log(person["printHello"]());

person.age = 20; // 추가
console.log(person["age"]);

delete person.age;
console.log(person["age"]);