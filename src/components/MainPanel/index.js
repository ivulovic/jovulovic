import { NavLink } from 'react-router-dom';
import Footer from '../Footer';
import './style.scss';

export default function MainPanel({preTitle, title: Title, description, link, linkTitle}){
    return <div className='main-panel'>
        <p>{preTitle}</p>
        <h1><Title /></h1>
        <h2>{description}</h2>
        <button>Download CV</button>
        <Footer />
    </div>
}