
// let host = /localhost/.test(window.location.host) ? 'http://baojia-test.chelun.com' : 'https://baojia.chelun.com'
let host = 'https://baojia.chelun.com'
function sendRequest(url,method='GET',data={}){
  let params = {
    method
  }
  if (method === 'POST'){
    params.body = JSON.stringify(data)
  }
  if (url.indexOf('?') === -1){
    url += `?_=${+new Date()}`
  } else {
    //  url += `&_=${+new Date()}`
    
  }
  return fetch(host+url,params).then(res=>res.json()).then(body=>body)
}

export let getBrandList =()=>{
  return sendRequest('/v2-car-getMasterBrandList.html')
}

export let getMakeList = (id)=>{
  return sendRequest(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}

export let getCar = (id)=>{
  return sendRequest(`/v2-car-getInfoAndListById.html?SerialID=${id}&_${+new Date()}`)
}
export let getlocation = ()=>{ // 获取当前city
  return sendRequest(`/location-client.html?${+new Date()}`)
}
export let getFloorCar = (carId,cityId)=>{
  return sendRequest(`/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}&_${+new Date()}`)
} 
export let getCitylist = ()=>{
  return sendRequest(`/v1-city-alllist.html?_${+new Date()}`)
}
export let getsmCityList = (id)=>{
  return sendRequest(`/v1-city-alllist.html?provinceid=${id}&_${+new Date()}`)
}
export let getColorlist = (serialID,CarID,ColorID) =>{  // 获取颜色
  if (serialID!==null && CarID === null && ColorID === null){
    return sendRequest(`/v2-car-getImageList.html?SerialID=${serialID}&_${+new Date()}`)
  }
  if (serialID!==null && CarID !== null && ColorID === null){
    return sendRequest(`/v2-car-getImageList.html?SerialID=${serialID}&CarID=${CarID}&_${+new Date()}`)
  }
  if (serialID!==null && CarID === null && ColorID !== null){
    return sendRequest(`/v2-car-getImageList.html?SerialID=${serialID}&ColorID=${ColorID}&_${+new Date()}`)
  }
  if (serialID!==null && CarID !== null && ColorID !== null){
    return sendRequest(`/v2-car-getImageList.html?SerialID=${serialID}&CarID=${CarID}&ColorID=${ColorID}&_${+new Date()}`)
  }
}
export let getimglist = (SerialID,ImageID,Page,PageSize) =>{
  return sendRequest(`/v2-car-getCategoryImageList.html?SerialID=${SerialID}&ImageID=${ImageID}&Page=${Page}&PageSize=${PageSize}&_${+new Date()}`)
}
export let getmoreColor = (SerialID)=>{
 return sendRequest(`/v2-car-getModelImageYearColor.html?SerialID=${SerialID}&_${+new Date()}`)
}
//https://baojia.chelun.com/v2-car-getImageList.html?SerialID=2593&CarID=126282&ColorID=4219&_1539682071859