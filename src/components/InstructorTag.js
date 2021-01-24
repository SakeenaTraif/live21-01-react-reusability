import instructor from '../data';
import "./App.css";
import '../styles.js';

const InstructorTag = () => {
  instructor.map((instructor) => {
    return <InstructorTag name={instructor.name} Emoji={instructor.Emoji} Github={instructor.Github} />;
  });

const InstDetailes = ({ instructor }) => 
  <>
  <TagWrapper onClick = {()  => window.open({Github})} >
          <Name>{instructor.name}</Name>
          <Emoji>{instructor.Emoji}</Emoji>
          <GoToGithub>Go to GitHub</GoToGithub>

  </TagWrapper>
  </>
    
export default InstructorTag;
