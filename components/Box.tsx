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

export default function Box() {
  // const sboxes = useSelector((state) => state.boxes.count);
  const rboxes = useSelector((state) => state.boxes.data);
  const boxesSlice = useSelector(boxesSliceState);
  let start = React.useRef(null);
  let end = React.useRef(null);
  const dispatch = useDispatch();
  const resultsRef = React.useRef();

  const downloadPDF = useReactToPrint({
    content: () => resultsRef.current,
    documentTitle: 'Testing Resume',
    onAfterPrint: () => console.log('Resume printed'),
  });

  const addBox = (x) => {
    dispatch(addBoxes({ data: x }));
  };

  const filterUs = () => {
    dispatch(filterData({ start: start.current, end: end.current }));
    start.current = null;
    end.current = null;
  };

  const updateBasicBox = (x, y) => {
    dispatch(updateBasic({ basicName: x, data: y }));
  };
  const addSpace = () => {};
  return (
    <div className="box-main">
      <div className="dynamic-area">
        <br />

        <input
          placeholder="Name"
          onChange={(e) => updateBasicBox('name', e.target.value)}
          value={boxesSlice.basic.name}
          autoComplete="off"
        />
        <br />
        <input
          placeholder="Email"
          onChange={(e) => updateBasicBox('email', e.target.value)}
          value={boxesSlice.basic.email}
        />
        <br />
        <input
          placeholder="Phone"
          onChange={(e) => updateBasicBox('phone', e.target.value)}
          value={boxesSlice.basic.phone}
        />
        <br />
        <input
          placeholder="Photo URL"
          onChange={(e) => updateBasicBox('photo', e.target.value)}
          value={boxesSlice.basic.photo}
        />

        <br />
        {rboxes.map((x, idx) => {
          if (x.type == 'DynamicBox') {
            return (
              <div
                className={`dynamic-box`}
                key={idx}
                draggable
                onDragStart={(e) => (start.current = idx)}
                onDragEnter={(e) => (end.current = idx)}
                onDragEnd={filterUs}
                onDragOver={(e) => e.preventDefault()}
              >
                {/* <img
                  
                  src="https://cdn.onlinewebfonts.com/svg/img_487573.png"
                  className='img-drag-icon'
                /> */}
                <DynamicBox
                  key={idx}
                  index={idx}
                  context={x.context}
                  heading={x.heading}
                />
              </div>
            );
          }
          if (x.type == 'DynamicSpace') {
            return (
              <div
                className={`dynamic-box`}
                key={idx}
                draggable
                onDragStart={(e) => (start.current = idx)}
                onDragEnter={(e) => (end.current = idx)}
                onDragEnd={filterUs}
                onDragOver={(e) => e.preventDefault()}
              >
                {/* <img
                  
                  src="https://cdn.onlinewebfonts.com/svg/img_487573.png"
                  className='img-drag-icon'
                /> */}
                <DynamicSpace key={idx} index={idx} height={x.height} />
              </div>
            );
          }
        })}

        <button onClick={() => addBox('DynamicBox')}> Add box </button>
        <button onClick={() => addBox('DynamicSpace')}> Add Space </button>
        <br />
        <button onClick={() => downloadPDF()}> Download as PDF </button>

        <br />
      </div>
      <div className="results-area">
        <div className="results-box" ref={resultsRef}>
          <div className="basic-data-box">
            <div className="basic-text">
              <h1> {boxesSlice.basic.name}</h1>
              <h3> {boxesSlice.basic.email}</h3>
              <h3> {boxesSlice.basic.phone} </h3>
            </div>
            <div className="basic-photo">
              {boxesSlice.basic.photo != '' ? (
                <img className="profile-photo" src={boxesSlice.basic.photo} />
              ) : null}
            </div>
          </div>
          {boxesSlice.data.map((x, idx) => {
            if (x.type == 'DynamicBox') {
              return (
                <div key={idx}>
                  {x.heading != '' && (
                    <h3 className="resume-heading"> {x.heading} </h3>
                  )}

                  <div dangerouslySetInnerHTML={{ __html: x.context }}></div>
                </div>
              );
            }
            if (x.type == 'DynamicSpace') {
              return (
                <div
                  key={idx}
                  style={{ height: x.height }}
                  className="dynamic-space-result"
                ></div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
