import { web } from "./ruddat/application/web.js";
import { logger } from "./ruddat/application/logger.js";

web.listen(5000, () => {
    logger.info('App started on http://localhost:5000')
})