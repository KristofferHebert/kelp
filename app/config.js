const config = {
  port: 8089,
  env: (process.env.ENVIROMENT === 'production') ? 'production' : 'development',
  keys: ['dX1eSTvHLuJBre1uTtUzuqm8', 'MJDVcAPODRe9D0UrFAgIUbH8', '...'],
  database: (process.env.ENVIROMENT === 'production') ? 'kelp_live' : 'kelp_staging'
}

export default config
