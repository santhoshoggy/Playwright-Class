import axios from "axios";
import { expect, test } from "@playwright/test";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  validateStatus: (status) => status < 500,
});

test.describe("Posts API with Axios", () => {
  test("GET retrieves a post", async () => {
    const response = await api.get("/posts/1");

    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      userId: 1,
      id: 1,
      title: expect.any(String),
      body: expect.any(String),
    });
  });

  test("POST creates a post", async () => {
    const newPost = {
      userId: 1,
      title: "Playwright Axios API test",
      body: "Created with an Axios POST request",
    };
    const response = await api.post("/posts", newPost);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject({
      ...newPost,
      id: expect.any(Number),
    });
  });

  test("PUT replaces a post", async () => {
    const updatedPost = {
      id: 1,
      title: "Replaced by Axios",
      body: "Updated with an Axios PUT request",
      userId: 1,
    };
    const response = await api.put("/posts/1", updatedPost);

    expect(response.status).toBe(200);
    expect(response.data).toMatchObject(updatedPost);
  });

  test("PATCH updates part of a post", async () => {
    const partialUpdate = { title: "Patched by Axios" };
    const response = await api.patch("/posts/1", partialUpdate);

    expect(response.status).toBe(200);
    expect(response.data).toMatchObject({
      userId: 1,
      id: 1,
      title: partialUpdate.title,
      body: expect.any(String),
    });
  });

  test("DELETE removes a post", async () => {
    const response = await api.delete("/posts/1");

    expect(response.status).toBe(200);
    expect(response.data).toEqual({});
  });

  test("returns 404 for an invalid post ID", async () => {
    const response = await api.get("/posts/5555555");

    expect(response.status).toBe(404);
  });
});
