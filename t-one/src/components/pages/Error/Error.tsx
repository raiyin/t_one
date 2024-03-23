import Title from '../../atoms/Title/Title'
import styles from './Error.module.css'

const NotFound = () => {
    return (
        <div className={styles['not_found']}>
            <Title
                text='Oooops!!! Something wrong happened...'
                selectStart={0}
                selectEnd={9}
                lineHeight={40}
                fontSize={35}
                fontWeight={35} />
        </div>
    )
}

export default NotFound
