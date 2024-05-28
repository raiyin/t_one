import Title from '@/components/atoms/Title';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import styles from './styles.module.css';
import { TitleType } from '@/types/TitleProps';

const NotFound = () => {
    return (
        <>
            <Header />
            <main className={styles['error']}>
                <Title
                    text='Oooops!!! Something wrong happened...'
                    selectStart={0}
                    selectEnd={9}
                    titleType={TitleType.H4}
                    hideOverflow={false}
                />
            </main>
            <Footer />
        </>
    );
};

export default NotFound;
