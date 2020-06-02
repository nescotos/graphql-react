import React from 'react';
import logo from './logo.svg';
import './App.css';
import postQuery from './queries/postQuery';
import postMutation from './queries/postMutation';
import  { GetPost } from './queries/types/GetPost'
import { useQuery, useMutation } from '@apollo/react-hooks';



const App: React.FC = () => {
  const { data, loading } = useQuery<GetPost>(postQuery);
  const [addPost]  = useMutation(postMutation);
  if(!loading) console.log(data?.getPosts);
  let title: any; 
  let description: any;
  return(
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        addPost({
          variables: {
            input: {
              title: title["value"],
              description: description["value"],
              userId: 1,
            },
          },
        });
      }}>
        <input placeholder="Title" ref={node => {title = node}} />
        <input placeholder="Description" ref={node => {description = node}} />
        <button>Add Post</button>
      </form>
    </div>
    )
}

export default App;
