import { GET_FOOD, GET_CATEGORY, RANDOM_FOOD, randomFood } from "./actions";

let initialState = {
    food: [],
    categories: [],
    randomFood: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FOOD:
            return {...state, food: action.payload}

        case GET_CATEGORY:
            return {...state, categories: action.payload}
        
        case RANDOM_FOOD:
            // Obtener las comidas y categorías del estado
            const { food, categories } = state;
            // Inicializar un objeto para almacenar las comidas aleatorias
            const randomFoodsMap = {};
            // Iterar sobre cada categoría
            categories.forEach(category => {
                // Filtrar las comidas por la categoría actual
                const foodsInCategory = food.filter(item => item.category === category.id);
                // Seleccionar una comida aleatoria de las disponibles
                const randomIndex = Math.floor(Math.random() * foodsInCategory.length);
                const randomFood = foodsInCategory[randomIndex];
                // Agregar la comida aleatoria al objeto
                randomFoodsMap[category.name] = randomFood;
            });
            // Convertir el objeto en un array de comidas aleatorias
            const randomFoods = Object.values(randomFoodsMap);
            // Actualizar el estado con las comidas aleatorias
            return { ...state, randomFood: randomFoods };
        default:
            return {
                ...state
            }
    }
}

export default rootReducer