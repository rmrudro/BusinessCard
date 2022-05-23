import cvPhoto from '../Photo/emma-watson-.jpg'
import EmailIcon from '../Photo/icons8-mail.png'
import LinkedInIcon from '../Photo/icons8-linkedin-circled-48.png'
export default function Info() {
    return (
        <div className='info-dv'>
            <div className="info-title">
                {/* <div className='background-img-prof'>
                   
                </div> */}
                { <img src={cvPhoto} className="prof-img" ></img> }
                <h2 className="prof-name">Laura Smith</h2>
                <h4 className="prof-position">Front End Developer</h4>
                <h5 className="prof-website">Laura website</h5>
                <div className='info-buttons'>
                    <button className="btn-email"><img src={EmailIcon} className="btn-email-img"></img><span className='btn-img-txt'><b>Email</b></span></button>

                    <button className="btn-linkedin"><img src={LinkedInIcon} className="btn-linkedin-img"></img> <span className='btn-img-txt'><b>LinkedIn</b></span></button>
                </div>
            </div>
        </div>
    );
}
