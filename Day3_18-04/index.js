// var ns={
//     name:"nikki",
//     age:22
// };
// var vs=ns;
// ns.name="simi";
// console.log(ns,vs);
// vs.name="madhu";
// // console.log(ns,vs);
// console.log(ns);
// console.log(vs);
// [{},{},{},{}]
// [
//     {
//         name: "Alice",
//         class: "10-A",
//         age: 16
//     },
//     {
//         name: "Bob",
//         class: "9-B",
//         age: 15
//     },
//     {
//         name: "Charlie",
//         class: "11-C",
//         age: 17
//     }
// ];
// karunakar pusuluri
// 14:40
// let students = {
//     "0": {
//         name: "Alice",
//         class: {
//             number: 10,
//             section: "A"
//         },
//         age: 16
//     },
//     "1": {
//         name: "Bob",
//         class: {
//             number: 9,
//             section: "B"
//         },
//         age: 15
//     },
//     "2": {
//         name: "Charlie",
//         class: {
//             number: 11,
//             section: "C"
//         },
//         age: 17
//     }
// };
//user cannot edit or update the value of one key
// var student={
//     name:"Nikki",
//     age:22,
//     id:123
// };
// Object.defineProperty(student,"name",{
//     value:"Nikki",
//     writable:false,
// })
// student.name="simi"
// student.age=25
// console.log(student);
//user cannot edit or update the value of all keys
// var student={
//     name:"Nikki",
//     age:22,
//     id:123
// };
// //in freeze neither we can add nor update
// Object.freeze(student)
// student.name="madhu"
// student.age=24
// student.id=125
// console.log(student);
// //user cannot add new properties
var student={
    name:"Nikki",
    age:22,
    id:123
};
// in prevent extensions we can update
// but we cannot add new properties
Object.preventExtensions(student);
student.name="madhu"
student.college="KMIT";
console.log(student);



