import React, {useState, useEffect} from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import axios from 'axios';
import { IActivity } from '../modles/activity';



const App = () => {

  const [activities, setActivites] = useState<IActivity[]>([]);

  useEffect(() => {
    axios.get<IActivity[]>('http://localhost:5000/api/activities')
    .then((response) =>{
      setActivites(response.data)
    })
  }, []);

    return (
      <div>
      <Header as='h2'>
      <Icon name='users' />
      <Header.Content>Society</Header.Content>
    </Header>
    <List>
    {activities.map((activity)=> (
      <List.Item key = {activity.id}>{activity.title}</List.Item>
    ))}

    </List>
      </div>
    );
}

export default App;