import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { Student, Subject } from '../students/students.entity';
@Entity({ name: 'StudentSubject' })
export class StudentSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @Column({ nullable: true })
  score15m1: number;

  @Column({ nullable: true })
  score15m2: number;

  @Column({ nullable: true })
  score15m3: number;

  @Column({ nullable: true })
  score45m1: number;

  @Column({ nullable: true })
  score45m2: number;

  @Column({ nullable: true })
  score90m: number;

  @Column({ nullable: true })
  averageScore: number;

  @Column()
  schoolYear: number;

  @Column()
  semester: number;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  @Column()
  startTimeCalculationScore: number;

  @Column()
  endTimeCalculationScore: number;

  @ManyToOne(() => Subject, (subject) => subject.studentSubjects)
  subject: Subject;

  @ManyToOne(() => Student, (student) => student.studentSubjects)
  student: Student;
}
