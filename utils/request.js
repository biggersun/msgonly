import wepy from 'wepy'
import * as http from './http'
import { kjuss as key } from '../constants/storage'
import userLogin from './login'

async function request(method, api, params, opt = {}, header) {
    const {
        needLoading = true,
        checkAccount = true,
        showErrorMsg = true
    } = opt

    if (needLoading) {
        wepy.showLoading({
            title: '加载中...',
            mask: true
        })
    }

    let res

    try {
        res = await http[method](api, params, header)
    } catch (e) {
        if (showErrorMsg) {
            wepy.showToast({
                image: '../images/error.png',
                title: e.msg || e.errMsg || '服务器开小差'
            })
        }

        if (checkAccount && e.errno === 25001) {
            await wepy.removeStorage({ key })

            wepy.showLoading({
                title: '登录中...',
                mask: true
            })

            await userLogin()

            wepy.hideLoading()

            return await http[method](api, params, header)
        }

        throw e
    }

    wepy.hideLoading()

    return res
}

export async function get(...arg) {
    return await request('get', ...arg)
}

export async function post(...arg) {
    return await request('post', ...arg)
}
