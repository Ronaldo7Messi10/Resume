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
import DynamicArea from './DynamicArea';

export default function Results() {
  const resultsRef = React.useRef();
  const boxesSlice = useSelector(boxesSliceState);
  return (
    <React.Fragment>
      <DynamicArea pref={resultsRef} />
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
    </React.Fragment>
  );
}
