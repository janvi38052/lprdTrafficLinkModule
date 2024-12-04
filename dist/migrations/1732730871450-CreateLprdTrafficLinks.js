"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLprdTrafficLinks1732730871450 = void 0;
class CreateLprdTrafficLinks1732730871450 {
    async up(queryRunner) {
        const lprdTrafficLinksTableExist = await queryRunner.hasTable('lprd_traffic_links');
        if (!lprdTrafficLinksTableExist) {
            await queryRunner.query(`
            CREATE TABLE lprd_traffic_links (
                id INT AUTO_INCREMENT PRIMARY KEY,
                approved TINYINT UNSIGNED NOT NULL DEFAULT 0,
                traffic_source_id INT NOT NULL,
                traffic_website_id INT NOT NULL,
                category_ids TEXT DEFAULT NULL,
                max_provider_delivery INT DEFAULT NULL,
                ignore_campaign_active_status BOOLEAN DEFAULT 0,
                locale VARCHAR(64) DEFAULT NULL,
                path_style_id BOOLEAN DEFAULT 0,
                use_radius_range BOOLEAN DEFAULT NULL,
                use_ip_blacklist BOOLEAN DEFAULT 1,
                lock_category BOOLEAN DEFAULT 1,
                use_capping BOOLEAN DEFAULT 1,
                bypass_time_based_capping BOOLEAN DEFAULT 0,
                block_bots BOOLEAN DEFAULT 1,
                test_traffic BOOLEAN DEFAULT 0,
                test_traffic_percentage BOOLEAN DEFAULT 0,
                FOREIGN KEY (traffic_source_id) REFERENCES lprd_traffic_source(id),
                FOREIGN KEY (traffic_website_id) REFERENCES lprd_traffic_websites(id)
            ) ENGINE=InnoDB
          `);
        }
    }
    async down(queryRunner) {
        await queryRunner.query(`
        DROP TABLE IF EXISTS lprd_traffic_links
    `);
    }
}
exports.CreateLprdTrafficLinks1732730871450 = CreateLprdTrafficLinks1732730871450;
//# sourceMappingURL=1732730871450-CreateLprdTrafficLinks.js.map