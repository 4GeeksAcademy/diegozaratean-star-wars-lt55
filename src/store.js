export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    navesFav : []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':

      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };
    case 'toggle_nave':

      let updatedNaves = []
      if(store.navesFav.includes(action.payload)){
        // quitarlo
        updatedNaves = store.navesFav.filter( (nave)=> nave != action.payload )
      }else{
        // agregarlo
        updatedNaves =  [...store.navesFav,action.payload]
      }
      return {
        ...store,
        navesFav: updatedNaves
      };
    default:
      throw Error('Unknown action.');
  }    
}
