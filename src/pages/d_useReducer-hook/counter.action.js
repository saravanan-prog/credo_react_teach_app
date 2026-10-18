export const counterAction = (state, action) => {

    switch(action.type){
        case "ADD":
            return state + action.input
        case "SUB":
            return state - action.input
         case "MUL":
            return state * action.input
        default:
            return state
        

    }   

   
}