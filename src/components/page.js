import React, { Component } from 'react'
import Launch from '../components/launch'
import Search from '../components/search'
import { Table, Col, Row, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Page extends Component {
  componentDidMount() {
    this.props.getLaunches()
  }

  handleSearch(event) {
    this.props.filterLaunches(event.currentTarget.value)
  }

  render() {
    let { displayedLaunches, isFetched, error } = this.props

    let launches = displayedLaunches.map(launch => {
      return (
          <Launch launch={launch} />
      )
    })

    return (
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        <div className="page__search">
          <Search onChange={this.handleSearch.bind(this)} />
        </div>
        {isFetched ? (
          <p>Loading...</p>
        ) : (
           <Container>

            <Row>

            <Col/>

              <Col>

                <Table className="main_table">
                   <thead>
                     <tr>
                           <th>Badge</th>
                           <th>Rocket Name</th>
                           <th>Rocket Type</th>
                           <th>Launch Date</th>
                           <th>Details</th>
                           <th>ID</th>
                           <th>Articles</th>
                     </tr>
                     </thead>
                     <tbody>

                     {launches}

                       </tbody>
                </Table>

            </Col>

            <Col />



          </ Row>
          </ Container>

        )}
      </div>
    )
  }
}

export default Page
