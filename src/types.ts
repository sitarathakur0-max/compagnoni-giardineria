export type PageId = 'home' | 'about' | 'flowers-plants' | 'gardening' | 'contact';

export interface BusinessInfo {
  name: string;
  category: string;
  address: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  topic?: string;
  message?: string;
}
