import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ModalComponent from './components/ModalComponent/ModalComponent';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [count, setCount] = useState(0);
  const [sorted, setSorted] = useState(false);
  const cars = [
    'Hyundai',
    'Maruti Suzuki Swift',
    'Hyundai Venue',
    'Kia Seltos',
    'Renault Kwid',
    'Maruti Suzuki Baleno',
    'Tata Altroz'
  ];
  const fruits = [
    'Apple',
    'Grapes',
    'Banana',
    'Kiwi',
    'Plum'
  ];
  const [list, setList] = useState(cars);
  const [fontSize, setFontSize] = useState(12);
  const [filter, setFilterName] = useState('cars');
  const onWhellHandler = (size) => {
    if (window.event.wheelDelta / 120 > 0) {
      setFontSize(size + 1);
    }
    else {
      setFontSize(size - 1);
    }
  }
  return (
    <div className="App">
      <div className="app-text" style={{ fontSize: fontSize + 'px' }} onWheel={() => { onWhellHandler(fontSize) }}>
        React Application
      </div>
      <div className="item">
        <div>
        <select onChange={(event) => { setList(event.target.value === 'cars' ? cars : fruits); setFilterName(event.target.value) }}>
          <option value="cars">cars</option>
          <option value="fruits">fruits</option>
        </select>
        <button onClick={() => {
          (sorted ? setList(filter === 'cars' ? cars.reverse(): fruits.reverse()) : setList(filter === 'cars' ? cars.sort(): fruits.sort()))
          setSorted(!sorted);
        }}>Sort</button>
        </div>
        <div>
        <button onClick={() => { setShowModal(true); setCount(count + 1) }}>Show Modal</button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
      <div className="modal">
         {showModal && <ModalComponent count={count} hideModal={() => setShowModal(false)} />}
      </div>
      <div className="content">
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

      </div>


    </div>
  );
}

export default App;
