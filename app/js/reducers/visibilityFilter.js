export const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'UPDATE_VISIBILITY_FILTER':
			return action.filter;

		default:
			return state;
	}
}