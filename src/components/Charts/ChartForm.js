import React, { useEffect, useState } from 'react';
import './ChartForm.scss';
import { BarChart } from './BarChart/BarChart';
import { LineChart } from './LineChart/LineChart';

const ChartForm = ({
  isLineChartVisible,
  isBarChartVisible,
  setIsLineChartVisible,
  setIsBarChartVisible,
}) => {
  const [X, setX] = useState('');
  const [Y, setY] = useState('');

  const [month, setMonth] = useState(['January','February','March','April','May']);
  const [values, setValues] = useState([1,5,10,1,2]);

  const [XErrorMessage, setXErrorMessage] = useState('');

  const [radioToggle, setRadioToggle] = useState();
  if (radioToggle === 'BarChart') {
    setIsBarChartVisible(true);
    setIsLineChartVisible(false)
  }

  if (radioToggle === 'LineChart') {
    setIsLineChartVisible(true);
    setIsBarChartVisible(false);
  }

  const [charData, setCharData] = useState({
    labels: month,
    datasets: [{
      label: 'Some label here',
      data: values,
      backgroundColor: ["#50AF95"],
      borderColor: "black",
      borderWidth: 1
    }],
  });

  useEffect(() => {
    setCharData({
      labels: month,
      datasets: [{
        label: 'Some label here',
        data: values,
        backgroundColor: ["#50AF95"],
        borderColor: "black",
        borderWidth: 1
      }],
    })
  },[month, values])

  const addNewMonth = () => {
    setMonth((state) => [...state, X])
  }
  const addNewValue = () => {
    setValues((state) => [...state, Y])
  }

  const onAdd = (e) => {
    e.preventDefault()
    if (X !== '' || Y !== '') {
      addNewMonth();
      addNewValue();
      setX('')
      setY('')
    } else {
      setXErrorMessage('Please add X axis')
    }
  }

  const onYInputChange = (e) => {
    setY(+(e.target.value))
  }

  const onXInputChange = (e) => {
      setX(e.target.value)
      if (X.length >= 0) {
        setXErrorMessage(null)
      }
  }

  return (
    <>
      <h2>Press Enter to add new chart</h2>
      <form
        className="chart-form"
        action="#"
      >
        <div className="labels">
          <label>
            <span
              className="labels_title-x"
            >
              x axis labels
            </span>
            <input
              className="labels__input-x"
              type="text"
              placeholder={month}
              value={X}
              onChange={onXInputChange}
            />
          </label>
          {XErrorMessage && (
            <p className="labels__input-x__error">{XErrorMessage}</p>
          )}

          <label>
            <span
              className="labels_title-y"
            >
              y axis values
            </span>
            <input
              className="labels__input-y"
              type="number"
              placeholder={values}
              value={Y}
              onChange={onYInputChange}
            />
          </label>
        </div>

        <button
          className="btn-visibility"
          onClick={(e) => onAdd(e)}
        >
          ADD
        </button>

        {isLineChartVisible && (
          <LineChart
            chartData={charData}
          />
        )}

        {isBarChartVisible && (
          <BarChart
            chartData={charData}
          />
        )}

        <label
          className="radio__label"
        >
          <input
            checked={isBarChartVisible}
            type="radio"
            name="chartChoise"
            value="BarChart"
            onChange={e => setRadioToggle(e.target.value)}
          />
          <span
            className="radio__label-title"
          >
            Bar Chart
          </span>
        </label>


        <label
          className="radio__label"
        >
          <input
            checked={isLineChartVisible}
            type="radio"
            name="chartChoise"
            value="LineChart"
            onChange={e => setRadioToggle(e.target.value)}
          />
          <span
            className="radio__label-title"
          >
            Line Chart
          </span>
        </label>

      </form>
    </>
  );
};

export default ChartForm;
