import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'Facility' })
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, type: 'float' })
  price: number;

  @Column({ nullable: true })
  total: number;
  @Column()
  location: string;

  @Column()
  timeIn: Date;

  @Column()
  status: string;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;
}
