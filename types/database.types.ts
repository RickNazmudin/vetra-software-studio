export type ProductStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
export type PlanType = 'SUBSCRIPTION' | 'LIFETIME';
export type OrderStatus = 'PENDING' | 'PAID' | 'FAILED' | 'CANCELLED' | 'EXPIRED' | 'REFUNDED';
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'EXPIRED';
export type SubscriptionStatus = 'ACTIVE' | 'PAST_DUE' | 'CANCELLED' | 'EXPIRED';
export type LicenseStatus = 'ACTIVE' | 'SUSPENDED' | 'REVOKED' | 'EXPIRED';
export type UserRole = 'CUSTOMER' | 'ADMIN';

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: UserRole;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  short_description: string;
  description: string;
  category: string;
  status: ProductStatus;
  badge?: string | null;
  version?: string;
  demo_url?: string | null;
  created_at: string;
  updated_at: string;
  images?: ProductImage[];
  features?: ProductFeature[];
  plans?: Plan[];
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  caption?: string | null;
  sort_order: number;
}

export interface ProductFeature {
  id: string;
  product_id: string;
  title: string;
  description: string;
  sort_order: number;
}

export interface Plan {
  id: string;
  product_id: string;
  name: string;
  type: PlanType;
  price: number;
  currency: string;
  billing_interval?: 'month' | 'year' | null;
  features: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  order_number: string;
  user_id: string;
  status: OrderStatus;
  subtotal: number;
  discount: number;
  total: number;
  currency: string;
  created_at: string;
  updated_at: string;
  items?: OrderItem[];
  payment?: Payment;
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  plan_id: string;
  price: number;
  product?: Product;
  plan?: Plan;
}

export interface Payment {
  id: string;
  order_id: string;
  provider: string;
  provider_transaction_id?: string | null;
  amount: number;
  status: PaymentStatus;
  payment_method?: string | null;
  paid_at?: string | null;
  raw_reference?: Record<string, unknown> | null;
  created_at: string;
  updated_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  product_id: string;
  plan_id: string;
  provider_subscription_id?: string | null;
  status: SubscriptionStatus;
  started_at: string;
  current_period_start: string;
  current_period_end: string;
  cancelled_at?: string | null;
  created_at: string;
  updated_at: string;
  product?: Product;
  plan?: Plan;
}

export interface License {
  id: string;
  user_id: string;
  product_id: string;
  order_id: string;
  license_key: string;
  type: PlanType;
  status: LicenseStatus;
  activated_at?: string | null;
  created_at: string;
  updated_at: string;
  product?: Product;
}

export interface Release {
  id: string;
  product_id: string;
  version: string;
  release_date: string;
  platform: string;
  file_url: string;
  file_size?: string | null;
  checksum?: string | null;
  release_notes: string;
  is_active: boolean;
  created_at: string;
}
