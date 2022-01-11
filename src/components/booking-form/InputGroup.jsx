const InputGroup = ({input,label}) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};

export default InputGroup;
