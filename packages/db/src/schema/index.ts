// import { relations } from "drizzle-orm";
import { date, integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const events = pgTable("Event", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  duration: varchar("eventTime", { length: 256 }).notNull(),
  ageRestriction: varchar("ageRestriction", { length: 256 }).notNull(),
  eventDate: date("eventDate"),
  featuredImage: varchar("featuredImage", { length: 256 }).notNull(),
  additionalImage: varchar("additionalImage", { length: 256 }).notNull(),
});

export const genres = pgTable("Genre", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
});
export const languages = pgTable("Language", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
});

export const eventClasses = pgTable("Event Class", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  noOfSeats: integer("noOfSeats").notNull(),
  price: integer("price").notNull(),
});

export const locations = pgTable("Location", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  city: varchar("city", { length: 256 }).notNull(),
});

export const popularEvents = pgTable("Popular Event", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
});

// export const ProfileRelations = relations(Profile, ({ many }) => ({
//   posts: many(Post),
// }));
