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



// Versione JavaScript
// async function getChefBirthday(id) {

//     try {

//         const getRecipe = await fetchData(`https://dummyjson.com/recipes/${id}`);
//         const getChefId = await fetchData(`https://dummyjson.com/users/${getRecipe.userId}`);
//         const getChefBirthday = getChefId.birthDate;
//         return getChefBirthday;

//     } catch (error) {

//         throw new Error(`Non posso recuperare la data di nascita dello chef ${error.message}`)

//     }

// }

// Versione TypeScript
// Recupero data di nascita dello chef dall'id della ricetta
async function getChefBirthday(id: number): Promise<string> {
  try {
    const recipe = await fetchRecipe(id);
    const user = await fetchChef(recipe.userId);
    return user.birthDate;
  } catch (error: any) {
    throw new Error(`Errore: ${error.message}`);
  }
}



// Versione JavaScript
// (async () => {
//     try {
//         const birthday = await getChefBirthday(1);
//         console.log("Data di nascita dello chef:", birthday)
//     }
//     catch (error) {
//         console.error(error)
//     }
//     console.log("Fine codice")
// })()

// Versione TypeScript
(async () => {
  try {
    const birthday = await getChefBirthday(1);
    console.log("Data di nascita dello chef:", birthday)
  }
  catch (error) {
    console.error("Errore:", error)
  }
})()
