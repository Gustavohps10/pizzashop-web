import { expect, test } from '@playwright/test'

test('sign-up successfully', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle',
  })

  const input = {
    restaurantName: 'Pizza Shop',
    managerName: 'Test',
    email: 'test@example.com',
    phone: '11111111111',
  }

  await page.getByLabel('Nome do restaurante').fill(input.restaurantName)
  await page.getByLabel('Seu nome').fill(input.managerName)
  await page.getByLabel('Seu e-mail').fill(input.email)
  await page.getByLabel('Seu telefone').fill(input.phone)

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText(
    `Restaurante ${input.restaurantName} cadastrado com sucesso`,
  )

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign-up with wrong credentials', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle',
  })

  const input = {
    restaurantName: 'Wrong Pizza Shop',
    managerName: 'Test',
    email: 'test@example.com',
    phone: '11111111111',
  }

  await page.getByLabel('Nome do restaurante').fill(input.restaurantName)
  await page.getByLabel('Seu nome').fill(input.managerName)
  await page.getByLabel('Seu e-mail').fill(input.email)
  await page.getByLabel('Seu telefone').fill(input.phone)

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Falha ao registrar, tente novamente!')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to sign-in page', async ({ page }) => {
  await page.goto('/sign-up', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('link', { name: 'Fazer Login' }).click()

  expect(page.url()).toContain('/sign-in')

  await page.waitForTimeout(2000)
})
