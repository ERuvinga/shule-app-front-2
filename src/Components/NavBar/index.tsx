import {QuestionMarkCircleIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [Width_screen, setWidth_screen] = useState(0);
    const BreakPointNav = 850;

    const toggleMenuScreen = ()=>{
        setToggleMenu(!toggleMenu);
    };

    const onChangeWidth = () =>{
        setWidth_screen(window.innerWidth);

        if(window.innerWidth < BreakPointNav){
            setToggleMenu(false);
        }
    }

    useEffect(()=>{
        setWidth_screen(window.innerWidth);
        window.addEventListener('resize', onChangeWidth);
        return () =>{
            window.removeEventListener('resize', onChangeWidth);
        }
    },[]);

    return(
        <nav className='Nav_bar'>
            <div>
                <span className='logo'>
                    <span>Logo</span>
                    {toggleMenu ? <XMarkIcon className='w-[25px] btn_menu' onClick={toggleMenuScreen}/> : <Bars3Icon className='w-[25px] btn_menu' onClick={toggleMenuScreen}/>}
                </span>
                {
                    (toggleMenu || (Width_screen > BreakPointNav)) && (
                    <>
                         <ul className=' links '>
                            <li><a className='link_selected' href='#'>accueil</a></li>
                            <li><a href='#'>valve</a></li>
                            <li><a href='#'>a propos</a></li>
                            <li><a href='#'>Grille</a></li>
                        </ul>
                        <div className='btns '>
                            <ul className='icons '>
                                <li><ChatBubbleBottomCenterTextIcon className='w-[25px]'/></li>
                                <li><UserGroupIcon className='w-[25px]'/></li>
                                <li><QuestionMarkCircleIcon className='w-[25px]'/></li>
                            </ul>
                            <a className='link_to_login' href='/Login'>Connexion</a>
                        </div>
                    </>
                 ) 
                
                }
                
            </div>
        </nav>
    )
}

export default Navbar;