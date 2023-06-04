import React from 'react'
import { useState } from 'react'
import Form from './form'
import ArticleService from '../service/article'
import { useDispatch } from 'react-redux'
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import { useNavigate } from 'react-router-dom'

const CreateArticle = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formSubmit = async e => {
        e.preventDefault()
        const article = { title, description, body }
        dispatch(postArticleStart())
        try {
            await ArticleService.postArticle(article)
            dispatch(postArticleSuccess())
            navigate('/')
        } catch (error) {
            dispatch(postArticleFailure())
        }
    }

    return (
        <div className='text-center'>
            <h1 className='fs-2'>Create article</h1>
            <div className='w-75 mx-auto'>
                <Form formName={'Create'} formSubmit={formSubmit} title={title} setTitle={setTitle} description={description} setDescription={setDescription} body={body} setBody={setBody} />
            </div>
        </div>
    )
}

export default CreateArticle
