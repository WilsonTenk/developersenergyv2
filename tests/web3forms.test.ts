import { test } from 'node:test';
import assert from 'node:assert/strict';
import { submitInquiry, FORM_ACCESS_KEY, FORM_ENDPOINT } from '../src/lib/web3forms';

test('sends all fields, source, reply address and captcha to the fixed endpoint', async () => {
  let calls = 0;
  const request: typeof fetch = async (url, init) => {
    calls++;
    assert.equal(url, FORM_ENDPOINT);
    assert.equal(init?.method, 'POST');
    const body = JSON.parse(String(init?.body));
    assert.equal(body.access_key, FORM_ACCESS_KEY);
    assert.equal(body.replyto, 'visitor@example.com');
    assert.equal(body.phone, '+233123456789');
    assert.equal(body.company, 'Example');
    assert.equal(body.message, 'Test request');
    assert.equal(body.form_source, 'Contact desk');
    assert.equal(body['h-captcha-response'], 'test-token');
    assert.ok(init?.signal);
    return Response.json({success:true});
  };
  await submitInquiry('Contact desk', {email:'visitor@example.com',phone:'+233123456789',company:'Example',message:'Test request'}, 'test-token', request);
  assert.equal(calls, 1);
});
test('missing captcha never sends a request', async () => {
  await assert.rejects(submitInquiry('Quote', {}, '', async () => { throw new Error('Must not reach network'); }), /spam check/);
});
for (const [name, response] of [
  ['provider rejection', () => Response.json({success:false})],
  ['HTTP failure even with success body', () => Response.json({success:true}, {status:500})],
  ['malformed response', () => new Response('<html>error</html>')],
  ['missing success', () => Response.json({})],
] as const) test(name + ' does not report success', async () => {
  await assert.rejects(submitInquiry('Quote', {}, 'token', async () => response()), /not accepted/);
});
test('quota errors give an email fallback', async () => {
  await assert.rejects(submitInquiry('Quote', {}, 'token', async () => Response.json({}, {status:429})), /limit.*email/);
});
test('network failures do not claim delivery', async () => {
  await assert.rejects(submitInquiry('Quote', {}, 'token', async () => { throw new TypeError('offline'); }), /could not confirm/);
});
