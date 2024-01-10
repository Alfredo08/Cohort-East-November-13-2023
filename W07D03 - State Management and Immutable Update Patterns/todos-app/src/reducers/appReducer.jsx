
const appReducer = (state, action) => {
    switch(action.type){
        case 'add_new_user': 
                            return {
                                ...state,
                                users: [...state.users, action.data]
                            }   
                            break;
        case 'add_new_todo':
                            return {
                                ...state,
                                todos: [...state.todos, action.data]
                            }
                            break;
        default: console.log("Wrong option");
    }

    /*
    if(action.type === 'add_new_user'){

    }
    else if(action.type === 'add_new_todo'){

    }
    else{
        console.log("Wrong option");
    }
    */
}

export default appReducer;