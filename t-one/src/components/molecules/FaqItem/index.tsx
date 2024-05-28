import styles from './styles.module.css';
import MinusImage from '@assets/images/pngs/minus.png';
import PlusImage from '@assets/images/pngs/plus.png';
import { FaqItemProps } from '@/types/FaqItemProps';
import { useState } from 'react';

const FaqItem = (props: FaqItemProps) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className={`${styles['faqItem']} ${expanded && styles['faqItem_expanded']}`}
            onClick={() => setExpanded(() => !expanded)}
        >
            <div className={styles['faqItem__conrol']}>
                <span className={styles['faqItem__header']}>{props.quest}</span>
                <div className={styles['faqItem__image']}>
                    {
                        expanded
                            ?
                            <img
                                src={MinusImage}
                                alt="Collapse/expand button" />
                            :
                            <img
                                src={PlusImage}
                                alt="Collapse/expand button" />
                    }
                </div>
            </div>
            <div className={`${styles['faqItem__answer']} ${expanded && styles['faqItem__answer_expanded']}`}>
                {props.answer}
            </div>
        </div>
    );
};

export default FaqItem;
