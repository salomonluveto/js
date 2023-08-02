/*let message;
let hello = 'Hello world'
message = hello;
alert(hello);
alert (message);
*/
/*const DAY = '07/12/2023'
DAY = 3
alert(DAY)

let s = "comment allez-vous?"
let m = "Bonjour "+s+" Ca fait longtemps"
alert(m)

let s =` comment allez-vous?`
let m = `Bonjour ${s} Ca fait
 longtemps`;
alert(m)
*/
/*let s =`Comment allez-vous?`
let m = `Bonjour ${s} Ca fait
longtemps`;
let tab =s.split(' ')
alert(tab[1])
*/
/*let m = 3.567
let b = 1e-6
alert(Math.floor(m))
alert(Math.ceil(m))
alert(m.toFixed(2))
alert(b)*/
/*
let a= '100px'
let n = parseInt(a)
alert(n)*/
/*
let n = prompt('nom','')
alert(n)
*/
/*
if(confirm('Etes-vous majeur')){
    alert('majeur')
}
*/
/*
let n = true
alert(typeof n)
a = String(n)
alert(typeof a)
*/
/*
let n = 5
n += 34
n *=3

alert(n)

*/
/*
let age = confirm('Etes-vous majeur')

if(age){
    let value = prompt('saisissez votre age','')
    if(value>18){
        alert ('majeur')
    }
    else if(value==18){
        alert ('devenu majeur')
    }
    else{
        alert('mineur')
    }
}
*/
/*

let age = 15
let acces = (age>18)?'Accès autorisé':(age==18)?'Accès validé':'Accès non autorisé'
alert(acces)
*/
/*
let age = 18
let valeur = age ?? 'Inconnu'
alert(valeur)*/
/*
let hello = 'hello world'
for(let i =0; i<5; i++){
    alert(hello[i])
}
*/
/*
function salut(message,nom='inconnu'){
    alert(message+' '+nom)
}

salut('bjr','josué')
salut('bjr')
*/
/*
let somme =function(a,b){
    return a+b
}
 let addition =somme(12,6)
 alert(addition)
 */
/*
let somme = (a,b) => a+b
let carre = n =>n*n

 let addition =somme(12,6)
 let car = carre(5)
 alert(addition)
 alert(car)
 */
/*
function sayHi(){
    alert('Hello')
}
setTimeout(sayHi, 1000);


function sayH(phrase, who){
    alert(phrase+' , '+who)
}

let timer = setTimeout(sayH, 1000,"hello","jhon");
clearTimeout(timer)
*/
/*
function sayHi(){
    alert('Hello')
}

let timer = setInterval(sayHi, 2000);
setTimeout(() =>clearInterval(timer),10000)
*/

/*let tab = ['mangue','orange','banane']
alert (tab)
tab[3] = "Avocat"
tab[4] = "Tomate"
alert (tab)
*/
/*
let tab = ['mangue','orange','banane']
alert (tab)
tab.push('avocat')
alert (tab)
tab.shift()
alert (tab)
tab.pop()
alert (tab)
tab.unshift('citron')
alert (tab)
*/
/*
let tab = [
    [4,6,7],
    [3,12,5],
    [1,2,16]
]
alert(tab[1][2])
*/
/*let tab = ['mangue','orange','banane']
let tab2 = tab.join('_')
alert (tab2)
*/
/*
let arr = [1,2]
alert (arr.concat([3,4]))
*/
/*let user = {
    nom : "fabien",
    age : 12,
    genre : 'M'
}

for(let key in user){
    alert(key+'='+user[key])
}
*/
/*// reference d'un objet
let user = {
    name :"junior"
}
let admin = user
admin.name = "Bob"
alert(user.name)
*/
/* //copie
let user = {
    name :"junior",
    age : 23
}
let admin = {}

for(let key in user){
    admin[key] = user[key]
}
admin.name = "jhon"
alert(admin.name)
alert(user.name)
*/
/*
let user = {
    name :"junior",
    age : 23
}
let user2 = {
    taille:70
}
let admin = {}
Object.assign(admin,user,user2)
alert(admin.taille)
alert(user.name)
*/
/*//json
let student = {
    name : 'jhon',
    age:30,
    isAdmin:false,
    courses:['html','css','js'],
    spouse:null
}
let json = JSON.stringify(student)
alert(typeof json)
alert(json)
*/
/*
let user = {
    sayHi(){
        alert('salut')
    },
    [Symbol('id')]:123,
    something: undefined
}
alert(JSON.stringify(user))
*/
/*
let userData = '{"name":"jhon","age":"35","friends":[0,1,2,3] }'
let user = JSON.parse(userData)
alert(user.name)
*/
/*
try {
    alerte('hello')
} 
catch (err) {

    alert("Error")
    alert(err.message)
    console.log(err)
}
*/
// Communication avec le serveur recuperation
/*
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(err => alert('il y a une erreure :'+err))
  */
 /*
 // envoi des donées
 const url = 'https://jsonplaceholder.typicode.com/posts'
 const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }

 
 fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch(err => alert('il y a une erreure :'+err))
  */
 /*
 // fonction asynchrone
 async function getArticles(){
   let rep = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => json)

    console.log(rep)
    console.log('test')
 }
getArticles()
*/


//DOM
//parourir les enfants
/*
for (let i =0; i<document.body.childNodes.length;i++){
    alert(document.body.childNodes[i])
}
  */
 //parent
 /*
 const body = document.body.parentNode
 alert(body)
 */
/*
 const body = document.head.nextElementSibling
 alert(body)
 */
//parcours que les elements
/*
 for (let i =0; i<document.body.children.length;i++){
    alert(document.body.children[i])
}
*/
/*
const premier = document.body.firstElementChild
const last = document.body.lastElementChild
alert(premier.nextElementSibling)
alert(last.previousElementSibling) //avant dernière
*/
/*
const content = document.getElementById('masection')
console.log(content)// ou console.log(masection)
*/
/*
const paragraphe = document.querySelectorAll('p')
for(let i = 0;i<paragraphe.length;i++){
    alert(paragraphe[i].textContent) //affiche toutes les paragraphes et ses contenu
}

const paragraph = document.querySelectorAll('.test')
for(let i = 0;i<paragraph.length;i++){ //affiche les contenus du class test
    alert(paragraph[i].textContent)
}

const paragrap = document.querySelectorAll('section p')
for(let i = 0;i<paragrap.length;i++){ // affiche les paragraphes qui se trouvent dans le section
    alert(paragrap[i].textContent)
}
*/
/*
//affiche que le premier élément
const paragraph = document.querySelector('.test').textContent
alert(paragraph)
*/
/*
const paragraph = document.querySelector('b')
alert(paragraph.parentElement)//parent
alert(paragraph.closest('section').outerHTML)//ancetre
*/
/*
const paragraph = document.querySelector('b')
alert(paragraph.parentElement.tagName)//recupere le nom de la balise
*/
/*
alert(masection.innerHTML)
*/
/*
alert(masection.outerHTML)
*/
/*
alert(masection.getAttribute('title'))
*/
/*
masection.setAttribute('title','nouvelle section')
alert(masection.getAttribute('title'))
*/
/*
//crée un élément
const gras = document.createElement('b')
gras.textContent = "Nouveau élément"
content.innerHTML = gras.outerHTML
*/
/*
// ajoute le texte à la fin
const gras = document.createElement('b')
gras.textContent = "Nouveau élément"
content.append(gras)
*/
/*
const gras = document.createElement('b')
gras.textContent = "Nouveau élément"
content.prepend(gras)
*/
async function getArticles(){
    let rep = await fetch('https://jsonplaceholder.typicode.com/posts')
     .then((response) => response.json())
     .then((json) => json)
     .catch((err) => console.log(err))
     const tbody = document.querySelector('tbody')
     rep.map(data=> {
let tr = document.createElement('tr') 
tr.innerHTML = "<td>"+data.id+"</td><td>"+data.title+"</td><td>"+data.body+"</td><td>"+data.userId+"</td>"
tbody.prepend(tr)    
})
    
  }
 getArticles()

 async function creer(event){
    event.preventDefault()//bloquer
    const data = {
        title: registerForm.title.value,
        body: registerForm.body.value,
        userId: registerForm.userId.value,
      }
   let rep = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => json);
  const tbody = document.querySelector('tbody')
  
let tr = document.createElement('tr') 
tr.innerHTML = "<td>"+rep.id+"</td><td>"+rep.title+"</td><td>"+rep.body+"</td><td>"+rep.userId+"</td>"
tbody.prepend(tr)  
data = {
title: registerForm.title.value="",
body: registerForm.body.value="",
userId: registerForm.userId.value=""
}
}
function hello(){
    alert('hello')
}
function salut(){
    alert('salut')
}
document.querySelector('table').addEventListener('click', () => alert('table'))