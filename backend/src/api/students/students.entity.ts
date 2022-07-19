import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Classroom, ClassSubject } from '../class/class.entity';
import { StudentSubject } from '../score/scores.entity';

@Entity({ name: 'Student' })
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  classId: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  username: string;

  @Column()
  sex: string;

  @Column()
  email: string;

  @Column()
  dateOfBirth: Date;

  @Column()
  address: string;

  @Column()
  password: string;

  @Column()
  phone: number;

  @Column()
  startStudying: Date;

  @Column({ nullable: true })
  endStudying: Date;

  @Column()
  fatherName: string;

  @Column()
  fatherJob: string;

  @Column()
  fatherPhone: number;

  @Column()
  fatherDateOfBirth: Date;

  @Column()
  fatherJobAddress: string;

  @Column()
  motherName: string;

  @Column()
  motherJob: string;

  @Column()
  motherDateOfBirth: Date;

  @Column()
  motherJobAddress: string;

  @Column()
  motherPhone: number;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => StudentSubject, (studentSubjects) => studentSubjects.student)
  studentSubjects: StudentSubject[];

  @ManyToOne(() => Classroom, (classroom) => classroom.student)
  classroom: Classroom;
}

@Entity({ name: 'Subject' })
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => StudentSubject, (studentSubjects) => studentSubjects.subject)
  @JoinColumn()
  studentSubjects: StudentSubject[];

  @OneToMany(() => ClassSubject, (classSubjects) => classSubjects.subject)
  @JoinColumn()
  classSubjects: ClassSubject[];

  // @OneToOne(() => ClassTeacher, (classTeacher) => classTeacher.subject)
  // @JoinColumn()
  // classTeacher: ClassTeacher;
}
