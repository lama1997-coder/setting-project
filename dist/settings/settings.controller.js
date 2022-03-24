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
exports.SettingsController = void 0;
const common_1 = require("@nestjs/common");
const setting_services_1 = require("./setting.services");
let SettingsController = class SettingsController {
    constructor(settingService) {
        this.settingService = settingService;
    }
    getAllSettings() {
        return this.settingService.findAll();
    }
    async insertSetting(settingName, settingValue) {
        const settings = await this.settingService.insertSettings(settingName, settingValue);
        return { settings };
    }
    async UpdateSetting(id, settingName, settingValue) {
        const settings = await this.settingService.updateSettings(id, settingName, settingValue);
        return { settings };
    }
    async deleteSetting(settingName, id) {
        const setting = await this.settingService.removeSettings(settingName);
        return setting;
    }
    async getSettingName(settingName) {
        const setting = await this.settingService.getSettingsByName(settingName);
        return { settingValue: setting };
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SettingsController.prototype, "getAllSettings", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('settingName')),
    __param(1, (0, common_1.Body)('settingValue')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "insertSetting", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('settingName')),
    __param(2, (0, common_1.Body)('settingValue')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "UpdateSetting", null);
__decorate([
    (0, common_1.Delete)(':settingName'),
    __param(0, (0, common_1.Param)('settingName')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "deleteSetting", null);
__decorate([
    (0, common_1.Get)(':settingName'),
    __param(0, (0, common_1.Param)('settingName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SettingsController.prototype, "getSettingName", null);
SettingsController = __decorate([
    (0, common_1.Controller)('settings'),
    __metadata("design:paramtypes", [setting_services_1.SettingService])
], SettingsController);
exports.SettingsController = SettingsController;
//# sourceMappingURL=settings.controller.js.map