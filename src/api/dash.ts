
import {httpServe} from '@/utils/http'

/* 登录 */

const getAvailableData = (params: any) => httpServe('/api/v1/balances/current', params, 'get', {})
const onGetAccountsList= (data: any) => httpServe('/v1/global_accounts/create', {}, 'post', data)


export {getAvailableData,onGetAccountsList}