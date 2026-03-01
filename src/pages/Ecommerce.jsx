import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

import { Button, SparkLine } from '../components';

import {
  earningData,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
} from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';
import product8 from '../data/product8.jpg';

/* ================= Dropdown ================= */

const DropDown = ({ currentMode }) => (
  <div className="w-28 border border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: 'Time', value: 'Id' }}
      style={{
        border: 'none',
        color: currentMode === 'Dark' ? 'white' : 'black',
      }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

/* ================= Ecommerce ================= */

const Ecommerce = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      {/* ================= Top Section ================= */}

      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Earnings</p>
              <p className="text-2xl">$63,448.78</p>
            </div>

            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl text-white rounded-full p-4 hover:drop-shadow-xl"
            >
              <BsCurrencyDollar />
            </button>
          </div>

          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        {/* Earnings Cards */}

        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl min-h-[170px]"
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>

              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className="text-sm ml-2" style={{ color: item.pcColor }}>
                  {item.percentage}
                </span>
              </p>

              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Recent Transactions ================= */}

      <div className="flex gap-10 m-4 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
          <div className="flex justify-between items-center gap-2">
            <p className="text-xl font-semibold">Recent Transactions</p>
            <DropDown currentMode={currentMode} />
          </div>

          <div className="mt-10 w-72 md:w-96">
            {recentTransactions.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>

                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p style={{ color: item.pcColor }}>{item.amount}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-5 border-t border-color pt-4">
            <Button
              color="white"
              bgColor={currentColor}
              text="Add"
              borderRadius="10px"
            />

            <p className="text-gray-400 text-sm">36 Recent Transactions</p>
          </div>
        </div>
      </div>

      {/* ================= Weekly Stats ================= */}

      <div className="flex flex-wrap justify-center">
        <div className="md:w-96 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Weekly Stats</p>
            <button type="button" className="text-xl text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10">
            {weeklyStats.map((item) => (
              <div key={item.title} className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button
                    type="button"
                    style={{ background: item.iconBg }}
                    className="text-2xl text-white rounded-full p-3 hover:drop-shadow-xl"
                  >
                    {item.icon}
                  </button>

                  <div>
                    <p className="text-md font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>

                <p style={{ color: item.pcColor }}>{item.amount}</p>
              </div>
            ))}

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="area-sparkline"
                height="160px"
                type="Area"
                data={SparklineAreaData}
                width="320"
                color="rgba(242,252,253)"
              />
            </div>
          </div>
        </div>

        {/* ================= Daily Activities ================= */}

        <div className="w-96 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>
            <button type="button" className="text-xl text-gray-500">
              <IoIosMore />
            </button>
          </div>

          <div className="mt-10">
            <img
              className="w-full h-52 object-cover rounded-lg"
              src={product8}
              alt="activity"
            />

            <div className="mt-8">
              <p className="font-semibold text-lg">React 20 Coming Soon</p>
              <p className="text-gray-400">By Parul</p>

              <p className="mt-4 text-sm text-gray-400">
                This will be the small description for the news you have shown here.
              </p>

              <div className="mt-4">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Read More"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;

