import { graphAPI } from '../components/API/API.js'

const SET_DATA = 'SET-DATA'
const SET_PERIOD = 'SET-PERIOD'

let initialState = {
	data: [],
	period: '24'
}

const graphReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA: {
			return {
				...state,
				data: action.data
			}
		}
		case SET_PERIOD: {
			return {
				...state,
				period: action.period
			}
		}
		default: 
			return state
	}
}

export const setDataActionCreator = (data) => {
	return {
		type: SET_DATA,
		data
	}
}

export const setPeriodActionCreator = (period) => {
	return {
		type: SET_PERIOD,
		period
	}
}

export const updateGraph = (period) => {
	return (dispatch) => {
		graphAPI.getData(period).then(data => {
			dispatch(setPeriodActionCreator(period))
			dispatch(setDataActionCreator(data))
		})
	}
}

export default graphReducer




