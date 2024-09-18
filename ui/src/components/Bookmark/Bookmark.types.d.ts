export interface BookmarkButtonProps {
    handleClick: () => unknown;
}
export interface BookmarkModalProps {
    isModalOpen: boolean;
    closeModal: () => unknown;
    children: Children;
}
export interface BookmarkAlertProps {
    closeAlert: () => unknown;
    children: Children;
}
