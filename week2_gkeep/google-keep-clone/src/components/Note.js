import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

function Note({ note, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    onEdit(note.id, editedTitle, editedContent);
    setIsEditing(false);
  };

  return (
    <Card className="mb-3">
      <Card.Body>
        {isEditing ? (
          <>
            <Form.Control
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="mb-2"
            />
            <Form.Control
              as="textarea"
              rows={3}
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            />
            <Button variant="primary" onClick={handleSave} className="mt-2">Save</Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)} className="mt-2 ml-2">Cancel</Button>
          </>
        ) : (
          <>
            <Card.Title>{note.title}</Card.Title>
            <Card.Text>{note.content}</Card.Text>
            <Button variant="danger" onClick={() => onDelete(note.id)} className="mr-2">Delete</Button>
            <Button variant="secondary" onClick={() => setIsEditing(true)}>Edit</Button>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default Note;
