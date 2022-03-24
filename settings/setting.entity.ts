import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  settingName: string;

  @Column()
  settingValue: string;

  @Column()
  created_at: Date;

  @Column({nullable: true})
  updatedAt: Date;

}