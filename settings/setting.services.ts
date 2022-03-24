import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Settings } from "./setting.entity";
import { SettingModel } from "./setting.model";




@Injectable()
export class SettingService {
    settingModel: SettingModel



    constructor(@InjectRepository(Settings)
    private settingRepository: Repository<Settings>) { }

    //Get All Setting

    findAll(): Promise<Settings[]> {
        return this.settingRepository.find();
    }

    ///////////////////////////////////////////////////////////////////////////////////////////


    //insert new Setting 
    async insertSettings(settingName: string, settingValue: string) {


        try {
            var setting = await this.settingRepository.findOne({ settingName: settingName });
        } catch (error) {
            throw new ConflictException('Setting is excist.');
        }

        if (setting!=null) {
            throw new ConflictException('Setting is excist');
        }
        var result = await this.settingRepository.save({ settingName, settingValue, created_at: new Date })
        return result
    }
    ///////////////////////////////////////////////////////////////////////////////////////////

    //Update Setting Value 

    async updateSettings(id: number, settingName: string, settingValue: string) {
        //chesk it it is excist 
        var setting = await this.checkSetting(settingName)

        if (settingName)
            setting.settingName = settingName
        if (settingValue)
            setting.settingValue = settingValue

        setting.updatedAt = new Date
        const result = await this.settingRepository.save(setting)
        return result
    }


    //remove Setting 


    async removeSettings(settingName: string): Promise<any> {

//check if it is excist
        var setting = await this.checkSetting(settingName)

        console.log(setting)
        var result = await this.settingRepository.delete(setting.id);

        return setting;
    }



    async getSettingsByName(settingName: string): Promise<any> {
//check if it is excist

        var setting = await this.checkSetting(settingName)

        return setting.settingValue;
    }





    //Method for Check it Excest
    private async checkSetting(settingName: string): Promise<Settings> {
        try {
            var setting = await this.settingRepository.findOne({ settingName: settingName });
        } catch (error) {
            throw new NotFoundException('Could not find product.');
        }

        if (!setting) {
            throw new NotFoundException('Could not find product.');
        }
        return setting;
    }

}