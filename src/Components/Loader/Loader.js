import { BallTriangle } from 'react-loader-spinner';
import s from "./Loader.module.css";


function Loader() {
    return (
        <div className={s.loader}>
            <BallTriangle 
                heigth="30"
                width="30"
                color='#3f51b5'
                ariaLabel='loading'
                className={s.loader}
            />
        </div>
        
    )
}

export default Loader;
