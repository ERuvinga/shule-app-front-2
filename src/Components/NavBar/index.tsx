import { Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import  Image from 'next/image';
import Link from 'next/link';

// States Recoiljs
import { useEffect, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { NavBarSelectedItem, DataTabOfNavBAr } from '@/src/States/UserAoth';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [Width_screen, setWidth_screen] = useState(0);
    const [itemNavSelected, setItemNavSelected]:any = useRecoilState(NavBarSelectedItem);
    const [DataOfNav, setDataOfNav]:any = useRecoilState(DataTabOfNavBAr);
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
            <div className='NavBarContent'>
                <span className='logo'>
                    <span><Image src='/imgs/logo.png' width={25} height={25} alt='logo'/> </span>
                    {toggleMenu ? <XMarkIcon className='btn_menu' onClick={toggleMenuScreen}/> : <Bars3Icon className='btn_menu' onClick={toggleMenuScreen}/>}
                </span>
                {
                    (toggleMenu || (Width_screen > BreakPointNav)) && (
                    <div className='navigation_links'>
                         <ul className='links'>
                            {
                                DataOfNav.map((value:any, index:any)=>
                                    <li key={index} onClick={()=> setItemNavSelected(index)}>
                                        <a className={index === itemNavSelected ?'link_selected': ""} href={value.link}>{value.label}</a>
                                    </li>
                                )
                            }
                        </ul>
                        <Link className='link_to_login' href='/Login'>Connexion</Link>
                    </div>
                 ) 
                
                }
                
            </div>
        </nav>
    )
}

export default Navbar;