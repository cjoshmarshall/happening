import { relations } from "drizzle-orm";
import {
  date,
  integer,
  pgTable,
  serial,
  time,
  varchar,
} from "drizzle-orm/pg-core";

export const events = pgTable("Event", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  duration: integer("duration").notNull(),
  ageRestriction: varchar("ageRestriction", { length: 256 }).notNull(),
  eventDate: date("eventDate").notNull(),
  featuredImage: varchar("featuredImage", { length: 256 }).notNull(),
  additionalImage: varchar("additionalImage", { length: 256 }).notNull(),
});

export const eventRelations = relations(events, ({ many }) => ({
  genres: many(genres),
  languages: many(languages),
  venues: many(venues),
}));

export const genres = pgTable("Genre", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
});

export const languages = pgTable("Language", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
});

export const locations = pgTable("Location", {
  id: serial("id").primaryKey(),
  street: varchar("name", { length: 256 }).notNull(),
  city: varchar("city", { length: 256 }).notNull(),
});

export const venues = pgTable("Venue", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  city: varchar("city", { length: 256 }).notNull(),
});

export const venueRelations = relations(venues, ({ many }) => ({
  eventClasses: many(eventClasses),
  slots: many(slots),
}));

export const eventClasses = pgTable("Event Class", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  noOfSeatsAvailable: integer("noOfSeatsAvailable").notNull(),
  price: integer("price").notNull(),
  venueId: integer("venueId")
    .notNull()
    .references(() => venues.id),
});

export const eventClassRelations = relations(eventClasses, ({ one }) => ({
  venue: one(venues, {
    fields: [eventClasses.venueId],
    references: [venues.id],
  }),
}));

export const slots = pgTable("Slot", {
  id: serial("id").primaryKey(),
  time: time("time").notNull(),
  venueId: integer("venueId")
    .notNull()
    .references(() => venues.id),
});

export const slotRelations = relations(slots, ({ one }) => ({
  venue: one(venues, {
    fields: [slots.venueId],
    references: [venues.id],
  }),
}));
