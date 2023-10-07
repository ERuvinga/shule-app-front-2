
import { MapPinIcon, PhoneIcon, InboxArrowDownIcon} from "@heroicons/react/24/outline";

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="cont">
                <div>
                    <span className="title_contact">Ep Neema</span>
                    <p>
                    Si vous recherchez une école qui nourrira votre enfance, votre corps et votre esprit, l`école primaire NEEMA est l`endroit idéal pour eux. Contactez-nous aujourd`hui
                     pour en savoir plus sur nos programmes et les admissions de processus.
                    </p>
                    <span>@Copyright Ep_neema</span>
                </div>
                <div>
                    <span className="title_contact">Adresse</span>
                    <ul className="contacts">
                        <li><MapPinIcon className="icones"/>Goma, Q. Mabang, Av.Salong ...</li>
                        <li><InboxArrowDownIcon className="icones"/>Ourstudio@hello.com</li>
                        <li><PhoneIcon className="icones"/>+243 386-688-3295</li>
                    </ul>
                </div>
                <div>
                    <span className="title">Menu</span>
                    <ul className="list">
                        <li>Accueil</li>
                        <li>Valve</li>
                        <li>a propos</li>
                        <li>Grille</li>
                    </ul>
                </div>
                <div className="last_blc">
                    <span className="title">Nos liens</span>
                    <ul className="list">
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )

}

export default Footer;