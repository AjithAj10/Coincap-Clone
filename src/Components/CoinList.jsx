import React from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { more } from './Reducer';

function CoinList(props) {
  let dispatch = useDispatch();
  const State = useSelector(state => state);
    return (
        <div>
            <Table className='table' responsive="sm">
        <thead>
          <tr>
            <th>Rank</th>
            <th className='name' id='name'>Name</th>
            <th>Price</th>
            <th className='priority-3'>Market cap</th>
            <th className='priority-5'>VWap(24hr)</th>
            <th className='priority-4'>Supply</th>
            <th className='priority-3'>Volume</th>
            <th>Change(24hr)</th>
          </tr>
        </thead>
       <TableBody/>
      </Table>
      {
        State === 50 ? <Button variant="success" id='more' onClick={() => dispatch(more(100))}>View More</Button> :
        <Button variant="success" onClick={() => dispatch(more(50))}>View Less</Button>
      }
      
        </div>
    );
}

export default CoinList;