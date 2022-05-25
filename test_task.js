// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Функия фильтрации
let filterPrice = (requareRange, courses) => {
    let [minPrice, maxPrice] = requareRange;
    let arrayFilter = [];
    minPrice === null ? arrayFilter = courses.filter(p => p.prices[1] <= maxPrice) : '';
    maxPrice === null ? arrayFilter = courses.filter(p => p.prices[0] >= minPrice) : '';
    minPrice !== null && maxPrice !== null ? arrayFilter = courses.filter(p => p.prices[1] <= maxPrice && p.prices[0] <= minPrice) : '';
    minPrice === nul && maxPrice === nul ? arrayFilter = cources : '';
    return arrayFilter
}
//console.log(filterPrice(requiredRange1, courses))

//Функция сортировки по минимальной цене
let sortPrice = (array) => {
    let temp
    for (let j = array.length - 1; j > 0; j--) {
        for(let i = 0; i < j; i ++) {
            if (array[i].prices[0] > array[i+1].prices[0]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i+1] = temp;
            }
        }
    }
    return array
}
console.log(sortPrice(courses))