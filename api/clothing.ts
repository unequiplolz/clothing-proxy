import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const res = await fetch('https://catalog.roblox.com/v1/search/items?category=Clothing&salesTypeFilter=1&sortType=2&limit=50');
  const data = await res.json();
  return NextResponse.json(data);
}
