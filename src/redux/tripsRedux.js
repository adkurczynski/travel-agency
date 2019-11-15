/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    output = output.filter(trip => filters.duration.from <= trip.days && trip.days <= filters.duration.to);

  }
  // TODO - filter by tags
  if(filters.tags.length>0){
    const tags = filters.tags.toString();
    const tagsArray = tags.split(' ');
    const filteredArray = [];
    let j = 0;
    for(let i=0; i<tagsArray.length; i++){
      if(tagsArray[i] != '' ){
        filteredArray[j] = tagsArray[i];
        j++;
      }
    }
    for(j=0; j<filteredArray.length; j++){
      output = output.filter(trip => trip.tags.includes(filteredArray[j]));
    }
  }
  // TODO - sort by cost descending (most expensive goes first)
  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => new RegExp(tripId).test(trip.id));
  // TODO - filter trips by tripId
  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => new RegExp(countryCode).test(trip.country.code));
  // TODO - filter trips by countryCode
  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
