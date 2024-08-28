// @refresh reload
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { StartServer, createHandler } from "@solidjs/start/server";
import { db } from './api/db';

migrate(db, { migrationsFolder: "./drizzle/migrations" });

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
