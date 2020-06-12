import {request} from "./request";

export function getFindAll(){
    return request({
        url:'/cakeController/toAll'
    })
}

export function getFindType(type,pageIndex) {
    return request({
        url:'/homeController/findType/'+type+'/'+pageIndex,
        params: {
            type:type,
            pageIndex:pageIndex
        }
    })

}