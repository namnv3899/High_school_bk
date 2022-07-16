import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Classroom, ClassSubject, ClassTeacher } from '../class/class.entity';
import { StudentSubject } from '../score/scores.entity';

@Entity({ name: 'Student' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  classId: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  password: string;

  @Column({ nullable: true })
  phone: number;

  @Column({ nullable: true })
  startStudying: Date;

  @Column({ nullable: true })
  endStudying: Date;

  @Column({ nullable: true })
  fatherName: string;

  @Column({ nullable: true })
  fatherJob: string;

  @Column({ nullable: true })
  fatherPhone: number;

  @Column({ nullable: true })
  fatherDateOfBirth: Date;

  @Column({ nullable: true })
  fatherJobAddress: string;

  @Column({ nullable: true })
  motherName: string;

  @Column({ nullable: true })
  motherJob: string;

  @Column({ nullable: true })
  motherDateOfBirth: Date;

  @Column({ nullable: true })
  motherJobAddress: string;

  @Column({ nullable: true })
  motherPhone: number;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => StudentSubject, (studentSubjects) => studentSubjects.student)
  studentSubjects: StudentSubject[];

  @ManyToOne(() => Classroom, (classroom) => classroom.students)
  classroom: Classroom;
}

@Entity({ name: 'Subject' })
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  classTeacherId: number;

  @OneToMany(() => StudentSubject, (studentSubjects) => studentSubjects.subject)
  @JoinColumn()
  studentSubjects: StudentSubject[];

  @OneToMany(() => ClassSubject, (classSubjects) => classSubjects.subject)
  @JoinColumn()
  classSubjects: ClassSubject[];

  @OneToOne(() => ClassTeacher, (classTeacher) => classTeacher.subject)
  @JoinColumn()
  classTeacher: ClassTeacher;
}
