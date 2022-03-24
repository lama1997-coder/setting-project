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
exports.SettingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const setting_entity_1 = require("./setting.entity");
let SettingService = class SettingService {
    constructor(settingRepository) {
        this.settingRepository = settingRepository;
    }
    findAll() {
        return this.settingRepository.find();
    }
    async insertSettings(settingName, settingValue) {
        try {
            var setting = await this.settingRepository.findOne({ settingName: settingName });
        }
        catch (error) {
            throw new common_1.ConflictException('Setting is excist.');
        }
        if (setting != null) {
            throw new common_1.ConflictException('Setting is excist');
        }
        var result = await this.settingRepository.save({ settingName, settingValue, created_at: new Date });
        return result;
    }
    async updateSettings(id, settingName, settingValue) {
        const setting = await this.settingRepository.findOne({ id: id });
        if (setting != null) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        if (settingName)
            setting.settingName = settingName;
        if (settingValue)
            setting.settingValue = settingValue;
        setting.updatedAt = new Date;
        const result = await this.settingRepository.save(setting);
        return result;
    }
    async removeSettings(settingName) {
        var setting = await this.checkSetting(settingName);
        console.log(setting);
        var result = await this.settingRepository.delete(setting.id);
        return setting;
    }
    async getSettingsByName(settingName) {
        var setting = await this.checkSetting(settingName);
        return setting.settingValue;
    }
    async checkSetting(settingName) {
        try {
            var setting = await this.settingRepository.findOne({ settingName: settingName });
        }
        catch (error) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        if (!setting) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return setting;
    }
};
SettingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(setting_entity_1.Settings)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SettingService);
exports.SettingService = SettingService;
//# sourceMappingURL=setting.services.js.map