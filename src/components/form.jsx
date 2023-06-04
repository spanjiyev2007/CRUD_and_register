import { useSelector } from 'react-redux'
import { Input, TextAria } from '../ui'

const Form = ({formName, formSubmit, title, setTitle, description, setDescription, body, setBody}) => {

    const {isLoading} = useSelector(state => state.article)

    return (
        <form onSubmit={formSubmit}>
            <Input label={'Title'} state={title} setState={setTitle} />
            <TextAria label={'Description'} state={description} setState={setDescription} />
            <TextAria label={'Body'} state={body} setState={setBody} height={'300px'} />
            <button className='w-100 btn btn-lg btn-primary mt-2' type='submit' disabled={isLoading}>
                {isLoading ? "Loading..." : formName}
            </button>
        </form>
    )
}

export default Form
