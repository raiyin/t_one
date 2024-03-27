import { ChangeEvent } from 'react'
import { TextInputProps } from '../../../types/TextInputProps'
import styles from './TextInput.module.css'

const TextInput = (props: TextInputProps) => {

    const onTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {        //setText(event.target.value);
        props.onChange(event.target.value)
    }

    return (
        <textarea
            className={styles['text-input']}
            placeholder={props.placeholder}
            onChange={onTextChange}
            value={props.content}>
        </textarea>
    )
}

export default TextInput
