const config = {
  port: 8089,
  env: (process.env.ENVIROMENT === 'production') ? 'production' : 'development',
  keys: ['testKey1', 'testKey1', '...'],
  database: (process.env.ENVIROMENT === 'production') ? 'database_live' : 'database_staging'
}

export default config
