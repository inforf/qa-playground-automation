
import { test, expect } from "@playwright/test";

test.describe("QA Playground – Cenários com falhas intencionais", () => {
  test("Executar todos os cenários sem interromper em falhas", async ({
    page,
  }) => {
    await test.step("Cenário 1 – Modal que não fecha", async () => {
      await page.goto(
        "https://inforf.github.io/qa-playground/modal-bug.html"
      );

      await page.click("#openModal");

      const modal = page.locator("#modal");

      await expect.soft(modal).toBeHidden({
        timeout: 2000,
      });
    });

    await test.step("Cenário 2 – API lenta / carregamento infinito", async () => {
      await page.goto(
        "https://inforf.github.io/qa-playground/api-lenta.html"
      );

      await page.click("#loadData");

      const status = page.locator("#status");

      await expect.soft(status).toHaveClass(/hidden/, {
        timeout: 3000,
      });
    });

    await test.step("Cenário 3 – Formulário com validação incorreta", async () => {
      await page.goto(
        "https://inforf.github.io/qa-playground/formulario-bug.html"
      );

      await page.fill("#email", "email-invalido");
      await page.fill("#age", "-10");
      await page.click("button[type='submit']");

      const successMessage = page.locator("#success");

      await expect.soft(successMessage).toBeHidden({
        timeout: 2000,
      });
    });
  });
});
