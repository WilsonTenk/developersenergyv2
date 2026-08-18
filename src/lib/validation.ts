import { z } from 'zod';

/**
 * Zod validation schema for Quick Quote / Trade Inquiries
 */
export const quoteFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters')
    .regex(/^[a-zA-Z\s\-'.]+$/, 'Name can only contain letters, spaces, and punctuation'),
  
  email: z
    .string()
    .email('Please enter a valid business email address')
    .max(254, 'Email is too long')
    .toLowerCase(),
    
  company: z
    .string()
    .max(150, 'Company name is too long')
    .optional()
    .or(z.literal('')),
    
  phone: z
    .string()
    .max(30, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
    
  commodityType: z
    .string()
    .min(1, 'Please select a commodity or service line'),
    
  volume: z
    .string()
    .max(100, 'Volume description is too long')
    .optional()
    .or(z.literal('')),
    
  deliveryTerms: z
    .string()
    .optional()
    .or(z.literal('')),
    
  notes: z
    .string()
    .max(2000, 'Notes must be under 2000 characters')
    .optional()
    .or(z.literal('')),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;

/**
 * Zod validation schema for Newsletter Subscription
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be under 254 characters')
    .toLowerCase(),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

/**
 * Zod validation schema for Contact Desk Messages
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be under 100 characters'),
    
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email is too long')
    .toLowerCase(),
    
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(150, 'Subject must be under 150 characters')
    .regex(/^[^\r\n]*$/, 'Line breaks are not allowed in subject'),
    
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(3000, 'Message must be under 3000 characters'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
