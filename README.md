# Product Name
Personal BLOG + database in the JSON SERVER

  The project is a react product trough you can publish your personal blogs.

# REACT Hooks used
- useState
- useEffect
- useFetch -> a custom created Hook that use the other 2 hooks and fetches the data from the json server

# Features
- add blog button
- delete blog button
- 404 page for other then linked paths


## Development setup

To run the project you need 
1.NPM already installed:
```sh
npm install
```
2.React router installed(I've chosen the 5th version as it is known to be stable):
```sh
npm install react-router-dom@5
```


## Usage example
To start the react app:
```sh
npm run start
```
To start the JSON server:
```sh
npx json-server --watch data/db.json --port 8000
```


## Meta

[https://github.com/StefanM55](https://github.com/StefanM55)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).