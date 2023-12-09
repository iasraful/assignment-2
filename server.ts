import app from "./src/app";
import config from "./src/config";

import mongoose from "mongoose";

// main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.dbURL as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
