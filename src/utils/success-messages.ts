// src/utils/success-messages.ts

export const SuccessMessages = {
    TRAFFIC_LINK_CREATED: 'Traffic Link created successfully.',
    TRAFFIC_LINK_UPDATED: 'Traffic Link updated successfully.',
    TRAFFIC_LINK_DELETED: 'Traffic Link deleted successfully.',
    TRAFFIC_LINK_CATEGORIES_CREATED: 'Traffic Link categories created successfully.',
    TRAFFIC_LINK_CLIENTS_CREATED: 'Traffic Link clients created successfully.',
    TRAFFIC_LINK_CAMPAIGNS_CREATED: 'Traffic Link campaigns created successfully.',
  };
  
  export function getSuccessMessage(key: keyof typeof SuccessMessages): string {
    return SuccessMessages[key];
  }
  