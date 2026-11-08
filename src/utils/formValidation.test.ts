import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  validateEmail,
  validatePhoneNumber,
  calculateServiceEstimates,
} from './formValidation.ts';

test('validateEmail correctly identifies valid and invalid emails', () => {
  assert.equal(validateEmail('doctor@madlift.media'), true);
  assert.equal(validateEmail('dr.smith@clinic.co.uk'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('@domain.com'), false);
  assert.equal(validateEmail('doctor@'), false);
});

test('validatePhoneNumber handles valid international numbers and rejects junk', () => {
  assert.equal(validatePhoneNumber('+1 234 567 8901'), true);
  assert.equal(validatePhoneNumber('+919876543210'), true);
  assert.equal(validatePhoneNumber('98765432'), true);
  assert.equal(validatePhoneNumber('123'), false); // too short
  assert.equal(validatePhoneNumber('abc1234567'), false); // contains letters
});

test('validateContactForm flags empty required fields', () => {
  const result = validateContactForm({
    fullName: '',
    email: '',
    phone: '',
    profession: '',
    services: [],
    message: '',
  });

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.profession);
  assert.ok(result.errors.services);
  assert.ok(result.errors.message);
});

test('validateContactForm passes valid submission', () => {
  const result = validateContactForm({
    fullName: 'Dr. Evelyn Reed',
    email: 'dr.reed@aetherahealth.com',
    phone: '+1 (555) 234-5678',
    profession: 'Dermatologist & Clinic Director',
    services: ['Content Production & Editing', 'Social Media Management'],
    message: 'We are expanding our aesthetic practice and need strategic Instagram Reels and patient education video production.',
  });

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('calculateServiceEstimates provides turnaround and roadmap phase', () => {
  const single = calculateServiceEstimates(['Brand Identity & Positioning']);
  assert.equal(single.turnaroundDays, 15);
  assert.equal(single.roadmapPhase, 'Targeted Growth Deployment');

  const multi = calculateServiceEstimates([
    'Brand Identity & Positioning',
    'Content Production & Editing',
    'Social Media Management',
    'Automation & AI Chatbots',
  ]);
  assert.equal(multi.turnaroundDays, 21); // capped at 21
  assert.equal(multi.roadmapPhase, 'Full-Scale Creative Transformation');
});
