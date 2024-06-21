/*jshint esversion: 8 */

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

const navigation = [
  { name: 'About', current: true },
  { name: 'Resume', current: false },
  { name: 'Projects', current: false },
  { name: 'Contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: props.currentPage
    };
  }

  changeState = (newPage) => {
    this.state.currentPage(newPage);

    navigation.forEach((page) => {
      if(page["name"] === newPage)
        page["current"] = true;
      else 
        page["current"] = false;
    }, newPage);
  }
  
  render(){
    return (
      <Disclosure as="nav" className="bg-gray-800 rounded-t-lg">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={this.changeState.bind(this, item.name)}
                          className={classNames(
                            item.current ? 'bg-gray-700 text-gray-300' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <DisclosurePanel className="sm:hidden relative">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    onClick={this.changeState.bind(this, item.name)}
                    className={classNames(
                      item.current ? 'bg-gray-700 text-gray-300' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    );
  }
}

Nav.propTypes = {
  currentPage: PropTypes.func.isRequired
}

export default Nav;