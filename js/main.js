import { getAllRocketEngineTotal } from "./modules/rockets.js";
import { 
    paginationRockets
} from "./moduleComponents/pagination.js";

let pagination = document.querySelector("#footer__aside__right");
pagination.innerHTML = "";
pagination.append(await paginationRockets())