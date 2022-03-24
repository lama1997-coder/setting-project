import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import path from "path";
import { SettingModel } from "./setting.model";
import { SettingService } from "./setting.services";




@Controller('settings')
export class SettingsController{

    constructor(private readonly settingService:SettingService){}

//Get All Settings 
@Get()
getAllSettings(){



    return this.settingService.findAll()
}

//Add New Settings

@Post()
async insertSetting(@Body('settingName') settingName:string,@Body('settingValue') settingValue:string):Promise<any>{

     const settings =   await  this.settingService.insertSettings(settingName,settingValue)

     return {settings}

}

//Update SettingsName and Setting Value by id 
@Patch(':id')
async UpdateSetting(@Param('id') id:number, @Body('settingName') settingName:string,@Body('settingValue') settingValue:string):Promise<any>{

     const settings =   await  this.settingService.updateSettings(id ,settingName,settingValue)

     return {settings}

}

//Delete by setting Name by delete first 
@Delete(':settingName')
async deleteSetting(@Param('settingName') settingName:string,@Param('id') id:string){

    const setting = await this.settingService.removeSettings(settingName)
    return setting




}

//get Setting Value First Name 
@Get(':settingName')
async getSettingName(@Param('settingName') settingName:string){

    const setting = await this.settingService.getSettingsByName(settingName)
    return {settingValue: setting}


}
}