import { useState } from 'react'
import ReactCountUp from 'react-countup';
import './App.css'

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [diffYears, setDiffYears] = useState(null);
  const [diffMonths, setDiffMonths] = useState(null);
  const [diffDays, setDiffDays] = useState(null);
  const [errorStatusD, setErrorD] = useState(null);
  const [errorStatusM, setErrorM] = useState(null);
  const [errorStatusY, setErrorY] = useState(null);
  const [errorStatus, setErrorStatus] = useState("");
  const currentDate = new Date();
  const birthdate = new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);

  const handleDayChange = (event) => {
    setDay(event.target.value);
  }

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  }

  const handleYearChange = (event) => {
    setYear(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (day < 1 || day > 31 || day === null) {
      setErrorD('Must be a valid Day');
      setErrorStatus('day')
      return;
    }

    if (month < 1 || month > 12 || month === null) {
      setErrorM('Must be a valid Month');
      setErrorStatus('month')
      return;
    }


    if (birthdate > currentDate || birthdate === null) {
      setErrorY('Must be a valid Year');
      setErrorStatus('year')
      return;
    }

    // Get difference in milliseconds
    const diffTime = Math.abs(currentDate - birthdate);

    // Convert difference in milliseconds to days
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Convert difference in milliseconds to months
    const months = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));

    // Calculate years difference
    const years = Math.floor(months / 12);

    setDiffDays(days);
    setDiffMonths(months);
    setDiffYears(years);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className='h-[30rem] w-96 lg:h-[35rem] lg:w-[50rem] rounded-2xl rounded-br-[150px] bg-white sm:h-[30rem] sm:w-96'>
        <form onSubmit={handleSubmit}>
          <div className='flex justify-center lg:gap-5 lg:pt-8 lg:pr-72 sm:gap-3 sm:mt-5 gap-3 mt-5'>
            <div>
              <h2 className={`font-poppins-bold text-[#767676] ${errorStatus === 'day' && 'error'}`}>DAY</h2>
              <input type="text" className={`border-mygrey rounded-md font-poppins-bold lg:w-32 lg:h-14 sm:w-24 h-14 w-24 ${errorStatus === 'day' && 'border-myred'}`} placeholder='DD' value={day} onChange={handleDayChange} />
              <h4 className={`font-poppins-italic ${errorStatus === 'day' && 'error'}`}>{errorStatusD}</h4>
            </div>
            <div>
              <h2 className={`font-poppins-bold text-[#767676] ${errorStatus === 'month' && 'error'}`}>MONTH</h2>
              <input type="text" className={`border-mygrey rounded-md font-poppins-bold lg:w-32 h-14 sm:w-24 w-24 ${errorStatus === 'month' && 'border-myred'}`} placeholder='MM' value={month} onChange={handleMonthChange} />
              <h4 className={`font-poppins-italic ${errorStatus === 'month' && 'error'}`}>{errorStatusM}</h4>
            </div>
            <div>
              <h2 className={`font-poppins-bold text-[#767676] ${errorStatus === 'year' && 'error'}`}>YEAR</h2>
              <input type="text" className={`border-mygrey rounded-md font-poppins-bold lg:w-32 h-14 sm:w-24 w-24 ${errorStatus === 'year' && 'border-myred'}`} placeholder='YYYY' value={year} onChange={handleYearChange} />
              <h4 className={`font-poppins-italic ${errorStatus === 'year' && 'error'}`}>{errorStatusY}</h4>
            </div>
          </div>
        </form>
        <div className='flex items-center justify-center'>
          <div className='lg:flex-grow sm:flex-grow flex-grow border-t border-mygray mx-4'></div> {/* Increase mx-4 to make line shorter */}
          <button type='submit' className='lg:relative lg:left-[-10px] sm:left-[-10px bg-mypurple rounded-full h-16 w-16 justify-center items-center flex sm:flex sm:justify-center sm:items-center sm:h-16 sm:w-16 sm:mt-7 mt-7' onClick={handleSubmit}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12 text-white transition-transform duration-200 ease-in-out transform hover:-translate-y-1">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button> {/* Add -ml-4 to move button to the left */}
        </div>
        <div className='flex flex-col lg:items-left pl-12 sm:mt-10 mt-10'>
          <div className='flex gap-2'>
            <h1 className='lg:text-8xl text-mypurple font-poppins-bold-italic sm:text-5xl text-5xl'>{diffYears !== null ?
              <ReactCountUp start={0} end={diffYears} duration={1.75} />
              : '--'}</h1>
            <h1 className='lg:text-8xl font-poppins-bold-italic sm:text56xl text-5xl'>years</h1>
          </div>
          <div className='flex gap-2'>
            <h1 className='lg:text-8xl text-mypurple font-poppins-bold-italic sm:text-5xl text-5xl'>{diffMonths !== null ? <ReactCountUp start={0} end={diffMonths} duration={1.75} /> : '- -'}</h1>
            <h1 className='lg:text-8xl font-poppins-bold-italic sm:text-5xl text-5xl'>months</h1>
          </div>
          <div className='flex gap-2'>
            <h1 className='lg:text-8xl text-mypurple font-poppins-bold-italic sm:text-5xl text-5xl'>{diffDays !== null ? <ReactCountUp start={0} end={diffDays} duration={1.75} /> : '- -'}</h1>
            <h1 className='lg:text-8xl font-poppins-bold-italic sm:text-5xl text-5xl'>days</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
