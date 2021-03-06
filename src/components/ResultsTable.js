import React from 'react';

class SearchResultsTable extends React.Component {
  numberOfDaysBetween = (date1, date2) => {
    return Math.floor((new Date(date2) - new Date(date1)) / (1000*60*60*24))
  }

  render() {
    return (
      <table className="table search-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>First name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Room ID</th>
            <th>Check in date</th>
            <th>Check out date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {this.props.results.map((row, i) =>
            <tr key={i}>
              <td>{ row.title }</td>
              <td>{ row.firstName }</td>
              <td>{ row.surname }</td>
              <td>{ row.email }</td>
              <td>{ row.roomId }</td>
              <td>{ row.checkInDate }</td>
              <td>{ row.checkOutDate }</td>
              <td>{ this.numberOfDaysBetween(row.checkInDate, row.checkOutDate) }</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

export default SearchResultsTable;
