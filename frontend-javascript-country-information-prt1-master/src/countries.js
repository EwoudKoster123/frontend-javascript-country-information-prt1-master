// https://restcountries.com/v2/name/netherlands
// https://restcountries.com/v2/name/{name}

// stappenplan voor countries part 2!
// 1.	Dependencies installeren voordat je begint met het schrijven van de code
// 2.	Je gaat dan een async functie schrijven (async / await)
// 3.	Je plaatst dit dan in een try catch constructie
// 4.	Het request zelf (endpoint, type)
//          -   dit is bijvoorbeeld de GET naar
//          -	Voor vlag, naam en currency kijk je naar all GET https://restcountries.com/v2/name/peru
// 5.	Je checkt het dan met een console.log
// 6.	Je maakt een search function maken met een if else statement
// 7.   keyup event listener die moet je halen uit target.value
//          -   Log en check dit dan vervolgens zodat je weet wat erin staat
// 8.   Vervolgens zet je dan een onsubmit event-listener (pagina moet niet refreshen = default)
// 9.   Maak hier een if else statement die je koppeld aan je API
// 10.	Probeer het op de pagina te krijgen (index html container maken en die naar javascript halen)
// 11.  Ga nu bezig met stylen

import axios from "axios";

const containerResult = document.getElementById("results");
const errorMessage = document.getElementById("error-message");

async function getCountryData(name) {

    errorMessage.innerHTML = ``
    containerResult.innerHTML = ``

    try{
        const result = await axios.get(`https://restcountries.com/v2/name/${name}`)
        console.log(result.data)
        const countries = result.data[0]

        containerResult.innerHTML = `
        <img src="${countries.flag}" width="100px"/>   
        <h3>${countries.name}</h3>
        <p>${countries.name} is situated in ${countries.subregion} and has a population of: ${countries.population}</p>
        <p>The capital is ${countries.capital} ${getCurrencies(countries.currencies)}</p>
        
        `

    } catch (error) {
        console.error(error);
        errorMessage.innerHTML = `
        <p> ${name} bestaat niet, probeer het opnieuw!<p/> 
        `
    }
}

function getCurrencies(currencies){
    if(currencies.length === 2){
        return `and you pay with ${currencies[0].name} and ${currencies[1].name}`
    } else{
        return `and you pay with ${currencies[0].name}`
    }
}

const searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", searchingCountries)

function searchingCountries(error){
    error.preventDefault()

    const inputField = document.getElementById("search-country")

    getCountryData(inputField.value)
    inputField.innerHTML = ``
}
