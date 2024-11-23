export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export interface ErrorResponse {
    [key: string]: string;
}

export interface Cat {
    id: number;
    name: string;
    breed: string;
    friendliness_level: number;
    suitable_for: string;
    description: string;
    has_owner: boolean;
    owner_id: null;
    image: string;
    area: string;
}

export interface RentalOrder {
    id: number;
    cat_id: number;
    user_id: number;
    start_time: Date;
    end_time: Date;
}