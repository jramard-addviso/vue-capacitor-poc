export class NotFoundError extends Error {}

export async function api(url) {
  const r = await fetch(url)
  if (r.status >= 200 && r.status < 400) {
    return await r.json()
  }
  if (r.status === 404) {
    return new NotFoundError()
  }
}
