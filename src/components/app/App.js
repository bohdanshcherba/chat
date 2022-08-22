import s from './App.module.css';
import {Sidebar} from "../sidebar/Sidebar";
import {Chat} from "../chat/Chat";
import {Notification} from "../notification/Notification";
import {useState} from "react";
import {useSelector} from "react-redux";


const App = () => {

    const current_user_id = 4
    const [currentDialogId, setCurrentDialog] = useState(0)
    const {notification} = useSelector(state => ({
        notification: state.messages.notification,
    }));


    return (
        <div className={s.app}>
            <Sidebar current_user_id={current_user_id} setCurrentDialog={setCurrentDialog} />
            <Chat currentDialogId={currentDialogId}/>
            {notification.notification ? <Notification notification={notification}/>: null}
        </div>
    );
}

export default App;
