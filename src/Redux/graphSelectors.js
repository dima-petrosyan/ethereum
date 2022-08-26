
export const getData = (state) => {
	return {
		labels: getLabels(state),
		//state.graph.data
				//.map(item => item.time.split(' ')[1]),
		//labels: state.graph.data.map((item, index) => {
		// 	if (index % 24 === 0) {
		// 		return item.time.split(' ')[0].split('-')[2]
		// 	}
		// }),
		datasets: [
			{
				label: 'Ethereum',
				data: getDatasets(state),
				// data: state.graph.data.map((item, index) => {
				// 	if (index % 24 === 0) {
				// 		return item.gasPrice
				// 	}
				// }),
				backgroundColor: 'grey',
				tension: 0.4,
				borderColor: 'grey',
				borderWidth: '1',
				radius: 0
			}
		]
	}
}

function getLabels(state) {
	switch (state.graph.period) {
		case 24: {
			return state.graph.data
				.map(item => item.time.split(' ')[1])
		}
		case 24 * 7: {
			return state.graph.data
				.filter(item => item.time.split(' ')[1] === '12:00')
				.map((item, index) => getDay(index))
		}
		case 24 * 7 * 4: {
			return state.graph.data
				.filter(item => item.time.split(' ')[1] === '12:00')
				.map(item => item.time.split(' ')[0])
		}
		default: break
	}
}

function getDatasets(state) {
	switch (state.graph.period) {
		case 24: {
			return state.graph.data
				.map(item => item.gasPrice)
		}
		case 24 * 7: {
			return state.graph.data
				.filter(item => item.time.split(' ')[1] === '12:00')
				.map(item => item.gasPrice)
		}
		case 24 * 7 * 4: {
			return state.graph.data
				.filter(item => item.time.split(' ')[1] === '12:00')
				.map(item => item.gasPrice)
		}
		default: break
	}
}

function getDay(index) {
	const days = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
	return days[index]
}
















