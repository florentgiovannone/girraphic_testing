import React from 'react';

const DownloadCSV = ({ data, fileName }: any) => {
    const convertToCSV = (objArray: string) => {

        const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        let str = '';

        for (let i = 0; i < array.length; i++) {
            let line = '';
            for (let index in array[i]) {
                if (line !== '') line += ',';

                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    };

    const downloadCSV = () => {
        const csvData = new Blob([convertToCSV(data)], { type: 'text/csv' });
        const csvURL = URL.createObjectURL(csvData);
        const link = document.createElement('a');
        link.href = csvURL;
        link.download = `${fileName}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className="button download text-is-girab-black has-background-yellow mt-5" onClick={downloadCSV}>Download CSV</button>
    );
}

export default DownloadCSV;