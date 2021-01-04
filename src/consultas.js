// Muestra todos los productos que tienen el status 'A'.
db.moviles.aggregate ( [
    {$match: {"product.status": "A"} }
])

/*
{ "_id" : "1", "client" : { "name" : "Pedro", "city" : "Murcia", "company" : true, "contact" : 665932102 }, "sale" : { "units" : 3, "date" : ISODate("2019-12-27T00:00:00Z"), "price" : 155 }, "product" : { "status" : "A", "brand" : "Redmi", "model" : "Note 8", "unit_price" : 75 } }
{ "_id" : "3", "client" : { "name" : "Guillermo", "city" : "Badajoz", "company" : false, "contact" : 674839102 }, "sale" : { "units" : 2, "date" : ISODate("2020-09-12T00:00:00Z"), "price" : 220 }, "product" : { "status" : "A", "brand" : "Redmi", "model" : "Note 9 Pro", "unit_price" : 82 } }
{ "_id" : "9", "client" : { "name" : "Ignacio", "city" : "Madrid", "company" : false, "contact" : 671021975 }, "sale" : { "units" : 3, "date" : ISODate("2020-09-11T00:00:00Z"), "price" : 230 }, "product" : { "status" : "A", "brand" : "Realme", "model" : "7 Pro", "unit_price" : 56 } }
*/


// Muestra la cantidad de unidades de Realme que se han vendido agrupado por ciudades.
db.moviles.aggregate ( [
    { $match: { "product.brand": "Realme" } }, 
    { $group: { _id: "$client.city", total: { $sum: "$sale.units" } } } 
])

/*
{ "_id" : "Madrid", "total" : 5 }
{ "_id" : "Murcia", "total" : 1 }
*/


// Muestra la fecha junto a las ventas para saber cual ha sido el mes más/menos vendido.
db.moviles.aggregate([
    { $group: { _id: { month: { $month: "$sale.date"}, year: { $year: "$sale.date" }}, sales:{ $addToSet: "$sale.units" }}}
])

/*
{ "_id" : { "month" : 12, "year" : 2020 }, "sales" : [ 30 ] }
{ "_id" : { "month" : 12, "year" : 2019 }, "sales" : [ 15, 3 ] }
{ "_id" : { "month" : 10, "year" : 2020 }, "sales" : [ 2 ] }
{ "_id" : { "month" : 9, "year" : 2020 }, "sales" : [ 3, 2, 1 ] }
{ "_id" : { "month" : 6, "year" : 2020 }, "sales" : [ 3 ] }
{ "_id" : { "month" : 5, "year" : 2020 }, "sales" : [ 1 ] }
{ "_id" : { "month" : 1, "year" : 2020 }, "sales" : [ 4 ] }
*/


// Muestra el año junto a la media de unidades vendidas en el año.
db.moviles.aggregate([
{$match: { $or: [
        {"sale.date": { $gte: new ISODate("2019-01-01")}},
        {"sale.date": { $lte: new ISODate("2020-12-31")}}]}},
    {$group: { _id: {year: { $year: "$sale.date" }}, average: {$avg: "$sale.units" }}}
])

/*
{ "_id" : { "year" : 2019 }, "average" : 9 }
{ "_id" : { "year" : 2020 }, "average" : 5.75 }
*/


// Muestra el modelo más vendido dentro del status B.
db.moviles.aggregate([
    {$match: {"product.status":"B"}},
    {$group: { _id: "$product.model", best_product: {$max:"$sale.units"}}}
])

/*
{ "_id" : "Galaxy S20", "best_product" : 15 }
{ "_id" : "iPhone 12", "best_product" : 30 }
{ "_id" : "Nord", "best_product" : 3 }
*/


// Muestra a todos los clientes ordenados de más compras realizadas a menos.
db.moviles.aggregate([
    {$group: { _id: "$client.name", sales: {$max:"$sale.units"}}},
    {$sort:{sales:-1}}
])

/*
{ "_id" : "Alejandro", "sales" : 30 }
{ "_id" : "Carlos", "sales" : 15 }
{ "_id" : "Fran", "sales" : 4 }
{ "_id" : "Ignacio", "sales" : 3 }
{ "_id" : "Pedro", "sales" : 3 }
{ "_id" : "Ana", "sales" : 3 }
{ "_id" : "Guillermo", "sales" : 2 }
{ "_id" : "Victor", "sales" : 2 }
{ "_id" : "David", "sales" : 1 }
{ "_id" : "Manuel", "sales" : 1 }
*/


// Beneficios totales de cada compañía.
db.moviles.aggregate([
    {$group: {_id: "$product.brand", total: {$sum:{$multiply: [ "$sale.price", "$sale.units" ] }}}},
])

/*
{ "_id" : "Oneplus", "total" : 1020 }
{ "_id" : "Oppo", "total" : 1440 }
{ "_id" : "Redmi", "total" : 905 }
{ "_id" : "Alcatel", "total" : 85 }
{ "_id" : "Apple", "total" : 31800 }
{ "_id" : "Realme", "total" : 1085 }
{ "_id" : "Samsung", "total" : 11250 }
*/