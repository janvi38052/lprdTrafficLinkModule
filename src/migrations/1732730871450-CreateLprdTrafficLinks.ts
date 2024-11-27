import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateLprdTrafficLinks1732730871450 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create lprd_traffic_links table
    await queryRunner.query(`
      CREATE TABLE lprd_traffic_links (
        id INT AUTO_INCREMENT PRIMARY KEY,
        approved TINYINT UNSIGNED NOT NULL DEFAULT 0,
        max_provider_delivery INT NOT NULL,
        ignore_campaign_active_status BOOLEAN NOT NULL DEFAULT 0,
        locale VARCHAR(64) NOT NULL,
        path_style_id INT NOT NULL,
        use_radius_range BOOLEAN NOT NULL DEFAULT 0,
        use_ip_blacklist BOOLEAN NOT NULL DEFAULT 1,
        lock_category BOOLEAN NOT NULL DEFAULT 1,
        use_capping BOOLEAN NOT NULL DEFAULT 1,
        bypass_time_based_capping BOOLEAN NOT NULL DEFAULT 0,
        block_bots BOOLEAN NOT NULL DEFAULT 1,
        test_traffic_percentage BOOLEAN NOT NULL DEFAULT 0,
        tag VARCHAR(255) NOT NULL,
        quality_score INT NOT NULL DEFAULT 0,
        traffic_source_id INT,
        traffic_website_id INT,
        updated_by INT,
        FOREIGN KEY (traffic_source_id) REFERENCES lprd_traffic_source(id),
        FOREIGN KEY (traffic_website_id) REFERENCES lprd_traffic_websites(id)
      ) ENGINE=InnoDB;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop the lprd_traffic_links table
    await queryRunner.query(`DROP TABLE IF EXISTS lprd_traffic_links`);
  }
}
