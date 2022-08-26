import React from 'react'
import Graph from './Graph.js'
import { connect } from 'react-redux'
import { getData } from './../../Redux/graphSelectors.js'
import { updateGraph } from './../../Redux/graphReducer.js'

class GraphContainer extends React.Component {

	componentDidMount() {
		this.props.updateGraph(24)
	}

	render() {
		return <Graph {...this.props} />
	}
}

const mapStateToProps = (state) => {
	return {
		data: getData(state)
	}
}

export default connect(mapStateToProps, {updateGraph})(GraphContainer)