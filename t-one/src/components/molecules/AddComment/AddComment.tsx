import { useState } from 'react'
import TextInput from '../../atoms/TextInput/TextInput'
import Title from '../../atoms/Title/Title'
import styles from './AddComment.module.css'
import Button from '../../atoms/Button/Button'
import ButtonType from '../../../types/ButtonProps'
import { ArrowDirection } from '../../../types/ArrowProps'
import { AddCommentProps } from '../../../types/AddCommentProps'

const AddComment = (props: AddCommentProps) => {

    const [comment, setComment] = useState('')

    return (
        <div className={styles['comment-block']}>

            <div className={styles['comment-block_title']}>

                <Title
                    text={'Add comment'}
                    fontSize={40}
                    fontWeight={600}
                    lineHeight={55}
                    selectStart={4}
                    selectEnd={11}
                    hideOverflow={false}
                />
            </div>

            <div className={styles['comment-block_body']}>

                <TextInput
                    placeholder={'Enter your comment'}
                    content={''}
                />
            </div>


            <div className={styles['comment-block_button']}>
                <Button
                    text={'Send'}
                    type={ButtonType.Primary}
                    needArrow={false}
                    direction={ArrowDirection.Back}
                    onClick={props.buttonAction}
                />
            </div>
        </div>
    )
}

export default AddComment
