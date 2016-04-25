const config = {
  port: 8089,
  staging_db: 'kelp_staging',
  live_db: 'kelp_live',
  env: (process.env.ENVIROMENT === 'production') ? 'production' : 'development',
  keys: ['dX1eSTvHLuJBre1uTtUzuqm8', 'MJDVcAPODRe9D0UrFAgIUbH8', '...']
}

export default config
