import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
  Double,
} from 'typeorm';
import { Student } from '../students/students.entity';
@Entity({ name: 'StudentSubject' })
export class StudentSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @Column()
  subject: string;

  @Column({ nullable: true, type: 'float' })
  score15m1: number;

  @Column({ nullable: true, type: 'float' })
  score15m2: number;

  @Column({ nullable: true, type: 'float' })
  score15m3: number;

  @Column({ nullable: true, type: 'float' })
  score45m1: number;

  @Column({ nullable: true, type: 'float' })
  score45m2: number;

  @Column({ nullable: true, type: 'float' })
  score90m: number;

  @Column({ nullable: true, type: 'float' })
  averageScore: number;

  @Column({ nullable: true })
  schoolYear: number;

  @Column({ nullable: true })
  semester: number;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  @Column({ type: 'float' })
  startTimeCalculationScore: number;

  @Column({ type: 'float' })
  endTimeCalculationScore: Double;

  // @ManyToOne(() => Subject, (subject) => subject.studentSubjects)
  // subject: Subject;

  @ManyToOne(() => Student, (student) => student.studentSubjects)
  student: Student;
}
