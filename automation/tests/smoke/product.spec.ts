import { test, expect } from '@playwright/test'

test('product list should display', async ({ page }) => {

  await page.goto("http://localhost:3000")

  const products = page.locator('[data-testid="product-items"]')

  await expect(products).toHaveCount(3)

})