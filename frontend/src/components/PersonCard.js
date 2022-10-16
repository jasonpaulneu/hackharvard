import classes from './PersonCard.module.css';
import MiniDarkButton from './generic/MiniDarkButton';
import { useState } from 'react';

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
                <div></div>
            </div>
        </div>
    </div>)
}

export default PersonCard;