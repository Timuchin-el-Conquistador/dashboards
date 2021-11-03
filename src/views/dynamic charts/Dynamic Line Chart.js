import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

let dps = []
let firstRender = true
let fetchLength =0

class DynamicLineChart extends Component {
	constructor() {
		super();
         

		this.resfresh = this.resfresh.bind(this)
        
	}
	componentDidMount() {
        
		if(firstRender){

		  fetch('https://my-project-f3769-default-rtdb.firebaseio.com/audiences/audience.json')
	     	.then(res => res.json()).then(data => {
		      	for(let key in data){
			     	const visiters = data[key].men + data[key].women
					const fullyear = new Date(data[key].date)
			     	const plotData = {x: fullyear, y: visiters }
			     	dps.unshift(plotData)	
					fetchLength++
			}	
	 	})
		 firstRender =!firstRender
	}
		 setInterval(this.resfresh, 2000)
		 
	}
    
	resfresh(){
		const month = new Date(dps[dps.length-1].x).getMonth()+1
		const day = new Date(dps[dps.length-1].x).getDate()+1
		const year = new Date(dps[dps.length-1].x).getFullYear()
		const xVal = new Date(month+'/'+day + '/' + year)
		const yVal = Math.floor(Math.random(30000+ dps[ dps.length-1].y)* 30000)
		dps.push({x:xVal, y:yVal})
		if(dps.length>10){
			 dps.splice(fetchLength,7)
			 firstRender = !firstRender
		}

		this.chart.render()
	}
    
	render() {

		const options = {
			title :{
				text: "Ad Impression"
			},
			data: [{
				type: "line",
				dataPoints : dps
			}]
		}
		
		return (
		<div>
		
			<CanvasJSChart options = {options}
			      onRef={ref => this.chart = ref}/>

		</div>
		);
	}
}

export default DynamicLineChart;