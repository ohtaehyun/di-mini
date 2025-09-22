import type { HttpMethod } from "../types/http-method.type.js";
import type { PathVO } from "./path.vo.js";

export class Route {
    constructor(
        public readonly method: HttpMethod,
        public readonly controllerPath: PathVO,
        public readonly path: PathVO,
        public readonly handler: string,
    ) {}

    get fullPath() {
        return '';
    }
}