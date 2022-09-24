import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

function Flagwords ({getWords}) {
    let flaggedWords = useSelector(map => map.flaggedWords);

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
            <table>
                <thead>
                    <tr>
                        <th>Flagged Words</th>
                    </tr>
                </thead>
                <tbody>
                    {flaggedWords.map((word) => {<tr key={word.id}><td >{word.word}</td></tr>})}
                </tbody>
            </table>
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