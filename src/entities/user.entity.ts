import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum UserStatus {
  ACTIVE = 'T',
  INACTIVE = 'F',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ length: 20 })
  user_role: string;

  @Column({ length: 50 })
  user_name: string;

  @Column({ length: 100 })
  user_password: string;

  @Column({ length: 20 })
  user_phoneNumber: string;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.ACTIVE })
  user_isActive: UserStatus;
}
