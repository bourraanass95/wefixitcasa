import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Contact API Route
  app.post("/api/contact", async (req, res) => {
    const { name, phone, message } = req.body;

    if (!name || !phone || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log(`New contact request from ${name} (${phone}): ${message}`);

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        const resend = new Resend(resendApiKey);
        const { data, error } = await resend.emails.send({
          from: 'WEFIXITCASA <onboarding@resend.dev>',
          to: ['wefixitcasa@gmail.com'],
          subject: 'Nouveau message de contact - WEFIXITCASA',
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333;">
              <h2 style="color: #ff007a;">Nouveau message de contact!</h2>
              <p><strong>Nom:</strong> ${name}</p>
              <p><strong>Téléphone:</strong> ${phone}</p>
              <p><strong>Message:</strong></p>
              <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
                ${message}
              </div>
            </div>
          `,
        });

        if (error) {
          console.error("Resend error:", error);
          return res.status(500).json({ error: "Failed to send email" });
        }

        return res.json({ success: true, data });
      } catch (err) {
        console.error("Server error:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
    } else {
      console.warn("RESEND_API_KEY not found. Message logged to console instead.");
      // In development without a key, we'll still return success so the front-end works
      return res.json({ success: true, note: "Message logged (Missing API Key)" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
