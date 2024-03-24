import styles from './FaqItem.module.css'
import MinusImage from '../../../assets/images/pngs/minus.png';
import PlusImage from '../../../assets/images/pngs/plus.png';
import { FaqItemProps } from '../../../types/FaqItemProps';
import Title from '../../atoms/Title/Title';
import { useState } from 'react';

const FaqItem = (props: FaqItemProps) => {

    const [expanded, setExpanded] = useState(false)

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
                />
                <div className={styles['faqItem_image']}>
                    <img src={expanded ? MinusImage : PlusImage} alt="Collapse/expand button" onClick={() => setExpanded(!expanded)} />
                </div>
            </div>
            {expanded && <div className={styles['faqItem-answer']}>
                {props.answer}
            </div>}
        </div>
    )
}

export default FaqItem
