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
          <h2 className=''>Notre Ecole</h2>
          <p className='descr'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio culpa ut 
            dolorum dolor nostrum est, harum sint aperiam, cumque
             atque consequuntur eveniet molestias explicabo, id vitae corrupti numquam nam
             in delectus qui nemo illo natus itaque. Vel tempora cum illum. Fugit corrupti 
             quod accusantium explicabo quaerat eius nostrum dicta!
            </p>
          <div className='first_bloc '>
            <img className=' w-[450px] mr-6 ' alt='Institution' src='/imgs/a.png'/>
            <aside className='first_descr'>
              <h3 className=''>Un Enseignement de qualité</h3>
              <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </> 
 )
}
