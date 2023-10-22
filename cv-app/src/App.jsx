import { useState } from 'react'

function Cv({
  name,
  email,
  phoneNumber,
  schoolName,
  qualification,
  dateOfStudy,
  companyName,
  position,
  mainResponsibilities,
  startDate,
  endDate,
}) {
  return (
    <div className="cv">
      <section className="header">
        <h1 className="name">{name}</h1>
        <h2 className="email">{email}</h2>
        <h2 classname="phoneNumber">{phoneNumber}</h2>
      </section>
      <section className="section">
        <h2 className="title">Education</h2>
        <h3 className="school">{schoolName}</h3>
        <p className="qualification">{qualification}</p>
        <p className="studyDate">{dateOfStudy}</p>
      </section>
        <section className="section">
            <h2 className="title">Work Experience</h2>
            <h3 className="company">{companyName}</h3>
            <h3 className="position">{position}</h3>
            <p className="responsibilities">{mainResponsibilities}</p>
            <p className="date">{startDate} - {endDate} </p>
        </section>
    </div>
  );
}

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [schoolName, setSchoolName] = useState('');
  const [qualification, setQualification] = useState('');
  const [dateOfStudy, setDateOfStudy] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [mainResponsibilities, setMainResponsibilities] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="user-input">
      <form className="form" onSubmit={handleSubmit}>
      <h2>General Information</h2>
        <section>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Phone Number:
            <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <br />
        </section>
        <section>
          <h2>Education</h2>
          <label>
            School Name:
            <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
          </label>
          <br />
          <label>
            Qualification:
            <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} />
          </label>
          <br />
          <label>
            Date of Study:
            <input type="date" value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)} />
          </label>
          <br />
        </section>
        <section>
          <h2>Work Experience</h2>
          <label>
            Company Name:
            <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </label>
          <br />
          <label>
            Position:
            <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
          </label>
          <br />
          <label>
            Main Responsibilities:
            <input type="text" value={mainResponsibilities} onChange={(e) => setMainResponsibilities(e.target.value)} />
          </label>
          <br />
          <label>
            Start Date:
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <br />
          <label>
            End Date:
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </label>
          <br />
        </section>
        <input type="submit" value="Submit" />
      </form>
      {submitted && <Cv
        name={name}
        email={email}
        phoneNumber={phoneNumber}
        schoolName={schoolName}
        qualification={qualification}
        dateOfStudy={dateOfStudy}
        companyName={companyName}
        position={position}
        mainResponsibilities={mainResponsibilities}
        startDate={startDate}
        endDate={endDate}
      />}
    </div>
  )
}