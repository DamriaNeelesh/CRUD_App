import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './post.css'
import {NavBar} from './NavBar';

export const CreatePost = () => {
    const { register, handleSubmit } = useForm();
    const [id, setId] = useState('');
    const [userId, setuserId] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const onSubmit = (data: any) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: data.title,
                body: data.body,
                userId: data.userId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
        <NavBar />
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="id"  {...register("id", { required: true })} onChange={e => setId(e.target.value)} />
            <input placeholder="userId" {...register("userId", { required: true })} onChange={e => setuserId(e.target.value)} />
            <input placeholder="title" {...register("title", { required: true })} onChange={e => setTitle(e.target.value)} />
            <input placeholder="body" {...register("body", { required: true })} onChange={e => setBody(e.target.value)} />
            <input type="submit" />
        </form>
        </div>    );
}