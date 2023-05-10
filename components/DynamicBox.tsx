import * as React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteBoxes,
  updateHead,
  filterData,
  updateContext,
} from '../redux/slices/boxes';
import JoditEditor from 'jodit-react';

export default function DynamicBox(props, { placeholder }) {
  const dispatch = useDispatch();
  const boxesSlice = useSelector((state) => state.boxes);
  const [content, setContent] = React.useState('');
  const editor = React.useRef(null);

  const deleteBox = () => {
    dispatch(deleteBoxes(props.index));
  };
  const updateHeading = (x) => {
    dispatch(updateHead({ index: props.index, data: x }));
  };
  const updateContent = (x) => {
    dispatch(updateContext({ index: props.index, data: x }));
  };
  const handleQuill = (content) => {
    setContent(content);
    dispatch(updateContext({ index: props.index, data: content }));
  };
  return (
    <div>
      <input
        placeholder="Heading"
        onChange={(e) => updateHeading(e.target.value)}
        value={props.heading}
        className={`${props.index}`}
      />
      <br />
      <textarea
        placeholder="Enter the summary"
        onChange={(e) => updateContent(e.target.value)}
        value={props.context}
      ></textarea>
      {/* <ReactQuill value={props.context} onChange={handleQuill} /> */}

      {/* <JoditEditor
        ref={editor}
        value={props.context}
        tabIndex={1} // tabIndex of textarea
        
        onChange={(newContent) =>handleQuill()}
      /> */}

      <button onClick={deleteBox}> Delete </button>
    </div>
  );
}
