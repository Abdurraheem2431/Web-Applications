import {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className='card'> 
            <h3>Counter</h3>
            <p>{count}</p>
            <div>
                <button onClick={() => setCount(c => c + 1)}>+</button>
                <button onClick={() => setCount(c => c - 1)}>-</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>

    );
};

export default Counter;