import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  // OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Facility } from '../facility/facility.entity';
import { Student, Subject } from '../students/students.entity';
import { Teacher } from '../teacher/teacher.entity';
// import { Like } from '../likes/likes.entity';
// import { Comment } from '../comments/comments.entity';
// import { Follow } from '../follows/follows.entity';
// import { Photo } from '../photos/photos.entity';
// import { AlbumUser } from '../albums/albums.entity';

@Entity({ name: 'Classroom' })
export class Classroom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studentId: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  startYear: number;

  @Column()
  endYear: number;

  @Column()
  facilityId: number;

  @CreateDateColumn({ name: 'Created_At', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_At', type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => Student, (students) => students.classroom)
  @JoinColumn()
  students: Student[];

  @OneToMany(() => ClassTeacher, (classTeachers) => classTeachers.classroom)
  @JoinColumn()
  classTeachers: ClassTeacher[];

  @OneToMany(() => ClassSubject, (classSubjects) => classSubjects.classroom)
  @JoinColumn()
  classSubjects: ClassSubject[];

  @OneToMany(() => Facility, (facilities) => facilities.classroom)
  @JoinColumn()
  facilities: Facility[];
}

@Entity({ name: 'ClassSubject' })
export class ClassSubject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  classId: number;

  @Column()
  subjectId: number;

  @Column()
  lesson: number;

  @Column()
  dayOfWeek: string;

  @Column()
  sessionOfDay: string;

  @Column()
  schoolYear: number;

  @Column()
  semester: number;

  @ManyToOne(() => Subject, (subject) => subject.classSubjects)
  subject: Subject;

  @ManyToOne(() => Classroom, (classroom) => classroom.classSubjects)
  classroom: Classroom;
}

@Entity({ name: 'ClassTeacher' })
export class ClassTeacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teacherId: number;

  @Column()
  classId: number;

  @Column()
  subjectId: number;

  @Column()
  role: string;

  @Column()
  semester: number;

  @Column()
  schoolYear: number;

  @ManyToOne(() => Teacher, (teacher) => teacher.classTeachers)
  teacher: Teacher;

  @ManyToOne(() => Classroom, (classroom) => classroom.classTeachers)
  classroom: Classroom;

  @OneToOne(() => Subject, (subject) => subject.classTeacher)
  subject: Subject;
}
