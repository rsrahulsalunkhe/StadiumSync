import { z } from 'zod';

export const profileSchema = z.object({
  displayName: z
    .string()
    .min(3, 'Display name must be at least 3 characters')
    .max(50, 'Display name must be at most 50 characters')
    .regex(/^[a-zA-Z0-9 ]+$/, 'No special characters allowed'),
  phoneNumber: z
    .string()
    .regex(/^\+[1-9]\d{1,14}$/, 'Phone number must be in standard E.164 format (e.g. +1234567890)'),
  emergencyContact: z.object({
    name: z.string().min(1, 'Emergency contact name is required'),
    phone: z.string().regex(/^\+[1-9]\d{1,14}$/, 'Emergency contact phone must be in standard E.164 format'),
  }),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
