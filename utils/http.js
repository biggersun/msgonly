import wepy from 'wepy'
import env from '../constants/env'
import { kjuss as key } from '../constants/storage'

export async function request({ api, data = {}, header = {}, method = 'GET', dataType = 'json' }) {
    const { metaData: { merchantId, version } } = wepy.$instance.globalData

    let kjuss

    try {
        ({ data: kjuss } = await wepy.getStorage({ key }))
    } catch (e) {
        // no-catch
    }

    const url = `https://${env.apiDomain}${api}`

    Object.assign(data, {
        merchantId,
        version,
        deviceType: 'wxa',
        timestamp: Date.now()
    })

    const kjussCookie = `kjuss=${kjuss}`

    Object.assign(header, {
        cookie: header.cookie ? `${header.cookie}; ${kjussCookie}` : kjussCookie,
        'content-type': 'application/x-www-form-urlencoded'
    })

    const options = {
        url,
        data,
        header,
        method,
        dataType
    }

    const { data: res } = await wepy.request(options)

    if (res.errno !== 0) {
        throw res
    }

    return res.data
}

export function get(api, data, header) {
    return request({ api, data, header, method: 'GET' })
}

export function post(api, data, header) {
    return request({ api, data, header, method: 'POST' })
}
