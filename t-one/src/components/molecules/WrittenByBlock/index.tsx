import styles from './styles.module.css';
import { WrittenByProps } from '@/types/WrittenByProps';
import { useEffect, useState } from 'react';
import { User } from '@/types/User';

const WrittenByBlock = (props: WrittenByProps) => {

    const [user, setUser] = useState<User>({ id: 0, lastName: '', firstName: '', image: '' });
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {

            if (props.userId === 0) {
                return;
            }

            await fetch(`https://dummyjson.com/users/${props.userId}?select=id,lastName,firstName,image`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Error requesting user');
                })
                .then(json => {
                    setUser({ ...json, image: json.image + '&size=100x100' });
                    setError(false);
                }).catch((e) => {
                    console.error(e);
                    setError(true);
                });
        };
        fetchData();
    }, [props.userId]);

    return (
        <div className={`${styles['written-by']} ${styles['written-by_' + props.type]}`}>

            {
                error
                    ?
                    <>
                        <figure className={`${styles['written-by__ava_' + props.type]} ${styles['written-by__ava_error']}`}>
                            <img src="../../../src/assets/images/pngs/author_error.png" alt="author not found avatar" />
                            <span className={styles['tooltiptext']}>Error loading the author</span>
                        </figure>
                    </>
                    :
                    <>
                        <figure className={styles['written-by__ava_' + props.type]}>
                            <img src={user.image} alt="author avatar" />
                        </figure>

                        <div className={styles['written-by__author']}>
                            <div className={`${styles['written-by__label']} ${styles['written-by__label_' + props.type]}`}>
                                Written By
                            </div>
                            <div className={`${styles['written-by__name']} ${styles['written-by__name_' + props.type]}`}>
                                {`${user.firstName} ${user.lastName}`}
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default WrittenByBlock;
