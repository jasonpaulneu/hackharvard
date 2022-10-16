import classes from './LightButton.module.css';

function LightButton(props){
    return(
        <button className={classes.lightButton} onClick={props.onClick}>{props.btnText}</button>
    )
}

export default LightButton;