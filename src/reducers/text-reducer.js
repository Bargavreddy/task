const initialState = [
   
];

let latestId = 0;

export function textsReducer(state = initialState, action) {
    switch (action.type) {
        case 'addtoText':
            const newtext = { id: ++latestId, text: action.payload, completed: false };
            return [...state, newtext]
            case 'DELETE_TEXT':
            return state.filter(text => text.id !== action.payload)
        default:
            return state;
    }
}



