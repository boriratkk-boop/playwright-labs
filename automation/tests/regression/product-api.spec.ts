import { test, expect } from '@playwright/test'

test('get products api', async ({ request }) => {

  const response = await request.get("http://localhost:4000/products")

  expect(response.status()).toBe(200)

  const body = await response.json()

  expect(body.length).toBeGreaterThan(0)

})