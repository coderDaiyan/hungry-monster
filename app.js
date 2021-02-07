const searchBtn = document.getElementById("meal-btn")
searchBtn.addEventListener('click', () => {
    let searchInput = document.getElementById('meal-input').value
    const mealList = document.getElementById('meal-list')
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(res => res.json())
    .then(data => {
        let result = "";
        if(data.meals){
            data.meals.forEach(meal => {
                result += `
                <div id="meal-item" class="meal-item" data-id=${meal.idMeal}>
                    <div>
                        <img src=${meal.strMealThumb} alt="meal" />
                    </div>
                    <div>
                        <h2 id="meal-name">${meal.strMeal}</h2>
                    </div>
              </div>
                `
            });
        } else {
            result = `
            <h1 id="sorry-message">Sorry. We have no recipes in this name ${searchInput}</h1>
            `
        }
        mealList.innerHTML = result;
    })
})


