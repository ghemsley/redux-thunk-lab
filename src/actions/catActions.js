// write and export your action creator function here
export const fetchCats = () => (dispatch) => {
  dispatch({ type: 'LOADING_CATS' })
  fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
    .then((response) => response.json())
    .then((json) => dispatch({ type: 'ADD_CATS', cats: json.images }))
}
