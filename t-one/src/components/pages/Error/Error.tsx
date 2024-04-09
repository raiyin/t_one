import Title from '../../atoms/Title/Title'
import Footer from '../../organisms/Footer/Footer'
import Header from '../../organisms/Header/Header'
import styles from './Error.module.css'

const NotFound = () => {
    return (
        <>
            <Header />
            <div className={styles['error']}>
                <Title
                    text='Oooops!!! Something wrong happened...'
                    selectStart={0}
                    selectEnd={9}
                    lineHeight={40}
                    fontSize={35}
                    fontWeight={35}
                    hideOverflow={false}
                />
            </div>
            <Footer />
        </>
    )
}

export default NotFound
