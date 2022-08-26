import React from 'react'
import Time from './Time.js'
import { connect } from 'react-redux'
import { updateGraph } from './../../Redux/graphReducer.js'

class TimeContainer extends React.Component {

	onPeriodChange = (period) => {
		this.props.updateGraph(period)
	}

	render() {
		return (
			<Time period={this.props.period} onPeriodChange={this.onPeriodChange} />
		)
	}
}

const mapStateToProps = (state) => {
	return {
		period: state.graph.period
	}
}

export default connect(mapStateToProps, { updateGraph })(TimeContainer)