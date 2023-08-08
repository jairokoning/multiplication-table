import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'

function App() {
  const [tableOf, setTableOf] = useState('');
  const [table, setTable] = useState<string[]>([]);

  const handleGenerateTable = (event: FormEvent) => {
    event.preventDefault();
    if (tableOf === '') {
      return 'Value is not a number';
    }
    const tableMath = [];
    for (let i = 1; i <= 10; i++) {
      const calcResult = Number(tableOf) * i;
      tableMath.push(`${tableOf} * ${i} = ${calcResult}`);
    }
    setTable(tableMath);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTableOf(event.target.value);
  }

  return (
    <section className="container">
      <div className="heading">
        <h1 className="heading__title">Multiplication Table</h1>
      </div>
      <form onSubmit={handleGenerateTable} className="form">
        <div>
          <label className="form__label" htmlFor="todo">Enter a number and submit <br/> to generate the table</label>
          <input className="form__input"
            type="number"
            size={20}
            autoComplete="off"
            value={tableOf}
            onChange={handleInputChange}
            required
          />
          <button className="button"><span>Submit</span></button>
        </div>
      </form>      
      <div>
        {table.map((row: string) => {
          return <p><strong>{row}</strong></p>
        })}
      </div>
    </section>
  )
}

export default App
