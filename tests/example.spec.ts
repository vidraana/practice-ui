import { test, expect } from '@playwright/test';

test('app shell renders the title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/practice/i);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('PRACTICE');
});
