import { ModalProps } from '../Base';
export interface PageSpecificProps extends ModalProps {
    onEscapeKeyPress?: (event?: unknown) => unknown;
}
