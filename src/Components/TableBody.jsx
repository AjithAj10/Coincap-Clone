import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function TableBody(props) {
    const [Apidata,setData] = useState();
    const State = useSelector(state => state);
    console.log(State);

    useEffect(() => {
        axios.get('https://api.coincap.io/v2/assets')
        .then(e =>{
            //console.log(e.data.data[0]);
            setData(e.data.data);
        })
    },[])
    return (
        //https://assets.coincap.io/assets/icons/eth%402x.png
        <tbody>
            {
                Apidata && Apidata.slice(0,State).map((e,i) =>{
                    let vol = (parseFloat(e.volumeUsd24Hr)/1000000).toFixed(2);
                    return <tr key={i}>
                        <td>{e.rank}</td>
                        <td className='name'><img className='coinImg' src={`https://assets.coincap.io/assets/icons/${(e.symbol).toLowerCase()}%402x.png`} alt={e.symbol}/>
                        <div>{e.name}<br/><span>{e.symbol}</span> </div></td>
                        <td>${ parseFloat( e.priceUsd).toFixed(2)}</td>
                        <td>${ (parseFloat(e.marketCapUsd)/1000000000).toFixed(2)}b</td>
                        <td>{e.vwap24Hr ?'$'+ parseFloat( e.vwap24Hr).toFixed(2) : '--'}</td>
                        <td>{ (parseFloat(e.supply)/1000000000).toFixed(2)}b</td>
                        
                        <td>${ vol >1000 ? (vol/1000).toFixed(2) +'b': vol +'m' }</td>
                        <td className={ parseFloat(e.changePercent24Hr) < 0 ? 'red' : 'green'}>{ (parseFloat(e.changePercent24Hr)).toFixed(2)}%</td>
                    </tr>
                })
               
            }
        </tbody>
    );
}

export default TableBody;