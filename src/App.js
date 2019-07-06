import React from 'react';
import Note from './components/Note';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      noteText: '',
      notes: [],
    }
  }

  updateNoteText(noteText){
    this.setState({ noteText: noteText.target.value })
  }


  addNote() {
    if (this.state.noteText === '') {return}

    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: '' });
    this.textInput.focus();
  }

  deleteNote(i) {
    let notesArr = this.state.notes;
    notesArr.splice(i, 1);
    this.setState({ notes: notesArr })
  }

  
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {

    }
  }

  
  
  render() {

    let notes = this.state.notes.map((val, i) => {
      return <Note key={i} text={val} deleteMethod= { () => this.deleteNote(i) } />
    })
    return (
      <div className="container">
          <div className="header">React todo app</div>
          {notes}
          <div className="btn" onClick={this.addNote.bind(this)}>+</div>
          <input 
            type="text"
            ref={((input) => {this.textInput = input})} 
            className="textInput"
            value={this.state.noteText}
            onChange={noteText => this.updateNoteText(noteText)}
            onKeyPress={this.handleKeyPress.bind(this)}
            />  
        
      </div>
    );
  }
  
}

export default App;
