import ContactL from "./components/Contact/Contact-L.vue";
import HomePage from "./components/home/HomePage.vue";
import Operator from "./components/operator/Operator-l.vue";
import TecData from "./components/technical-data/Tec-Data.vue";

export const routes = [
    { path: '/',name: 'home', component: HomePage },  // Cambié el path para ser más adecuado
    { path: '/operator',name: 'operator', component: Operator },  // Cambié el path para ser más claro
    { path: '/technical-data', name: 'tecData', component: TecData },
    { path: '/contacto',name: 'contacto', component: ContactL },  // Cambié el path para ser más claro
];

