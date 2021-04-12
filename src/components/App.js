import React from 'react';

import Appbar from './Appbar'
import SearchField from './SearchField'
import Graph from './Graph'

const App = () => {
  return (
    <div className="App">
        <Appbar/>
        <SearchField/>
        <Graph/>
    </div>
  );
}
 
export default App;
