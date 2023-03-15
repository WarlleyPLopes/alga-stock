import './Input.css';

declare interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function Input(props: InputProps) {
  return <div className='AppInput'>
    <label>
      <span>{props.label}</span>
      <input
        {...props}
      />
    </label>
  </div>
}

export default Input