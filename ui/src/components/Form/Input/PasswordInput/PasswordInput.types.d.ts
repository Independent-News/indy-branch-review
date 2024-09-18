import { TextInputProps } from '../TextInput/TextInput.types';
export type PasswordInputProps = Omit<TextInputProps, 'type' | 'button' | 'buttonAction'>;
