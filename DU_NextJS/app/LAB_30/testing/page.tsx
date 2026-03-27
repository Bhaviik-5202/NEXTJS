import React from "react";

export default function TestingPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Lab 30: Automated Testing Setup</h1>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-blue-600">5. Unit Testing with Vitest</h2>
          <p className="mb-4">Vitest is used for fast unit testing. Example test case for the calculator logic:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// tests/calculator.test.ts
import { expect, test } from 'vitest'

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})

test('multiplies 5 * 10 to equal 50', () => {
  expect(5 * 10).toBe(50)
})`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-600">6. Testing with Jest</h2>
          <p className="mb-4">Jest is a classic testing framework. Example test case for form validation:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// tests/validation.test.js
const { validateName } = require('../utils/validation');

test('validates name length', () => {
  expect(validateName('Bhaviik')).toBe(true);
  expect(validateName('')).toBe(false);
  expect(validateName('A'.repeat(31))).toBe(false);
});`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-green-600">7. E2E Testing with Playwright</h2>
          <p className="mb-4">Playwright tests real user flows in the browser. Example of visiting the home page:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// e2e/home.spec.ts
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Create Next App/);
});

test('navigates to Lab 20', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Lab 20');
  await expect(page).toHaveURL(/.*LAB_20/);
});`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-600">8. Playwright Form & Report</h2>
          <p className="mb-4">Automating a form submission and verifying the result:</p>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`// e2e/registration.spec.ts
import { test, expect } from '@playwright/test';

test('fills and submits registration form', async ({ page }) => {
  await page.goto('/LAB_30/registration');
  await page.fill('input[name="username"]', 'testuser');
  await page.fill('input[name="password"]', 'securepassword');
  await page.click('button[type="submit"]');

  // Verify success message
  await expect(page.locator('.bg-green-100')).toBeVisible();
  
  // To generate report:
  // npx playwright test --reporter=html
});`}
          </pre>
        </section>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg border">
        <h3 className="font-bold mb-4">Command Summary</h3>
        <ul className="list-disc pl-5 space-y-2">
            <li>Run Vitest: <code>npx vitest</code></li>
            <li>Run Jest: <code>npm test</code> (if configured)</li>
            <li>Run Playwright: <code>npx playwright test</code></li>
            <li>View Playwright Report: <code>npx playwright show-report</code></li>
        </ul>
      </div>
    </div>
  );
}
