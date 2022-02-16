console.log('Hallo daar!');

import axios from "axios";

// 1.	Dependencies installeren voordat je begint met het schrijven van de code
// 2.	Je gaat dan een async functie schrijven (async / await)
// 3.	Je plaatst dit dan in een try catch constructie
// 4.	Het request zelf (endpoint, type)
//          -   dit is bijvoorbeeld de GET naar
//          -	Voor naam, vlag en hoeveelheid inwoners kijk je naar all GET https://restcountries.com/v3.1/all
// 5.	Je filtert met een .map (je krijgt dan een nieuwe array met alleen de data die jij wil) de GET voor vlag / hoeveelheid inwoners
//      je moet dus een nieuwe functie maken die over de gehele array mapped op vlag, naam, hoeveelheid inwoners
// 6.	Je checkt dan net een console.log
// 7.	Probeer het op de pagina te krijgen (index html container maken en die naar javascript halen)
// 8.   ga nu bezig met stylen

console.log('Hallo daar!');

async function countries(){

    try{
        const result = await axios.get("https://restcountries.com/v2/all")
        console.log(result.data)

        result.data.sort((popA, popB) => {
            return popA.population - popB.population
        })

        allCountries(result.data)


    } catch (error){
        console.error(error);
    }
}

countries();

function allCountries(countries){

    const UnorderedList = document.getElementById("country-list")


    countries.map((mapAllCountries) => {
        const countryList = document.createElement("li")
        countryList.innerHTML = `
        <img src="${mapAllCountries.flag}" class="flag" alt="flag"/>  
        <h3 class="${mapAllCountries.region}">${mapAllCountries.name}</h3>
        <p class="population">Has a population of ${mapAllCountries.population} people.</p>
        `

        UnorderedList.appendChild(countryList);
    })
}
