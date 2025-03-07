
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
