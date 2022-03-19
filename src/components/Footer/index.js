import InstagramIcon from "../../components/icons/InstagramIcon";
import LinkedinIcon from "../../components/icons/LinkedinIcon";
import TwitterIcon from "../../components/icons/TwitterIcon";
import "./style.scss";

export default function Footer(){
    const iconSize = 24;
    return <footer className="footer">
       <div className="social-networks">
                <a title="Instagram" href="_blank" href="#"><InstagramIcon width={iconSize} height={iconSize}/></a>
                <a title="Twitter" href="_blank" href="#"><TwitterIcon width={iconSize} height={iconSize}/></a>
                <a title="LinkedIn" href="_blank" href="#"><LinkedinIcon width={iconSize} height={iconSize}/></a>
            </div>
    </footer>
}