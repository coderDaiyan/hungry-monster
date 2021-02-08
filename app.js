
const searchBtn = document.getElementById("meal-btn")
searchBtn.addEventListener('click', () => {
    let searchInput = document.getElementById('meal-input').value
    const mealList = document.getElementById('meal-list')
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
        .then(res => res.json())
        .then(data => {
            let item = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    item = item + `
                <div id="meal-item" class="meal-item" data-id=${meal.idMeal}>
                    <div>
                        <img onclick="displayMealDetail(${meal.idMeal})" src=${meal.strMealThumb} alt="meal" />
                    </div>
                    <div>
                        <h2 id="meal-name">${meal.strMeal}</h2>
                    </div>
                </div>
                `
                });
            } else {
                item = `
                <h1 id="not-found-message">Sorry. We have no recipes in this name ${searchInput}</h1>
            `
            }
            mealList.innerHTML = item;
        })
})

const displayMealDetail = id => {
    alert("Wait a bit....you will find the details in the top")
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            renderMealDetail(data)
            const mealDetailDiv = document.getElementById("meal-detail")
            mealDetailDiv.style.display = "block"
        })
}

const renderMealDetail = meal => {
    console.log(meal);
    const mealDetailDiv = document.getElementById("meal-detail")
    mealDetailDiv.innerHTML = `
        <img src="${meal.meals[0].strMealThumb}" <br>
        <h1>${meal.meals[0].strMeal}</h1>
        <h1>Category: ${meal.meals[0].strCategory}</h1>
        <h1>Ingredients:</h1>
        <ul>      
           <li> ${meal.meals[0].strMeasure1} ${meal.meals[0].strIngredient1} </li>
           <li> ${meal.meals[0].strMeasure2} ${meal.meals[0].strIngredient2} </li>
           <li> ${meal.meals[0].strMeasure3} ${meal.meals[0].strIngredient3} </li>
           <li> ${meal.meals[0].strMeasure4} ${meal.meals[0].strIngredient4} </li>
           <li> ${meal.meals[0].strMeasure5} ${meal.meals[0].strIngredient5} </li>
        </ul>
        <h1>Instructions:</h1>
        <p>${meal.meals[0].strInstructions}</p>
    `
}