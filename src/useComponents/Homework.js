import React, {useState} from 'react';
import useDocumentTitle from './useDocumentTitle'
import useIsOnline from './useIsOnline'
import useLocalStorage from './useLocalStorage'

const Homework = () => {
    const [titleName, setTitleName] = useState('')
    useDocumentTitle(titleName)

    const isOnline = useIsOnline()

    const [name, setName] = useLocalStorage('name', 'Bob');

    return (
        <div>
            <div>
                <h1>Change Document Title</h1>
                <input placeholder='Fill title' type="text" value={titleName} onChange={e => setTitleName(e.target.value)}/>
                Name: {titleName}
            </div>
            <br/>
            <div>
                <h1>Online Status</h1>
                <span>{`You are ${isOnline ? 'online' : 'offline'}`}</span>
            </div>
            <br/>
            <div>
                <h1>Local Storage</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Homework;
