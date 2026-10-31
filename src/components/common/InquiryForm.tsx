import React, { useRef, useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { submitInquiry } from '../../lib/web3forms';

export function useInquiryForm(source: string) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [token, setToken] = useState('');
  const busy = useRef(false);
  const captcha = useRef<HCaptcha>(null);
  const send = async (fields: Record<string, string>) => {
    if (busy.current) return false;
    if (!token) { setError('Please complete the spam check before sending.'); return false; }
    busy.current = true;
    setPending(true);
    setError('');
    try {
      await submitInquiry(source, fields, token);
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to send. Please contact us by email.');
      return false;
    } finally {
      busy.current = false;
      setPending(false);
      setToken('');
      captcha.current?.resetCaptcha();
    }
  };
  return { pending, error, setError, setToken, captcha, send };
}

export function InquiryFormStatus({ form }: { form: ReturnType<typeof useInquiryForm> }) {
  return <div className="w-full basis-full space-y-2 mt-2">
    <HCaptcha ref={form.captcha} sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
      size="compact" reCaptchaCompat={false}
      onVerify={token => { form.setToken(token); form.setError(''); }}
      onExpire={() => form.setToken('')}
      onError={() => { form.setToken(''); form.setError('The spam check could not load. Please try again or contact us by email.'); }} />
    {form.pending && <p role="status" className="text-xs">Sending your request…</p>}
    {form.error && <p role="alert" className="text-xs rounded-md p-2 bg-red-50 text-red-800">{form.error}</p>}
    <p className="text-xs">Submissions are processed by Web3Forms. Prefer email? <a className="underline" href="mailto:thedevelopersenergy@gmail.com">thedevelopersenergy@gmail.com</a></p>
  </div>;
}
