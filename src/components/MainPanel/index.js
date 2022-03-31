import Footer from '../Footer';
import './style.scss';

export default function MainPanel({preTitle, title: Title, description, link, linkTitle}){
    return <div className='main-panel'>
        <p>{preTitle}</p>
        <h1><Title /></h1>
        <h2>{description}</h2>
        <div className='links'>
            <a target={"_blank"} className="cv" href="/cv.pdf" rel="noreferrer">Download CV</a>
            <Footer />
       </div>
    </div>
}