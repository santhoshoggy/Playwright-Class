import { expect, test } from "@playwright/test";

const apiUrl = "https://jsonplaceholder.typicode.com";

test.describe("Posts API", () => {
  test("GET retrieves a post", async ({ request }) => {
    const response = await request.get(`${apiUrl}/posts/1`);

    expect(response.status()).toBe(200);
    await expect(response).toBeOK();

    const post = await response.json();
    console.log(post);
  });

  test("POST creates a post", async ({ request }) => {
    const response = await request.post(`${apiUrl}/posts`, {
      data: {
        title: "Playwright API test",
        body: "Created with a POST request",
        userId: 1,
      },
    });

    expect(response.status()).toBe(201);
    await expect(response).toBeOK();
    const createdPost = await response.json();

    console.log(createdPost);
  });

  test("PUT replaces a post", async ({ request }) => {
    const updatedPost = {
      id: 1,
      title: "Replaced by Playwright",
      body: "Updated with a PUT request",
      userId: 1,
    };
    const response = await request.put(`${apiUrl}/posts/1`, {
      data: updatedPost,
    });

    expect(response.status()).toBe(200);
    await expect(response).toBeOK();

    console.log(response);
  });

  test("PATCH updates part of a post", async ({ request }) => {
    const partialUpdate = { title: "Patched by Playwright" };
    const response = await request.patch(`${apiUrl}/posts/1`, {
      data: partialUpdate,
    });

    expect(response.status()).toBe(200);
    await expect(response).toBeOK();
    const patchedPost = await response.json();
    expect(patchedPost).toMatchObject({
      userId: 1,
      id: 1,
      title: partialUpdate.title,
      body: expect.any(String),
    });
    console.log(patchedPost);
  });

  test("DELETE removes a post", async ({ request }) => {
    const response = await request.delete(`${apiUrl}/posts/1`);

    expect(response.status()).toBe(200);
    await expect(response).toBeOK();
    expect(await response.json()).toEqual({});
  });
  test('Check invalid user ID', async ({ request }) => {
  const response = await request.get(`${apiUrl}/posts/5555555`);

  expect(response.status()).toBe(404);
  console.log("reponse to be 404 ...");
});
});
