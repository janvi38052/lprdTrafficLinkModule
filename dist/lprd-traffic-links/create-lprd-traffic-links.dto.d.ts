export declare class CreateLprdTrafficLinksDto {
    approved: number;
    max_provider_delivery: number;
    ignore_campaign_active_status: number;
    locale: string;
    path_style_id: number;
    use_radius_range: number;
    use_ip_blacklist: number;
    lock_category: number;
    use_capping: number;
    bypass_time_based_capping: number;
    block_bots: number;
    test_traffic_percentage: number;
    tag: string;
    quality_score: number;
    category_ids: number[] | string;
    client_ids: number[] | string;
    campaigns_ids: number[] | string;
    maxDeliveryClient_ids: number[] | string;
    maxDeliveryCampaign_ids: number[] | string;
    trafficSource_ids: number[] | string;
    trafficWebsite_ids: number[] | string;
    user_ids: number[] | string;
}
