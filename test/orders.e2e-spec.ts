import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', {
    waitUntil: 'networkidle',
  })

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible()

  await page.waitForTimeout(2000)
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  expect(page.getByRole('cell', { name: 'Customer 11' })).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 20' })).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  expect(page.getByRole('cell', { name: 'Customer 51' })).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 60' })).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  expect(page.getByRole('cell', { name: 'Customer 41' })).toBeVisible()
  expect(page.getByRole('cell', { name: 'Customer 50' })).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  expect(
    page.getByRole('cell', { name: 'Customer 1', exact: true }),
  ).toBeVisible()

  expect(page.getByRole('cell', { name: 'Customer 10' })).toBeVisible()

  await page.waitForTimeout(2000)
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', {
    waitUntil: 'networkidle',
  })

  await page.getByPlaceholder('ID').fill('order-1')
  await page.getByRole('button', { name: 'Aplicar filtros' }).click()

  await page.waitForLoadState('networkidle')

  expect(page.getByRole('cell', { name: 'order-1', exact: true })).toBeVisible()

  await page.waitForTimeout(2000)
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', {
    waitUntil: 'networkidle',
  })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 15')
  await page.getByRole('button', { name: 'Aplicar filtros' }).click()

  await page.waitForLoadState('networkidle')

  expect(page.getByRole('cell', { name: 'Customer 15' })).toBeVisible()

  await page.waitForTimeout(2000)
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Pendente').click()

  await page.getByRole('button', { name: 'Aplicar filtros' }).click()

  await page.waitForLoadState('networkidle')

  const pendingTableRows = await page
    .getByRole('cell', { name: 'Pendente' })
    .all()

  expect(pendingTableRows).toHaveLength(10)
})
