import { expect, test } from '@playwright/test';

test.describe('I18n', () => {
  test.describe('Language Switching', () => {
    test('should switch language from English to Nepali using dropdown and verify text on the homepage', async ({
      page,
    }) => {
      // Go to homepage in English
      await page.goto('/');

      // Verify text in English
      await expect(
        page.getByRole('heading', {
          name: 'Hello, welcome to my portfolio v3.',
        })
      ).toBeVisible();

      // Open the language selector dropdown
      await page.locator('[aria-label="lang-switcher"]').click();

      // Wait for the dropdown options to be visible
      const dropdown = page.locator('[role="listbox"]');
      await expect(dropdown).toBeVisible();

      // Wait for the Nepali option to appear and be visible
      const nepaliOption = page.locator('text="NE"');
      await expect(nepaliOption).toBeVisible();

      // Select Nepali (Assuming 'ne' is the value for Nepali)
      await nepaliOption.click();

      // Verify text in Nepali
      await expect(
        page.getByRole('heading', {
          name: 'नमस्कार, मेरो पोर्टफोलियो v3 मा स्वागत छ।',
        })
      ).toBeVisible();
    });
  });
});
