"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BacteriaController = void 0;
const common_1 = require("@nestjs/common");
const bacteria_service_1 = require("./bacteria.service");
const bacteria_dto_1 = require("./dto/bacteria.dto");
let BacteriaController = class BacteriaController {
    bacteriaService;
    constructor(bacteriaService) {
        this.bacteriaService = bacteriaService;
    }
    async findAll() {
        return await this.bacteriaService.findAll();
    }
    async search(name) {
        return await this.bacteriaService.search(name);
    }
    async findOne(id) {
        return await this.bacteriaService.findOne(Number(id));
    }
    async create(data) {
        return await this.bacteriaService.create(data);
    }
    async update(id, data) {
        return await this.bacteriaService.update(Number(id), data);
    }
    async delete(id) {
        return await this.bacteriaService.delete(Number(id));
    }
};
exports.BacteriaController = BacteriaController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BacteriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BacteriaController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BacteriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bacteria_dto_1.BacteriaDto]),
    __metadata("design:returntype", Promise)
], BacteriaController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bacteria_dto_1.BacteriaDto]),
    __metadata("design:returntype", Promise)
], BacteriaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BacteriaController.prototype, "delete", null);
exports.BacteriaController = BacteriaController = __decorate([
    (0, common_1.Controller)('bacteria'),
    __metadata("design:paramtypes", [bacteria_service_1.BacteriaService])
], BacteriaController);
//# sourceMappingURL=bacteria.controller.js.map