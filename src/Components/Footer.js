
import socialFacebook from '../Photo/icons8-facebook-150.png'
import socialTwitter from '../Photo/icons8-twitter-150.png'
import socialgithub from '../Photo/icons8-github-150.png'
import socialinstagram from '../Photo/icons8-instagram.gif'
export default function Footer() {
    return (
        <div className="footer-name">
            
            <div className="footer-items">
                <a>
                    <img src={socialFacebook} className="icon-facebook" ></img>
                </a>
                <a>
                    <img src={socialTwitter} className="icon-twitter" ></img>
                </a>
                <a>
                    <img src={socialinstagram} className="icon-instagram" ></img>
                </a>
                <a>
                    <img src={socialgithub} className="icon-github" ></img>
                </a>
            </div>
        </div>

    );
}