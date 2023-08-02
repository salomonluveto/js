/*//desrtucturation
const pays = ['RDC','France','Angola']
const [drc,french,angola] = pays
alert(drc)
alert(french)
*/
/*
//op de propagation
let pays = ['RDC','France','Angola']
let pays2 = ['Congo','Benin']
let pays3 = [...pays, ...pays2] //copie les valeurs
alert(pays3)

let pay = ['RDC','France','Angola','CI','nigeria','Togo']
const [drc,french,angola,...ouest] = pay
alert(french)
alert(ouest)
*/
/*
let pays = {
    nom : "RDC",
    capital: "Kinshasa"
}
let pays2 = {
    population : 100000,
    hymne: "la congolaise"
}

let pays3 = {...pays, ...pays2}

for(let val in pays3){
    alert(val+'='+pays3[val])
}
*/
/*
//fonction callback
const hello = nom => alert('Hello '+nom)
const salut = nom=>allert('Salut '+nom)
const bonjour =nom =>alert("Bonjour "+nom)

function message(callback){
    let nom = prompt('Saisissez votre nom ')
    callback(nom)
}

message(hello)
message(hello)
message(hello)
*/
/*
// fonction à n arguments
const addition = (...params)=>{
    let som = 0;
    for(let value of params){
        som += value
    }
    return som
}
let somme = addition(2,4,5,6)
alert(somme)
*/
/*
//concatenation
const presentation = (...params)=>{
    let text = ""
    for(let value of params){
        text +=" "+ value
    }
    return text
}
let profil = presentation("jean","musa","king")
alert(profil)
*/
/*
const som = new Function('a','b','return a+b')
let add = som(4,7)
alert(add)
const m = new Function('alert("welcome")')
m()
*/
//DATE
/*
let now = new Date(2023,10,25,9,45,30,70)
alert(now.getSeconds())
*/
/*
//horloge seconde
let timer = setInterval(() => {
    let date = new Date()
    let contenu = document.querySelector('#content')
    contenu.textContent = date.getSeconds()
}, 1000);
setTimeout(()=>clearInterval(timer),6000)
*/
/*
let to = new Date()
to.setHours(0)
alert(to)

to.setHours(0,0,0,0)
alert(to)

let date = new Date(2016, 1, 28)
date.setDate(date.getDate() +2)
alert(date)

let now = new Date()
alert(now.toDateString())
*/

//classe
/*
class User{
    constructor(nom,age){
        this.nom = nom
        this.age = age
    }
    presentation(texte){
        return texte+' '+this.nom+' j\'ai '+this.age
    }
}
let user1 = new User('jhon',14)
let user2 = new User('jenny',22)
alert(user1.presentation('je suis'))
alert(user2.nom)
*/
/*
//heritage
class User{
    constructor(nom,age){
        this.nom = nom
        this.age = age
    }
    presentation(texte){
        return texte+' '+this.nom+' j\'ai '+this.age
    }
}

class Agent extends User{
constructor(poste,nom,age){
    super(nom,age)
    this.poste = poste
}
travail(){
    return 'je travaille comme '+this.poste
}
}

let agent1 = new Agent('Medecin','Fils',34)
alert(agent1.travail())
alert(agent1.presentation('je suis'))
alert(agent1.age)
alert(agent1.poste)
*/
/*
//methode statique

class User{
    constructor(nom,age){
        this.nom = nom
        this.age = age
    }
    presentation(texte){
        return texte+' '+this.nom+' j\'ai '+this.age
    }
static hello(){
        alert('hello')
    }
}
User.hello()
*/
//fonction scroller
/*
//window
const scroller = ()=>window.scrollBy(0,100)

function Haut(){
    window.scrollTo({top:0, behavior:'smooth'})
}

const google = ()=> open('https://www.google.fr','','width=400,height=300,left=400,top=200')
*/
/*
//ecrire dans la fenetre
const google = ()=>{
    let fenetre = open('','','width=400,height=300,left=400,top=200')
     fenetre.document.write('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ea, quia ratione perferendis voluptate quos')
}
*/
/*
const imprimer = ()=> open('table.html','','width=700,height=400,left=400,top=200')

const go_to = ()=>location.assign('table.html')
const retour = ()=>history.back()
const suivant = ()=>history.forward()
alert(navigator.onLine)
alert(navigator.language )
*/

//Module
/*
hello()
*/
//Stockage
/*

if('user' in localStorage){
    let nom = localStorage.getItem('user')
    alert(nom)
}

else{
    localStorage.setItem('user','David')
}
*/
/*
if('age' in sessionStorage){
    let age = sessionStorage.getItem('age')
    alert(age)
}

else{
    sessionStorage.setItem('age',23)
}
*/
const exporter = ()=>{
    const tbl = document.querySelector('table')
    var wb = XLSX.utils.table_to_book(tbl);
/* export to file */
XLSX.writeFile(wb, "SheetJSTable.xlsx");
}