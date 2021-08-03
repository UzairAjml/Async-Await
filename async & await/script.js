'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data) {
  const html = `
    <article class="country ${data}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const loc = async function (country) {
  try {
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error('Invalid Country Name');
    }

    renderCountry(data[0]);
  } catch (err) {
    console.log(`${err}`, '!!!   error occcurred !!!!!!!');
  }
};

loc('china');
loc('pakistan');
