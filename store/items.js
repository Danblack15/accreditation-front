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
			// var data = new FormData();
			// data.append("json", JSON.stringify( {value: 234} ));

			// let response = await fetch('https://cbdd-46-146-224-1.ngrok-free.app/api', {
			// 	method: "POST",
			// 	mode: "no-cors",
			// 	headers: {
			// 		'ngrok-skip-browser-warning': 1,
			// 		'Accept': 'application/json',
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: data
			// });
			// console.log(response);

			fetch('https://ai.vp-pspu.cf/api', {
				method: 'GET',
				mode: 'cors',
				headers: {
					'Access-Control-Allow-Origin': '*'
				}
			})
			.then((response) => {
				return response;
			})
			.then((data) => {
				console.log(data);
			});


			// this.$axios.setHeader("Access-Control-Allow-Origin", "*");
			// this.$axios.get('https://ai.vp-pspu.cf/api')
			// .then(function (response) {
			// 	console.log(response);
			// })
			// .catch(function (error) {
			// 	console.log(error);
			// });

			// const data = await this.$axios.get('https://3ddf-46-146-224-1.ngrok-free.app/api');

			// if (data) {
			// 	console.log(data);

			// 	commit('setAllData', data);
			// }
			// commit('toggleLoading', false);
		}
	}

}