import React from 'react'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

function Time(props) {

	function handleChange(event) {
		const period = event.target.value
		props.onPeriodChange(period)
	}

	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Period</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={props.period}
				label="Period"
				onChange={handleChange}
			>
				<MenuItem value={24}>Hourly</MenuItem>
				<MenuItem value={24 * 7}>Daily</MenuItem>
				<MenuItem value={24 * 7 * 4}>Weekly</MenuItem>
			</Select>
		</FormControl>
	)

}

export default Time