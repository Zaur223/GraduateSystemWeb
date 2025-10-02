import { useSelector, useDispatch } from 'react-redux';
import { menuAction } from '../store/toggleMenu-slice.js';

export const useDrawerMenu = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.menu.isOpen);
    const toggleMenuHandler = () => {
        dispatch(menuAction.toggleMenu());
    };
    return { isOpen, toggleMenuHandler };
};
