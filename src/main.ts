// Tipizza tutte le variabili, funzioni e strutture dati in modo esplicito,
// e verifica che il comportamento finale sia identico alla versione in JavaScript.

// Versione JavaScript
// async function fetchData(url) {
//     const getIdFromUrl = await fetch(url);
//     const data = await getIdFromUrl.json();
//     return data;
// }

// Versione TypeScript
// Ricetta
type Recipe = {
  id: number;
  name: string;
  userId: number;
};

// Chef
type Chef = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
};

// Recupero dati della ricetta
async function fetchRecipe(id: number): Promise<Recipe> {

  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!response.ok) {
    throw new Error(`Errore nella richiesta della ricetta`);
  }
  const data: Recipe = await response.json();
  return data;

}

// Recupero dati dello chef
async function fetchChef(id: number): Promise<Chef> {
  const response = await fetch(`https://dummyjson.com/users/${id}`);
  if (!response.ok) {
    throw new Error(`Errore nella richiesta dell'utente`);
  }
  const data: Chef = await response.json();
  return data;
}

(async () => {
  try {
    const recipe = await fetchRecipe(1);
    const chef = await fetchChef(1);
    console.log("Recipe", recipe)
    console.log("Chef", chef)
  }
  catch (error) {
    console.error("Errore:", error)
  }
})()