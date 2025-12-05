const students = [
    { name: 'Jonathan', testGrade: 10},
    { name: 'Robert', testGrade: 8},
    { name: 'Adryan', testGrade: 5},
    { name: 'Débora', testGrade: 4},
    { name : 'Aparecido', testGrade: 3},
    { name: 'Lucinéia', testGrade: 2},

]

const newAproved = students.map ((user) => {
    return { name: user.name, 
        newAproved: user.testGrade >=5 ? 'Aprovado' : 'Reprovado'

    }
}
    
)
console.log(newAproved)






const cart = [
    {nameprodut: 'manga', priceKg: 6.20, kg:3},
    {nameprodut: 'Morango', priceKg: 9.20, kg:3},
    {nameprodut: 'Abacaxi', priceKg: 5, kg:3},
    {nameprodut: 'Banana', priceKg: 4.50, kg:3},
    {nameprodut: 'Aipim', priceKg: 3.99, kg:3},
    {nameprodut: 'Cebola', priceKg: 6, kg:3},
    {nameprodut: 'Alho', priceKg: 18.80, kg:3},
    {nameprodut: 'Alface', priceKg: 2, kg:3},
]

const resumCart = cart.reduce ((name, value) => {
    const finalValue = value.priceKg * value.kg
    return name + finalValue
}, 0)

console.log(resumCart)






const companias = [
    {name:'Samsung', valorMarket: 120, CEO: 'AnaKittySoca', fundacao: 1984},
    {name:'Xaomi', valorMarket: 120, CEO: 'AnaKittySoca', fundacao: 1995},
    {name:'LG', valorMarket: 120, CEO: 'AnaKittySoca', fundacao: 2000},
    {name:'Motorola', valorMarket: 120, CEO: 'AnaKittySoca', fundacao: 1889},
    {name:'Spotify', valorMarket: 120, CEO: 'AnaKittySoca', fundacao: 1995},
    {name:'Apple', valorMarket: 120, CEO: 'AnaKittySoca', fundacao: 2005}
    

];

const aumento = companias.map(company => {
    company.valorMarket = company.valorMarket + (company.valorMarket / 10)
    return company
})

const companyOld = companias.filter (old => {
    old.fundacao = old.fundacao <=1990
    return old
})

const valortotal = companias.reduce (result =>{
    result.fundacao = result.fundacao >= 1990 *fundacao ?  : 
}

)

console.log(companyOld)