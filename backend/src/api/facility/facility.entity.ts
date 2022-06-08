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

  @Column()
  classId: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
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

  @ManyToOne(() => Classroom, (classroom) => classroom.facilities)
  classroom: Classroom;
}
