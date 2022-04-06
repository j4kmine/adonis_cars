import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'
import moment = require('moment')
export default class BrandsTypeSeeder extends BaseSeeder {
  public async run () {
    await Database.table('brand_types').insert([
      { id: 1, type: 'avanza', brands_id : 1 ,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
      { id: 2, type: 'xenia', brands_id : 2 ,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
      { id: 3, type: 'juke', brands_id : 3,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss')  },
      { id: 4, type: 'cbr', brands_id : 4,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
      { id: 5, type: 'mio', brands_id : 5,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
      { id: 6, type: 'suzuki', brands_id : 6,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
    ])
  }
}
