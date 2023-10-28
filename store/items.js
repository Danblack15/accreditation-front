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

			const { data } = await this.$axios.get('http://ai.vp-pspu.cf/api');
			console.log(data);

			commit('setAllData', data);
			commit('toggleLoading', false);
		}
    }

}