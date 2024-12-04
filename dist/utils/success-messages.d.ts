export declare const SuccessMessages: {
    TRAFFIC_LINK_CREATED: string;
    TRAFFIC_LINK_UPDATED: string;
    TRAFFIC_LINK_DELETED: string;
    TRAFFIC_LINK_CATEGORIES_CREATED: string;
    TRAFFIC_LINK_CLIENTS_CREATED: string;
    TRAFFIC_LINK_CAMPAIGNS_CREATED: string;
};
export declare function getSuccessMessage(key: keyof typeof SuccessMessages): string;
