import classes from './layout/Layout_3_1.module.css';
import LightButton from './generic/LightButton';
import DarkButton from './generic/DarkButton';
import { useNavigate } from 'react-router-dom';

function LandingPage(props) {
    const navigate = useNavigate();
    const handleLoginOnClick = () => {
        console.log("IN HANDLE LOG IN")
        navigate('/login');
    }

    return (
        <div className={classes.container}>
            <div className={classes.navRow}>
                <img className={classes.logo} src={require('../assets/Logo.png')} />
            </div>
            <div className={classes.contentRow}>
                <div className={classes.sideImage}>
                    <img src={require('../assets/HomeImg.png')} />
                </div>
                <div className={classes.sideContent}>
                    <div className={classes.tagLine}>
                        Flying with strangers won’t be the same anymore, try Floak!!!
                    </div>
                    <div className={classes.subTagLine}>
                        With Floak, meet other interesting people who would be travelling with you in air! Network, date, watch movies together! Enter your flight number and get started!
                    </div>
                    <div className={classes.btnRow}>
                        <LightButton btnText='Login' onClick={handleLoginOnClick} />
                        <DarkButton btnText='Sign Up' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;