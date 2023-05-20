import Link from "next/link";
import classes from './button.module.css';

function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link} className={classes.btn}>
                {props.children}
            </Link>
        )
    }
    return <Button className={classes.btn} onClick={props.onClick}>
        {props.children}
    </Button>
}

export default Button;