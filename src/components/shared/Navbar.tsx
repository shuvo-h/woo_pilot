'use client';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon , UserIcon} from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import brandLogo from "@/assets/logo/nav_brand_logo.png"
import brandLogoWhite from "@/assets/logo/Logo_white.png"

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Plugins', href: '#', current: true },
  { name: 'WooCommerce Bundle', href: '#', current: false },
  { name: 'Docs', href: '#', current: false },
  { name: 'Support', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

type TNavbarProps = {
    isColored: boolean;
}

export default function Navbar({isColored}:TNavbarProps) {
    const itemHoverClass = isColored ? "text-gray-300 hover:bg-gray-700 hover:text-white" : 'text-gray-300 hover:bg-gray-200 hover:text-white';
  return (
    <Disclosure as="nav" className={`sticky top-0 bg-${ isColored? '[#030b21]':"white"}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Image className='h-[42px]' src={isColored?  brandLogo : brandLogoWhite} width={200} height={80} alt='logo' />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                    className={[ 
                        item.current 
                        ? `${isColored?"bg-gray-700":"bg-gray-500"} text-white`
                        : isColored 
                        ? "text-gray-300 hover:bg-gray-700 hover:text-white" 
                        : 'text-gray-400 hover:bg-gray-200',
                        'rounded-md px-3 py-2 text-sm font-medium'
                    ].join(" ")}

                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <button
                    type="button"
                    className={`relative inline-flex items-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-normal text-${isColored?"white":"blue-500"} shadow-sm bg-transparent   
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ring-1 ring-inset ring-blue-400 ${isColored?"":'hover:bg-gray-200'}`}
                  >
                    Pricing
                  </button>
                </div>
                <div className=" md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                  <button
                    type="button"
                    className={`relative  p-1 text-gray-400 ${isColored? "hover:text-white":"hover:text-gray-800"} focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View Profile</span>
                    <UserIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                 
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
