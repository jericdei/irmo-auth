import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey(),
  name: text('first_name').notNull(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})

export type User = typeof users.$inferInsert

export const sessions = sqliteTable('sessions', {
  id: text('id'),
  data: text('data')
})
