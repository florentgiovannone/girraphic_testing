import React, { useState } from 'react';
import data from '../MarathonResults.json';
import DownloadCSV from './DownloadCSV';
import Footer from './Footer';
import moment from 'moment';
export default function Results() {
    const athletes = data.results.athletes;
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'desc' });
    const [athletePos, setAthletePos] = useState("")

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
    let date = data.results.tod;
    let formattedDate = moment(date).format('MMMM Do YYYY')
    console.log(formattedDate);
    
    return <>
        <div className=' block has-background-yellow mx-5 p-1'>    
            <h5 className='title text-is-gira-black is-size-4'>{`${data.results.racename} - ${data.results.gender} - ${formattedDate}`}</h5>
            </div>
            <div className="results table-container p-5 mx-5">
            <div className='columns m-0'>
                <div className='column is-full block has-background-gira-black'>

                        <p className='text-is-yellow'>
                            Result
                        </p>

                </div>
            </div>
            <table className="table is-fullwidth has-border-yellow">
                <thead>


                    <tr>
                        <th>
                            <button onClick={() => requestSort('rank')}>
                                <abbr><h3 className='title is-size-5'>POS</h3></abbr>
                            </button>
                        </th>
                        <th>
                            <button onClick={() => requestSort('bibnumber')}>
                                <abbr><h3 className='title is-size-5'>BIB</h3></abbr>
                            </button>
                        </th>
                        <th>
                            <button onClick={() => requestSort('countryname')}>
                                <abbr><h3 className='title is-size-5'>COUNTRY</h3></abbr>
                            </button>
                        </th>
                        <th>
                            <button onClick={() => requestSort('surname')}>
                                <abbr><h3 className='title is-size-5'>NAME</h3></abbr>
                            </button>
                        </th>
                        <th>
                            <button onClick={() => requestSort('finishtime')}>
                                <abbr><h3 className='title is-size-5'>TIME</h3></abbr>
                            </button>
                        </th>
                        <th>
                            <button onClick={() => requestSort('raceprogress')}>
                                <abbr><h3 className='title is-size-5'>{sortConfig.key === 'raceprogress' ? (sortConfig.direction === 'asc' ? 'PROGRESS' : 'PROGRESS') : 'PROGRESS'}</h3></abbr>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedAthletes.map((athlete) => (
                        <tr key={athlete.athleteid}>
                            <td>{athlete.rank}</td>
                            <td>{athlete.bibnumber}</td>
                            <td>{`${athlete.flag} - ${athlete.teamname}`}</td>
                            <td>{`${athlete.firstname} ${athlete.surname.toUpperCase()}`}</td>
                            <td>{athlete.finishtime}</td>
                            <td>{athlete.raceprogress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DownloadCSV data={athletes} fileName="race_results" />
        </div>
        <Footer/>
    </>;
}
