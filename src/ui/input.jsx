const Input = ({label, type = 'text', state, setState}) => {
  return (
    <div>
      <div className='form-floating mb-3'>
            <input type={type} id="inputEmail" value={state} onChange={(e) => setState(e.target.value)} className="form-control" placeholder={label} required="" autofocus="" />
            <label for='inputEmail'>{label} </label>
          </div>
    </div>
  )
}

export default Input
