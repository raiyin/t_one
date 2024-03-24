import styles from './WrittenByBlock.module.css'
import { WrittenByProps } from '../../../types/WrittenByProps'
import { useEffect, useState } from 'react'
import { User } from '../../../types/User'

const WrittenByBlock = (props: WrittenByProps) => {

    const [user, setUser] = useState<User>({ id: 0, lastName: '', firstName: '', image: '' })

    useEffect(() => {
        const fetchData = async () => {
            console.log(JSON.stringify(props))
            await fetch(`https://dummyjson.com/users/${props.userId}?select=id,lastName,firstName,image`)
                .then(response => response.json())
                .then(data => setUser(data))
        }
        fetchData().catch(console.error);
    }, []);

    return (
        <div className={styles['written-by']}>

            <div className={styles['written-by_ava']}>
                <img src={user.image} alt="author avatar" />
            </div>

            <div className={styles['written-by_author']}>
                <div className={styles['written-by_label']}>
                    Written By
                </div>
                <div className={styles['written-by_name']}>
                    {`${user.firstName} ${user.lastName}`}
                </div>
            </div>

        </div>
    )
}

export default WrittenByBlock
