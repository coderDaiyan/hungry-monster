const searchBtn = document.getElementById("meal-btn")
searchBtn.addEventListener('click', function(){
    let searchInput = document.getElementById('meal-input').value
    const mealList = document.getElementById('meal-list')
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(res => res.json())
    .then(data => {
        let result = "";
        if(data.meals){
            data.meals.forEach(meal => {
                result += `
                <div class="meal-item" data-id=${meal.idMeal}>
                    <div class="meal-thumb">
                        <img src=${meal.strMealThumb} alt="meal" />
                    </div>
                    <div class="meal-name">
                        <h2>${meal.strMeal}</h2>
                    </div>
              </div>
                `
            });
        }
        mealList.innerHTML = result;
    })
})