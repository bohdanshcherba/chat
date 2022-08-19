import s from './App.module.css';
import {Sidebar} from "../sidebar/Sidebar";
import {Chat} from "../chat/Chat";
import {useState} from "react";

const App = () => {

    const current_user_id = 4
    const [currentDialogId, setCurrentDialog]  = useState(0)



    return (
        <div className={s.app}>
            <Sidebar current_user_id={current_user_id}  setCurrentDialog={setCurrentDialog}/>
            <Chat currentDialogId={currentDialogId}/>
        </div>
    );
}

export default App;
