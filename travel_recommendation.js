async function fetchRecommendations(){const response=await fetch('travel_recommendation_api.json');const data=await response.json();return data;}
function createCard(place){return `<div class="result-card"><img src="${place.imageUrl}" alt="${place.name}"><div><h3>${place.name}</h3><p>${place.description}</p></div></div>`;}
async function searchRecommendations(){const input=document.getElementById('searchInput').value.toLowerCase().trim();const results=document.getElementById('results');const data=await fetchRecommendations();results.innerHTML='';let recommendations=[];
if(input.includes('beach')||input.includes('beaches')){recommendations=data.beaches;}
else if(input.includes('temple')||input.includes('temples')){recommendations=data.temples;}
else if(input.includes('country')||input.includes('countries')){data.countries.forEach(country=>{recommendations=recommendations.concat(country.cities);});}
else{data.countries.forEach(country=>{if(input.includes(country.name.toLowerCase())){recommendations=recommendations.concat(country.cities);}country.cities.forEach(city=>{if(input.includes(city.name.toLowerCase())){recommendations.push(city);}});});}
if(recommendations.length===0){results.innerHTML='<div class="result-card"><div><h3>No recommendations found</h3><p>Try searching for beach, temple, country, India, Japan, Australia, Chennai, Kyoto, or Sydney.</p></div></div>';return;}
recommendations.slice(0,2).forEach(place=>{results.innerHTML+=createCard(place);});}
function clearResults(){document.getElementById('searchInput').value='';document.getElementById('results').innerHTML='';}
function submitContactForm(event){event.preventDefault();alert('Thank you for contacting TravelBloom!');event.target.reset();}
