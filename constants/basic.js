export const orderStatus = [
    {
        name: '全部订单',
        value: ''
    },
    {
        name: '待付款',
        value: '1000'
    },
    {
        name: '可使用',
        value: '1003'
    },
    {
        name: '已退款',
        value: '1006'
    }
]

export const grouponCodeStatus = {
    1: '已发放',
    2: '已消费',
    3: '退款中',
    4: '已退款'
}

export const orderIcon = {
    1000: 'waiting', // 待支付
    1001: 'warn', // 支付失败
    1002: 'warn', // 超时未支付
    1003: 'success', // 已支付
    1004: 'success', // 已使用
    1005: 'waiting', // 退款中
    1006: 'warn', // 已退款
    1007: 'warn' // 已取消
}
