import {QuestionMarkCircleIcon} from '@heroicons/react/24/outline'
import {ChatBubbleBottomCenterTextIcon} from '@heroicons/react/24/outline'
import {UserGroupIcon} from '@heroicons/react/24/outline'

const navbar = ()=>{
    return(
        <nav className='Nav_bar'>
            <div className='w-[75%] h-[100%] m-auto flex items-center justify-between border'>
                <span className='logo border'>Logo</span>
                <ul className=' links border'>
                    <li><a className='link_selected' href='#'>accueil</a></li>
                    <li><a href='#'>valve</a></li>
                    <li><a href='#'>a propos</a></li>
                    <li><a href='#'>Grille</a></li>
                </ul>
                <div className='btns border'>
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