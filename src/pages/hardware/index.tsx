import React from 'react';

import { FiPlus } from 'react-icons/fi';

import { HardwareCard } from '../../components/hardware/HardwareCard';
import { PageLayout } from '../../components/PageLayout';
import { heltec } from '../../data/devices/heltec';
import { rak19003 } from '../../data/devices/rak19003';
import { tbeam } from '../../data/devices/tbeam';
import { techo } from '../../data/devices/techo';

const Hardware = (): JSX.Element => {
  const hardware = [
    tbeam,
    rak19003,
    heltec,
    techo,
    rak19003,
    rak19003,
    rak19003,
    rak19003,
    rak19003,
    rak19003,
    rak19003,
    rak19003,
    rak19003,
    rak19003,
  ];

  return (
    <PageLayout title="Hardware" description="Supported hardware">
      <div className="border-b border-gray-200 p-4">
        <div className="sm:flex sm:items-baseline">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Issues
          </h3>
          <div className="mt-4 sm:mt-0 sm:ml-10">
            <nav className="-mb-px flex space-x-8">
              <a
                href="#"
                className="border-indigo-500 text-indigo-600"
                aria-current={'page'}
              >
                Devices
              </a>
              <a
                href="#"
                className="hover:border-gray-300', 'whitespace-nowrap border-b-2 border-transparent
                px-1 pb-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Antennas
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-2 gap-y-4 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-4"
        >
          {hardware.map((device, index) => (
            <HardwareCard key={index} device={device} />
          ))}
          <li className="relative">
            <a
              href="https://github.com/meshtastic/Meshtastic-device/issues/new?assignees=&labels=enhancement%2Ctriage&template=New+Board.yml&title=%5BBoard%5D%3A+"
              className="flex aspect-[4/3] rounded-lg border-2 border-dashed border-gray-300 hover:border-gray-400"
              target="_blank"
              rel="noreferrer"
            >
              <FiPlus className="m-auto h-12 w-12 text-gray-400" />
            </a>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
              New Board
            </p>
            <p className="pointer-events-none block text-sm font-medium text-gray-500">
              Want to support a board?
            </p>
          </li>
        </ul>
      </div>
    </PageLayout>
  );
};

export default Hardware;
