import Title from '@components/atoms/Title/Title';
import Footer from '@components/organisms/Footer/Footer';
import Header from '@components/organisms/Header/Header';
import styles from './Error.module.css';

const NotFound = () => {
    return (
        <>
            <Header />
            <main className={styles['error']}>
                <Title
                    text='Oooops!!! Something wrong happened...'
                    selectStart={0}
                    selectEnd={9}
                    lineHeight={40}
                    fontSize={35}
                    fontWeight={35}
                    hideOverflow={false}
                />
            </main>
            <Footer />
        </>
    );
};

export default NotFound;
