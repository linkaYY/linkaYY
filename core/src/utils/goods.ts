/*
 * @Author: linkayy 790341284@qq.com
 * @Date: 2024-01-03 16:41:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-01-03 17:04:43
 * @Description:
 */
class GoodData {
  goodsName
  price
  constructor() {
    this.goodsName = '多肉葡萄'
    this.price = 12
  }
  setName(name: string) {
    this.goodsName = name
  }
  setPrice(num: number) {
    this.price = num
  }
}
export default GoodData
