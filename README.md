# Semi-movie-app
This application is referred to as a semi-movie app due to its primary focus on utilizing APIs. It enables users to search for specific movies by title, presenting the relevant information to the user.

This React code defines a movie application that utilizes the OMDB API to fetch and display movie information. Here's a breakdown of its functionality:

1. **API Integration:** The application integrates with the OMDB API to fetch movie data. The API URL is stored in the `API_URL` constant.

2. **Static Movie Data:** The `movie1` object contains static movie data. This can be used for testing or as a placeholder.

3. **State Management:** The application uses React's `useState` hook to manage state. It maintains two state variables: `movies`, which stores an array of movie data fetched from the API, and `searchTerm`, which stores the user's search query.

4. **Search Functionality:** The `searchMovie` function is an asynchronous function that fetches movie data based on the provided title using the `fetch` API. It then updates the `movies` state with the fetched data.

5. **Effect Hook:** The `useEffect` hook is used to call the `searchMovie` function when the component mounts (`[]` as the dependency array ensures it only runs once).

6. **User Interface:** The UI consists of a search input field where users can enter a movie title to search for. The `onChange` event handler updates the `searchTerm` state with the input value. Clicking the search icon triggers the `searchMovie` function with the current `searchTerm`.

7. **Conditional Rendering:** The application conditionally renders movie cards (`MovieCard` component) based on the `movies` state. If there are no movies found, it displays a message indicating so.

Overall, this code provides a basic movie search functionality using the OMDB API in a React application.
