import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Image Frame',
  description: 'A Farcaster Frame gallery',
  openGraph: {
    title: 'Image Frame',
    description: 'A Farcaster Frame gallery',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/site-preview.jpg`],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': `${process.env.NEXT_PUBLIC_SITE_URL}/site-preview.jpg`,
    'fc:frame:post_url': `${process.env.NEXT_PUBLIC_SITE_URL}/api/basic?id=1`,
    'fc:frame:button:1': 'START NOW!!!',
  },
}

export default function Page() {
  return (
    <div>
      <h1>Gallery Frame</h1>
    </div>
  )
}
