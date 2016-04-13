const config = {
    port: 8089,
    staging_db: 'kelp_staging',
    live_db: 'kelp_live',
    env: (process.env.ENVIROMENT === 'production') ? 'production' : 'development'
}

export default config
