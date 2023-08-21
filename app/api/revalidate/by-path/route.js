import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
 
// e.g a webhook to `your-website.com/api/revalidate?tag=collection<token>`
export async function POST(request) {
  const json = await request.json();

  if (json?.event === 'trigger-test') {
    return NextResponse.json({ test: true });
  }

  if (json?.model !== 'dog') {
    return NextResponse.json({ revalidated: false, now: Date.now() });
  }

  revalidatePath(`/dogs/[dogId]`);
 
  return NextResponse.json({ revalidated: true, now: Date.now() })
}
