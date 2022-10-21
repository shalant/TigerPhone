export interface User {
    id: number;
    userName: string;
    email: string;
    plans: string;
    devices: string;
}

export interface UserDTO {
    userName: string;
    email: string;
    plans: string;
    devices: string;
}