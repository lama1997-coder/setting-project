import { Controller, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Settings } from "./setting.entity";
import { SettingService } from "./setting.services";
import { SettingsController } from "./settings.controller";






@Module({

    imports:[TypeOrmModule.forFeature([Settings])],
    providers:[SettingService],
    controllers:[SettingsController]



})

export class SettingModule{}