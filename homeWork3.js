// function commonElements(arr1,arr2){
//     var commArr =[];

//     for(var i=0;i<arr1.length;i++){
//         if(arr2.includes(arr1[i])){
//             commArr.push(arr1[i]);
//         }
//     }
//     return commArr;
// }
// console.log(commonElements([1,2,5],[20,3,2,1]));


var person ={
    name:'ahmed',
    age:20,
    job:'student',
};
var person2 ={
    job:'student',
    name:'ahmed',
    age:20,
}

function obj1isEquObj2(obj1,obj2){
    var found=false;
    //comparing keys:
    for(i in obj1){
        found=false;
        for(j in obj2){
            if(i == j) found =true;
        }
        if(!found) return false
    }
    //comparing values
    for(i in obj1){
        found = false
        for(j in obj2){
            if(obj1[i] == obj2[j]) found = true
        }
        if(!found) return false
    }
    return true;
}

function compareObj(obj1,obj2){
    if(obj1isEquObj2(obj1,obj2) && obj1isEquObj2(obj2,obj1)) return true;
    else return false
}

console.log(compareObj(person,person2));