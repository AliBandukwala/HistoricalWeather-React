import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {Card} from '@material-ui/core'
import {LineChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Line} from 'recharts'

const Graph = ({data}) => {
  
const [graphData,setGraphData] = useState([]);

useEffect(() => {
    setGraphData(data)
},[data,graphData])

  return (
    <div className="container d-flex flex-row justify-content-center mt-4 w-75">
    <Card raised style={{padding:15, borderRadius:20}}>
        <LineChart width={800} height={400} data={graphData} margin={{top: 10, right: 50, bottom: 10, left: 10}}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend wrapperStyle={{bottom:-15}} />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
            <Line type="monotone" dataKey="wind" stroke="#82ca9d" />
        </LineChart>
    </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
    return{
        data: state.mainReducer
    }
}
 
export default connect(mapStateToProps,null)(Graph);