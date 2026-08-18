/**
 * Input sanitization helpers to prevent XSS, CRLF injection, and malformed characters.
 */

export const sanitizeString = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Strip potential script/html angle brackets
    .replace(/[\r\n]/g, ' ') // Strip CRLF to prevent header injection in email forms
    .trim();
};

export const sanitizeTextarea = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  return input
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Strip script tags
    .replace(/[<>]/g, '') // Strip stray angle brackets
    .trim();
};

export const sanitizeEmail = (email: string): string => {
  if (!email || typeof email !== 'string') return '';
  return email
    .replace(/[\r\n]/g, '')
    .trim()
    .toLowerCase();
};

export const sanitizePhone = (phone: string): string => {
  if (!phone || typeof phone !== 'string') return '';
  return phone.replace(/[^\d\s\+\-()]/g, '').trim();
};
