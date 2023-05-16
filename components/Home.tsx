import * as React from 'react';
import '../css/home.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBoxes,
  realBoxes,
  boxesSliceState,
  filterData,
  updateBasic,
  retrieveFromLocal,
} from '../redux/slices/boxes';
export default function Home() {
  const dispatch = useDispatch();
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const items = JSON.parse(localStorage.getItem('1'));
    if (items) {
      setItems(items);
    }
    console.log(items.basic.name);
  }, []);
  const localToRedux = () => {
    dispatch(retrieveFromLocal({ data: items }));
  };
  return (
    <div className="home-main">
      <div className="header">
        <h1>Resume Maker</h1>
      </div>
      <h4> Exisiting Data added</h4>
      <Link to="/builder" onClick={localToRedux}>
        {items.basic && items.basic.name}
      </Link>

      <Link to="/builder">
        <button className="build-resume-btn"> Build Your Resume </button>
      </Link>
    </div>
  );
}
