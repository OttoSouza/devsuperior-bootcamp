import Barchart from 'components/Barcharts';
import DataTable from 'components/DataTable';
import Donoutchart from 'components/DonutChart';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <Barchart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
            <Donoutchart />
          </div>
        </div>

        <div className="py2">
          <h2 className="text-primary py-3">Todas as vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
