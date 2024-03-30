// ./components/SiteHeader.jsx
import Link from 'next/link'

const SiteFooter = () => {
  return (
    <footer className='noprint mt-12 flex max-w-2xl items-center justify-between pb-4 pl-8 pr-8 pt-4 font-header'>
      <div>
        Check this{' '}
        <Link href='https://github.com/zsteinkamp/ships'>
          code out on GitHub
        </Link>
        .
      </div>
      <div className='whitespace-nowrap'>
        by <Link href='https://steinkamp.us/resume'>Zack Steinkamp</Link>
        <Link href='/rss.xml'>
          <svg viewBox='0 0 8 8' className='ml-2 inline h-4'>
            <rect className='fill-themetoggle' width='8' height='8' rx='1.5' />
            <circle className='fill-pagebg' cx='2' cy='6' r='1' />
            <path
              className='fill-pagebg'
              fill='white'
              d='m 1,4 a 3,3 0 0 1 3,3 h 1 a 4,4 0 0 0 -4,-4 z'
            />
            <path
              className='fill-pagebg'
              d='m 1,2 a 5,5 0 0 1 5,5 h 1 a 6,6 0 0 0 -6,-6 z'
            />
          </svg>
        </Link>
      </div>
    </footer>
  )
}

export default SiteFooter
