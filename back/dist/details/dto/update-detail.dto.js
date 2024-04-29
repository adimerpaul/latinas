"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDetailDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_detail_dto_1 = require("./create-detail.dto");
class UpdateDetailDto extends (0, swagger_1.PartialType)(create_detail_dto_1.CreateDetailDto) {
}
exports.UpdateDetailDto = UpdateDetailDto;
//# sourceMappingURL=update-detail.dto.js.map