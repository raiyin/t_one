import styles from './List.module.css'

const List = (props: { texts: string[] }) => {
    return (
        <ul className={styles['list']}>
            {props.texts.map(text =>
                <li className={styles['list_item']} key={text}>
                    {text}
                </li>
            )}
        </ul>
    )
}

export default List
