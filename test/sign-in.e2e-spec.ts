import { expect, test } from '@playwright/test'

test('sign-in successfully', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle',
  })

  const email = 'johndo@example.com'
  await page.getByLabel('Seu e-mail').fill(email)
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText(`Enviamos um link de login para ${email}`)

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('sign-in with wrong credentials', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle',
  })

  const email = 'wrong@example.com'
  await page.getByLabel('Seu e-mail').fill(email)
  await page.getByRole('button', { name: 'Acessar painel' }).click()

  const toast = page.getByText('Credenciais inválidas')

  expect(toast).toBeVisible()

  await page.waitForTimeout(2000)
})

test('navigate to new restaurant page', async ({ page }) => {
  await page.goto('/sign-in', {
    waitUntil: 'networkidle',
  })

  await page
    .getByRole('link', {
      name: 'Novo estabelecimento',
    })
    .click()

  expect(page.url()).toContain('/sign-up')

  await page.waitForTimeout(2000)
})
