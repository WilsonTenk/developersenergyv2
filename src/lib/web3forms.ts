// Web3Forms access keys are public form identifiers, not email account credentials.
export const FORM_ACCESS_KEY = '83c69735-abb6-4625-b81b-6d44abc87ffb';
export const FORM_ENDPOINT = 'https://api.web3forms.com/submit';

export async function submitInquiry(source: string, fields: Record<string, string>, token: string, request: typeof fetch = fetch) {
  if (!token) throw new Error('Please complete the spam check before sending.');
  const payload = {
    ...fields,
    access_key: FORM_ACCESS_KEY,
    subject: `The Developers Energy — ${source}`,
    from_name: 'The Developers Energy website',
    form_source: source,
    ...(fields.email ? { replyto: fields.email } : {}),
    'h-captcha-response': token,
  };
  let response: Response;
  try {
    response = await request(FORM_ENDPOINT, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload), signal: AbortSignal.timeout(20000),
    });
  } catch {
    throw new Error('We could not confirm your submission. Your details are still here. Check your connection or contact us by email.');
  }
  const result = await response.json().catch(() => null);
  if (!response.ok || result?.success !== true) {
    throw new Error(response.status === 429
      ? 'The form service is temporarily at its limit. Please contact us by email.'
      : 'Your submission was not accepted. Please retry the spam check or contact us by email.');
  }
}
