import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PostEdit(props: any) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const updatePost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + props.id, {
            method: 'PUT',
            body: JSON.stringify({
                id: props.id,
                title: title,
                body: body,
                userId: props.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        setOpen(false);
    }

    return (
        <div>
            <Button onClick={handleOpen}>Edit</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        fullWidth
                        id="outlined-helperText"
                        label="Title"
                        onChange={e => setTitle(e.target.value)}
                        defaultValue={props.title}
                    />
                    <TextField
                        fullWidth
                        id="outlined-helperText"
                        label="Body"
                        onChange={e => setBody(e.target.value)}
                        defaultValue={props.body}
                    />
                    <Button onClick={updatePost}>Update</Button>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}
