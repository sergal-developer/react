export const juegoReducer = (state = [], action) => {
  
    switch (action.type) {
        case "crear":
            return [...state, action.payload];

        case "borrar":
            return state.filter(x => x.id !== action.payload);

        case "editar":
            let index = state.findIndex(x => x.id === action.payload.id);
            state[index] = action.payload;
            return [...state];
        
        default:
            return state;
    }
}
