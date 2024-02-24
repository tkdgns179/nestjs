
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from './base.entity';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ length: 30, unique: true })
  product_sno: string;

  @Column({ length: 100 })
  product_name: string;

  @Column()
  product_price: number;

  @Column({ nullable: true })
  product_imageUrl: string;

  @Column({ nullable: true })
  product_amount: number;

  @ManyToOne(() => User)
  product_seller: User;
}
