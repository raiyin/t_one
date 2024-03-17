import styles from './List.module.css'

const List = (props: { texts: string[] }) => {
    return (
        <div>
            <ul className={styles.list}>
                {props.texts.map(text =>
                    <li className={styles['list-item']} key={text}>
                        {text}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default List
