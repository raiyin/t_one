import Title from '@components/atoms/Title/Title';
import Footer from '@components/organisms/Footer/Footer';
import Header from '@components/organisms/Header/Header';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <>
            <Header />
            <main className={styles['not_found']}>
                <Title
                    text='Oooops!!! Not Found...'
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
