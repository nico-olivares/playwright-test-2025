import { test, expect } from '@playwright/test'

test.describe('NPR test', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('')
        await page.waitForTimeout(2000)
    })

    test('verify first article', async ({ page }) => {
        const link = page.locator('a').nth(64)
        const title = await link.innerText()
        await link.click()
        await page.waitForTimeout(2000)
        const articleTitle = await page.locator('h1').first().innerText()
        expect(articleTitle).toBe(title)
    })
})