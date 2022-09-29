import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/your-tribe');
	expect(await page.textContent('h1')).toBe('FDND Programma');
});
