export interface Device {
    id: number;
    planName: string;
    planPrice: string;
    type: string;
    model: string;
    devicePrice: number;
}

export interface DeviceDTO {
    planName: string;
    planPrice: string;
    type: string;
    model: string;
    devicePrice: number;
}