import Head from '../Components/Head'
import Navbar from '../Components/NavBar'

export default function Home() {
  return (
    <>
      <Head/>
      <section className='contenaire_home'>
        <Navbar/>
        <div className='container_first'>
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
                    <img src='/wel.png' alt='error_illustration'/>
                  </div>
            </div>
          <section className='desc_inst'>
            <h2 className=''>E.P Neema</h2>
            <p className='descr'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio culpa ut 
              dolorum dolor nostrum est, harum sint aperiam, cumque
              atque consequuntur eveniet molestias explicabo, id vitae corrupti numquam nam

              </p>
            <div className='illustr_bloc '>
              <img className=' w-[400px] mr-6 ' alt='Institution' src='/imgs/a.png'/>
              <aside className='text_descr '>
                <h3 className=''>Un Enseignement de qualité</h3>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
                </p>
              </aside>
          </div>

            <div className='illustr_bloc '>
                <aside className='text_descr '>
                  <h3 className=''>Un environnement  fait pour ton enfant</h3>
                  <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
                  </p>
                </aside>
                <img className='  w-[400px]' alt='Institution' src='/imgs/b.png'/>
            </div>

            <div className='illustr_bloc '>
              <img className=' w-[400px] mr-6 ' alt='Institution' src='/imgs/c.gif'/>
              <aside className='text_descr '>
                <h3 className=''>U de qualité</h3>
                <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
                </p>
              </aside>
          </div>

              <div className='illustr_bloc '>
                <aside className='text_descr '>
                  <h3 className=''>Des Enseignants à la Hauteur</h3>
                  <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
                  </p>
                </aside>
                <img className='w-[400px]' alt='Institution' src='/imgs/d.png'/>
            </div>
          </section>
        </div>
        <section className='border Direction_cont'>
          <h2>Notre Direction</h2>
          <p>
            Salut
          </p>
        </section>
      </section>
    </> 
 )
}
