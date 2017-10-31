import wepy from 'wepy'
import { USER_LOGIN } from '../constants/api'
import { post } from '../util/http'
import { kjuss as key } from '../constants/storage'

async function saveKjuss() {
    const { code: jsCode } = await wepy.login()

    const { kjuss } = await post(USER_LOGIN, { jsCode })

    await wepy.setStorage({ key, data: kjuss })
}

export default async function userLogin() {
    let kjuss

    try {
        ({ data: kjuss } = await wepy.getStorage({ key }))
    } catch (e) {
        // no-catch
    }

    if (!kjuss) {
        return await saveKjuss()
    }

    try {
        await wepy.checkSession()
    } catch (e) {
        return await saveKjuss()
    }
}
