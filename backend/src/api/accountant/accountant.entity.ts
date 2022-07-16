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

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  phone: number;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  startWorking: Date;

  @Column({ nullable: true })
  endWorking: Date;

  @Column({ nullable: true })
  tokenVerify: string;

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
  password: string;
}
