import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Database from '@ioc:Adonis/Lucid/Database'
import moment = require('moment')
export default class TransportationSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Database.table('transportation').insert([
      { id: 1, type: 'mobil',created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
      { id: 2, type: 'motor',created_at: moment().format('yyyy-mm-d hh:mm:ss'),updated_at : moment().format('yyyy-mm-d hh:mm:ss') },
    ])
  }
}
