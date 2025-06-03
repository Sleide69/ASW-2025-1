import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from '../../../../../practica_3/node_modules/typeorm';
import { Flashcard } from './Flashcard';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column('text', { unique: true })
  name: string;

  @ManyToMany(() => Flashcard, flashcard => flashcard.categories)
  flashcards: Flashcard[];
} 