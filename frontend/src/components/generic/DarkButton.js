import classes from './DarkButton.module.css';
function DarkButton(props){
    return(
        <button className={classes.darkButton}>{props.btnText}</button>
    )
}

export default DarkButton;