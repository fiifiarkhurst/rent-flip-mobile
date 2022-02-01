export const USER_TOKEN_IDENTIFIER = "@user_token";
export const GET_PROPERITES = "/property";
export const APPLY = "/request";

export const SEND_EMAIL = (id: string) => `/send/email/${id}`;
export const VERIFY_EMAIL = (id: string) => `/verify/email/${id}`;
export const SEND_PHONE = (id: string) => `/send/phone/${id}`;
export const VERIFY_PHONE = (id: string) => `/verify/phone/${id}`;
