export default (state= [],action) => {
    switch (action.type) {
        case 'GET_BLOGS':
            return action.payload
        default:
            return state
    }
};

   // Yapılmaz Mutation
   // this.state.push('Şamil')

   // Yapılmaz
  //   returm axios.get('..')

//Yapılır 
// return state + state

  // Yapılır 
// const fruites  = ["orange", "banana"]
//  fruites =   [... fruites, 'kiwi']

// const fruites  = ["orange", "banana"]
//  fruites =   [ 'kiwi' ,... fruites]

//   const fruites  = ["orange", "banana","kiwi"]
//   fruites = fruites.filter(fruites => fruites.includes("ki") )

// const  per = {"name": "şamil"}
// const  per2 = {...per, "name": "kamil"}
// const  per3 = {...per, "name": "kamil", "maas": 3000}

// lodash library çalış
