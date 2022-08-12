import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PostView from './PostView';
import PostEdit from './PostEdit';

export const PostCard = (props: any) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><PostView title={props.title} body={props.body} /></Button>
                <Button size="small"><PostEdit userId={props.userId} id={props.id} title={props.title} body={props.body} /> </Button>
            </CardActions>
        </Card>
    );
}

