import Title from '@/components/atoms/Title';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import styles from './styles.module.css';
import { TitleType } from '@/types/TitleProps';

const NotFound = () => {
    return (
        <>
            <Header />
            <main className={styles['not_found']}>
                <Title
                    text='Oooops!!! Not Found...'
                    selectStart={0}
                    selectEnd={9}
                    titleType={TitleType.H5}
                    hideOverflow={false}
                />
            </main>
            <Footer />
        </>
    );
};

export default NotFound;
