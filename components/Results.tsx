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
