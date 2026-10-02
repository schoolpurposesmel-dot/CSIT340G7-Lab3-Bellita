const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Content = ({ part1, units1, part2, units2, part3, units3 }) => {
  return (
    <div>
      <p>{part1} - Units: {units1}</p>
      <p>{part2} - Units: {units2}</p>
      <p>{part3} - Units: {units3}</p>
    </div>
  )
}

const Total = ({ units1, units2, units3 }) => {
  return (
    <p>Total units: {units1 + units2 + units3}</p>
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

  const part1 = 'CSIT340 - Industry Elective 1'
  const units1 = 3

  const part2 = 'CSIT327 - Information Management 2'
  const units2 = 3

  const part3 = 'CSIT321 - Applications Development and Emerging Technologies'
  const units3 = 3

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        units1={units1}
        part2={part2}
        units2={units2}
        part3={part3}
        units3={units3}
      />
      <Total units1={units1} units2={units2} units3={units3} />
      <Footer
        name="Maraiah Carmel Bellita"
        courseCode="CSIT340"
        section="G7"
      />
    </div>
  )
}

export default App