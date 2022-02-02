import './Header.css';
import hbHeaderImage from '../assets/hepsiburada-logo.png';

function Header(){
    const titleText = 'hepsiburada.com';
    return(
        <div>
            <div className="header">
                <div className="header-div">
                    <img src={hbHeaderImage} className="header-img"></img>
                    {/* <h1>{titleText}</h1> */}
                </div>
                <div className='appName'>
                    <h3 className='appNameText'>LinkVOTE Challange</h3>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default Header;