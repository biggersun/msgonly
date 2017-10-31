const isProd = process.env.NODE_ENV === 'production'

const development = {
    apiDomain: 'xiaochengxu.ktvms.com'
}

const production = {
    apiDomain: 'xcx.ktvms.com'
}

export default isProd ? production : development
