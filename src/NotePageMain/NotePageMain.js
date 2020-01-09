import React, { Component } from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import NoteCopy from '../NoteCopy'

export default class NotePageMain extends Component {
  render () {
    const note = NoteCopy.note
    return (
      <section className='NotePageMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
        />
        <div className='NotePageMain__content'>
          {nope.content.split(/\n \r|\n/).map((para, i) =>
            <p key={i}>{para}</p>
          )}
        </div>
      </section>
    )
  }
 
}

NotePageMain.defaultProps = {
  note: {
    content: '',
  }
}
