# Girraphic test

## Table of contents

- [Description](#description)
- [Deployment](#deployment)
- [Timeframe & Working Team](#timeframe--working-team)
- [Technologies used](#technologies-used)
- [Planning](#planning)
- [Build Code Process](#build-code-process)
  - [Sorting Function](#sorting-function)
  - [Download Component](#download-component)

## Description
### Technical requirement

Task: Media Information System with Data Export
I have been provided a JSON file that contains the results of a running race. My task was to create a “Media Information System” that displays the athletes and their results in a user interface that is easily readable for sports commentators or other media personnel. I also needed to provide the user with the ability to export the results data to a CSV file in a specific format.

## Deployment

I have used Netify to deploy our app

[Link to the APP](https://girraphictest.netlify.app/)

1. Clone repository
2. Navigate to the project directory
3. Run `npm i`
4. Run `npm run dev` - This should then open a localhost page in your browser

## Timeframe & Working Team

 1. I first started with the app setup and the navigation setup.
 2. I then worked on the main component called "Result". In this component, I mapped all the information needed to be displayed.
 3. I finalized with the footer and the styling.

## Technologies used
- Frontend: Developed using React.js to build the user interface, with routing managed by React Router.
- CSS: Utilised a hybrid approach with Bulma as the framework along with some custom CSS.

## Planning
Before starting, I planned using wireframing.

I also had thorough pseudo-coding prior starting

### Front end
```plaintext

|--src
|   |--assets
|   |    |--images
|   |--components
|   |      |--DownloadCSV.tsx
|   |      |--Footer.tsx
|   |      |--NavBar.tsx
|   |      |--Results.tsx
|   |--styles
|   |    |--main.scss
|   |--App.tsx
|   |--index.d.ts
|   |--main.tsx
|   |--README.MD

```

## Build Code Process
Below, I highlight a few features that I feel are important to note:

- **Sorting:** This gives the user the ability to sort columns by numbers or alphabetically.
- **DownloadCSV:** This gives the user the ability to download the results in a CSV file.


### Sorting Function
For the sorting abilities, I used the useMemo React hook to change the direction of the sorting every time the user clicks on the tab.

I then created a function to switch between ascending and descending order.
```jsx
    const sortedAthletes = React.useMemo(() => {
        let sortableAthletes = [...athletes];
        if (sortConfig !== null) {
            sortableAthletes.sort((a: any, b: any) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }

        return sortableAthletes;
    }, [athletes, sortConfig]);

    const requestSort = (key: string) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };
```

### Download component
For the Download CSV component, I created two functions: one to convert the data to CSV and another to handle the download.

I then used the "downloadCSV" function with an onClick event.
```jsx
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
```