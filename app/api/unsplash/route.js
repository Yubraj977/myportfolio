export const revalidate = 0; // always fresh (remove if you want caching)

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);
  const per_page = Number(searchParams.get("per_page") || 12);
  const username = "yubraj00001";

  const res = await fetch(
    `https://api.unsplash.com/users/${username}/photos?page=${page}&per_page=${per_page}&order_by=latest`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      cache: "no-store",
    }
  );
console.log("I got the process env local"+process.env.UNSPLASH_ACCESS_KEY)
  if (!res.ok) {
    const msg = await res.text();
    return new Response(JSON.stringify({ error: msg || "Unsplash error" }), {
      status: res.status,
      headers: { "content-type": "application/json" },
    });
  }

  const data = await res.json();

  const photos = data.map((p) => ({
    id: p.id,
    alt: p.alt_description || p.description || "Untitled",
    title: p.description || p.alt_description || "",
    small: p.urls.small,
    regular: p.urls.regular,
    full: p.urls.full,
    link: p.links.html,
  }));

  return new Response(JSON.stringify({ photos }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}