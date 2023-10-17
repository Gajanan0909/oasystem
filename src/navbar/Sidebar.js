import React from 'react'
import './Sidebar.css'
import { Routes, Route, Link } from 'react-router-dom';
import FileMaintenance from '../routes/FileMaintenance';
import Replication from '../routes/Replication';
import CurrencyMaintenance from '../routes/CurrencyMaintenance';
import Parameters from '../routes/Parameters';
import LedgerMaintenance from '../routes/LedgerMaintenance';
import PeriodDateMaintenance from '../routes/PeriodDateMaintenance';
import PaymentTermsMaintenance from '../routes/PaymentTermsMaintenance';
import TaxRatesMaintenance from '../routes/TaxRatesMaintenance';
import AnalysisTypeCodeMaintenance from '../routes/AnalysisTypeCodeMaintenance';
function Sidebar() {
  return (
    <div className='d-flex'>
      <div className='sidebarDiv'>
        <p><Link to={'/'}>File Maintenance</Link></p>
        <p><Link to={'/replication'}>Replication Maintenance</Link></p>
        <p><Link to={'/currency'}>currency Maintenance</Link></p>
        <p><Link to={'/parameters'}>parameters Maintenance</Link></p>
        <p><Link to={'/ledgermaintenance'}>ledger Maintenance</Link></p>
        <p><Link to={'/periodmaintenance'}>period Maintenance</Link></p>
        <p><Link to={'/paymentmaintenance'}>payment Maintenance</Link></p>
        <p><Link to={'/taxmaintenance'}>tax Maintenance</Link></p>
        <p><Link to={'/analysis'}>analysis Maintenance</Link></p>
      </div>
      <div className='heroContainer'>
      <Routes>
          <Route path='/' element={<FileMaintenance />} />
          <Route path='/replication' element={<Replication />} />
          <Route path='/currency' element={<CurrencyMaintenance />} />
          <Route path='/parameters' element={<Parameters />} />
          <Route path='/ledgermaintenance' element={<LedgerMaintenance />} />
          <Route path='/periodmaintenance' element={<PeriodDateMaintenance />} />
          <Route path='/paymentmaintenance' element={<PaymentTermsMaintenance />} />
          <Route path='/taxmaintenance' element={<TaxRatesMaintenance />} />
          <Route path='/analysis' element={<AnalysisTypeCodeMaintenance />} />
        </Routes>
      </div>
    </div>
    
  )
}

export default Sidebar