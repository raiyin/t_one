import { useEffect, useState } from 'react'
import ScrollToHashElement from '../../../routes/ScrollToHashElement'
import Title from '../../atoms/Title/Title'
import LunchWidget from '../../molecules/LunchWidget/LunchWidget'
import styles from './LunchBlock.module.css'
import { LunchWidgetProps } from '../../../types/LunchWidgetProps'

const LunchBlock = () => {

    const [lunchWidgetProps, setLunchWidgetProps] = useState<LunchWidgetProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://dummyjson.com/recipes?select=name,rating,tags,prepTimeMinutes,cookTimeMinutes,image`)
                .then(response => response.json())
                .then(data => data.recipes as LunchWidgetProps[])
                .then(data => data.sort((x, y) => y.rating - x.rating).splice(0, 3))
                .then(data => setLunchWidgetProps(data))
        }
        fetchData().catch(console.error);
    }, []);

    return (
        <div className={styles['lunch_container']} id="recipes">

            <ScrollToHashElement />
            <Title
                text={'Our Top Lunch'}
                selectStart={8}
                selectEnd={13}
                fontWeight={600}
                fontSize={45}
                lineHeight={26}
                hideOverflow={false}
            />
            <ul className={styles['lunches_list']}>
                {
                    lunchWidgetProps.map(recipe =>
                        <li>
                            <LunchWidget {...recipe} key={recipe.id} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default LunchBlock
