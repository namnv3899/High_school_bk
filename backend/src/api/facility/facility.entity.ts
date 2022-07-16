import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Classroom } from '../class/class.entity';

@Entity({ name: 'Facility' })
export class Facility {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  classId: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  price: number;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  timeIn: Date;

  @Column({ nullable: true })
  status: string;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Classroom, (classroom) => classroom.facilities)
  classroom: Classroom;
}
