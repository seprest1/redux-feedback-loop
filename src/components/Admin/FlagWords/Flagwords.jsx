import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import '../Admin.css';

//MUI
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import ClearIcon from '@mui/icons-material/Clear';

function Flagwords ({getWords}) {

    let flaggedWords = useSelector(store => store.flaggedWords);
    const [newWord, setNewWord] = useState('');
    const [severity, setSeverity] = useState();

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
            <h2 className='flag_header'>Flagged Words</h2>
            <div className='flagWords'>
                <ul className='flag_list'>
                    {flaggedWords.map(word => (
                        <li key={word.id} className='flagged_word'>{word.word}
                            <Button onClick={() => {setWord(word.id)}} color="secondary" size="small" className="flag_button"><ClearIcon fontSize="small"/></Button>
                        </li>
                    ))}
                </ul>
                <div className ='flag_inputs'>
                    <TextField                              //WORD
                        id="standard-basic" 
                        label="New Flag Word" 
                        variant="standard" 
                        value={newWord}
                        onChange={(e) => {setNewWord(e.target.value)}}
                    />

                     {/* <TextField                            //SEVERITY for later functionality
                        id="standard-basic" 
                        label="Severity 1 - 5" 
                        variant="standard"
                        value={severity}
                        onChange={(e) => {setSeverity(e.target.value)}}
                    /> */}

                    <Button onClick={addWord} variant="contained" className="flag_submit">Submit</Button>
                </div>
            </div>
        </div>
    )
}


export default Flagwords;