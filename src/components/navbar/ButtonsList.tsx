import { Link } from 'react-router-dom';
import './style.scss';


const ButtonsList = ():JSX.Element => {

    return (
        <div className={`w-full flex items-center justify-center`}>
            <ul className={`flex gap-7 lg:flex-row sm: flex-col`}>
                <li>
                    <Link className='btn rounded-md in-out duration-300' to={'/'}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='btn rounded-md in-out duration-300' to={'/about'}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className='btn rounded-md in-out duration-300' to={'/glairy'}>
                        Glairy
                    </Link>
                </li>
                <li>
                    <Link className='btn rounded-md in-out duration-300' to={'/contact'}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ButtonsList;