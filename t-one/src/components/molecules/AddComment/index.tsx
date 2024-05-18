import { useState } from 'react';
import TextInput from '@/components/atoms/TextInput';
import Title from '@/components/atoms/Title';
import styles from './styles.module.css';
import Button from '@/components/atoms/Button';
import ButtonType from '@/types/ButtonProps';
import { ArrowDirection } from '@/types/ArrowProps';
import { AddCommentProps } from '@/types/AddCommentProps';
import { TitleType } from '@/types/TitleProps';

const AddComment = (props: AddCommentProps) => {

    const [comment, setComment] = useState('');

    const onSendButtonClick = async () => {
        const success = await props.buttonAction(comment);
        if (success) {
            setComment('');
        }
    };

    const onTextChangeHandler = (text: string) => {
        setComment(text);
    };

    return (
        <div className={styles['comment-block']}>

            <div className={styles['comment-block_title']}>
                <Title
                    text={'Add comment'}
                    titleType={TitleType.H4}
                    selectStart={4}
                    selectEnd={11}
                    hideOverflow={false}
                />
            </div>

            <div className={styles['comment-block_body']}>
                <TextInput
                    placeholder={props.placeholder}
                    content={comment}
                    onChange={onTextChangeHandler}
                />
            </div>


            <div className={styles['comment-block_button']}>
                <Button
                    text={'Send'}
                    type={ButtonType.Primary}
                    needArrow={false}
                    direction={ArrowDirection.Back}
                    onClick={onSendButtonClick}
                />
            </div>
        </div>
    );
};

export default AddComment;
