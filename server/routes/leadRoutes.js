const express = require("express");
const Lead = require("../models/Lead");
const router = express.Router();

// Get all leads
router.get("/", async (req, res) => {
  const leads = await Lead.find().sort({ createdAt: -1 });
  res.json(leads);
});

// Add new lead
router.post("/", async (req, res) => {
  const newLead = new Lead(req.body);
  await newLead.save();
  res.json(newLead);
});

// Update status
router.put("/:id/status", async (req, res) => {
  const updated = await Lead.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(updated);
});

// Add a note to a lead
router.put("/:id/note", async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    lead.notes.push({ text: req.body.text });
    await lead.save();
    res.json(lead);
  } catch (err) {
    res.status(500).json({ error: "Failed to add note" });
  }
});

