import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Greeting() {
    return (
        <div>
            <div id="landing">
                <div id="jumbo" className="py-5">
                    <div className="my-auto justify-content-md-center">
                        <div className="text-center">
                            <h2>Join the WatchTower Community</h2>
                        </div>

                        <div className="text-center">
                            <p>Are you a PPE/ventilator vendor or a health facility?</p>
                        </div>

                        <div className="text-center">
                            <Link to="/signup-vendor" className="">
                                <Button variant="primary">I'm a Vendor</Button>
                            </Link>

                            <Link to="/signup-facility" className="ml-2">
                                <Button variant="secondary">I manage a facility</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <h2>Join the Fight against Covid-19</h2>
            </div> */}
        </div>
    );
}

export default Greeting
