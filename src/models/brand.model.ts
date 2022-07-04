import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'brands' })
export class Brand {
  @PrimaryGeneratedColumn({ name: 'brand_id' })
  brandId: number;

  @Column({ length: 255, name: 'brand_name' })
  brandName: string;

  @Column({ length: 255, name: 'brand_photo_url' })
  brandPhotoUrl: string;

  @CreateDateColumn({ type: 'timestamp', name: 'brand_created_at' })
  brandCreatedAt: Date;

  @Column({ name: 'brand_is_active' })
  brandIsActive: boolean;
}
