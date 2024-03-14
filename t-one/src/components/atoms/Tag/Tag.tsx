import styles from './Tag.module.css'

const Tag = (props: { text: string }) => {
    return (
        <div className={styles.tag}>
            {props.text}
        </div>
    )
}

export default Tag
