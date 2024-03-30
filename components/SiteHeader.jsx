// ./components/SiteHeader.jsx
import Link from 'next/link'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import Mono from '@/components/Mono'

const SiteHeader = ({ className = '' }) => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ]

  return (
    <header
      className={`noprint relative mb-4 ml-0 flex h-[4.5rem] items-center border-b-2 border-border pl-4 md:sticky md:top-[3.25rem] md:ml-0 md:mr-4 md:mt-[3.25rem] md:w-[12rem] md:flex-col md:border-b-0 ${className}`}
    >
      <figure title='steinkamp.us' className=''>
        <div className='text-center md:mb-2 md:mt-0'>
          <Link
            href={'/'}
            className='flex items-center whitespace-nowrap md:flex-col md:whitespace-normal'
          >
            <div className='font-header text-2xl'>The Ships Framework</div>
          </Link>
        </div>
      </figure>
      <nav className='site-nav absolute right-4 top-[3.5rem] z-10 flex grow justify-end gap-8 rounded-xl border-border bg-shadebg md:relative md:right-0 md:top-0 md:bg-transparent'>
        <input
          type='checkbox'
          id='nav-trigger'
          className='nav-trigger hidden'
        />
        <label
          htmlFor='nav-trigger'
          className='absolute right-[0.6rem] top-[-2.7rem] z-20 block h-8 w-8 cursor-pointer md:hidden'
        >
          <span className='menu-icon border-1 center block h-11 w-11 rounded-lg border-2 border-border pl-2 pt-2'>
            <svg
              viewBox='0 0 18 15'
              width='1.5rem'
              height='1.5rem'
              className='fill-text'
            >
              <path d='M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z' />
            </svg>
          </span>
        </label>

        <div className='trigger float-right rounded-lg pb-2 font-header shadow-xl md:float-none md:w-full md:shadow-none'>
          {links.map((linkObj) => (
            <Link
              className={`page-link ml-0 mt-0 block cursor-pointer p-4 text-center text-shadetext visited:text-shadetext hover:text-header md:mt-4 md:p-2`}
              key={linkObj.label}
              href={linkObj.href}
              target={linkObj.target}
            >
              {linkObj.label}
            </Link>
          ))}
          <div className='text-center'>
            <ThemeSwitcher className='page-link pb-8 pt-4 md:mt-4' />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
