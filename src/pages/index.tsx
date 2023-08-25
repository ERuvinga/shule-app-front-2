//Natives tools

// Components
import Head from '../Components/Head'
import Navbar from '../Components/NavBar'
import DirectorCard from '../Components/DirectorCard'
import Footer from '../Components/Footer'
import Link from 'next/link';

//state

export default function Home() {
  const Tab_user = [
    {
      name: "BYABULE KILIGHO André",
      function:"Directeur Titulaire",
      ask: "concoit, coordonne, Planifie, Controle et anime les activité au sein de l'établissement",
      picture:"/imgs/user/ua.jpg"
    },
    {
      name: "KAMBERE SAHANI Floribert",
      function:"Directeur Adjoint",
      ask: "Gère, visite, et Encadre le personnel Enseignant, Control le travail des élèves",
      picture:"/imgs/user/ub.jpg",
    },

    {
      name: "KAMBALE KATSUVA Jean",
      function:"Enseignant de relève",
      ask: "Remplace à l'école un ensignant absent ou empeché",
      picture:"/imgs/user/uc.jpg",
    },
  ];

  return (
    <>
      <Head/>
      <Navbar/>
      <div className='container_first' id='home'>
        <div className='Wrapper'>
          <div className='description '>
              <h1 className=''>SOYEZ LE BIENVENU A L` ECOLE PRIMAIRE NEEMA</h1>
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consectetur ab sed officiis   
              </p> 
              <div className='btns '>
                <Link className='link_to_login mr-5' href='/Login'>Connexion</Link>
                <a className='link_to_about' href='#about'>A propos</a>
              </div>
          </div>
          <div className='illustrat'>
            <img src='/wel.png' alt='error_illustration' />
          </div>
        </div>
        <section className='desc_inst'>
            <h2>E.P Neema</h2>
            <p className='descr'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio culpa ut 
              dolorum dolor nostrum est, harum sint aperiam, cumque
              atque consequuntur eveniet molestias explicabo, id vitae corrupti numquam nam

            </p>
          <div className='illustr_bloc '>
              <img className='img-illustration sm:mr-6' alt='Institution' src='/imgs/a.png'/>
              <aside className='text_descr '>
                <h3 className='first-text'>Un Enseignement de qualité</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
                </p>
              </aside>
          </div>

          <div className='illustr_bloc bloc_inverse'>
                <aside className='text_descr'>
                  <h3>Un environnement  fait pour ton enfant</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
                  </p>
                </aside>
                <img className='img-illustration' alt='Institution' src='/imgs/b.png'/>
          </div>

          <div className='illustr_bloc '>
              <img className=' img-illustration sm:mr-6' alt='Institution' src='/imgs/c.gif'/>
              <aside className='text_descr'>
                <h3>Des excellents ressources</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
                </p>
              </aside>
          </div>

          <div className='illustr_bloc bloc_inverse '>
                <aside className='text_descr '>
                  <h3>Des Enseignants à la Hauteur</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora est id numquam maxime atque.
                  </p>
                </aside>
                <img className='img-illustration' alt='Institution' src='/imgs/d.png'/>
          </div>
        </section>
      </div>
      <section className='Direction_cont'>
          <h2 className='title_bloc'>Notre Direction</h2>
          <p className='text_Ancho'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe ad adipisci alias modi nihil omnis quae, perferendis
            corrupti, necessitatibus quaerat officiis du.
          </p>

          <div className='Container_card'>{
          Tab_user.map((value, index) => 
          <DirectorCard 
            user={value}  
            key={index}
            />)            
          }
          </div>
      </section>
      <section id='about'>
        <h2>About</h2>
        <div className='container_about '>
          <div className=' about'>
            <p>
              <span className ='title'>E.P Neema</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptatibus, iste sequi dolor necessitatibus earum, ad sapiente labore tempora maxime consequuntur odit a, blanditiis accusamus fugit voluptas sunt.
              Numquam libero deserunt ad quo reprehenderit dicta laudantium, minima, doloribus fuga amet eum dolorem eaque reiciendis voluptatum? Rem labore,
            </p>

            <p>
              <span className='title'>Ecole Primaire</span>
              aut, cum illo a laudantium deleniti sint eveniet nihil et explicabo unde vero ex eligendi ratione atque, quisquam repellendus perferendis optio eos itaque vitae! Dolor quos ducimus repudiandae incidunt ad deserunt 
              placeat modi consequuntur culpa laboriosam aperiam error iste, sequi officia accusamus! Iusto, nobis. Nemo architecto, ex numquam a temporibus nobis? Excepturi, maxime.
            </p>
          </div>
          <div className='news'>
            <div className='w-[100%]'>
              <h3>Recevoir des newsletters</h3>
              <div className='blocNews'>
                <label htmlFor='email'>votre e-mail</label>
                <input type='text' placeholder='neema@gmail.com' id='email'/>
                <button>Envoyez</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </> 
 )
}
