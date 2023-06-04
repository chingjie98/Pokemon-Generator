async function getData(){
  const response_0 = await fetch("https://pokeapi.co/api/v2/pokemon-species");
  const data_0 = await response_0.json();

  const limit_num = data_0.count;

  let x = Math.random();
  const pokemon_num = Math.floor((Math.random() * limit_num) + 1);
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_num.toString());
  const data = await response.json();

  document.getElementById("display-image").innerHTML = "";
  const image = document.createElement("img");
  image.src = data.sprites.front_default;
  image.setAttribute("height", "150");
  image.setAttribute("width", "150");
  document.getElementById("display-image").appendChild(image);

  const name_append = data.species.name;
  document.getElementById("display-name").innerHTML = `Name: ${name_append}`;

  const type_list = data.types;
  document.getElementById("display-type").innerHTML = `Types: `;
  type_list.forEach((value, index) => {
    document.getElementById("display-type").innerHTML += `<li>${value.type.name}</li>`;
  });

  const abilities_list = data.abilities
  document.getElementById("display-abilities").innerHTML = `Abilities: `;
  abilities_list.forEach((value, index) => {
    document.getElementById("display-abilities").innerHTML += `<li>${value.ability.name}</li>`;
  });

}

const submit_btn = document.getElementById("submit-btn");
submit_btn.addEventListener("click", getData);




