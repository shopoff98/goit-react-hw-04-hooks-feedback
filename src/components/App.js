import  { useState  } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notifiction';
import { Container } from './styled/Container.styled';


export default function App() {
  
  const [Good, setGood] = useState(0);
   const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);
  
 const totalState = {Good, Neutral, Bad}

const total = Good + Neutral + Bad;
  
const positiveFeedbackPercentage = Math.round((Good * 100) / total) || 0;
 
  
  function handleFeedback(option){
    switch (option) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'Bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  }

    return (  
      <Container>
   <Section title="Please leave feedback">
        <FeedbackOptions
            options={Object.keys(totalState)}
          onLeaveFeedback={handleFeedback} />
        {(total ?
          (
            <Statistics
              good={Good}
              neutral={Neutral}
              bad={Bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage} />
          )
          : (<Notification message="There is no feedback" />))
        }
        </Section>
        </Container>
     )
  };
  





