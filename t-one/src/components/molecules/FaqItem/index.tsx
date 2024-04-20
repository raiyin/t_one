import styles from './styles.module.css';
import MinusImage from '@assets/images/pngs/minus.png';
import PlusImage from '@assets/images/pngs/plus.png';
import { FaqItemProps } from '@types/FaqItemProps';
import Title from '@/components/atoms/Title';
import { useState } from 'react';

const FaqItem = (props: FaqItemProps) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className={`${styles['faqItem']} ${expanded && styles.faqItem__expanded}`}>
            <div className={styles['faqItem-conrol']}>
                <Title
                    text={props.quest}
                    selectStart={0}
                    selectEnd={0}
                    fontSize={22}
                    fontWeight={600}
                    lineHeight={60}
                    hideOverflow={false}
                />
                <div className={styles['faqItem_image']}>
                    <img src={expanded ? MinusImage : PlusImage} alt="Collapse/expand button" onClick={() => setExpanded(_ => !expanded)} />
                </div>
            </div>
            <div className={`${styles['faqItem-answer']} ${expanded && styles['faqItem-answer__expanded']}`}>
                {props.answer}
            </div>
        </div>
    );
};

export default FaqItem;
