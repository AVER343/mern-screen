import React from 'react'
import {Link} from 'react-router-dom'
const props=[
    {
    "id": "5eaa781456b9935e0b4fbc93",
    "app_name": "ORBIN"
    },
    {
    "id": "5eaa781424060409687ba049",
    "app_name": "ZILCH"
    },
    {
    "id": "5eaa7814ac87f820fa6fcce1",
    "app_name": "ZOXY"
    },
    {
    "id": "5eaa7814d19b4a7ec4ba5c49",
    "app_name": "SUPPORTAL"
    },
    {
    "id": "5eaa781483c7bc55a431f217",
    "app_name": "GONKLE"
    },
    {
    "id": "5eaa7814a9407212d5c74d8d",
    "app_name": "ZENTILITY"
    },
    {
    "id": "5eaa7814af7ae3086119c7dc",
    "app_name": "OBLIQ"
    },
    {
    "id": "5eaa7814a9f8e085c1055f86",
    "app_name": "APPLICA"
    },
    {
    "id": "5eaa781408f38cbe5745d37f",
    "app_name": "LUNCHPAD"
    },
    {
    "id": "5eaa78144bc1d00fa1f0598c",
    "app_name": "SOLGAN"
    }
   ]
const Screen2 = ()=>{
return(<div>{props.map(elem=><Link to={`/screen3/${elem.id}`} key={elem.id}><div>{elem.app_name}<br/>{elem.id}</div></Link>)}</div>)
}
export default Screen2