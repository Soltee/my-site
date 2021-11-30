//State
export const state = ({
	users : [],
})

//Getters
export const getters = ({

})

///Actions Asychronoous 3rd Party API
export const actions = ({

	async getUsers({ commit }) {

	    const { users } = await this.$axios.$get(`https://jsonplaceholder.typicode.com/users`);	
	    commit('addUsers', users);
	    console.log(users);
	},

})

///MUtations Synchrononous
export const mutations = ({
	addUsers( state, users ) {
		state.users.push({...users})
	}
}) 