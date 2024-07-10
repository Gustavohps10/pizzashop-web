import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('20', { exact: true }).nth(1)).toBeVisible()
  expect(page.getByText('+2% em relação a ontem')).toBeVisible()
  await page.waitForTimeout(2000)
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  expect(page.getByText('-4% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('20', { exact: true }).nth(2)).toBeVisible()
  expect(page.getByText('+23% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  expect(page.getByText('R$ 2.700,00')).toBeVisible()
  expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(2000)
})
