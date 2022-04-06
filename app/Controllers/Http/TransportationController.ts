// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transportation from "App/Models/Transportation";

export default class TransportationController {
    public async index({ request }: HttpContextContract ) {
      const type = request.param('type')
      const brand = request.param('brand')
      const brandtype = request.param('brandtype')
    
      if(type){
        if(brand){
            if(brandtype){
                let transportation = await Transportation.query()
                .preload('brand', (brandQuery) => {
                    brandQuery.preload('brandtype', (brandtypeQuery) => {
                        brandtypeQuery.where('type', brandtype)
                    })
                    .where('name', brand)
                  })
                .where('type', type);
                return transportation
            }else{
                let transportation = await Transportation.query()
                .preload('brand', (brandQuery) => {
                    brandQuery.preload('brandtype').where('name', brand)
                  })
                .where('type', type);
                return transportation
            }
          
        }else{
            let transportation = await Transportation.query().preload('brand', (brandQuery) => {
                brandQuery.preload('brandtype')}).where('type', type);
            return transportation
        }
       
      }else{
        let  transportation = await Transportation.query().preload('brand', (brandQuery) => {
            brandQuery.preload('brandtype')});
         return transportation
      }
     
      
    }
}
