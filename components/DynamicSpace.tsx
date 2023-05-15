import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addBoxes,
  realBoxes,
  boxesSliceState,
  filterData,
  updateBasic,
  updateSpace,
} from '../redux/slices/boxes';

export default function DynamicSpace(props) {
  const dispatch = useDispatch();
  const spaceUpdate = (x) => {
    if (x == '') {
      x = 0;
    }
    dispatch(updateSpace({ data: parseInt(x), index: props.index }));
  };
  return (
    <div>
      <label> Change space height </label>
      <input
        value={props.height}
        onChange={(e) => spaceUpdate(e.target.value)}
      />
    </div>
  );
}
