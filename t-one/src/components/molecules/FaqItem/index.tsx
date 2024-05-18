import styles from './styles.module.css';
import MinusImage from '@assets/images/pngs/minus.png';
import PlusImage from '@assets/images/pngs/plus.png';
import { FaqItemProps } from '@/types/FaqItemProps';
import { useState } from 'react';

const FaqItem = (props: FaqItemProps) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div
            className={`${styles['faqItem']} ${expanded && styles.faqItem__expanded}`}
            onClick={() => setExpanded(() => !expanded)}
        >
            <div className={styles['faqItem-conrol']}>
                <span className={styles['faqItem_header']}>{props.quest}</span>
                <div className={styles['faqItem_image']}>
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
            <div className={`${styles['faqItem-answer']} ${expanded && styles['faqItem-answer__expanded']}`}>
                {props.answer}
            </div>
        </div>
    );
};

export default FaqItem;
