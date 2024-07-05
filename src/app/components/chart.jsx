'use client'

import React, { useEffect, useMemo, useState } from 'react';
import { fetchStockData } from '../services/stock-service';
import ReactApexChart from 'react-apexcharts';
import { formatStockData } from '../utils/utils';
import { candleStickOptions } from '../utils/constants'

export const LiveChart = ({ symbol }) => {
    const [stockData, setStockData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchStockData(symbol)
            .then(data => setStockData(data))
            .catch(err => setError(err.message));
    }, [symbol]);

    const seriesData = useMemo(() => {
        if (stockData && stockData['Weekly Time Series']) {
            return formatStockData(stockData);
        }
        return [];
    }, [stockData]);


    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="live-chart">
             {seriesData.length > 0 ? (
                <ReactApexChart
                    series={[{ data: seriesData }]}
                    options={candleStickOptions}
                    type="candlestick"
                    height={400}
                />
            ) : (
                <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex: 10 }}
            >
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white">
                    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                </div>
            </div>
            )}
        </div>
    );
};
