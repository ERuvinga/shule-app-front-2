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
              Bienvenue à l`école primaire Neema, où nous croyons que chaque enfant mérite une éducation de qualité. Nous offrons un environnement de nourrice où les élèves
              peuvent apprendre et se développer, à la fois intellectuellement et personnellement 
             </p> 
              <div className='btns'>
                <Link className='link_to_login mr-5' href='/Login'>Connexion</Link>
                <Link className='link_to_about' href='#about'>A propos</Link>
              </div>
          </div>
          <div className='illustrat'>
            <img src='/wel.png' alt='error_illustration' />
          </div>
        </div>
        <section className='desc_inst'>
            <h2>E.P Neema</h2>
            <p className='descr'>
            Nous offrons un programme bien arrondi qui prépare les écoliers au succès au secondaire et au-delà.
            Nos enseignants sont expérimentés et qualifiés. Nous proposons également une variété d`activités parascolaires. Les étudiants peuvent donc explorer leurs intérêts et développer leurs talents. Si vous recherchez une école qui fournira à votre enfant une éducation de qualité, ne cherchez pas plus loin que l`école primaire Neema. Nous sommes convaincus que vous serez satisfait de votre décision de choisir notre école. Les parents constituent une partie importante de l`éducation de leur enfant. Nous vous encourageons à vous impliquer dans l`éducation de votre enfant et à soutenir notre école.
            L`école primaire Neema, nous sommes le meilleur choix pour l`éducation de votre enfant
            </p>
          <div className='illustr_bloc '>
              <img className='img-illustration sm:mr-6' alt='Institution' src='/imgs/a.png'/>
              <aside className='text_descr '>
                <h3 className='first-text'>Un Enseignement de qualité</h3>
                <p>L`enseignement de la qualité est essentiel pour le succès des écoliers. C`est la base sur laquelle tout apprentissage est construit. Lorsque les écoliers ont accès à des enseignants de qualité, ils ressemblent davantage à leurs objectifs scolaires et à se développer en individus bien arrondis. Si vous recherchez une éducation de qualité pour votre enfant, recherchez une école avec des professeurs de qualité. 
                  Les enseignants de qualité sont la clé du succès des étudiants.
                </p>
              </aside>
          </div>

          <div className='illustr_bloc bloc_inverse'>
                <aside className='text_descr'>
                  <h3>Un environnement  fait pour ton enfant</h3>
                  <p> À  l`école primaire NEEMA, nous croyons que chaque enfant mérite une éducation de qualité dans un environnement sûr. C`est pourquoi nous avons créé une école spécialement conçue pour répondre aux besoins des jeunes apprenants. Nos tailles de classe permettent à nos professeurs de donner à chaque enfant l`attention individuelle dont elles ont besoin. Nous proposons également une variété de programmes d`enrichissement, tels que l`art, la musique et l`éducation physique,
                     pour aider les enfants à développer leurs intérêts et leurs talents. De plus, nous nous engageons à fournir un environnement d`apprentissage sûr et de soutien. Nous avons une politique de tolérance zéro pour l`intimidation et nous travaillons difficilement à créer une communauté scolaire positive et inclusive. Si vous recherchez une école qui nourrira votre enfance, votre corps et votre esprit, l`école primaire NEEMA est l`endroit idéal pour eux. Contactez-nous aujourd`hui 
                     pour en savoir plus sur nos programmes et les admissions de processus
                  </p>
                </aside>
                <img className='img-illustration' alt='Institution' src='/imgs/b.png'/>
          </div>

          <div className='illustr_bloc '>
              <img className=' img-illustration sm:mr-6' alt='Institution' src='/imgs/c.gif'/>
              <aside className='text_descr'>
                <h3>Des excellents ressources</h3>
                <p>Au cours d`excellente école primaire, nous pensons que chaque enfant mérite la meilleure éducation possible. C`est pourquoi nous fournissons à nos écoliers une large gamme d`excellentes ressources, à la fois à l`intérieur et à l`extérieur de la classe. Nos installations comprennent une bibliothèque, un laboratoire informatique.  Nos enseignants expérimentés et dévoués s`engagent à aider chaque écolier à atteindre leur plein potentiel. Nous croyons que chaque enfant apprend différemment
                   et nous adaptons nos méthodes d`enseignement pour répondre aux besoins de chaque élève. Nous sommes fiers de faire partie de l`excellente communauté de ressources. Nous croyons que notre école fournit un environnement sûr et nourricier où les enfants peuvent apprendre et se développer. Si vous recherchez une école primaire de qualité supérieure pour votre enfant, nous vous encourageons à nous rendre visite aujourd`hui.
                </p>
              </aside>
          </div>

          <div className='illustr_bloc bloc_inverse '>
                <aside className='text_descr '>
                  <h3>Des Enseignants à la Hauteur</h3>
                  <p> L`école primaire NEEMA offre une approche unique et innovante de l`éducation. Nos enseignants sont des experts dans leur domaine et sont passionnés d`aider les enfants à apprendre et à se développer. Nous croyons que chaque enfant a le potentiel de réussir et nous travaillons difficilement à créer un environnement favorable et nourricier où tous les enfants peuvent atteindre leur 
                  plein potentiel.  Notre programme est basé sur les dernières recherches de l`éducation. Nous croyons que l`éducation est la clé du succès de la vie et nous nous sommes engagés à fournir à nos écoliers la meilleure éducation possible. Nous vous invitons à visiter notre école et à en apprendre davantage sur notre programme. Nous sommes convaincus que vous serez impressionné par ce que nous avons à offrir.
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
              Nous offrons un programme bien arrondi qui prépare les écoliers au succès au secondaire et au-delà. Nos enseignants sont expérimentés et qualifiés. Nous proposons également une variété d`activités parascolaires. Les étudiants peuvent donc explorer leurs intérêts et développer leurs talents. Si vous recherchez une école qui fournira à votre enfant une éducation de qualité, ne cherchez pas plus loin que l`école primaire Neema. Nous sommes convaincus que vous serez satisfait de votre décision de choisir notre école. Les parents constituent une partie importante de l`éducation de leur enfant. Nous vous encourageons à vous impliquer dans l`éducation de votre enfant et à soutenir notre école. 
              L`école primaire Neema, nous sommes le meilleur choix pour l`éducation de votre enfant.
            </p>

            <p>
              <span className='title'>Ecole Primaire</span>
              Bienvenue à l`école primaire Neema, où nous croyons que chaque enfant mérite une éducation de qualité. Nous offrons un environnement de nourrice où les élèves peuvent apprendre et se développer, à la fois intellectuellement et personnellement. Nos enseignants sont expérimentés et dédiés à aider chaque élève à atteindre leur plein potentiel. Nous proposons une variété de programmes et d`activités pour enrichir l`expérience d`apprentissage de nos écoliers et nous nous sommes engagés à fournir un environnement d`apprentissage sûr et de soutien. Nous vous invitons à en apprendre davantage sur l`école primaire Neema et à la raison pour laquelle nous sommes 
              l`endroit idéal pour votre enfant d`apprendre et de grandir.
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
