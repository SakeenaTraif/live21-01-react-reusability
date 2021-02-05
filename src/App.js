import "./App.css";
import {AppWrapper} from './components/styles';
import InstructorTag from './components/InstructorTag';

const instructors = [
  {   id:1,
      name: 'Hamza',
      emoji:"🌚",
      Github: `DarthHamza`,
  },
  {   id:2,
      name: 'Laila',
      emoji:"🐥",
      Github: `Lailz`,
  },
  {   id:3,
      name: 'Hasan',
      emoji:"🦍",
      Github: `thehasanas`,
  },
];

const App = () => {
  const InstructorList = instructors.map((instructor) => 
      <InstructorTag  {...instructor} key={instructor.id}/>
      // name={instructor.name} 
      // Emoji={instructor.Emoji} 
      // Github={instructor.Github} 
      );

  return (
    <AppWrapper>
      <h2>When in doubt, ask for help!</h2>
      {InstructorList}
    </AppWrapper>
  );
};

export default App;
