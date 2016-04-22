const config = {
  port: 8089,
  staging_db: 'kelp_staging',
  live_db: 'kelp_live',
  env: (process.env.ENVIROMENT === 'production') ? 'production' : 'development',
  keys: ['dX1eUzuqmSTvHLuJBre1uTt8', 'MJDVODRe9D0UrFAgIUbH8cAP', '...']
}

export default config
