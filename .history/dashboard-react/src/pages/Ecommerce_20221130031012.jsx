import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';



const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap
      lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44
        rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
           <div className="flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-400">
                  Pendapatan
                </p>
                <p className="text-2xl">
                    Rp482.000.000,00
                </p>
              </div>
            </div>
            <div classna>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce