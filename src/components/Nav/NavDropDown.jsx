import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom';
const list = [
  "Futsal/Football Boots",
  "Socks/Shin Pads",
  "Futsal/Football Boots",
  "Balls's",
  "Jersey",
  "Vintage Jerseys",
  "Sports Pants",
  "Your cart",
];

export default function NavDropDown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  hover:bg-gray-50">
        Shop
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 h-5 w-5 text-gray-400"
        />
      </MenuButton>
    </div>

    <MenuItems
      transition
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <div className="py-1">
        {list.map((items) => {
          return (
            <MenuItem key={items}>
              <Link
                to={items === "Your cart" ? "/cart" : "/all_products"}
                className="block px-4 py-2  text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                {items}
              </Link>
            </MenuItem>
          );
        })}
      </div>
    </MenuItems>
  </Menu>
  )
}