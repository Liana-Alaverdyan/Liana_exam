//Task_2 . Ստեղծել ֆուկցիա , որը որպես արժեք կընդունի ուսանողների օբյեկտ և հետ կվերադարձնի մասսիվի մեջ ուսանողների անունն ու ազգանունը։

let names= [
    { "first_name": "Armen", "last_name": "Amiryan", "age": "33" },
    { "first_name": "Karine", "last_name": "Karapetyan", "age": "23" },
    { "first_name": "Manushak", "last_name": "Voskanyan", "age": "20" },
    { "first_name": "Eghiazar", "last_name": "Avetisyan", "age": "18" },
    { "first_name": "Hrant", "last_name": "Tokhatyan", "age": "22" },
    { "first_name": "Zarzand", "last_name": "Mnatsakanyan", "age": "66" },
    { "first_name": "Murad", "last_name": "Muradyan", "age": "58" },
    { "first_name": "Ashkhen", "last_name": "Khanamiryan", "age": "48" }
  ]
  const newNames = names.map(first_last)
  function first_last(name){
      return name.first_name + " " + name.last_name
  }
  console.log(newNames);