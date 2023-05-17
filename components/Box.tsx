import * as React from 'react';
import DynamicBox from './DynamicBox';
import DynamicSpace from './DynamicSpace';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBoxes,
  realBoxes,
  boxesSliceState,
  filterData,
  updateBasic,
} from '../redux/slices/boxes';
import { useReactToPrint } from 'react-to-print';
import Results from './Results';

export default function Box() {
  // const sboxes = useSelector((state) => state.boxes.count);
  const rboxes = useSelector((state) => state.boxes.data);
  const boxesSlice = useSelector(boxesSliceState);
  let start = React.useRef(null);
  let end = React.useRef(null);
  const dispatch = useDispatch();

  const addSpace = () => {};
  return (
    <div className="box-main">
      <Results />
    </div>
  );
}
