import * as React from 'react';
const title = 'React';

const welcome = {
  title: 'React',
  greeting: 'Hey',
}

const post = {
  date: Date.now(),
  id: 1,
  author: 'Justin Scroggins',
  body: 'This is the first post in Hacker Stories'
}

const people = [ "Peter", "Paul", "Andrew", "Joshua", "Eric"]

function App() {

  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />

      <div>
        <h2>
          {post.author}
        </h2>
        <h3>Post # {post.id}</h3>
        <h4>Created on {post.date}</h4>
        <p>{post.body}</p>
      </div>

      <div>
        {/* {people.map(person => person.name)} */}
      </div>

    </div>
  );
}

export default App;