import './index.scss';
import state from './redux/state';
import {rerenderTree} from './redner';

rerenderTree(state);

