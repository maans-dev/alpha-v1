import { ApexOptions } from 'apexcharts';

export const candleStickOptions: ApexOptions = {
    chart: {
        type: "candlestick",
    },
    title: {
        text: "CandleStick Chart",
        align: "left",
    },
    xaxis: {
        type: "datetime",
    },
    yaxis: {
        tooltip: {
            enabled: true,
        },
    },
};