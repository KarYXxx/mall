//函数返回值 promise 对象
import ajax from './ajax'

export const reqAddress = (geohash) => ajax(`/positon/${geohash}`);
export const reqFoodType = () => ajax('/index_category');
export const reqShops = (longitude,latitude) => ajax('/shop',{longitude,latitude});