import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastNotification = (toastText, toastPosition, toastStyleClass) => {
    toast(toastText, {
        position: toastPosition,
        className: `font-size-09 text-capitalize text-center bg-dark fontGilroyBold bor-rad-05 ${toastStyleClass}`
    });
};
export { toastNotification }