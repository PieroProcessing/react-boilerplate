const SimpleRequest = (): JSX.Element => {
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('🚀 ~ file: App.tsx ~ line 42 ~ handleChange ~ handleChange', value);
  };

  return (
    <>
      <label className="d-flex flex-column" htmlFor="pokemon">
        <span>Choose your pokemon</span>
        <input type="text" name="pokemon" onChange={handleChange} />
      </label>
    </>
  );
};
export default SimpleRequest;
