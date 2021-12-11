//Task_1. Ստեղծել ֆուկցիա , որը կստանա որպես արժեք թվերի զանգված և հետ կվերադարձնի միայն կենտ թվերը։

let array = [5, 10, 50, 15, 19, 55]

const newArray =array.filter(myFunction)

function myFunction(arr){
    return arr % 2 == 1
}
 
console.log(newArray);