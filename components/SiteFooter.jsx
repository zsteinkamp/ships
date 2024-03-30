// ./components/SiteHeader.jsx
import Link from 'next/link'

const SiteFooter = () => {
  return (
    <footer className='noprint mt-12 flex items-center justify-between pb-4 pl-8 pr-8 pt-4 font-header'>
      <div>
        Check this{' '}
        <Link href='https://github.com/zsteinkamp/ships'>
          code out on GitHub
        </Link>
        .
      </div>
      <div className='whitespace-nowrap'>
        by <Link href='https://steinkamp.us/resume'>Zack Steinkamp</Link>
      </div>
    </footer>
  )
}

export default SiteFooter
