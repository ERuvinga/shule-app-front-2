//Natives tools

// Components
import Head from '../Components/Head'
import Navbar from '../Components/NavBar'
import Footer from '../Components/Footer';

//state
import { NavBarSelectedItem } from '../States/UserAoth';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

const ValvePage = ()=>{

    const [itemSelectedNavBar, setItemSelectedNavBar]:any = useRecoilState(NavBarSelectedItem);
    useEffect(()=>{
        if(itemSelectedNavBar != 1){
            setItemSelectedNavBar(1);
        }        
    },[])

    return (
        <>
            <Head/>
            <Navbar/>
            <div className='valve border'>
        
            </div>
            <Footer/>
        </> 
 )};

 export default ValvePage;
