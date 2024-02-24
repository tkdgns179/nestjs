import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn()
  product_tag_id: number;

  @ManyToOne(() => Product)
  product_tag_product: Product;

  @Column()
  product_tag_tag: string;
}