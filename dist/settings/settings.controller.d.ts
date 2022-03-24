import { SettingService } from "./setting.services";
export declare class SettingsController {
    private readonly settingService;
    constructor(settingService: SettingService);
    getAllSettings(): Promise<import("./setting.entity").Settings[]>;
    insertSetting(settingName: string, settingValue: string): Promise<any>;
    UpdateSetting(id: number, settingName: string, settingValue: string): Promise<any>;
    deleteSetting(settingName: string, id: string): Promise<any>;
    getSettingName(settingName: string): Promise<{
        settingValue: any;
    }>;
}
