import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'
import moment = require('moment')
export default class BrandSeeder extends BaseSeeder {
  public async run () {
    await Database.table('brands').insert([
      { id: 1, name: 'toyota', transportation_id : 1,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss')  },
      { id: 2, name: 'daihatsu', transportation_id : 1,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss')  },
      { id: 3, name: 'nissan', transportation_id : 1 ,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
      { id: 4, name: 'honda', transportation_id : 2,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss')  },
      { id: 5, name: 'yamaha', transportation_id : 2 ,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
      { id: 6, name: 'suzuki', transportation_id : 2 ,created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
    ])
  }
}
