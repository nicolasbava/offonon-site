export type ApiVoidResponse = {
    success: boolean
    error?: any
}

export type ApiMailUp = {
    subject: string
    body: string
    attachments: File
}

export type ApiNewsletterUp = {
    email: string,
    phone?: string
    whatsapp?: string
}


export type ApiPlanDescription = {
    popular: boolean,
    description: string
}
export type ApiPlanType = {
    id: string;
    name: string;
    description: ApiPlanDescription | string;
    frequence: number;
    subscription_base_cost: number;
    tax_percentage: string;
    currency: number;
    regular_type: boolean;
    recurrence: number;
};
