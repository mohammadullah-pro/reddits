export async function onRequest(context) {
  const url = new URL(context.request.url);

  const target = new URL(context.request.url);
  target.hostname = "redits.vercel.app";

  return fetch(target, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body,
    redirect: "manual"
  });
}