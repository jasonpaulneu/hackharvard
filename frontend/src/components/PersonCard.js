import classes from './PersonCard.module.css';
import MiniDarkButton from './generic/MiniDarkButton';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

function PersonCard(props) {
    const [tags,setTags] = useState(['Networking','Dating']);
    const [hobbies,setHobbies] = useState(['Reading','Walking']);


    const miniTags = tags.map(tag =>{
        return <MiniDarkButton btnText={tag}/>
    })

    const miniHobbies = tags.map(tag =>{
        return <MiniDarkButton btnText={tag}/>
    })

    return (<div className={classes.profileCard}>
        <div className={classes.innerCardContainer}>
            <div className={classes.profileImageContainer}>
                <img className={classes.profileImage} src={require('../assets/profileplaceholder.png')}/>
            </div>
            <div className={classes.profileDetailsContainer}>
                <div className={classes.name}>Emily Jones</div>
                <div className={classes.title}>Bio</div>
                <div className={classes.bio}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quis fuga omnis repellendus neque laboriosam labore quasi, nulla sint hic, eligendi sapiente maiores molestiae a. Quas beatae incidunt molestias molestiae.</div>
                <div className={classes.title}>Tags</div>
                <div className={classes.tagRow}>
                    {miniTags}
                </div>
                <div className={classes.title}>Interests</div>
                <div className={classes.hobbyRow}>
                    {miniHobbies}
                </div>
            </div>
        </div>
        <div className={classes.btnRow}>
                    <FavoriteBorderIcon style={{fontSize:"50px", color:"#C93408", padding:"0.5rem 0.5rem"}} />
                    <ThumbDownOffAltIcon style={{fontSize:"50px", color:"#C93408", padding:"0.5rem 0.5rem"}}/>
                </div>
    </div>)
}

export default PersonCard;