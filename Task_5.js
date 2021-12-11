//Task_5. ստեղծել ապրանքների ցուցակ, եթե ցուցակում առկա է զեղչ (discount:3%) , ապա տվյալ ապրանքի գինը իջեցնել զեղչի չափով։ Հետ վերադարձնել բոլոր ապրանքները։
let array = [
    { "name": "apple", "price": "400", "discount": "10", "city": "Ijevan" },
    { "name": "pich", "price": "500", "discount": "40", "city": "Talin" },
    { "name": "apricot", "price": "1990", "discount": "30", "city": "Gyumri" },
    { "name": "banana", "price": "800", "discount": "0", "city": "Yerevan" }
  ]
const x = array.filter(arr=>
    arr.newPrice =arr.price - ((arr.price * arr.discount)/100)
    )
    console.log(x);