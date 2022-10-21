export interface Plan {
    id: number;
    planName: string;
    planPrice: number;
    profileId: number;
    deviceLimit: number;
    devices: [];
}

export interface PlanDTO {
    planName: string;
    planPrice: number;
    profileId: number;
    deviceLimit: number;
    devices: [];
}