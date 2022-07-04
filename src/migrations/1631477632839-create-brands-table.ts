import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createBrandsTable1631477632839 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'brands',
        columns: [
          {
            name: 'brand_id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'brand_name',
            type: 'varchar',
          },
          {
            name: 'brand_photo_url',
            type: 'varchar',
          },
          {
            name: 'brand_is_active',
            type: 'boolean',
            default: true,
          },
          {
            name: 'brand_created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('brands');
  }
}
