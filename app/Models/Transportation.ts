import { DateTime } from 'luxon'
import { BaseModel, column , hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Brand from 'App/Models/Brand'
export default class Transportation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Brand)
  public brand: HasMany<typeof Brand>

  
}
