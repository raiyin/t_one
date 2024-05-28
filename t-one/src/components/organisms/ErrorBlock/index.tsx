import Title from '@/components/atoms/Title';
import styles from './styles.module.css';
import { TitleType } from '@/types/TitleProps';

const ErrorBlock = (props: { errorText: string; }) => {
    return (
        <div className={styles['error']}>
            <Title
                text={props.errorText}
                selectStart={0}
                selectEnd={9}
                titleType={TitleType.H4}
                hideOverflow={false}
            />
        </div>
    );
};

export default ErrorBlock;
