import {
  GET_LAUNCHES_REQUEST,
  GET_LAUNCHES_SUCCESS,
  GET_LAUNCHES_FAIL,
  SET_LAUNCHES,
  FILTER_LAUNCHES
} from '../constants/page'

function setLaunches(data) {
  const launches = data.map(launches => {
    return launches
  })

  return {
    type: SET_LAUNCHES,
    payload: launches
  }
}

export function getLaunches() {
  return dispatch => {
    dispatch({
      type: GET_LAUNCHES_REQUEST
    })

    return fetch(`https://api.spacexdata.com/v3/launches/`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(`${response.status}: ${response.statusText}`)
      })
      .then(data => {
        dispatch({
          type: GET_LAUNCHES_SUCCESS
        })
        dispatch(setLaunches(data))
        dispatch(filterLaunches())
      })
      .catch(error => {
        dispatch({
          type: GET_LAUNCHES_FAIL,
          payload: error.message
        })
      })
  }
}

export function filterLaunches(searchString = '') {
  return (dispatch, getState) => {
    const displayedLaunches = getState().page.launches.filter(launch => {
      return launch.mission_name.includes(searchString.toLowerCase())
    })

    dispatch({
      type: FILTER_LAUNCHES,
      payload: displayedLaunches
    })
  }
}
