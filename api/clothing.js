export default async function handler(req, res) {
  try {
    const robloxRes = await fetch("https://catalog.roblox.com/v1/search/items?category=Clothing&salesTypeFilter=1&sortType=2&limit=50");
    const data = await robloxRes.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Roblox API fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch Roblox catalog." });
  }
}
