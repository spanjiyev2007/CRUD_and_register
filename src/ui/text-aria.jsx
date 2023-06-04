const TextAria = ({label, state, setState, height = '100px'}) => {
    return (
        <div className='form-floating'>
            <textarea placeholder={label} value={state} onChange={(e) => setState(e.target.value)} className='form-control' style={{ height: height }} id='floatingTextarea2'></textarea>
            <label htmlFor="floatingTextarea2">{label}</label>
        </div>
    )
}

export default TextAria
