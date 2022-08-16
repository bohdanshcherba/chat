import s from './App.module.css';
import {Sidebar} from "../sidebar/Sidebar";

const App = () => {
    return (
        <div className={s.app}>
            <Sidebar/>

            <div className={s.chat}>
                <div className={s.header}>name header</div>
                <div className={s.chat__content}>content</div>
                <div className={s.input}>
                    <input type="text"/>
                </div>
            </div>
        </div>
    );
}

export default App;
