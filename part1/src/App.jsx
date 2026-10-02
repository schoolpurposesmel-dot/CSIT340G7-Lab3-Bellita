const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part }) => {
  return <p>{part.name} - Units: {part.units}</p>
}

const Content = ({ parts }) => {
  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>
      Total units: {parts[0].units + parts[1].units + parts[2].units}
    </p>
  )
}

const Footer = ({ name, courseCode, section }) => {
  return (
    <footer>
      {name} - {courseCode} - {section}
    </footer>
  )
}

const App = () => {
  const course = 'Information Technology'

  const parts = [
    {
      name: 'CSIT340 - Industry Elective 1',
      units: 3
    },
    {
      name: 'CSIT327 - Information Management 2',
      units: 3
    },
    {
      name: 'CSIT321 - Applications Development and Emerging Technologies',
      units: 3
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer
        name="Maraiah Carmel Bellita"
        courseCode="CSIT340"
        section="G7"
      />
    </div>
  )
}

export default App