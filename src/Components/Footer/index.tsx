
import { MapPinIcon, PhoneIcon, InboxArrowDownIcon} from "@heroicons/react/24/outline";

const Footer = () =>{
    return(
        <footer className="footer">
            <div className="cont ">
                <div className="">
                    <span className="title_contact">Ep Neema</span>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Ipsa saepe sit molestiae corrupti quo accusamus! Voluptas sit minima id illum.
                    </p>
                    <span>@Copyright Ep_neema</span>
                </div>
                <div className="">
                    <span className="title_contact">Adresse</span>
                    <ul className="contacts">
                        <li><MapPinIcon className="icones"/>Goma, Q. Mabang, Av.Salong ...</li>
                        <li><InboxArrowDownIcon className="icones"/>Ourstudio@hello.com</li>
                        <li><PhoneIcon className="icones"/>+243 386-688-3295</li>
                    </ul>
                </div>
                <div className="">
                    <span className="title">Menu</span>
                    <ul className="list">
                        <li>Accueil</li>
                        <li>Valve</li>
                        <li>a propos</li>
                        <li>Grille</li>
                    </ul>
                </div>
                <div className="">
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