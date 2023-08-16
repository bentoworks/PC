
import {httpServe} from '@/utils/http'

/* 登录 */

const getAvailableData = (params: any) => httpServe('/api/v1/balances/current', params, 'get', {})
const getHistoryData = (params: any) => httpServe('/api/v1/balances/history', params, 'get', {})
const onCreateConvert = (data: any) => httpServe('/api/v1/balances/current', {}, 'post', data)
const onCreateTransfer = (data: any) => httpServe('/api/v1/payments/create', {}, 'post', data)
const getDeposit = (params: any) => httpServe('/api/v1/global_accounts', params, 'get', {})


export {getAvailableData,onCreateConvert,onCreateTransfer,getHistoryData,getDeposit}