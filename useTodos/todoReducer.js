export const todoReducer = (initalState = [], action) => {

    switch(action.type) {
        case 'Add TODO':
            return [ ...initalState, action.payload ]
        
        case 'Remove TODO':
            return initalState.filter( todo => todo.id !== action.payload )

        case 'Toggle TODO': 
            return initalState.map( todo => {
                const todoDone = action.payload

                if( todo.id === todoDone) {
                    return {
                        ...todo, 
                        done: !todo.done
                    }
                }

                return todo;
            })

        default: 
            return initalState;
    }

}