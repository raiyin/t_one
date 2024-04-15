import Title from '@/components/atoms/Title';
import styles from './ErrorBlock.module.css';

const ErrorBlock = (props: { errorText: string; }) => {
    return (
        <div className={styles['error-wrapper']}>
            <Title
                text={props.errorText}
                selectStart={0}
                selectEnd={9}
                lineHeight={40}
                fontSize={35}
                fontWeight={35}
                hideOverflow={false}
            />
        </div>
    );
};

export default ErrorBlock;
