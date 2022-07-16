import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Salary } from '../salary/salary.entity';

@Entity({ name: 'Accountant' })
export class Accountant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  salaryId: number;

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

  @Column()
  password: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  startWorking: Date;

  @Column()
  endWorking: Date;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Salary, (salary) => salary.accountant)
  @JoinColumn()
  salaries: Salary[];
}

@Entity({ name: 'Admin' })
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
