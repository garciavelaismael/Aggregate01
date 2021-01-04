db.moviles.drop()
db.moviles.insertMany([
    {
    _id: "1",
    client:
        {
        name:"Pedro",
        city:"Murcia", 
        company: true, 
        contact: 665932102
        },
    sale: 
        {
        units: 3,
        date: new Date("2019-12-27"),
        price: 155
        },
    product: 
        {
        status: "A",
        brand: "Redmi",
        model: "Note 8",
        unit_price: 75
        }
    },
    {_id: "2", client: {name:"Carlos",city:"Valencia", company: false, contact: 673192019}, sale: {units: 15, date: new Date("2019-12-23"), price: 750}, product: {status: "B", brand: "Samsung",model: "Galaxy S20 FE", unit_price: 219}},
    {_id: "3", client: {name:"Guillermo",city:"Badajoz", company: false, contact: 674839102}, sale: {units: 2, date: new Date("2020-09-12"), price: 220}, product: {status: "A", brand: "Redmi",model: "Note 9 Pro", unit_price: 82}},
    {_id: "4", client: {name:"Ana",city:"Sevilla", company: false, contact: 612039422}, sale: {units: 3, date: new Date("2020-06-17"), price: 340}, product: {status: "B", brand: "Oneplus",model: "Nord", unit_price: 146}},
    {_id: "5", client: {name:"Fran",city:"Tarragona", company: true, contact: 632912484}, sale: {units: 4, date: new Date("2020-01-08"), price: 360}, product: {status: "C", brand: "Oppo",model: "Reno 4 Z 5G", unit_price: 120}},
    {_id: "6", client: {name:"David",city:"Murcia", company: false, contact: 601928019}, sale: {units: 1, date: new Date("2020-05-11"), price: 115}, product: {status: "C", brand: "Realme",model: "C3", unit_price: 90}},
    {_id: "7", client: {name:"Victor",city:"Madrid", company: false, contact: 654545423}, sale: {units: 2, date: new Date("2020-10-02"), price: 140}, product: {status: "D", brand: "Realme",model: "7i", unit_price: 59}},
    {_id: "8", client: {name:"Manuel",city:"Sevilla", company: false, contact: 689320134}, sale: {units: 1, date: new Date("2020-09-26"), price: 85}, product: {status: "D", brand: "Alcatel",model: "1", unit_price: 28}},
    {_id: "9", client: {name:"Ignacio",city:"Madrid", company: false, contact: 671021975}, sale: {units: 3, date: new Date("2020-09-11"), price: 230}, product: {status: "A", brand: "Realme",model: "7 Pro", unit_price: 56}},
    {_id: "10", client: {name:"Alejandro",city:"Cádiz", company: true, contact: 607182937}, sale: {units: 30, date: new Date("2020-12-21"), price: 1060}, product: {status: "B", brand: "Apple",model: "iPhone 12", unit_price: 328}},
 ]);