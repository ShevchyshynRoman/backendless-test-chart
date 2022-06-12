import './App.scss';
import ChartForm from "./components/Charts/ChartForm";
import { useState } from 'react';


const App = () => {
  const [isBarChartVisible, setIsBarChartVisible] = useState(true);
  const [isLineChartVisible, setIsLineChartVisible] = useState(false);


  return (
    <div className='App'>
      <ChartForm
        isLineChartVisible={isLineChartVisible}
        isBarChartVisible={isBarChartVisible}
        setIsLineChartVisible={setIsLineChartVisible}
        setIsBarChartVisible={setIsBarChartVisible}
      />
    </div>
  );
}

export default App;
