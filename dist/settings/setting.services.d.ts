import { Repository } from "typeorm";
import { Settings } from "./setting.entity";
import { SettingModel } from "./setting.model";
export declare class SettingService {
    private settingRepository;
    settingModel: SettingModel;
    constructor(settingRepository: Repository<Settings>);
    findAll(): Promise<Settings[]>;
    insertSettings(settingName: string, settingValue: string): Promise<{
        settingName: string;
        settingValue: string;
        created_at: Date;
    } & Settings>;
    updateSettings(id: number, settingName: string, settingValue: string): Promise<Settings>;
    removeSettings(settingName: string): Promise<any>;
    getSettingsByName(settingName: string): Promise<any>;
    private checkSetting;
}
