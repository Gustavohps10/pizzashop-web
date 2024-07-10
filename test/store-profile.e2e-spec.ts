import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', {
    waitUntil: 'networkidle',
  })

  await page.getByRole('button', { name: 'John' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Pizza')
  await page.getByLabel('Descrição').fill('random desc')
  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  expect(page.getByRole('button', { name: 'Pizza' })).toBeVisible()

  await page.waitForTimeout(2000)
})
