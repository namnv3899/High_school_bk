import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  // OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { ClassTeacher } from '../class/class.entity';
// import { Salary } from '../salary/salary.entity';

@Entity({ name: 'Teacher' })
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  sex: string;

  @Column()
  phone: number;

  @Column({ nullable: true })
  salary: number;

  @Column({ nullable: true })
  subject: string;

  @Column()
  address: string;

  @Column()
  password: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  startWorking: Date;

  @Column({ nullable: true })
  endWorking: Date;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  // @OneToOne(() => Salary, (salary) => salary.teacher)
  // salarys: Salary;

  @OneToMany(() => ClassTeacher, (classTeachers) => classTeachers.teacher)
  @JoinColumn()
  classTeachers: ClassTeacher[];
}
