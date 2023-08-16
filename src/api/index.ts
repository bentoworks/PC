
import {httpServe} from '@/utils/http'

/* 登录 */

 const homeData = (params:any,data:any)=>httpServe('/api/homeData',params,'get',data)
 const echartsData = (params:any,data:any)=>httpServe('/api/echartsData',params,'get',data)


export {homeData,echartsData}