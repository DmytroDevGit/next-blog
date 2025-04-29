import Link from "next/link"

export default function FooterNav() {
  return (
    <nav aria-label="main-nav">
      <ul className={'flex justify-end gap-x-4'}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  )
}
