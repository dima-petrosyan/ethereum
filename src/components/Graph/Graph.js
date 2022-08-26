import React from 'react'
import style from './Graph.module.css'
import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, LineElement, CategoryScale, LinearScale } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	CategoryScale,
	LinearScale,
	LineElement,
	PointElement
)

function Graph(props) {
	return (
		<div className={style.graph}>
			<div>
				<Line data={props.data}></Line>
			</div>
		</div>
	)

}

export default Graph


