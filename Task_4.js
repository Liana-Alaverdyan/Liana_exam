//Task_4.Ստեղծել ֆուկցիա , որը որպես արժեք կստանա երկու մասսիվ և կվերադարձնի այդ երկու մասսիվների ընդհանուր արժեքը մի մասսիվով։

let names = [ "Mnatsakan", "Karapetyan","Baghdasaryan","Abelyan","Isahakyan"];
let surnames = ["Hovhannes", "Avetiq", "Daniel","Grigor"];

 
function newOne ( names, surnames) {
    return [...names, ...surnames]
}

console.log(newOne(names, surnames));
