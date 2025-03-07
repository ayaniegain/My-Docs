//1 ⭐ diff way THIS keyword ACT⭐
var a = 10;

function myfunc() {
  // console.log(this.a) //window
}
myfunc();

let myArrowfunc = () => {
  // console.log(this.a) //window
};
myArrowfunc();

// let name = "Ashish";

let obj = {
  name: "hello",

  fullname: function () {
    // console.log(this);
  },
  Arrfullname: () => {
    // console.log(self);
  },

  insideFunc: function() {
    (() => {
    //   console.log(self); // window both arrow and function
    })();
  },
 
  otherCondition: function() {
     return this.name //inner obj
  },
  otherConditionArrow: ()=> {
    return this.name //window name //ashish
 },
};

obj.fullname();
obj.Arrfullname();
obj.insideFunc();
// console.log(obj.otherCondition())
// console.log(obj.otherConditionArrow())
let res1=obj.otherCondition
let res2=obj.otherConditionArrow
// console.log(res1())
// console.log(res2())




//2 ⭐ compare two object  (deep clone)

// function deepEqual(object1, object2) {
  
//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);
  
//     if (keys1.length !== keys2.length) {
//       return false;
//     }
  
//     for (let key of keys1) {
//       if (!keys2.includes(key) || !deepEqual(object1[key], object2[key])) {
//         return false;
//       }
//     }
    
//     return true;
// }


// function deepEqual(object1, object2) {
//     if (object1 === object2) {
//       return true;
//     }
  
//     if (
//       typeof object1 !== 'object' ||
//       object1 === null ||
//       typeof object2 !== 'object' ||
//       object2 === null
//     ) {
//       return false;
//     }
  
//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);
  
//     if (keys1.length !== keys2.length) {
//       return false;
//     }
  
//     for (let key of keys1) {
//       if (!keys2.includes(key) || !deepEqual(object1[key], object2[key])) {
//         return false;
//       }
//     }
  
//     return true;
//   }

// let object1 = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     zip: "12345",
//   },
// };

// let object2 = {
//   name: "Alice",
//   address: {
//     city: "Wonderland",
//     zip: "12345",
//   },
// };

// console.log(deepEqual(object1, object2));
