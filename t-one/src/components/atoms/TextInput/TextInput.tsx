import { TextInputProps } from '../../../types/TextInputProps'
import styles from './TextInput.module.css'

const TextInput = (props: TextInputProps) => {
    return (
        <textarea className={styles['text-input']} placeholder={props.placeholder}>
            {props.content}
        </textarea>
    )
}

export default TextInput
