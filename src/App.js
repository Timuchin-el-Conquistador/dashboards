
import './App.css';
import React, { Component } from "react";
import AudienceDemographics from './dashboards/audience-demographics'
import AudienceAge from './dashboards/audience-age-dashboard';
import DynamicLineChart from './views/dynamic charts/Dynamic Line Chart'

import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  color: theme.palette.text.secondary,
}));

class App extends Component {
   
  constructor(props) {
    super(props);
  }
 
  render() {
   

    return (
     <React.Fragment>
        <Stack
           direction={{ xs: 'column', sm: 'row' }}
           spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Item><AudienceDemographics/></Item>
            <Item><AudienceAge/></Item>
        </Stack>
       <DynamicLineChart/>
      </React.Fragment>
    );
  }
}



export default App;