import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Accountant } from '../accountant/accountant.entity';
import { Teacher } from '../teacher/teacher.entity';

@Entity({ name: 'Salary' })
export class Salary {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teacherId: number;

  @Column()
  accountantId: number;

  @Column()
  monthOfYear: number;

  @Column()
  payDay: Date;

  @Column()
  totalSalaryDays: number;

  @Column()
  salaryOfDay: number;

  @Column({ nullable: true })
  yearsSeniority: number;

  @Column({ nullable: true })
  senioritySalary: number;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Accountant, (accountant) => accountant.salaries)
  accountant: Accountant;

  @OneToOne(() => Teacher, (teacher) => teacher.salary)
  @JoinColumn()
  teacher: Teacher;
}
