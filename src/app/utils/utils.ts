interface StockData {
    'Weekly Time Series': {
        [key: string]: {
            '1. open': string;
            '2. high': string;
            '3. low': string;
            '4. close': string;
        };
    };
}

interface FormattedData {
    x: string;
    y: [string, string, string, string];
}

export const formatStockData = (stockData: StockData): FormattedData[] => {
    const formattedData: FormattedData[] = [];

    if (stockData['Weekly Time Series']) {
        Object.entries(stockData['Weekly Time Series']).forEach(([key, value]) => {
            formattedData.push({
                x: key,
                y: [
                    value['1. open'],
                    value['2. high'],
                    value['3. low'],
                    value['4. close'],
                ],
            });
        });
    }

    return formattedData;
};
