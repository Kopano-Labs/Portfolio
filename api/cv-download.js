import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function addToMailchimp({ firstName, lastName, email, companyName, roleId, format }) {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  if (!apiKey || !listId) return;

  const dc = apiKey.split("-").pop();
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;

  try {
    await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
          COMPANY: companyName,
          CV_ROLE: roleId,
          FORMAT: format,
        },
        tags: [roleId, "cv-download"],
      }),
    });
  } catch (err) {
    console.error("[cv-download] Mailchimp error (non-blocking):", err.message);
  }
}

const CV_FILES = {
  "computer-eng-student": {
    pdf: "computer-eng-student.pdf",
    docx: "computer-eng-student.docx",
    label: "Computer_Eng_Student",
  },
  "fullstack-developer": {
    pdf: "fullstack-developer.pdf",
    docx: "fullstack-developer.docx",
    label: "Full_Stack_Developer",
  },
  "web-developer": {
    pdf: "web-developer.pdf",
    docx: "web-developer.docx",
    label: "Web_Developer",
  },
  "software-developer": {
    pdf: "software-developer.pdf",
    docx: "software-developer.docx",
    label: "Software_Developer",
  },
  "frontend-developer": {
    pdf: "frontend-backend-developer.pdf",
    docx: "frontend-backend-developer.docx",
    label: "Frontend_Developer",
  },
  "frontend-backend-developer": {
    pdf: "frontend-backend-developer.pdf",
    docx: "frontend-backend-developer.docx",
    label: "Front_Backend_Developer",
  },
};

const MIME_TYPES = {
  pdf: "application/pdf",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

function badRequest(res, error) {
  return res.status(400).json({ ok: false, error });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    companyName,
    roleId,
    format,
  } = req.body ?? {};

  if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !companyName?.trim()) {
    return badRequest(res, "First name, last name, email, and company are required.");
  }

  if (!EMAIL_RE.test(email)) {
    return badRequest(res, "Enter a valid email address.");
  }

  if (!CV_FILES[roleId]) {
    return badRequest(res, "Invalid CV role.");
  }

  if (format !== "pdf" && format !== "docx") {
    return badRequest(res, "Invalid CV format.");
  }

  const fileName = CV_FILES[roleId][format];
  const filePath = path.join(__dirname, "cv-files", fileName);

  try {
    const fileBuffer = await fs.readFile(filePath);
    const leadLine = [
      new Date().toISOString(),
      `${firstName} ${lastName}`,
      email,
      companyName,
      roleId,
      format,
    ].join(" | ");

    console.log("[cv-download]", leadLine);

    addToMailchimp({ firstName, lastName, email, companyName, roleId, format });

    res.setHeader("Content-Type", MIME_TYPES[format]);
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="Kholofelo_Robyn_CV_${CV_FILES[roleId].label}.${format}"`
    );
    res.setHeader("Cache-Control", "private, no-store, max-age=0");
    return res.status(200).send(fileBuffer);
  } catch (error) {
    console.error("[cv-download] file error:", error);
    return res.status(500).json({ ok: false, error: "CV download is temporarily unavailable." });
  }
}
