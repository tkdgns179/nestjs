import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum UserStatus {
  ACTIVE = 'T',
  INACTIVE = 'F',
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20, default: "ROLE_USER" })
  role: string;

  @Column({ length: 50, nullable: true })
  connection_ip: string

  @Column({ unique : true})
  email: string

  @Column({ length: 50 })
  name: string;

  @Column({ length: 100 })
  passwd: string;

  @Column({ length: 20 })
  phoneNumber: string;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.INACTIVE })
  isActive: UserStatus;
}
