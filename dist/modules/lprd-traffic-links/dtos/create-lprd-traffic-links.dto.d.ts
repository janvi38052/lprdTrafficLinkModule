declare class CreateLprdTrafficLinksDto {
    traffic_source_id: number;
    updated_by: string;
    traffic_website_id: number;
    max_provider_delivery: number;
    locale: string;
    approved: number;
    ignore_campaign_active_status: number;
    path_style_id: number;
    use_radius_range: number;
    use_ip_blacklist: number;
    lock_category: number;
    use_capping: number;
    bypass_time_based_capping: number;
    block_bots: number;
    test_traffic?: number;
    test_traffic_percentage: number;
    tag: string;
    categories: number[];
    clients: number[];
    campaigns: number[];
}
export default CreateLprdTrafficLinksDto;
