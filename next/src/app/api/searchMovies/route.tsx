import { NextRequest } from 'next/server';

interface OMDBResponse {
  Search?: Array<{ Title: string; Year: string; imdbID: string; Type: string }>;
  totalResults?: string;
  Response: string;
  Error?: string;
}
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const titleSearchKey = searchParams.get("titleSearchKey");
  if (!titleSearchKey) {
    return Response.json({ Error: "Missing titleSearchKey parameter" }, { status: 400 });
  }
  const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`);
  const jsonRes: OMDBResponse = await httpRes.json();
  return Response.json({ ...jsonRes });
}
