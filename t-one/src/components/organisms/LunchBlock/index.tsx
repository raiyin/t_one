import { useEffect, useState } from 'react';
import Title from '@/components/atoms/Title';
import LunchWidget from '@/components/molecules/LunchWidget';
import styles from './styles.module.css';
import { LunchWidgetProps } from '@types/LunchWidgetProps';
import LoadingBlock from '@/components/organisms/LoadingBlock';
import { AnchorSection } from 'react-anchor-navigation';
import { TitleType } from '@/types/TitleProps';

const LunchBlock = () => {

    const [lunchWidgetProps, setLunchWidgetProps] = useState<LunchWidgetProps[]>([]);
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://dummyjson.com/recipes?select=name,rating,tags,prepTimeMinutes,cookTimeMinutes,image`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error('Error requesting recipes');
                })
                .then(data => data.recipes as LunchWidgetProps[])
                .then(data => data.sort((x, y) => y.rating - x.rating).splice(0, 3))
                .then(data => {
                    setLunchWidgetProps(data);
                    setError(false);
                }).catch(() => {
                    console.error();
                    setError(true);
                });
        };

        setLoading(true);
        fetchData();
        setLoading(false);
    }, []);

    return (
        <>
            {
                error ?
                    <></>
                    :
                    (<section className={styles['lunch_container']}>
                        <AnchorSection className="dBlock anchor" id="recipes" />

                        {
                            loading ?
                                <LoadingBlock />
                                :
                                <>
                                    <Title
                                        text={'Our Top Lunch'}
                                        selectStart={8}
                                        selectEnd={13}
                                        titleType={TitleType.H3}
                                        hideOverflow={false}
                                    />
                                    <ul className={styles['lunches_list']}>
                                        {
                                            lunchWidgetProps.map(recipe =>
                                                <li key={recipe.id}>
                                                    <LunchWidget {...recipe} />
                                                </li>
                                            )
                                        }
                                    </ul>
                                </>
                        }

                    </section>)

            }
        </>

    );
};

export default LunchBlock;
