import { db, env } from "@happening/db/client";

// import { genders, provinces, sections } from "@happening/db/schema";

if (!("POSTGRES_URL" in env))
  throw new Error("POSTGRES_URL not found on .env.development");

async function seed() {
  console.log("Seed start");
  //   await db
  //     .insert(genders)
  //     .values([
  //       { id: 1, name: "male" },
  //       { id: 2, name: "female" },
  //       { id: 3, name: "other" },
  //       { id: 4, name: "preferNotToSay" },
  //     ])
  //     .onConflictDoNothing({ target: genders.id });
  //   await db
  //     .insert(sections)
  //     .values([
  //       {
  //         id: 1,
  //         "name-en": "Savings",
  //         "name-fr": "Économiséz",
  //         "name-esp": "Ahorros",
  //         isEnabled: true,
  //       },
  //       {
  //         id: 2,
  //         "name-en": "Unbeatable Offers",
  //         "name-fr": "Offres Imbattables",
  //         "name-esp": "Ofertas Inmejorables",
  //         isEnabled: true,
  //       },
  //       {
  //         id: 3,
  //         "name-en": "Other Offers / What's New",
  //         "name-fr": "Autres offres / Nouveautés",
  //         "name-esp": "Otras Ofertas / Novedades",
  //         isEnabled: true,
  //       },
  //     ])
  //     .onConflictDoNothing({ target: sections.id });
  //   await db
  //     .insert(provinces)
  //     .values([
  //       {
  //         id: 1,
  //         "name-en": "Ontario",
  //         "name-fr": "Ontario",
  //         "name-esp": "Ontario",
  //         code: "ON",
  //       },
  //       {
  //         id: 2,
  //         "name-en": "Quebec",
  //         "name-fr": "Quebec",
  //         "name-esp": "Quebec",
  //         code: "QC",
  //       },
  //       {
  //         id: 3,
  //         "name-en": "Nova Scotia",
  //         "name-fr": "Nova Scotia",
  //         "name-esp": "Nova Scotia",
  //         code: "NS",
  //       },
  //     ])
  //     .onConflictDoNothing({ target: provinces.id });
  console.log("Seed done");
}

void seed();
