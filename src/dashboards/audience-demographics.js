import React from 'react'
import Chart from "react-apexcharts";


class AudienceDemographics extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        options: {labels:["male","female"], 
                  title:{
                      text:"Audience Demographics"
                  }},
        series: [0,0],
      
      }
  
    }
    
    componentDidMount(){
    
       fetch('https://my-project-f3769-default-rtdb.firebaseio.com/audiences/audience.json')
       .then(res => res.json())
       .then(data => {
             let men = 0, women = 0
             for(let key in data){
                men += data[key].men
                women += data[key].women
             }

             this.setState(state=> {return {
                  options:state.options,
                  series: [men,women]

             }})
      })
      .catch(err=> console.log(err.message))
    }
     
      
    

    render() {
  
      return (
        <div className="pie">
          <Chart  options={this.state.options} 
                  series={this.state.series} 
                  labels={this.state.labels} type="pie" width="380" />
        </div>
      );
    }
  }


export default AudienceDemographics