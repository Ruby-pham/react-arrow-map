
//1.Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa bình phương của các số.
let arr=[1,2,3,4,5,6,7,8,9];
let mapArray=arr.map((item,index)=>{
    return item*item
})
console.log('1: Mảng mới chứa bình phương của các số=',mapArray);
// console.log(`6: mảng mới chứa bình phương của các số=[${mapArray}]`)

//2.Sử dụng map để chuyển đổi một mảng các chuỗi thành một mảng mới chứa độ dài của mỗi chuỗi.
let stringArray=['lemon','apple','pear','grape','strawberry'];
let lengthMapArray=stringArray.map((item,index)=>{
    return item.length;
})
console.log('2.Mảng mới chứa độ dài của mỗi chuỗi:',lengthMapArray);

//3.Sử dụng map để chuyển đổi một mảng các đối tượng thành một mảng mới chứa giá trị của một thuộc tính cụ thể.

let object=[
    {name:'Rachel', age:10},
    {name:'Alice', age:8},
    {name:'Lisa',age:6},
    {name:'Eli', age:12}
];
// let names=object.map(object=>object.name);
// let ages=object.map(x=>x.age);
let names=object.map((x)=>{
    return x.name;
})
let ages=object.map((x)=>{
    return x.age;
})
let objectNew = object.map(({name,age})=>({[name]:age}));
console.log('3.Ten trong mang:',names);
console.log('3.Tuoi trong mang:',ages);
console.log('3.object new:',objectNew);

//4.Sử dụng map để chuyển đổi một mảng các số thành một mảng mới chứa chuỗi "even" hoặc "odd" tương ứng với mỗi số.
array2=[11,12,13,14,15,16,17,18,19,20];
let arrayEven = array2.map((item,index)=>{
    if(item%2===0){
        return item
    }
})
console.log('9.Even:',arrayEven);

//5.Sử dụng map để chuyển đổi một mảng các từ thành một mảng mới chứa các từ viết hoa.
let stringArray1=['lemon','apple','pear','grape','strawberry'];
let uperCaseString =stringArray1.map((item,index)=>{
    return item.toUpperCase();
});
console.log('5.toUperCase:',uperCaseString);