import React from 'react';
import '../data/api/fakeAPI'

const AppliedPromo = (props) => {
    return (
        <div>
            <p>{props.promo.summary?.appliedPromos[0].name}</p>
            <button>Apply</button>
        </div>
    );
};

export default AppliedPromo;