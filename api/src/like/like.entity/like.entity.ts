import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Like {
  @PrimaryColumn({
    type: 'varchar',
    name: 'cat_id',
  })
  catId: string;

  @Column({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;
}
