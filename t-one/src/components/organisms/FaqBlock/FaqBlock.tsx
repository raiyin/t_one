import Title from '../../atoms/Title/Title'
import FaqItem from '../../molecules/FaqItem/FaqItem'
import styles from './FaqBlock.module.css'

const FaqBlock = () => {
    return (
        <div className={styles['faqBlock']}>

            <div className={styles['faqBlock_title']}>
                <Title
                    text={`Frequently Asked Questions`}
                    selectStart={17}
                    selectEnd={26}
                    fontWeight={600}
                    fontSize={45}
                    lineHeight={54}
                />
            </div>

            <ul className={styles['faqBlock_items']}>
                <FaqItem
                    quest={'How long does delivery take?'}
                    answer={'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?'}
                    expanded
                />
                <FaqItem
                    quest={'How Does It Work ?'}
                    answer={'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?'}
                    expanded={false}
                />
                <FaqItem
                    quest={'How does your food delivery service work?'}
                    answer={'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?'}
                    expanded={false}
                />
                <FaqItem
                    quest={'What payment options do you accept?'}
                    answer={'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?'}
                    expanded={false}
                />
                <FaqItem
                    quest={'Do you offer discounts or promotions?'}
                    answer={'You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?'}
                    expanded={false}
                />
            </ul>
        </div>
    )
}

export default FaqBlock
