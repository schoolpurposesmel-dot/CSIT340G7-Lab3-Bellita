const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part }) => {
  return <p>{part.name} - Units: {part.units}</p>
}

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  )
}

const Total = ({ part1, part2, part3 }) => {
  return (
    <p>
      Total units: {part1.units + part2.units + part3.units}
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

  const part1 = {
    name: 'CSIT340 - Industry Elective 1',
    units: 3
  }

  const part2 = {
    name: 'CSIT327 - Information Management 2',
    units: 3
  }

  const part3 = {
    name: 'CSIT321 - Applications Development and Emerging Technologies',
    units: 3
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer
        name="Maraiah Carmel Bellita"
        courseCode="CSIT340"
        section="G7"
      />
    </div>
  )
}

export default App