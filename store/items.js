export default {
	state: () => ({
		allItems: [],
		allData: null,
		isLoading: false
	}),

	getters: {
		getAllitems(state) {
			return state.allItems;
		},

		getLoading(state) {
			return state.isLoading;
		},

		getAllData(state) {
			return state.allData;
		}
	},

	mutations: {
		setNewItem(state, newItem) {
			state.allItems.push(newItem);
		},

		toggleLoading(state, value) {
			state.isLoading = value;
		},

		setAllData(state, data) {
			state.allData = data;
		}
	},

	actions: {
		addNewItem({ commit }, newItem) {
			commit('setNewItem', newItem);
		},

		async fetchData({ commit, state }) {
			if (state.allData) return;

			commit('toggleLoading', true);
			let response = await fetch('https://3153-46-146-224-1.ngrok-free.app/api', {
				method: "POST",
				mode: "no-cors",
				headers: {
					'ngrok-skip-browser-warning': '1'
				},
				body: {value: 'Hello, its Danchik'}
			});
			console.log(response);
			// this.$axios.setHeader('ngrok-skip-browser-warning', 1)
			// const data = await this.$axios.get('https://3ddf-46-146-224-1.ngrok-free.app/api');

			// if (data) {
			// 	console.log(data);

			// 	commit('setAllData', data);
			// }
			// commit('toggleLoading', false);
		}
	}

}