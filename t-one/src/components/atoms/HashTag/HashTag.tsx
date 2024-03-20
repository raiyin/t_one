import styles from './HashTag.module.css'

const HashTag = (props: { text: string }) => {
    return (
        <div className={styles['hash_tags']}>
            {props.text}
        </div>
    )
}

export default HashTag
