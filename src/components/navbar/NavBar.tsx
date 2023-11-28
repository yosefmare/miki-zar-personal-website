
import { Outlet } from 'react-router-dom';
import img from '/public/img/Logo_fin.png';
import './style.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import ButtonsList from './ButtonsList';
import { useState } from 'react';

const NavBar = (): JSX.Element => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='bg-zinc-900 text-slate-50 py-2 px-10'>
                <div className='flex items-center justify-between gap-10 w-full'>
                    <div className='flex items-center gap-2'>
                        <img className='lg:w-[70px] sm:w-[50px]' src={img} alt="logo" />
                        <h3 className='brand-name text-4xl text-slate-300 font-medium'>miky zar</h3>
                    </div>

                    <div className='lg:flex gap-7 sm:hidden'>
                        <ButtonsList />
                    </div>

                    <div className='lg:hidden sm:block' onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </div>
                </div>
            </div>
            <div className={`${isMenuOpen ? 'sm:hidden' : ''} flex items-center justify-center bg-zinc-900 py-10 text-slate-50 lg:hidden`}>
                <ButtonsList />
            </div>
            <Outlet />
        </>
    );
}

export default NavBar;
