import Login from './views/Login';
import Register from './views/Register';
import ForgetPassword from './views/ForgetPassword';
import DefaultLayout from './views/DefaultLayout';
import ManpowerProfile from './views/ManpowerProfile';
import SupplierDetails from './views/SupplierDetails';

const routes = [
    { path:'/', exact: true, name:'Login', component: Login },
    { path:'/login', name:'Login', component: Login },
    { path:'/register', name:'Register', component: Register },
    { path:'/forgetpassword', name:'ForgetPassword', component: ForgetPassword },
    { path: '/home/manpower/operator/:manpowerId', name: 'ManpowerProfile', component: ManpowerProfile },
    { path: '/home/suppliers/workedWithUs/:supplierId', name: 'SupplierDetails', component: SupplierDetails },
    { path: '/home/suppliers/neverWorkedWithUs/:supplierId', name: 'SupplierDetails', component: SupplierDetails },
    { path: '/home', name: 'DefaultLayout', component: DefaultLayout },
    
];

export default routes;