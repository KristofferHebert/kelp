const config = {
  port: 4084,
  env: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
  keys: ['dX1eSTvHLuJBre1uTtUzuqm8', 'MJDVcAPODRe9D0UrFAgIUbH8', '...'],
  database: (process.env.NODE_ENV === 'production') ? 'kelp_production' : 'kelp_staging'
}

export default config
