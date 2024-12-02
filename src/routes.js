import HomePage from "./components/home/HomePage.vue";
import Operator from "./components/operator/Operator-l.vue";
import TecData from "./components/technical-data/Tec-Data.vue";

export const routes = [
    { path: '/home', component: HomePage },  // Cambié el path para ser más adecuado
    { path: '/operator', component: Operator },  // Cambié el path para ser más claro
    { path: '/technical-data', component: TecData },  // Cambié el path para ser más claro
];

