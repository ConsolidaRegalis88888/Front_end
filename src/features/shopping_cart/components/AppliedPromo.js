import React, {useEffect, useState} from 'react';
import '../data/api/fakeAPI'

const AppliedPromo = () => {
    const [appliedPromo, setAppliedPromo] = useState({appliedPromo: {}});

    useEffect(() => {
        fetch('api/cart/summary/promos')
            .then((res) => res.json())
            .then((json) => {
                setAppliedPromo(json.appliedPromo)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div>
            <p>{appliedPromo.name}</p>
            <button>Apply</button>
        </div>
    );
};

export default AppliedPromo;