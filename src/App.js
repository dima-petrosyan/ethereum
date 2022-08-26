import React from 'react'
import GraphContainer from './components/Graph/GraphContainer.js'
import TimeContainer from './components/Time/TimeContainer.js'
import style from './App.module.css'

class App extends React.Component {
    render() {
    	return (
    		<div className={style.container}>
    			<TimeContainer />
	        	<GraphContainer />
	    	</div>
	    )
    }
    
}

export default App;
