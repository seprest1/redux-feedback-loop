import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

function Flagwords ({getWords}) {

    let flaggedWords = useSelector(store => store.flaggedWords);
    const [newWord, setNewWord] = useState('');
    const [severity, setSeverity] = useState(0);

    //POST ROUTE -- ADD NEW FLAG WORD
    const addWord = () => {
        axios({
            method: 'POST',
            url: '/feedback/flaggedwords',
            data: {
                word: newWord,
                severity: Number(severity)
            }
        }).then((response) => {
            console.log('Posted new flag word');
            getWords();         //render DOM
            setNewWord('');     //reset imputs
            setSeverity(0);
        }).catch((error) => {
            console.log('Error posting new flag word', error);
        })
    }

    return (
        <div className='flagWordsSection'>
            <div className='flagWords'>
                <h2>Flagged Words</h2>
                <ul>
                    {flaggedWords.map(wordObj => (
                        <li key={wordObj.id}>{wordObj.word}</li>
                    ))}
                </ul>
            </div>
            <input 
                type = "text"
                placeholder='New Flag Word:'
                value={newWord}
                onChange={(e) => {setNewWord(e.target.value)}}
            />
            <input 
                type = "number"
                placeholder='Severity: 1-5'
                min="1"
                max="5"
                value={severity}
                onChange={(e) => {setSeverity(e.target.value)}}
            />
            <button onClick={addWord}>Submit</button>
        </div>
    )
}

export default Flagwords;