import Head from '../Components/Head'
import {BookmarkIcon} from '@heroicons/react/24/outline'
import Navbar from '../Components/NavBar'

export default function Home() {
  return (
    <>
      <Head/>
      <section className='contenaire-home h-[200vh]'>
        <Navbar/>
        <section className='body_home'>
          <div className='Wrapper'>
              <div className='description'>
                  <h1 className=''>SOYEZ LE BIENVENU A L` ECOLE<br/>PRIMAIRE NEEMA</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur ab sed officiis   
                  </p> 
                  <div className='btns'>
                    <a className='link_to_login mr-5' href='/Login'>Connexion</a>
                    <a className='link_to_about' href='#about'>A propos</a>
                  </div>
              </div>
                <div className='illustrat mr-16'>
                  <img src='/wel.gif' alt='error_illustration'/>
                </div>
          </div>
        </section>
        <div className='desc_inst'>
          <h2>Notre Ecole</h2>
          <div className='first_bloc'>
            <img alt='Institution' src='/imgs/a.jpg'/>
            <aside>
              <h3>Un Enseignement de qualité</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </> 
 )
}
