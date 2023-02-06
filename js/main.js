import { Router } from './routes.js';
const router = new Router();

router.addRoute('/', 'pages/home.html');
router.addRoute('/universo', '/pages/universo.html');
router.addRoute('/exploracao', '/pages/exploracao.html');


router.render();
window.onpopstate = () => router.render();
window.route = () => router.route(event);