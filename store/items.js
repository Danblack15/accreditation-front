export default {
	state: () => ({
		allCategories: null,
		recomendation: null,
		isLoading: false,
		activeCategory: null,
		step: 1
	}),

	getters: {
		getLoading(state) {
			return state.isLoading;
		},

		getAllCategories(state) {
			return state.allCategories;
		},

		getStep(state) {
			return state.step;
		},

		getRecomendation(state) {
			return state.recomendation
		},

		getActiveCategory(state) {
			return state.activeCategory
		}
	},

	mutations: {
		toggleLoading(state, value) {
			state.isLoading = value;
		},

		setAllCategories(state, data) {
			state.allCategories = data;
		},

		setRecomendation(state, data) {
			state.recomendation = data;
		},

		setStep(state, isIncrement) {
			if (isIncrement)
				state.step = state.step + 1;
			else
				state.step = state.step - 1;
		},

		setActiveCategory(state, data) {
			state.activeCategory = data;
		}
	},

	actions: {
		async getRecomendation({ commit }, category) {
			commit('toggleLoading', true);

			let payload = {
				value: category
			};

			let data = new FormData();
			data.append("json", JSON.stringify(payload));

			let newData;
			for (var [key, value] of data.entries()) {
				newData = value.split('"')[3];
			}

			fetch("https://ai.vp-pspu.cf/main",
				{
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ value: newData })
				})
				.then(function (res) { return res.json(); })
				.then(function (data) {
					commit('setRecomendation', data);
					commit('toggleLoading', false);
					commit('setActiveCategory', category);
				})
		},

		async getCategories({ commit }, input) {
			commit('toggleLoading', true);

			let payload = {
				value: input
			};

			let data = new FormData();
			data.append("json", JSON.stringify(payload));

			let newData;
			for (var [key, value] of data.entries()) {
				newData = value.split('"')[3];
			}


			fetch("https://ai.vp-pspu.cf/classifier/model_request",
				{
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ question: newData })
				})
				.then(function (res) { return res.json(); })
				.then(function (data) {
					commit('setAllCategories', data);
					commit('toggleLoading', false);
					commit('setStep', true);
				})
		},

		setNewStep({ commit }, data) {
			commit('setStep', data);
		}
	}

}