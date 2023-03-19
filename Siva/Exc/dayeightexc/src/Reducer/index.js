
import { combineReducers } from "redux";
import CRUDManageReducer from './CRUDManageReducer';
import NotificationRedurecer from './NotificationRedurecer';

const combinedRed = combineReducers({
    crudManageeRed: CRUDManageReducer,
    notficationRed: NotificationRedurecer
});

export default combinedRed;