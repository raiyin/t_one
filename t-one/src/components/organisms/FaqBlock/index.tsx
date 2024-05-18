import Title from '@/components/atoms/Title';
import FaqItem from '@/components/molecules/FaqItem';
import styles from './styles.module.css';
import faqJsonData from '@data/faq_data.json';
import { useState } from 'react';
import { FaqItemProps } from '@/types/FaqItemProps';
import FaqRaysImage from '@assets/images/svgs/faq_rays.svg';
import {
    AnchorSection,
} from "react-anchor-navigation";
import { TitleType } from '@/types/TitleProps';

const FaqBlock = () => {

    const [faqData] = useState<FaqItemProps[]>(faqJsonData['faqs']);

    return (

        <section className={styles['faq-container']}>
            <div className={styles['faq']} id="faq">
                <AnchorSection className="dBlock anchor" id="faq" />
                <div className={styles['faq_title']}>
                    <Title
                        text={`Frequently Asked Questions`}
                        selectStart={17}
                        selectEnd={26}
                        titleType={TitleType.H3}
                        hideOverflow={false}
                    />

                    <div className={styles['icon_wrapper']}>
                        <img src={FaqRaysImage} alt="" />
                    </div>
                </div>

                <ul className={styles['faq_items']}>
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

        </section>
    );
};

export default FaqBlock;
