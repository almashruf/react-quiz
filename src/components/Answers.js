import Checkbox from './Checkbox'
import classes from '../styles/Answers.module.css'

export default function Answers(){
    return(

        <div className={classes.answers}>
            <Checkbox className={classes.answer} text='Test answer'/>

        </div>
        
    )
}