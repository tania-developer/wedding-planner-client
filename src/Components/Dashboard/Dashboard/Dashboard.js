import React from 'react';
import Bookings from '../Bookings/Bookings';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
       
            <section>
                <div  style={{backgroundColor: '#f5eae0', width: '100%'}} className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar />
                </div>
                  <div className="col-md-10 col-sm-12 col-12">
                      <Bookings/>
                  </div>
                </div>
                    
            </section>
    );
};

export default Dashboard;