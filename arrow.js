//1. Viết một hàm arrow có tên là sumArray, nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
arr=[9,8,7,6,5,4,3,2,1];
let sumArray = (arr)=>{
    let sum=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log('1. sum of Array:',sumArray(arr));

//2.Viết một hàm arrow có tên là squareArray, nhận vào một mảng số nguyên và trả về một mảng mới với các phần tử là bình phương của các phần tử trong mảng ban đầu.

let squareArray=(arr)=>{
    for (let i = 0; i < arr.length; i++) {
        arr[i]=arr[i]*arr[i]
    }
    return arr
}
console.log('2. Multi of Array:',squareArray(arr));


//3.Viết một hàm arrow có tên là filterGreaterThan, nhận vào một mảng số nguyên và một giá trị nguyên, trả về một mảng mới chứa các phần tử lớn hơn giá trị được đưa vào.
arr1=[10,11,12,13,14,15,16,17,18,19,20]
let filterGreaterThan=(arr1,x)=>{
    let result=[];
        for (let i = 0; i <arr1.length; i++) {
            if(arr1[i]>x){
                result.push(arr1[i])
            }
        }
    return result;
}
console.log('3.',filterGreaterThan(arr1,13));
//4.Viết một hàm arrow có tên là maxInArray, nhận vào một mảng và trả về một giá tại lớn nhất trong mảng ban đầu.

arr2=[21,22,23,24,25,26,27,28,29,30];
let maxInArray=(arr2)=>{
    let max=null;
    for (let i = 0; i <arr2.length; i++) {
        if(max<arr2[i]){
            max=arr2[i];
        }
    }
    return max;
}
console.log('4.max=',maxInArray(arr2));

//5.Viết một hàm arrow có tên là avgArray, nhận vào một mảng và trả về trung bình các giá trị trong mảng ban đầu.
arr3=[1,2,3,4,5];
let avgArray=(arr3)=>{
    let a=arr3.length;
    let b=0;
    for (let i = 0; i <arr3.length; i++) {
        b+=arr3[i];
    }
    return b/a;
}
console.log('5.avgArray: ',avgArray(arr3))
