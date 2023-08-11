import test, { _electron as electron, expect } from "@playwright/test";

test("routing to checkIn and back home", async () => {
  const app = await electron.launch({ args: [".", "--no-sandbox"] });
  const page = await app.firstWindow({
    timeout: 1000,
  });

  expect(page.getByText('VKiosk')).toBeVisible();

  await page.getByText('체크인').click();
  expect(page.getByText("CheckIn Page")).toBeVisible();

  await page.click("text=뒤로가기");
  expect(page.getByText('VKiosk')).toBeVisible();

  await page.screenshot({ path: "e2e/screenshots/routing.png" });
});
