import classes from './MiniDarkButton.module.css';
function MiniDarkButton(props){
    return(
        <button className={classes.darkButton}>{props.btnText}</button>
    )
}

export default MiniDarkButton;