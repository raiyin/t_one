import Title from '../../atoms/Title/Title'
import FaqItem from '../../molecules/FaqItem/FaqItem'
import styles from './FaqBlock.module.css'
import faqJsonData from '../../../data/faq_data.json';
import { useState } from 'react';
import { FaqItemProps } from '../../../types/FaqItemProps';
import FaqRaysImage from '../../../assets/images/svgs/faq_rays.svg'

const FaqBlock = () => {

    const [faqData] = useState<FaqItemProps[]>(faqJsonData['faqs']);

    return (
        <div className={styles['faqBlock']} id="faq">

            <div className={styles['faqBlock_title']}>
                <Title
                    text={`Frequently Asked Questions`}
                    selectStart={17}
                    selectEnd={26}
                    fontWeight={600}
                    fontSize={45}
                    lineHeight={54}
                    hideOverflow={false}
                />

                <div className={styles['icon_wrapper']}>
                    <img src={FaqRaysImage} alt="" />
                </div>
            </div>

            <ul className={styles['faqBlock_items']}>
                {faqData.map(faqItem =>
                    <li key={faqItem.quest}>
                        <FaqItem
                            quest={faqItem.quest}
                            answer={faqItem.answer}
                        />
                    </li>
                )}
            </ul>
        </div>
    )
}

export default FaqBlock
