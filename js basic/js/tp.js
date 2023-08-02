async function Pays()
{
    let rep = await fetch('https://restcountries.com/v3.1/all')
     .then((response) => response.json())
     .then((json) => json)
     .catch((err) => console.log(err))
     
     const tbody = document.querySelector('tbody')
     rep.map(data=> {
     let tr = document.createElement('tr') 
     tr.innerHTML = "<td>"+data.name.common+"</td><td>"+data.capital+"</td><td>"+data.continents+"</td><td>"+data.name.official+"</td>"
     tbody.prepend(tr)    
})
    
 }
Pays()