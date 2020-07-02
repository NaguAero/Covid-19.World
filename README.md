# Covid-19 World Data Visualization

In the view of the current pandemic created by novel Covid-19, it is essential to analyze the data in a simpler and understandable manner.
An attempt is presented here.

## Data in json format
Actively working to update the data. The json file will be daily updated.
### Todaydata.json
Todaydata.json contains the daily cases across the world and total in the name "World".

Json file description:

{
 "World": {
  "Total_Cases": Int,
  "Active_Cases": Int,
  "Recovered": Int,
  "Deceased": Int,
  "Population": Int,
  "Total_Tests": Int
 },
 "Country_iso": {
  "Total_Cases": Int,
  "Active_Cases": Int,
  "Recovered": Int,
  "Deceased": Int,
  "Population": Int,
  "Total_Tests": Int
 },
}

### daily_cummulative.json
daily_cummulative.json contains the daily and cummulative data for all the cases across world.

Description:

{
 "daily": {
  "Jan 22": {
   "daily_confirmed": "null",
   "daily_deaths": "null"
  },
  {.......
  ........},
  "Jul 01": {
   "daily_confirmed": "196963",
   "daily_deaths": "4847"
  }
 },
 "cummulative": {
  "Jan 22": {
   "cum_cases": "580",
   "cum_active": "563",
   "cum_deaths": "17"
  },
  {......
  ......},
  "Jul 01": {
   "cum_cases": "10795162",
   "cum_active": "4342110",
   "cum_deaths": "518058"
  }
 }
}