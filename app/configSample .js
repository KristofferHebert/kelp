const config = {
  port: 8089,
  staging_db: 'sample_staging',
  live_db: 'sample_live',
  env: (process.env.ENVIROMENT === 'production') ? 'production' : 'development',
  keys: ['samplekey1', 'samplekey2', '...']
}

export default config
