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
            url: '/feedback/flagged_words',
            data: {
                word: newWord,
                severity: Number(severity)
            }
        }).then((response) => {
            console.log('Posted new flag word');
            getWords();         //render DOM
            setNewWord('');     //reset inputs
            setSeverity(0);
        }).catch((error) => {
            console.log('Error posting new flag word', error);
        })
    }

    //DELETE ROUTE 
    const setWord = (id) => {   //find the right word to delete
        const wordToDelete = flaggedWords.filter((word) => word.id === id)[0];
        deleteWord(wordToDelete);
    }
    const deleteWord = (wordToDelete) => {  //delete from DB
        axios ({
            method: 'DELETE',
            url: `/feedback/flagged_words/${wordToDelete.id}`
        }).then((response) => {
            console.log('Deleted flagged word', {wordToDelete});
            getWords();     //render DOM
        }).catch((error) => {
            console.log('Error in deleting word', error);
        })
    }

    return (
        <div className='flagWordsSection'>
            <div className='flagWords'>
                <h2>Flagged Words</h2>
                <ul>
                    {flaggedWords.map(word => (
                        <li key={word.id}>{word.word}
                            <button onClick={() => {setWord(word.id)}}>x</button>
                        </li>
                    ))}
                </ul>
            </div>
            <input                  //WORD
                type = "text"
                placeholder='New Flag Word:'
                value={newWord}
                onChange={(e) => {setNewWord(e.target.value)}}
            />
            <input              //SEVERITY
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