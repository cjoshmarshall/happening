# Happening

## Create using T3 Stack. 

Nextjs | Expo | Supabase | tRPC


## Quick Start

To get it running, follow the steps below:

### Setup dependencies

```diff
# Install dependencies
pnpm i

# Configure environment variables.
# There is an `.env.example` in the root directory you can use for reference
# Ensure that the POSTGRES_URL is in the same format as in the example
cp .env.example .env

# Push the Drizzle schema to your database (w/ drizzle-kit push)
pnpm db:push

# Or use migrations (w/ drizzle-kit generate and drizzle-kit migrate)
pnpm db:generate
pnpm db:migrate
```
### Setting up Supabase

1. Go to [the Supabase dashboard](https://app.supabase.com/projects) and create a new project.
2. Under project settings, retrieve the environment variables `reference id`, `project url` & `anon public key` and paste them into [.env](./.env.example) and [apps/expo/.env](./apps/expo/.env.example) in the necessary places. You'll also need the database password you set when creating the project.


### Run Project
```diff
pnpm dev
```

This will run all the packages present in the monorepo to run simultaneously. You can use the terminal to navigate and access each app at a time. 

### Configure Expo `dev`-script

#### Use iOS Simulator

1. Make sure you have XCode and XCommand Line Tools installed.
   > **NOTE:** If you just installed XCode, or if you have updated it, you need to open the simulator manually once. Run `npx expo start` in the root dir, and then enter `I` to launch Expo Go. After the manual launch, you can run `pnpm dev` in the root directory.

```diff
+  "dev": "expo start --ios",
```

3. Run `pnpm dev` at the project root folder.

> **TIP:** It might be easier to run each app in separate terminal windows so you get the logs from each app separately. This is also required if you want your terminals to be interactive, e.g. to access the Expo QR code. You can run `pnpm --filter expo dev` and `pnpm --filter nextjs dev` to run each app in a separate terminal window.

#### For Android

1. Install Android Studio tools.
2. Change the `dev` script at `apps/expo/package.json` to open the Android emulator.

```diff
+  "dev": "expo start --android",
```

3. Run `pnpm dev` at the project root folder.

#### If you want to run using Native Development Build (RECOMMENDED)

1. Run `pnpm android` for android or `pnpm ios` for ios at `apps/expo` to install the development app in your phone or simulator.

2. Run `pnpm dev` at the project root folder.
