export async function fetchX(
  path: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "UPDATE" | "DELETE",
  body: { [key: string]: any },
  options?: { [key: string]: any }
) {
  try {
    const headers = { "Content-Type": "application/json" };

    const response = await fetch(path, {
      headers,
      method: method,
      body: JSON.stringify(body),
      ...options,
    });

    const result = await response.json();
    return result.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
