import ButtonType from '@/types/ButtonProps';
import Button from '@/components/atoms/Button';
import Title from '@/components/atoms/Title';
import List from '@/components/atoms/List';
import styles from './styles.module.css';
import Arrow_Image from "@assets/images/svgs/app_arrow.svg";
import { ArrowDirection } from '@/types/ArrowProps';
import { TitleType } from '@/types/TitleProps';

const AppTextBlock = () => {
    return (
        <div className={styles['app_text_block']}>

            <Title
                text={'Premium\u00A0Quality For\u00A0Your\u00A0Health'}
                selectStart={8}
                selectEnd={15}
                titleType={TitleType.H2}
                hideOverflow={false}
            />

            <div className={styles['list_wrapper']}>
                <List texts={[
                    'Premium quality food is made with ingredients that are packed with essential vitamins, minerals.',
                    'These foods promote overall wellness by support healthy digestion and boosting immunity'
                ]} />
            </div>

            <div className={styles['button-arrow_wrapper']}>
                <div className={styles['button-wrapper']}>
                    <Button
                        text={'Download'}
                        type={ButtonType.Primary}
                        needArrow={true}
                        direction={ArrowDirection.Forth}
                        onClick={() => { }}
                    />
                </div>
                <div className={styles['arrow-wrapper']}>
                    <img
                        src={Arrow_Image}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default AppTextBlock;
