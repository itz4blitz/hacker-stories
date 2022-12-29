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

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    date: new Date(112233448448),
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    date: new Date(1122445566),
  },
];

function App() {

  return (
    <div>
      <h1>{welcome.greeting} {welcome.title}</h1>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' />

      <div>
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>{item.date.toDateString()}</span>
            </li>
          );
        })}
      </ul>
      </div>

    </div>
  );
}

export default App;