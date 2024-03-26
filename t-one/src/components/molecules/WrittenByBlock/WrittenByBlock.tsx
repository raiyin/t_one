import styles from './WrittenByBlock.module.css'
import { WrittenByProps } from '../../../types/WrittenByProps'
import { useEffect, useState } from 'react'
import { User } from '../../../types/User'

const WrittenByBlock = (props: WrittenByProps) => {

    const [user, setUser] = useState<User>({ id: 0, lastName: '', firstName: '', image: '' })

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://dummyjson.com/users/${props.userId}?select=id,lastName,firstName,image`)
                .then(response => response.json())
                .then(data => setUser(data))
        }
        fetchData().catch(console.error);
    }, []);

    return (
        <div className={styles['written-by']}>

            <div className={styles['written-by_ava__' + props.type]}>
                <img src={user.image} alt="author avatar" />
            </div>

            <div className={styles['written-by_author']}>
                <div className={`${styles['written-by_label']} ${styles['written-by_label__' + props.type]}`}>
                    Written By
                </div>
                <div className={`${styles['written-by_name']} ${styles['written-by_name__' + props.type]}`}>
                    {`${user.firstName} ${user.lastName}`}
                </div>
            </div>

        </div>
    )
}

export default WrittenByBlock
