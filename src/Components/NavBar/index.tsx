import {QuestionMarkCircleIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon} from '@heroicons/react/24/outline'

const navbar = () => {
    return(
        <nav className='Nav_bar'>
            <div className=''>
                <span className='logo'>Logo</span>
                <ul className=' links '>
                    <li><a className='link_selected' href='#'>accueil</a></li>
                    <li><a href='#'>valve</a></li>
                    <li><a href='#'>a propos</a></li>
                    <li><a href='#'>Grille</a></li>
                </ul>
                <div className='btns'>
                    <ul className='icons'>
                        <li><ChatBubbleBottomCenterTextIcon className='w-[25px]'/></li>
                        <li><UserGroupIcon className='w-[25px]'/></li>
                        <li><QuestionMarkCircleIcon className='w-[25px]'/></li>
                    </ul>
                    <a className='link_to_login' href='/Login'>Connexion</a>
                </div>
            </div>
        </nav>
    )
}

export default navbar;