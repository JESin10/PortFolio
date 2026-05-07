import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import express from "express";
dotenv.config();

const app = express();

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// app.get("/projects", async (req, res) => {
//   const response = await notion.dataSources.query({
//     data_source_id: process.env.NOTION_PROJECT_DB_ID,
//     filter: {
//       property: "Status",
//       select: { equals: "Done" },
//     },
//     sorts: [
//       {
//         property: "Created",
//         direction: "descending",
//       },
//     ],
//   });

//   console.log("response:", response);
//   res.json(response);
// });

app.get("/projects", async (req, res) => {
  const response = await notion.dataSources.query({
    data_source_id: process.env.NOTION_PROJECT_DB_ID,
  });
  // console.log("response:", response);
  // const data = response.results?.map((page) => {
  //   const props = page.properties;
  //   return {
  //     title: props.Title?.title[0]?.plain_text ?? "",
  //     type: props.Slug?.select?.name ?? "",
  //     desc: props.Description?.rich_text?.[0]?.plain_text ?? "",
  //   };
  // });
  res.json(response);
});

app.get("/skills", async (req, res) => {
  try {
    const response = await notion.databases.retrieve({
      database_id: process.env.NOTION_SKILL_DB_ID,
    });
    // console.log("response:", response);
    // const data = response.results.map((page) => {
    //   const props = page.properties;

    //   return {
    //     title: props.Title?.title?.plain_text ?? "",
    //     type: props.Type?.select?.name ?? "",
    //     desc: props.Desc1?.rich_text?.[0]?.plain_text ?? "",
    //   };
    // });

    res.json(response);
  } catch (error) {
    console.error("❌ /skills error:", error);

    res.status(500).json({
      message: "Failed to fetch skills",
      error: error.message,
    });
  }
});

/* -----------------------
   health check
------------------------ */
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is running",
  });
});

app.listen(3001, () => {
  console.log(`Server running on http://localhost:3001`);
});
